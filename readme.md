<!-- using shields.io for status buttons -->
![Programming language](https://img.shields.io/badge/Language-Javascript-blue.svg)
![Version](https://img.shields.io/badge/Version-0.6.6-brightgreen.svg)
[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

# Chord Finder 🎹

Javascript web application that tells you what chord you are playing. Click or keypress the notes to build your chord! If you select two notes it will tell you what the interval is between those two notes.

I started by rewriting my previous C++ chord finder [console application](https://github.com/ManuelVargas1251/ChordFinder) in javascript and added the web interface as I went.

[View Demo](https://mnl.space/Chord-Finder/)

![](src/interface.gif)

### Console Usage
You can use the [Chrome Console](https://developers.google.com/web/tools/chrome-devtools/console/) to use the functions directly or use them in your own project.

To find a chord name, use the `updateChord()` function and pass in an array with the notes you want. 

```javascript
updateChord(["A", "C#", "E", "G#"])	//  A Major 7
```

## Unit Testing
First try testing my projects. Using [Facebook's Jest](https://facebook.github.io/jest/) for 6 method tests. To test, install the npm modules and test ✔.

```npm
npm install
npm test
```

# Reference

[Musical Chord Wiki](https://en.wikipedia.org/wiki/Chord_(music))

[Musical Interval Wiki](https://en.wikipedia.org/wiki/Interval_(music))
