var pkg = require('./package.json'),
    fs = require('fs'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    rimraf = require('gulp-rimraf'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus'),
    replace = require('gulp-replace'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    through = require('through'),
    ghpages = require('gh-pages'),
    path = require('path'),
    changed = require('gulp-changed'),
    merge = require('merge-stream'),
    // TODO: para usar LR com websocket: http://www.hiddentao.com/archives/2014/08/18/phonegap-development-with-on-device-livereload/
    server = require('gulp-webserver'),
    isDist = process.argv.indexOf('serve') === -1;

gulp.task('js', function() {
  var destination = 'dist/build';
  return gulp.src(['scripts/tutorial.js', 'scripts/main.js'])
    .pipe(changed(destination))
    .pipe(isDist ? through() : plumber())
    .pipe(browserify({ transform: ['debowerify'], debug: !isDist }))
    .pipe(isDist ? uglify() : through())
    .pipe(rename('build.js'))
    .pipe(gulp.dest(destination));
});

gulp.task('js-classes', function() {
  var destination = 'dist/scripts/classes';
  return gulp.src(['scripts/classes/**/*.js'])
    .pipe(changed(destination))
    .pipe(isDist ? through() : plumber())
    .pipe(browserify({ transform: ['debowerify'], debug: !isDist }))
    .pipe(isDist ? uglify() : through())
    .pipe(uglify())
    .pipe(gulp.dest(destination));
});

gulp.task('html', function() {
  var destination = 'dist';
  return gulp.src('html/index.html')
    .pipe(changed(destination))
    .pipe(isDist ? through() : plumber())
    .pipe(replace('{path-to-root}', './'))
    .pipe(gulp.dest(destination));
});

gulp.task('md', function() {
  var tasks = [];
  tasks.push(gulp.src(['README.md'])
    .pipe(changed('dist'))
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist')));
  tasks.push(gulp.src(['classes/**/*.md'])
    .pipe(changed('dist/classes'))
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist/classes')));
  tasks.push(gulp.src(['assignments/**/*.md'])
    .pipe(changed('dist/assignments'))
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist/assignments')));
  return merge(tasks);
});

gulp.task('css', function() {
  var destination = 'dist/build';
  return gulp.src('styles/**.styl')
    .pipe(changed(destination))
    .pipe(isDist ? through() : plumber())
    .pipe(stylus({
      // Allow CSS to be imported from node_modules and bower_components
      'include css': true,
      'paths': ['./node_modules', './bower_components']
    }))
    .pipe(autoprefixer('last 2 versions', { map: false }))
    .pipe(isDist ? csso() : through())
    .pipe(concat('build.css'))
    .pipe(gulp.dest(destination));
});

gulp.task('attachments', function() {
  var destination = 'dist/attachments';
  return gulp.src('attachments/**/*')
    .pipe(changed(destination))
    .pipe(gulp.dest(destination));
});

gulp.task('images', function() {
  var destination = 'dist/images';
  return gulp.src('images/**/*')
    .pipe(changed(destination))
    .pipe(gulp.dest(destination));
});

gulp.task('fonts', function() {
  var destination = 'dist/fonts';
  return gulp.src('fonts/**/*')
    .pipe(changed(destination))
    .pipe(gulp.dest(destination));
});

gulp.task('videos', ['clean:videos'], function() {
  var destination = 'dist/videos';
  return gulp.src('videos/**/*')
    .pipe(changed(destination))
    .pipe(gulp.dest(destination));
});


gulp.task('favicon', function() {
  return gulp.src('favicon.ico')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(rimraf());
});

gulp.task('clean:html', function() {
  return gulp.src('dist/index.html')
    .pipe(rimraf());
});

gulp.task('clean:md', function() {
  return gulp.src('dist/**/*.md')
    .pipe(rimraf());
});

gulp.task('clean:js', function() {
  return gulp.src('dist/build/build.js')
    .pipe(rimraf());
});

gulp.task('clean:css', function() {
  return gulp.src('dist/build/build.css')
    .pipe(rimraf());
});

gulp.task('clean:images', function() {
  return gulp.src('dist/images')
    .pipe(rimraf());
});

gulp.task('clean:fonts', function() {
  return gulp.src('dist/fonts')
    .pipe(rimraf());
});

gulp.task('clean:videos', function() {
  return gulp.src('dist/videos')
    .pipe(rimraf());
});


function getFolders(cwd, dir) {
  var targetDirectory = path.join(cwd, dir);
  return fs.readdirSync(targetDirectory)
    .filter(function(file) {
      return fs.statSync(path.join(targetDirectory, file)).isDirectory();
    })
    .map(function(filePath) {
      return path.join(dir, filePath);
    });
}

gulp.task('cefet-files', ['js', 'js-classes', 'html', 'md', 'css', 'images', 'fonts', 'videos', 'attachments', 'favicon'], function() {
  var folders = getFolders('.', 'classes').concat(getFolders('.', 'assignments')),
      tasks = folders.map(function(folder) {
        var t = [];
        t.push(gulp.src(['html/index.html'])
          .pipe(replace('{path-to-root}', '../../.'))
          .pipe(gulp.dest(path.join('dist', folder))));
        return merge(t);
      });
  return merge(tasks);
});

gulp.task('connect', ['build'], function() {
  gulp.src('dist')
    .pipe(server({
      port:             8081,
      livereload:       true,
      open:             true
    }));
});

gulp.task('watch', function() {
  gulp.watch('html/**/*.html', ['html']);
  gulp.watch('classes/**/*.md', ['md']);
  gulp.watch('assignments/**/*.md', ['md']);
  gulp.watch('README.md', ['md']);
  gulp.watch('styles/**/*.styl', ['css']);
  gulp.watch('images/**/*', ['images']);
  gulp.watch('node_modules/bespoke-theme-fancy/dist/*.js', ['css']);
  gulp.watch('scripts/*.js', ['js']);
  gulp.watch('scripts/classes/*.js', ['js-classes']);
});

gulp.task('deploy', ['build'], function(done) {
  ghpages.publish(path.join(__dirname, 'dist'), { logger: gutil.log }, done);
});

gulp.task('build', ['cefet-files']);
gulp.task('serve', ['connect', 'watch']);
gulp.task('default', ['build']);
