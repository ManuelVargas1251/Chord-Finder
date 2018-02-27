# Changelog 📜
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).



## [0.6.0] - 2018-02-26
### Added
- this changelog!
- interface screenshot
- added css variables for interface colors
- 'convertChord()' to convert key ids to note names
- notes object used by 'convertChord()'
### Changed
- commented out angular functionality; that will come later
- relabeled keyboard ui key ids
- rewrote key click event handler to function properly
- removing semicolons to use [ASI](https://en.wikibooks.org/wiki/JavaScript/Automatic_semicolon_insertion)
### Deleted
- interface message; keyboard works as intended now!
- about class style; maybe later
- removed deprecated 'getChord()' function

## [0.5.8] - 2017-12-29
### Added
- added instruction to interface to only input notes from left to right as logic is not done.
- added about css style for interface info
### Changed
- renamed FindINT with clearer name
### Removed
- removed temp chord name output from interface


## [0.5.7] - 2017-12-28
### Added
- program runs every time a key is pressed
### Changed
- updated logic to show chord root only if input is not an interval; for intervals, just show the degree in the interface output.


## [0.5.6] - 2017-12-27
### Added
- angular app
### Changed
- keyboard key id names
- renamed chord output css class to 'chord'
- css modifications to keyboard
- general code formatting


## [0.5.5] - 2017-12-26
### Added
- key click event handler
- black key css subclass
### Changed
- keyboard html tag to div
- readme formatting
- modified interface keyboard to show full keyboard octave
### Removed
- console screenshots


## Commits exist before 0.5.5 but I wasn't keeping count.

[0.6.0]: #
[0.5.8]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/d3fa8c1a9ea3b2a9bc2bec5dec10fd4f2e88fb55
[0.5.7]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/a70fa201fd150e6f30f5973beff5046f42202862
[0.5.6]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/884727f8dc11147e5f43ada27f148062b526a132
[0.5.5]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/27eb5752df9f6dcf6071b9999518c57d1b102aa2

