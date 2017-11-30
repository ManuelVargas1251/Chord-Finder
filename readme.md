<!-- using shields.io for status buttons -->
![Programming language](https://img.shields.io/badge/Language-Javascript-blue.svg)
![Version](https://img.shields.io/badge/Version-0.2-red.svg?style=flat)

# Chord Finder

Javascript web app fork from my c++ version

[View Demo - Work in Progress](https://mnl.space/Chord-Finder/)


## Interval Reference

| Interval       	| Value	|
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

## Chord Formation
4 Triads, 8 Tetrads 

| Chord Name			| Interval Group			|	Chord Type	|
| ----------			| --------------			|:-----------------:|
|	Major				|	```[5, 4]```			| 	Triad	|
|	Minor				|	```[4, 5]```			| 	Triad	|
|	Augmented			|	```[5, 5]```			| 	Triad	|
|	Diminished			|	```[4, 4]```			| 	Triad	|
|	Major 7th			|	```[5, 4, 5]```			|	Seventh	|
|	Minor 7th			|	```[4, 5, 4]```			|	Seventh	|
|	Augmented 7th		|	```[5, 5, 3]```			|	Seventh	|
|	Dominant 7th		|	```[5, 4, 4]```			|	Seventh	|
|	Augmented Major 7th	|	```[5, 5, 4]```			|	Seventh	|
|	Diminished 7th		|	```[4, 4, 4]```			|	Seventh	|
|	Half-Diminished 	|	```[4, 4, 5]```			|	Seventh	|
|	Minor Major 		|	```[4, 5, 5]```			|	Seventh	|
|	Major 9th			|	```[5, 4, 5, 4]```		|	Extended 	|
|	Dominant 9th		|	```[5, 4, 4, 5]```		|	Extended 	|
|	Dominant 11th		|	```[5, 4, 4, 5, 4]```	|	Extended 	|
|	Dominant 13th		|	```[5, 4, 4, 5, 4, 5]```|	Extended 	|


# Reference

[Chord Wiki](https://en.wikipedia.org/wiki/Chord_(music))

