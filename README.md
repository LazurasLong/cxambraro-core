# Ĉambraro
Engine for visual novels or text quests on JavaScript.

## Installing
Make following directory:
```js
game-name/       // Your game folder
  img/           // Images folder
    bg/          // Backgrounds
      none.png   // Transparent image
    char/        // Characters
      none.png   // Transparent image
  story/         // Your story
    init.js      // Starting story
  custom.css     // Your custom CSS and plugins' styles
  custom.js      // Your custom JS and plugins' scripts
  game-name.html // User Interface
```

This basic setup can be downloaded here: with comments (coming soon), without comments (coming soon too).

If you are going to run game locally or if you have unstable internet conection, download `core/` folder here (coming soon).

## Basic usage

Basic knowledge of JS is highly recommended, but not necessary.

Open init.js with your favorite text editor (I personally recommend [Atom](https://atom.io/) by GitHub, Ĉambraro is coded in it). Try functions below:

```js
s("Hello world!") // Say "Hello world!"
world = new Character("name", "color") // Create new character with this name and that color
world.l("Hello you too.") // Listen what World says
```