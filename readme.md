<!-- using shields.io for status buttons -->
![Programming language](https://img.shields.io/badge/Language-Javascript-blue.svg)
![Version](https://img.shields.io/badge/Version-0.5.6-brightgreen.svg)

# Chord Finder

Javascript web app redo from my C++ [console app](https://github.com/ManuelVargas1251/ChordFinder).

[View Demo (Browser Console Only)](https://mnl.space/Chord-Finder/)

## Usage

Currently this is a console application while I work on the user interface. 

To use, click on the demo link above, open the [Chrome Console](https://developers.google.com/web/tools/chrome-devtools/console/) (or equivalent browser console) and you should see an inital chord already executed; if it's not, the program is broken and you should come back later 😞.

To find a chord name, use the `updateChord()` function and pass in an array with the notes you want. 

```javascript
updateChord(["A","C","E"])	//	Result => A Minor
```

## Interval Library

### Interval Reference

| Interval Name     | Interval	|
| -------------- 	|:-----:|
| Perfect Unison 	|	0, 1|
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
| Perfect Octave  	|	13 	|

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

[Chord Wiki](https://en.wikipedia.org/wiki/Chord_(music))

