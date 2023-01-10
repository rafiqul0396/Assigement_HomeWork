
## What is Tic-Tac-Toe?

TicTacToe is a 2 player game played on a 3 x 3 board. Each player is allotted a symbol (one X and one O). Initially, the board is empty. Alternatively, each player takes a turn and puts their symbol at any empty slot. The first player to get their symbol over a complete row OR a complete column OR a diagonal wins.

You can play the game within Google Search by just searching for “tictactoe”!

![TicTacToe](https://www.tuitec.com/wp-content/uploads/2016/08/morpion-640x411.jpg)


## Questions to Ask
* Will the game be played amongst only 2 players or can there be any number of players in future?
* Is the board size restricted to 3x3 or can it be any NxN?
* Can there be different ways to win?
* Can one of the players be a bot?
* Feature Suggestions:
  * Do we want to time a move? Skip/ Declare the other person as winner if the move doesn’t happen within x seconds.
  * Do we want to support undo operation?
  * Can there be some players who are just watching? Not playing.
  * Do we want to store analytics? Basically previous games, who played what move etc.
  * Support for tournaments? Basically a set of matches, each match between 2 players of the tournament.

## Expectations
* The code should be working and functionally correct
* Good software design practices should be followed:
* Code should be modular, readable, extensible
* Separation of concern should be addressed
* Project structured well across multiple files/ packages
* Write unit tests
* No need of GUI


## Problem Requirements
* Board can be of any NxN size.
* There can be two players.
* Each player will be allotted a symbol.
* The symbol can be one of O and X.
* The players can be either humans or bots.
* Each human player will have a name, email and profile image.
* Each bot player will have a difficulty level.
* Any random player can start the game.
* Then the players will take turns alternatively.
* The player with any consecutive N symbols in a row, column or diagonal wins.
* If the board is full and no player has won, the game is a draw.

## Entities and their attributes
* Game
  * Board
  * Players
* Board
  * Cells
* Cell
  * Row
  * Column
  * Symbol
* Human Player
  * Name
  * Email
  * Profile Image
* Bot Player
  * Difficulty Level

## Design 

### Use Case Diagram
```plantuml
@startuml
left to right direction
actor HumanPlayer
actor HumanPalyer2
rectangle Game {
  HumanPlayer -- (Start Game)
  HumanPlayer -- (Make Move)
  HumanPalyer2 -- (Make Move)
    HumanPlayer -- (Register)

  (Make Move) .> (Check Winner) : includes
}

@enduml
```

### API or CLI Design
The usecase diagram gives us a good idea of the API design. We can have the following APIs:
* Register a player
  * `API` - `POST /register` - `{"name": "Paul Morphy", "email": "blind@chess.in", ...}`
  * `CLI` - `tictactoe register --name <name> --email <email> --profile-image <profile-image>`
* Start a game
  * `API` - `POST /game/start` - `{"player1": "paul", "player2": "bot", "board-size": 3}`
  * `CLI` - `tictactoe start --player1 <player1> --player2 <player2> --board-size <board-size>`
* Make a move
  * `API` - `POST /game/move` - `{"player": "paul", "row": 1, "column": 2}`
  * `CLI` - `tictactoe move --player <player> --row <row> --column <column>`


# Tic Tac Toe OOP Solution

To solve the problem, remember to go through a design process first.  Here is how the solution was designed:

### Tic Tac Toe OOP Design

First, what are components, processes, and data involved in tic tac toe?  Here is a brain dump of all of the things I can think of:

* Board
* Player
* X's, O's
* Squares
* Turns (Maybe?)
* Game
* Winner/Loser

Now let's organize these thoughts a little more using words like has, owns, uses:

* There is 1 board
* A board has squares
* Squares can be X, O or empty
* There is 1 game
* A game has 2 players
* A game should decide whose turn it is
* A game has a board
* The game decides who wins or loses based on the board
* A board view can be displayed using a board

### Tic Tac Toe OOP Code

Now that we have high level design requirements, let's think of what classes we will need:

* game.js - A game of tic tac toe
* board.js - A tic tac toe game board
* player.js - A single player
* square.js - A square in the tic tac toe game board


Additionally, we'll need a `main.js` to create an instance of the game and interact with the html on the page.

#### game.js

Creates an instance of a board, two players and keeps track of whose turn it is.  The game will be responsible for making a move on the board and making sure that the move is valid.  Also, it will be able to identify when someone has won.

#### board.js

Creates a 2 dimensional array of new square objects (details about square.js below).  The board is a state machine, which means that it keeps tracks of different game states.

The possible states of the board are:

* PLAYING
* X_WINS
* O_WINS
* TIE

The board can tell you if a square is empty and can also check if someone has won or tied the game.

#### player.js

A player keeps track of the type of player (X or O) and the name of the player (if you want to display that).

#### square.js

A square can have 3 states: empty, X, or O.







# serverhello# new-repos



## backend deployement in node js
```text
App URL: https://pink-different-oyster.cyclic.app
```
backend code repos:

```text
Code Repository: https://github.com/rafiqul0396/server2
```

frontend url:
https://63bcbe3cb037612386e021b7--astonishing-twilight-f21447.netlify.app/


