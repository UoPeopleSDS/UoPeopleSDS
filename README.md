# UoPeopleSDS Website

Our first project is to create the UoPeopleSDS Website using GitHub Pages.  This is to be a great beginner friendly project, even the smallest addition can be added.  Fork this repository and get started.  
More about GitHub Pages: https://pages.github.com/

## Rules

* Use Pull requests, do not commit to the Master branch or we risk running into conflicting commits.  
* Changes must be confirmed.
* Please update this readme as needed
* Whoever has the most experience with GitHub & Pull requests shall be the leader of this project.  They will be in charge of leading the team and teaching new members how to use Pull requests.  The leader will also be in charge of accepting commits to the Master branch. Please put it to a vote in Github.

## Getting Started

These instructions will get you a copy of this project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
Fork this repository and get started.

### Prerequisites

To work on the website from your local machine, be sure you have a Versioning System installed preferably [Git](https://git-scm.com/). Also, you should have experience of Web technologies (HTML, CSS, JavaScript), a Text Editor/Web IDE, and a recent version of any popular web browser

You will also need to have [NodeJS & NPM](https://nodejs.org/en/) installed in order to build the project and also to run it locally.

### Installing

**Note:** *The dollar sign '$' represents input interface of Mac and Linux machines. Windows users may consider installing Git-Bash.*

Install NodeJS on your machine from the link provided above and then following the steps below.

On your local machine, navigate to the folder you want to hold your project.
```
$ cd /path-to-folder
```

Clone the forked repository from GitHub.
```
$ git clone https://github.com/yourusername/UoPeopleSDS
```

Navigate into the cloned repository.
```
$ cd project
```

Run the following commands to install packages necessary to build and run the project.
```
npm install -g npm
    - Installs NPM globally (via -g switch) and to latest version.

npm install -g babel-cli
    - Installs Babel CLI to translate JavaScript from ES6 into ES5.

npm install -g jshint
    - Installs JSHint, a flexible linting tool for detecting convention errors in JavaScript code.

npm install
    - Installs all required production and development packages defined in the package.json file located at the root of our project.

npm run devRun
    - builds project.

npm run liveRun
    - runs web pack server on localhost 9001,
    you need to copy/paste this into your browser - http://localhost:9001/ since it wont automatically starts.
```
Create a new branch.
```
$ git branch yourusername-patch-patchnumber
```

Switch to your new branch.
```
$ git checkout yourusername-patch-patchnumber
```

Make the changes you want on your new branch and when you are done. After editing any JS files, run
```
jshint <fileName>
```
(This helps to verify that your code follows the coding convention defined in the `.jshintrc` file.)

When your code passes the tests, you can then add the edited files to the staging area using
```
git add <fileName1> <fileName2>
```

Verify the changes have beed added using `git status`.

To commit your changes

first stage the files for commit.
```
$ git add <filename1> <filename2>
```

Verify that the files have been staged.
```
$ git status
```

Then make your commit.
```
$ git commit -m 'commit message'
```

Finally, push your changes to your GitHub repository.
```
$ git push origin master
```

Feel free to merge your modifications with your `master` branch.

To do this, first switch to the `master` branch.
```
$ git checkout master
```

Merge the development branch with the `master` branch.
```
$ git merge yourusername-patch-patchnumber
```

## Deployment

### Command line tools recommended to run build commands

**On Windows**

* [Git](https://git-scm.com/) - Also known as Git-Bash, this is a linux style command line for windows which we use on Windows.

**On Mac / Linux**

* Terminal is a built in command line processor for Mac OSX and Linux, use this on those platforms.

**Platform Agnostic Tools**

* [Visual Studio Code](https://code.visualstudio.com/) - Cross-Platform code editor with intellisense and many other plugins to accelerate development on NodeJS projects. This is what we use in order to write code and it conveniently comes with a built in command line terminal that you can use inside the editor. This command line terminal utilizes whatever the default underlying command line processor is on your platform.

* [JSHint](https://jshint.com) - JSHint is a community-driven tool that detects errors and potential problems in JavaScript code. Since JSHint is so flexible, you can easily adjust it in the environment you expect your code to execute. JSHint is open source and will always stay this way. You can easily install it as a commandline tool using `npm` or as a plugin for your favourite text editor.

This project runs inside of GitHub Pages which provides its own hosting of files generated inside of our /docs folder. This however does not solve the problem for local development where you want to see how your code changes look before committing.

To provide a more rapid experience you can use **'npm run liveRun'** if you want changes to be rebuilt in real time. Live Run means that when you make a change to a code file, webpack rebuilds the codebase and updates the screen to reflect it immediately. Alternatively, you can use **'npm run devRun'** if you do not require live rebuild.

The rule of thumb is if you are working on the backend code related to build features, use 'devRun'. If you are building react static pages use 'liveRun'.

### Making production builds for GitHub-Pages

Another command is provided in order to make production builds which is **'npm run prodBuild'**' which can be run from the command line. This will compile all of the css, JavaScript (ES5/ES6), html files into the appropriate modules and dump it into the /docs folder. When committed on the **master** branch GitHub-Pages will trigger a refresh of the site and display the updated changes.

## Understanding Project Structure

```
| app                 <-- React Site Code
|   - components      <-- Components with basic state management
|   - containers      <-- Components with advanced state management
|   - pages           <-- Actual site pages (Home, About, etc...)
|   - reducers        <-- Reducers used by React Redux
|   - store           <-- Configures stores used by Redux
|   - utils           <-- JS Utility classes and helpers go here
| build               <-- Local Node Server generated code go here
| content             <-- Contains css, js and resource files
|   - css
|   - js
|   - resources
| docs                <-- Generated files from 'npm run prodBuild'
| node_modules        <-- All modules installed via 'npm install'
| server              <-- Server Side Code for local dev testing
| templates           <-- Base template .html file to derive pages from
| tools               <-- All code related to the build, clean, copy and bundling of final code
|   - lib             <-- Helper lib methods for the build process
| .babelrc            <-- Defines settings for babel build process
| .gitignore          <-- Tells git what files to ignore when adding files to commit
| .jshintrc           <-- Defines rules and coding convention for working on JS files
| package.json        <-- Defines name, engine, dependencies and information on project
| server.webpack.config.js      <-- Defines webpack configuration for building server-side code.
| webpack.config.js   <-- Defines webpack configuration for building client-side code.
```

## Versioning

We use [Git](https://git-scm.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/UoPeopleSDS/UoPeopleSDS/tags).
This project doesn't require you running a live server on your local machine.

## Versioning

We use [Git](https://git-scm.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/UoPeopleSDS/UoPeopleSDS.github.io/tags).


## Authors

* **Sage Fremont** - [SageWare](https://github.com/SageWare)
* **David C. Onoh**  - [davidconoh](https://github.com/davidconoh)

## Maintainers

* **Alphonso Turner (Fonzie)** - [GitHub](https://github.com/redorc)
* **Michael Mejía Mora** - [GitHub](https://github.com/MichaelMejiaMora)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the GNU Gneral Public License, Version 3 - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* [University of the People](http://uopeople.edu/)
* [GitHub Pages](http://pages.github.com/)

## Signature Board

Please feel free to post any additional suggestions, questions, and comment here. Preferably sign/date them if you can. Feel free to add anything else to this readme.
* [SageWare](https://github.com/SageWare), 9/8/2018
* [David C.](https://github.com/davidconoh), 9/12/2018
* [Fonzie](https://github.com/redorc), 9/29/2018
