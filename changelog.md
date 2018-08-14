# Changelog 📜
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.7.42] 🍉 - 2018-14-08
Releasing this before 0.8 as code is stable now and tests are not part of the functionality.
## new
- added browserify to combine all js files to `bundle.js`
## fixed
- all jest unit tests are passing and coverall coverage is at 100%

## [0.7.0] 🍍 - 2018-25-06
## new
- notes make sound when pressed
- keys change color when hovered on
- added travis ci to run jest when pull requesting with required checks in dev and master

## fixed
- inversions show correct root note

## improved
- css file setup
- tests file location
- chord finding algorithm
- change log naming system

## [0.6.6] - 2018-04-18
### Added
- physical keyboard mapping
- refactor input handling to it's own file
- css color variables all in one place
- try/catch for when a chord is not found + ui clear
### Changed
- redo keyboard ui

## [0.6.5] - 2018-03-21
### Added
- separate css for white key sizing
### Changed
- ui font
- condensed `getNoteChord.js` and `updateChord.js`
### Deleted
- deleted keyboard ui numbers


## [0.6.4] - 2018-03-03
### Added
- all method tests (4 passing!)
### Deleted
- deleted `getUserChord()`; no longer used


## [0.6.3] - 2018-03-01
### Added
- globals included in package.json; will be moved
### Changed
- first unit test passed!


## [0.6.2] - 2018-02-28
### Added
- node to start unit testing
- jest unit tests; setup only
### Changed
- global variables now in one file, `globals.js`


## [0.6.1] - 2018-02-27
### Added
- centered UI
- fixed [issue #1](https://github.com/ManuelVargas1251/Chord-Finder/issues/1) by wrapping switch in `getChord()` inside an if-else statement that checks if the user chord array has any notes in it. If it doesn't, it skips the switch case and returns an empty string.
### Changed
- renamed `convertChord()` to `getNoteChord()`
- interface screenshot in `readme.md` is now a gif
- renamed `_newIntervals` object to `_intervals`


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

[0.8.0]: #
[0.7.42]: #
[0.7.0]: #
[0.6.7]: https://github.com/ManuelVargas1251/Chord-Finder/commit/c0a43cc386802942ad3348cd603830a154b2cf36
[0.6.6]: https://github.com/ManuelVargas1251/Chord-Finder/commit/2aee0a47cf887c99843350d7ac40b4b371c14bed
[0.6.5]: https://github.com/ManuelVargas1251/Chord-Finder/commit/c4b513b5d88f16a59bf6510851c2be014d33a533
[0.6.4]: https://github.com/ManuelVargas1251/Chord-Finder/commit/656dc07b98d596fb1f9e3a93e5081324f08fc9ef
[0.6.3]: https://github.com/ManuelVargas1251/Chord-Finder/commit/21e4a01ccd3bb22fd34d4a1f3c75feaec14a85e9
[0.6.2]: https://github.com/ManuelVargas1251/Chord-Finder/commit/2f8c4e6d8ec4f742b2bbecb3e5e6a8d942176007
[0.6.1]: https://github.com/ManuelVargas1251/Chord-Finder/commit/906623097acc93b6fbc25a8707e853c910881549
[0.6.0]: https://github.com/ManuelVargas1251/Chord-Finder/commit/e8f06dd58904f322473074d79b822ed78e02321e
[0.5.8]: https://github.com/ManuelVargas1251/Chord-Finder/commit/f2223a7a1cff9acb21104438920574e23c90bc08
[0.5.7]: https://github.com/ManuelVargas1251/Chord-Finder/commit/75b11393e3e68f078db3aa085ba6232e213cb49b
[0.5.6]: https://github.com/ManuelVargas1251/Chord-Finder/commit/48a092a2aadb57f417f87367fd186d6c64fb7fc4
[0.5.5]: https://github.com/ManuelVargas1251/Chord-Finder/commit/14326d629f5ac41210af279a91e9a5950e6422ae