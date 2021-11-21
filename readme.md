<!-- using shields.io for status buttons -->
![Programming language](https://img.shields.io/badge/Language-Javascript-blue.svg)
![Version](https://img.shields.io/badge/Version-0.7.43-brightgreen.svg)
[![Build Status - enhancement/coverage](https://travis-ci.com/ManuelVargas1251/Chord-Finder.svg?branch=development)](https://travis-ci.com/ManuelVargas1251/Chord-Finder)
[![Coverage Status](https://coveralls.io/repos/github/ManuelVargas1251/Chord-Finder/badge.svg?branch=development)](https://coveralls.io/github/ManuelVargas1251/Chord-Finder?branch=development)
[![Jest Unit Tests](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

# Chord Finder 🎹

This is a js web application that tells you what chord you are playing on the piano in any inversion. Click or keypress the notes to build your chord! If you select two notes it will tell you what the interval is between those two notes. 

I started by rewriting my previous C++ chord finder [console application](https://github.com/ManuelVargas1251/ChordFinder) in javascript and added the web interface as I went.

[[View Web Application](https://mnl.space/Chord-Finder/)]

![](src/demo.gif)


## Event Handlers

Code is triggered by clicking or keypressing on the keyboard UI.
Also using [Automatic Semicolon Insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion).
```javascript
// mouse click on piano key event
$(".key").click(function () {
	//pass note id to add to chord
	let noteCode = $(this).attr('id')
	$(this).toggleClass("pressed")	//toggle key color key when pressed
	processDOMChord(noteCode, userChordIds)
})

// keyboard keypress event
$("html").keypress(function (element) {
	let noteCode = keyMapping[element.which]
	$("#" + noteCode).toggleClass("pressed")
	processDOMChord(noteCode, userChordIds)
})

// reset button event
$(".reset").click(function (){
	userChordIds.forEach((v)=>$("#" + v).toggleClass("pressed"))
	userChordIds = []
	processDOMChord(undefined, userChordIds)
})
```


## Unit Testing & Coverage

Using [Facebook's Jest](https://facebook.github.io/jest/) for unit testing. Configured [Travis-CI](https://travis-ci.com/github/ManuelVargas1251/Chord-Finder) for continuos integration on every commit and pull request as well as coverage reporting from [Coveralls](https://coveralls.io/github/ManuelVargas1251/Chord-Finder)


```bash
// download node modules locally
npm install

// run js tests
npm test
```

### Test Configuration in `package.json`
```package
{
	"build": "node env",
	"test": "jest --coverage --coverageReporters=text-lcov | coveralls",
	"jest-watch": "jest --watchAll --coverage",
	"jest": "jest --coverage --coverageReporters=text-lcov | coveralls"
}
```
### For local testing, remove the coveralls flag, else err response 422
```package
{
	"build": "node env",
	"test": "jest --coverage --coverageReporters=text-lcov",
	"jest-watch": "jest --watchAll --coverage",
	"jest": "jest --coverage --coverageReporters=text-lcov"
}
```

## Development Setup

```bash
// download the repo locally from github and cd into the folder
gh repo clone ManuelVargas1251/Chord-Finder
cd Chord-Finder

// install browserify globally
npm install -g browserify

// build new bundle to view your changes
browserify src/js/index.js > src/js/bundle.js
```
## Design Development 

![image](https://user-images.githubusercontent.com/10030407/142744157-6143014a-22c9-4e17-9dd2-eaeddc61aa4d.png)

## Environments
By using https://raw.githack.com/ I created a working lower environments to test code in any committed branch. I was also able to provide test statuses for every branch through Travis CI and Coveralls.


[Production](https://mnl.space/Chord-Finder/)

[![Build Status - Master](https://travis-ci.com/ManuelVargas1251/Chord-Finder.svg?branch=master)](https://travis-ci.com/ManuelVargas1251/Chord-Finder)
[![Coverage Status - Master](https://coveralls.io/repos/github/ManuelVargas1251/Chord-Finder/badge.svg?branch=master)](https://coveralls.io/github/ManuelVargas1251/Chord-Finder?branch=master)

[Development](https://raw.githack.com/ManuelVargas1251/Chord-Finder/development/index.html)

[![Build Status - Development](https://travis-ci.com/ManuelVargas1251/Chord-Finder.svg?branch=development)](https://travis-ci.com/ManuelVargas1251/Chord-Finder)
[![Coverage Status - Development](https://coveralls.io/repos/github/ManuelVargas1251/Chord-Finder/badge.svg?branch=development)](https://coveralls.io/github/ManuelVargas1251/Chord-Finder?branch=development)



# Reference

[Musical Chord Wiki](https://en.wikipedia.org/wiki/Chord_(music))

[Musical Interval Wiki](https://en.wikipedia.org/wiki/Interval_(music))

