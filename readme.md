<!-- using shields.io for status buttons -->
![Programming language](https://img.shields.io/badge/Language-Javascript-blue.svg)
![Version](https://img.shields.io/badge/Version-0.8.0-brightgreen.svg)
[![CI - production](https://img.shields.io/github/actions/workflow/status/ManuelVargas1251/Chord-Finder/node-ci.yml?branch=master&label=CI%20Production)](https://github.com/ManuelVargas1251/Chord-Finder/actions/workflows/node-ci.yml?query=branch%3Amaster)
[![CI - development](https://img.shields.io/github/actions/workflow/status/ManuelVargas1251/Chord-Finder/node-ci.yml?branch=development&label=CI%20Development)](https://github.com/ManuelVargas1251/Chord-Finder/actions/workflows/node-ci.yml?query=branch%3Adevelopment)
[![Tested with Jest](https://img.shields.io/badge/tested%20with-Jest-99424f.svg)](https://jestjs.io/)

# Chord Finder 🎹

Chord Finder is a JavaScript web application that identifies the chord you are playing on the piano, including inversions. Click the piano keys or use the mapped computer-keyboard controls to build a chord. Select two notes to identify the interval between them.

I started by rewriting my previous C++ chord finder [console application](https://github.com/ManuelVargas1251/ChordFinder) in JavaScript and added the web interface as I went.

[View Web Application](https://mnl.space/Chord-Finder/)

![Chord Finder app demo](src/demo.gif)


## Event Handlers

Code is triggered by clicking or pressing keys on the keyboard UI.
The example assumes `index.js` has already initialized `userChordIds` and preloaded the note audio with `notes = sound.preload()`.
```javascript
// mouse click on piano key event
$(".key").click(function () {
	//pass note id to add to chord
	let noteCode = $(this).attr('id')
	$(this).toggleClass("pressed")	//toggle key color key when pressed
	processDOMChord(noteCode, userChordIds, notes)
})

// keyboard keypress event
$("html").keypress(function (element) {
	let noteCode = _computerKeyboardMap.get(element.which)
	$("#" + noteCode).toggleClass("pressed")
	processDOMChord(noteCode, userChordIds, notes)
})

// reset button event
$(".reset").click(function (){
	userChordIds.forEach((v)=>$("#" + v).toggleClass("pressed"))
	userChordIds = []
	processDOMChord(undefined, userChordIds)
})
```


## Unit Testing & Coverage

Using [Jest](https://jestjs.io/) for unit testing. GitHub Actions runs on pushes to, and pull requests targeting, `master` or `development`. The workflow uses Node.js 24, runs the tests with coverage, uploads the full coverage report as an artifact, and builds the Browserify bundle. Same-repository pull requests also receive a coverage summary comment.


```bash
# clean install the locked dependency versions
npm ci

# run tests with coverage
npm test

# rebuild the browser bundle.js
npm run build
```

Coverage thresholds are 100% for statements, functions, and lines, with 95% branch coverage. Use `npm run jest-watch` for an interactive test watcher.

## Deployments

The production site is available at [mnl.space/Chord-Finder](https://www.mnl.space/Chord-Finder/). The production workflow rebuilds the bundle and publishes the `master` branch contents to GitHub Pages.

Pull requests targeting `development` or `master` receive a preview deployment at:

```text
https://www.mnl.space/Chord-Finder/pr-preview/pr-<number>/
```

The preview workflow runs when a pull request is opened, reopened, updated, or closed. The preview link is added to the pull request using the URL pattern above, and the preview is removed when the pull request closes. Preview deployments are available for pull requests from this repository; forked pull requests are not deployed.

## Development Setup
Use a local server to avoid CORS errors when testing sound. The project uses Browserify to bundle the JavaScript files into `src/js/bundle.js`; VS Code Live Server is one option for serving the project locally.

Use Node.js 24 and npm to match the CI environment. The repository's lockfile keeps dependency versions consistent, so install dependencies with `npm ci` rather than relying on a globally installed tool or an unpinned `npx` package.
```bash
# download the repo locally from github and cd into the folder
gh repo clone ManuelVargas1251/Chord-Finder
cd Chord-Finder

# install the locked dependencies, including Browserify
npm ci

# rebuild the bundle after changing JavaScript files
npm run build
```

## Application Architecture

```mermaid
%%{init: {"theme": "base", "themeVariables": {"fontSize": "12px", "primaryTextColor": "#172033", "lineColor": "#64748b"}, "flowchart": {"nodeSpacing": 12, "rankSpacing": 18, "padding": 8}}}%%
flowchart TB

	subgraph initialization[" "]
		direction LR
		initTitle(["Initialization"])
		globals[("globals.js<br/>Shared data:<br/>_notes, keyboard map,<br/>__intervals")]
		initComplete(["Ready to load"])

		initTitle -->|define shared data| globals --> initComplete
	end

	subgraph pageLoad[" "]
		direction LR
		pageTitle(["Page load"])
		bundle["index.html<br/>Load JavaScript bundle"]
		init["index.js<br/>Initialize userChordIds = []"]
		preload["sound.js: preload()<br/>Create audio objects"]
		audio[("Preloaded notes")]
		register["index.js<br/>Register UI handlers"]

		pageTitle --> bundle --> init
		init -->|preload once| preload --> audio
		init --> register
	end

	initComplete -->|load scripts| pageTitle
	globals -.->|read shared data| init

	subgraph keyboardInput[" "]
		direction LR
		keyboardTitle(["Keyboard input<br/>Repeats"])
		input(["Piano key click<br/>or keyboard key"])
		handler["index.js<br/>Read note ID"]
		process["processDOMChord.js<br/>Validate note ID"]
		valid{"Valid note ID?"}
		duplicate{"Duplicate note ID?"}
		remove["processDOMChord.js<br/>Remove duplicate note ID"]
		play["sound.js: playNote()<br/>Play selected note"]
		mutate["processDOMChord.js<br/>Add note ID and sort"]
		state[("userChordIds<br/>Selected note IDs")]
		names["getNoteChord.js<br/>Convert note IDs"]
		update["updateChord.js<br/>Run chord analysis"]
		intervals["getUserIntervals.js<br/>Calculate intervals"]
		noteId["getNoteId.js<br/>Resolve note names to IDs"]
		distance["getInterval.js<br/>Measure note distance"]
		intervalList[("userIntervals")]
		chord["getChord.js<br/>Match chord using __intervals"]
		result["processDOMChord.js<br/>Receive chord name"]
		display[/"Write result to<br/>.chord element"/]
		invalid["updateChord.js<br/>updateChord([])"]
		clear[/"Clear .chord text"/]
		ready(["Ready for next input"])

		keyboardTitle --> input --> handler --> process --> valid
		valid -->|no| invalid --> clear --> ready
		valid -->|yes| duplicate
		duplicate -->|yes: remove| remove --> state
		duplicate -->|no: selected note| play --> mutate --> state
		state --> names --> update
		update --> intervals --> noteId --> distance --> intervalList
		intervalList -->|return intervals then call getChord| chord --> result --> display
		display -->|next input| ready --> input
	end

	register -->|handle event| input
	globals -.->|shared data| keyboardTitle
	audio -.->|audio cache| play

	subgraph reset[" "]
		direction LR
		resetTitle(["Reset"])
		resetButton(["Reset button"])
		resetHandler["index.js<br/>Clear pressed-key UI"]
		clearState["index.js<br/>Set userChordIds = []"]
		resetProcess["processDOMChord.js<br/>processDOMChord(undefined)"]
		resetUpdate["updateChord.js<br/>updateChord([])"]
		resetDisplay[/"Clear .chord text"/]
		resetReady(["Ready for next input"])

		resetTitle --> resetButton --> resetHandler --> clearState
		clearState -.->|write shared state| state
		clearState --> resetProcess --> resetUpdate --> resetDisplay --> resetReady
		resetReady -->|return to loop| input
	end

	classDef title fill:#172033,stroke:#172033,color:#ffffff
	classDef event fill:#fff7ed,stroke:#ea580c,color:#172033
	classDef function fill:#e8f1ff,stroke:#2563eb,color:#172033
	classDef decision fill:#fef3c7,stroke:#d97706,color:#172033
	classDef state fill:#f1f5f9,stroke:#64748b,color:#172033
	classDef output fill:#ecfdf5,stroke:#16a34a,color:#172033

	class initTitle,pageTitle,keyboardTitle,resetTitle title
	class initComplete,input,ready,resetButton event
	class bundle,init,preload,register,handler,process,remove,play,mutate,names,update,intervals,noteId,distance,chord,result,invalid,resetHandler,clearState,resetProcess,resetUpdate function
	class valid,duplicate decision
	class globals,audio,state,intervalList state
	class display,clear,resetDisplay output

	style initialization fill:#f8fafc,stroke:#64748b,color:#172033
	style pageLoad fill:#f5f3ff,stroke:#7c3aed,color:#172033
	style keyboardInput fill:#fffaf0,stroke:#d97706,color:#172033
	style reset fill:#f0fdf4,stroke:#16a34a,color:#172033
```

The [canonical Mermaid source](docs/app-architecture.mmd) is also available separately. The static image is available as a fallback for clients that do not render Mermaid diagrams.

<details>
<summary>View static chart fallback</summary>

![Chord Finder application architecture](docs/app-architecture.png)

</details>


## Environments
By using https://raw.githack.com/ I created working lower environments to test code in any committed branch. The CI badges above report the latest GitHub Actions status separately for `master` and `development`.


[Production](https://mnl.space/Chord-Finder/)


[Development](https://raw.githack.com/ManuelVargas1251/Chord-Finder/development/index.html)




# Reference

[Musical Chord Wiki](https://en.wikipedia.org/wiki/Chord_(music))

[Musical Interval Wiki](https://en.wikipedia.org/wiki/Interval_(music))

[Eleventh Interval Wiki](https://en.wikipedia.org/wiki/Eleventh)

[Octave Interval Wiki](https://en.wikipedia.org/wiki/Octave)

