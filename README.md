# Tic Tac Toe

This is a simple web application using AngularJS. In this game's implementation you can see all the strength AngularJS has when developing front-end applications, making it simple to understand and maintain. This app was implemented without jQuery.

### Version
0.0.1

### Tech

Tic Tac Toe uses a number of open source projects to work properly:

* [AngularJS](https://angularjs.org/) - HTML enhanced for web apps!
* [Bootstrap](http://getbootstrap.com/) - great UI boilerplate for modern web apps
* [node.js](https://nodejs.org/en/) - evented I/O for the backend
* [npm](https://www.npmjs.com/) - package manager
* [bower](http://bower.io/) - frameworks, libraries's package managment
* [Express](http://expressjs.com/) - fast node.js network app framework 
* [Grunt](http://gruntjs.com/) - the streaming build system



### Installation

For running Tic Tac Toe you will need node.js (with npm) and Grunt installed on your PC.

Yo get and run the web application you need to:

First clone Tic Tac Toe:

```sh
$ git clone --recursive https://github.com/camiriveron/tictactoe.git
$ cd tictactoe

```

Second get npm dependencies (npm will bring bower dependencies when finished):
```sh
$ npm install
```

Third run Tic Tac Toe:
```sh
$ grunt server
```
And that's it!

### Aproach

In this first version the AI doesn't have any intelligence, just picks one cell randomly. In order to develop an AI that never loses, the [minimax algorithm](https://en.wikipedia.org/wiki/Minimax) must be implemented. 

AngularJS is used in the following way:

* **Views**:  Contains the application's DOM. Angular's directives are used in order to translate the scope's values into the view and also to allow the interaction with the app and make the app dinamic, for instance: ngRepeat, ngClick, ngClass, ngShow, etc.
* **Controllers**:  Used to wire up services, dependencies and other objects, and assign them to the view via scope. The BoardController manages all the interaction with the board and updates the scope accordingly, leading to an update in the view.
* **Services**: Used as singletons to encapsulate logic. In this app the BoardService encapsulates the algorithm to check if someone won and to pick the next computer's movement. 
* **Directives**: Used when you need to modify the DOM. In this app the HomeDirective is used to update the navigation bar's style when scrolling down. 

