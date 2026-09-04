<!-- using shields.io for status buttons -->
![Programming language](https://img.shields.io/badge/Language-Javascript-blue.svg)
![Version](https://img.shields.io/badge/Version-0.7.43-brightgreen.svg)
[![CI - master](https://github.com/ManuelVargas1251/Chord-Finder/actions/workflows/node-ci.yml/badge.svg?branch=master)](https://github.com/ManuelVargas1251/Chord-Finder/actions/workflows/node-ci.yml?query=branch%3Amaster)
[![CI - development](https://github.com/ManuelVargas1251/Chord-Finder/actions/workflows/node-ci.yml/badge.svg?branch=development)](https://github.com/ManuelVargas1251/Chord-Finder/actions/workflows/node-ci.yml?query=branch%3Adevelopment)
[![Tested with Jest](https://img.shields.io/badge/tested%20with-Jest-99424f.svg)](https://jestjs.io/)

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

Using [Facebook's Jest](https://facebook.github.io/jest/) for unit testing. GitHub Actions runs the tests and Browserify build for pushes and pull requests targeting `master` or `development`. Coverage thresholds are enforced at 100% statements, 95% branches, 100% functions, and 100% lines. Pull requests in this repository receive a coverage summary comment, and the full report is uploaded as a workflow artifact.


```bash
# download node modules locally
npm install

# run js tests
npm test
```

### Test Configuration in `package.json`
```json
{
	"build": "browserify src/js/index.js > src/js/bundle.js | node env",
	"test": "jest --coverage --coverageReporters=text --coverageReporters=lcov --coverageReporters=json-summary",
	"jest-watch": "jest --watchAll --coverage",
	"jest": "jest --coverage --coverageReporters=text --coverageReporters=lcov --coverageReporters=json-summary"
}
```

## Deployments

The production site is available at [mnl.space/Chord-Finder](https://www.mnl.space/Chord-Finder/).

Pull requests targeting `development` or `master` receive a preview deployment at:

```text
https://www.mnl.space/Chord-Finder/pr-preview/pr-<number>/
```

The preview link is added to the pull request and the preview is removed when the pull request closes. For example, pull request 84 is available at [mnl.space/Chord-Finder/pr-preview/pr-84](https://www.mnl.space/Chord-Finder/pr-preview/pr-84/). Preview deployments are available for pull requests from this repository; forked pull requests are not deployed.

## Development Setup
Using a server avoids CORS errors when testing sound locally. Also using browserify to bundle js files into one  file. Using VSCode + live server.
```bash
# download the repo locally from github and cd into the folder
gh repo clone ManuelVargas1251/Chord-Finder
cd Chord-Finder

# install dev node modules (includes browserify)
npm install

# build new bundle to view your changes
node_modules/.bin/browserify src/js/index.js > src/js/bundle.js

# if you install browserify globally you can use this command instead
npm run build
```

## Design Development 

![image](https://user-images.githubusercontent.com/10030407/142744157-6143014a-22c9-4e17-9dd2-eaeddc61aa4d.png)


## Environments
By using https://raw.githack.com/ I created working lower environments to test code in any committed branch. The CI badges above report the latest GitHub Actions status separately for `master` and `development`.


[Production](https://mnl.space/Chord-Finder/)


[Development](https://raw.githack.com/ManuelVargas1251/Chord-Finder/development/index.html)




# Reference

[Musical Chord Wiki](https://en.wikipedia.org/wiki/Chord_(music))

[Musical Interval Wiki](https://en.wikipedia.org/wiki/Interval_(music))

[Eleventh Interval Wiki](https://en.wikipedia.org/wiki/Eleventh)

[Octave Interval Wiki](https://en.wikipedia.org/wiki/Octave)

