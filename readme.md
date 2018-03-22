<!-- using shields.io for status buttons -->
![Programming language](https://img.shields.io/badge/Language-Javascript-blue.svg)
![Version](https://img.shields.io/badge/Version-0.6.5-brightgreen.svg)
[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

# Chord Finder 🎹

Javascript web application that tells you what chord you are playing. Click on the notes to build your chord! If you select two notes it will tell you what the interval is between those two notes.

I started by rewriting my own previous C++ [console application](https://github.com/ManuelVargas1251/ChordFinder) in javascript and added the interface as I went. Still a work in progress.

[View Demo](https://mnl.space/Chord-Finder/)

![](interface.gif)

### Console Usage
If you don't like the interface you can easily call the functions from the [Chrome Console](https://developers.google.com/web/tools/chrome-devtools/console/)  or use them in your own project.

To find a chord name, use the `updateChord()` function and pass in an array with the notes you want. 

```javascript
updateChord(["A", "C#", "E", "G#"])	//  A Major 7
```

## Unit Testing
Really wanted to start unit testing my methods. Using [Facebook's Jest](https://facebook.github.io/jest/) for 6 method tests. To test along, install the npm modules and test ✔.

```npm
npm install
npm test
```

## Interval Library
Below is how I store the relations of the note intervals as well as grouping of intervals commonly called chords.

### Interval Reference

| Interval Name     | Interval	|
| -------------- 	|:-----:|
| Minor Second   	|	2	|
| Major Second 	 	|	3 	|
| Minor Third    	|	4	|
| Major Third	    |	5 	|
| Perfect Fourth	|	6 	|
| Augmented Fourth	|	7 	|
| Diminished Fifth	|	7 	|
| Perfect Fifth    	|	8 	|
| Minor Sixth  	   	|	9 	|
| Major Sixth     	|	10 	|
| Minor Seventh   	|	11 	|
| Major Seventh   	|	12 	|

### Chord Reference

| Chord Name			| Interval Values			|
| ----------			| --------------			|
|	Major				|	```[5, 4]```			| 
|	Minor				|	```[4, 5]```			|
|	Augmented			|	```[5, 5]```			| 	
|	Diminished			|	```[4, 4]```			| 	
|	Major 7				|	```[5, 4, 5]```			|
|	Minor 7				|	```[4, 5, 4]```			|
|	Augmented 7			|	```[5, 5, 3]```			|
|	Dominant 7th		|	```[5, 4, 4]```			|	
|	Augmented Major 7	|	```[5, 5, 4]```			|
|	Fully Diminished 7	|	```[4, 4, 4]```			|
|	Half-Diminished  	|	```[4, 4, 5]```			|
|	Minor Major 7 		|	```[4, 5, 5]```			|	
|	Major 9th			|	```[5, 4, 5, 4]```		|	
|	Dominant 9th		|	```[5, 4, 4, 5]```		|
|	Dominant 11th		|	```[5, 4, 4, 5, 4]```	|
|	Dominant 13th		|	```[5, 4, 4, 5, 4, 5]```|


# Reference

[Musical Chord Wiki](https://en.wikipedia.org/wiki/Chord_(music))

[Musical Interval Wiki](https://en.wikipedia.org/wiki/Interval_(music))

