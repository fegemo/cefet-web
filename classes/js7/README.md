# Javascript parte 7
## Ecmascript 6: Bring some harmony to your life

---
## Agenda

- Brief history of javascript
- New features
  - Scope
  - Classes
  - Default parameters
  - ...
- Running ES6 today
- Conclusion

---
## Prerequisites

- Experience with real-life javascript
- Open mind

---
# The history of javascript

- *1995* Brendan Eich created javascript for Netscape
- *1996, August* Micro$oft created JScript on IE and IIS 3.0
- *1996, November* Netscape submitted it to Ecma International -> ECMAScript
- *1997, June* ECMAScript 2
- *1999, December* ECMAScript 3
- *2009, December* ECMAScript 5
- *2011, June* ECMAScript 5.1
- *2014* ECMAScript 6

---
# Overview of features

<ul class="multi-column-list-3">
  <li>Block scope</li>
  <li>Classes</li>
  <li>Default function params</li>
  <li>Destructuring</li>
  <li>Rest and Spread operator</li>
  <li>Array comprehension</li>
  <li>FAT and thin arrows</li>
  <li>Maps and Sets</li>
  <li>Tail recursive calls</li>
  <li>Quasi-literals</li>
  <li>Generators</li>
  <li>Modules</li>
  <li>Promises</li>
</ul>

---
# Scope

---
## Scope

<img src="../../images/three-little-pigs.jpg" style="height: 450px; width: auto;" />

---
## **var**, <small>the older brother</small>

- Declares variables in the function scope (ES5) <!-- .element: class="fragment" data-fragment-index="1" -->
  ```js
  var name = 'I am the elder pig';
  
  function whoAreYou() {
     window.alert('who are you: ' + name);
     var name = "don't know";
  }
  
  whoAreYou();
  ```

---
## **var**, <small>the older brother</small> (cont.)

- Quiz of the day: whoAreYou()?
- Answer: 
  - *undefined* <small>([on jsfiddle](http://jsfiddle.net/R2C2v/) for non-believers)</small>
    - <span>Why? </span>
      - <span>Because of *hoisting*!</span>

---
## **let** and **const**, <small>the twins</small>

```js
const DAILY_PIG_FOOD = 800; // grams

function feedPigs(piggery) {
  for (let i = 0; i < piggery.length; i++) {
    piggery[i].feed(DAILY_PIG_FOOD);
  }

  console.log('i: ' + i);   // ReferenceError: i is not defined
  DAILY_PIG_FOOD = 400;     // executes ok
  console.log('DAILY_PIG_FOOD: ' + DAILY_PIG_FOOD); // prints 800
}
```

See more at: [An introduction to ES6 Part 2: Block Scoping](http://globaldev.co.uk/2013/09/es6-part-2/)

---
# Class

---
## Class <small>(ES5)</small>

```js
function Vehicle(brand, type) {
  this.brand = brand;
  this.type = type;
}

Vehicle.prototype.turnOn = function(options) {
  //...  
};

```

---
## Class <small>(*ES6*)</small>

```js
class Vehicle {
  constructor(brand, type) {
    this.brand = brand;
    this.type = type;
  }
  turnOn(options) {
    //...
  }
}

```

---
## Class Inheritance <small>(ES5)</small>

```js
function Car(brand, type, model) {
  Vehicle.call(this, brand, type);
  this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.turnOn = function(options) {
  Vehicle.prototype.turnOn.call(this, options);
  // do extra car stuff
}
```

---
## Class Inheritance <small>(*ES6*)</small>

```js
class Car extends Vehicle {
  turnOn(options) {
    super.turnOn(options);
  }
}
```

es6fiddle:

 - [Car and vehicle](http://www.es6fiddle.net/hukmpu6l/)
 - [Item Cloud RevealJS plugin](http://www.es6fiddle.net/hukn6opl/)

---
## Class

### PROS

- classes make it *easier for newcomers* to get started with JavaScript
- have a *language supported inheritance mechanism*
- very *clear and expressive syntax*


### CONS

- does not prevent it from being used *without new*
- no privacy control from the language, yet

---
# Default argument values

---
## Default argument values

How we do it:

```js
function tellStory(lang, year) {
  return (lang || 'C') + ' was created at ' + (year || 1972);
}
```

In ES6:

```js
function tellStory(lang = 'C', year = 1972) {
  return lang + ' was created at ' + year;
}
```

---
# **Rest** and **Spread** <small>operators</small>

---
## **Rest** and Spread <small>operators</small>

How can you create an html unordered list, given its text elements?

```js
function createHTMLList() {
  var args = Array.prototype.slice.call(arguments),
  return '<li>' + args.join('</li><li>') + '</li>';
}
```

But on ES6, we can use the *rest* operator instead of *arguments*:
```js
function createHTMLList(...items) {
  return '<li>' + items.join('</li><li>') + '</li>';
}
```

---
## Rest and **Spread** <small>operators</small>

How can you instantiate a date from the values of 3 inputs (day, month, year)?

```js
var day = getDateDay(),
    month = getDateMonth(),
    year = getDateYear();
var d = new Date(year, month, day);
```

But on ES6, we can leverage the *spread* operator:

```js
var dateFields = getDateFieldsValues(),
    d = new Date(...dateFields);
```

---
## **Rest** and **Spread** <small>operators</small>

- the *rest* operator turns a parameter into an array of values
- the *spread* operator turns an array of values into "comma-separated" values
  ```
  var pets = ['rat', 'dragon', 'bee'];
  
  console.log(pets);                      // prints: rat, dragon, bee
  console.log(...pets);                   // prints: rat dragon bee
  console.log(pets[0], pets[1], pets[2])  // prints: rat dragon bee
  ```
  Run on [es6fiddle](http://www.es6fiddle.net/huktq4ed/)
- both have the same symbol: ...

---
# Destructuring

---
## Destructuring

- Decapitating an array:
  ```js
  var [head, ...tail] = [1, 2, 3, 4];
  console.log(tail);  // prints [2, 3, 4]
  ```
  - Uses **destructuring** AND the **spread** operator
- The 'swap' trick:
  ```js
  var a = 1;
  var b = 3;
  
  [a, b] = [b, a];  // a=3, b=1
  ```

---
## Destructuring <small>an object</small>

```js
var currentSong = {
  title: 'The Scarecrow',
  artist: 'Avantasia',
  album: {
    title: 'Scarecrow',
    releaseDate: '2006'
  }
};

function logSongInfo(
  { 
    title,
    artist,
    album: {
      releaseDate: year
    }
  }) {

  console.log('Title: ' + title);
  console.log('Artist: ' + artist);
  console.log('Year: ' + year);
};

logSongInfo(currentSong);
/*
Title: The Scarecrow
Artist: Avantasia
Year: 2006
*/
```

---
## String templates <small>(quasi-literals)</small>

Have you seen this?

```js
var tone = Math.random() * 155 + 100;
var color = 'rgb('+ tone  +', ' + tone + ', ' + tone + ')';
```

There is a better way:

```js
var tone = Math.random() * 155 + 100;
var color = `rgb(${tone}, ${tone}, ${tone})`;
```

---
## String templates <small>(quasi-literals)</small> (cont.)

What about this?

```js
console.log('Cart total: R$ ' + (quantity * unitPrice) + ',00');
```

Becomes:

```js
console.log(`Cart total: R\$ ${quantity * unitPrice},00`);
```

---
## String templates

General form: <!-- .element: class="fragment" data-fragment-index="1" -->

```js
tag`literal${substitution}literal`
```
<!-- .element: class="fragment" data-fragment-index="1" -->

In which the tag is a function that can post-process the template after the substitution happens. <!-- .element: class="fragment" data-fragment-index="2" -->

See more here: [A critical review of ES6 quasi-literals](http://www.nczonline.net/blog/2012/08/01/a-critical-review-of-ecmascript-6-quasi-literals/#content) <!-- .element: class="fragment" data-fragment-index="2" -->

---
## String templates

###PROS

 - more elegant, less verbose string creation
 - multiline strings
 - allows the creation of DSLs


###CONS

 - substitution variables must be in the same scope
 ```js
 var msg = `Hello, ${place}`;    // throws error
 ```
 - cannot externalize strings


---
# Running ES6 today

---
## Running ES6 today

- As of today, there is no browser that supports all of the ES6 features.
- This curated table shows the current compatibility table for each feature:

<img src="../../images/es6-compatibility-table.jpg" style="max-height: 200px">

See it on [ECMAScript 6 compatibility table](http://kangax.github.io/es5-compat-table/es6/)

---
## Running ES6 today

- This presentation was partially built on ES6
  You can check its source code on the [Github repository](https://github.com/fegemo/talk-es6)
- I used [google-traceur](https://github.com/google/traceur-compiler): an ES6 to ES5 **transpiler**

<img src="../../images/tc.png" style="max-height: 200px">
- Here is the [list of features](https://github.com/google/traceur-compiler/wiki/LanguageFeatures) supported by traceur

---
## Running ES6 today

- Besides traceur, we now have [babel](https://babeljs.io/), also a transpiler, but that is quicker in implementing the 
  ES6 specs

<img src="../../images/babel-logo.svg" style="height: 200px">
- Here is the [list of features](https://babeljs.io/docs/learn-es2015/#ecmascript-6-features) supported by babel

---
# Features not covered

## Big stuff

 - Promises
 - Modules
 - Maps and Sets
 - Generators
 - Annotations
 - <b>FAT</b> vs <span style="font-family: monospace;">thin</span> arrow

---
# Features not covered

## Not that big

 - Computed Property Names
 - Iterators and for-of
 - Object Initializer Shorthand
 - Symbols
 - Array Comprehension

---
# Conclusion

- ECMAScript 6 brings *features* to the language *that had been developed outside* it
- There is *no 100%-ready environment* that supports the full ES6 yet
- We can use *some features of ES6 today*
- *More* juice will come *on ES7* (e.g., privacy in classes)

---
# Learn more

1. [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)
1. [Use ECMAScript 6 Today, at tutsplus.com](http://code.tutsplus.com/articles/use-ecmascript-6-today--net-31582)
1. [Examples of use of let, const and optional params](http://peter.michaux.ca/articles/javascript-is-dead-long-live-javascript)
1. [ECMAScript 6 compatibility table](http://kangax.github.io/es5-compat-table/es6/)
1. [ES6 Classes](http://www.2ality.com/2012/07/esnext-classes.html)

---
## Learn even more

1. [ES6 Modules](http://www.infoq.com/news/2013/08/es6-modules)
1. [ES6 Fiddle](http://www.es6fiddle.net/)
1. [A Critical Review of quasi-literals](http://www.nczonline.net/blog/2012/08/01/a-critical-review-of-ecmascript-6-quasi-literals/)
1. [Destructuring Assignment in ECMAScript 6](http://fitzgeraldnick.com/weblog/50/)

