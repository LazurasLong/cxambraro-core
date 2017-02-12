# Ĉambraro
Engine for visual novels and text quests on JavaScript.

## Installing
Find instruction in `Installing.md`.

## Basic usage

Basic knowledge of JS is highly recommended, but not necessary.

Open init.js with your favorite text editor (I personally recommend [Atom](https://atom.io/) by GitHub, Ĉambraro is coded in it). Try functions below:

```js
s("Hello world!")                      // Say "Hello world!"
world = new Character("World", "pink") // Create new character with this name and that color
world.l("Hello you too.")              // Listen what World says
```
## Interactivity

Player responses are made with `r()` function. Use it like that:

```js
   /* Response              Scene */
r([/* ↓                     ↓ */
  "Wanna go out tonight?", "sceneA",
  "Get out please.", "sceneB"
])
```

Two buttons will be shown behind output box. If you click on the first button, message with text “Wanna go out tonight?” will be sent and you will go to scene `sceneA`. **Do not** use `'` in responses in `r()`, other characters are allowed. If you  use `'`, button with response won't work. It is bug that I can't fix. Try `’` instead.

Scenes are made like JS functions. See below:

```js
r([
  "Wanna go out tonight?", "sceneA",
  "Get out please.", "sceneB"
])

someone = new Character("Someone", "pink")

function sceneA() {
  someone.l("No. Never. Ever. <b>GET OUT</b>") // HTML is allowed.
}

function sceneB() {
  someone.l("<i style='font-size: 99px'>BUT WHY!?</i>") // Inline CSS is allowed.
}                                                       // Everything is allowed, actually.
```

Try that code. It will work nice, but there won't be any images or something like that.

## Images

There is empty box above the output box. Boring! Try these:

```js
bg("city")       // This will set city.png from img/bg/ as background
bg()             // This will remove background
sc("someone", 1) // This will set someone.png from img/char/ to the left
sc("someone", 2) // This will set someone.png from img/char/ to the center
sc("someone")    // This will set someone.png from img/char/ to the center too
sc("someone", 3) // This will set someone.png from img/char/ to the right
rc(3)            // This will remove image from the right
scs("someone", "someone", "someone") // This will set someone.png to all positions
```

## Cheatsheet

All functions from the core you can use. There are some other functions in the core, but we don't recommend to use them.

| Function                                 | Mnemonic         | Usage                                    |
| ---------------------------------------- | ---------------- | ---------------------------------------- |
| `sc(what = "none", where = 2)`           | Set Character    | Use to place sprites on the certain positions. |
| `scs(first, second, third)`              | Set CharacterS   | Use to place 3 sprites at the same time. |
| `rc(where = 2)`                          | Remove Character | Use to remove spritefrom the certain position. |
| `bg(what = "none")`                      | BackGround       | Use to set and remove background         |
| `co()`                                   | Clear Output     | Use to clear output box.                 |
| `ca()`                                   | Clear All        | Use to clear output box, background and sprites. |
| `s(text)`                                | Say              | Use to say something.                    |
| `r(["responseA", "sceneA", "responseB", "sceneB"...])` | Response         | Use to give player variants of answers.  |
| `char = new Character(name, color)`      |                  | Use to create a new character with this name and this colo |
| `char.l(text)`                           | Listen           | Use to listen what does the char say.    |
