# Ĉambraro

Open-source highly customizable JS game engine for visual novels and text quests.

Ĉambraro (/chum-bruh-ro/) means “a place with lots of chambers in it” on Esperanto.

## Installation

Copy any version of Ĉambraro from `dist/`. You will get this folder:

```js
release/
  core/
    main.js     // main code of engine
    zepto.js    // jquery-like lib
    style.css   // basic styles
    tuesday.css // animations lib
  themes/
    ...         // some themes
  img/
    sprite/     // sprites
      none.png  // empty sprite
    bg/         // backgrounds
      none.png  // empty background
  story/
    init.js     // this story will be executed at start
  utils/
    ssta_compiler.rb // ssta compiler (needs ruby interpreter)
  index.html    // ui
```

`core/` contains basic Ĉambraro code. You may remove `tuesday.css` if you don't need animations. You can change Zepto with jQuery if you want to. You may modify `style.css`. You can actually edit everything, but I don't recommend edit `main.js`. If you have changed anything in `core/`, please rename it to `core_edited/`.

`themes/` contains standard Ĉambraro themes. Remove ones you don't like, add your own themes (guide is coming soon).

`img/` contains images. Do not remove any `none.png` and don't remove `sprite/` and `bg/`. Add your own images here.

`story/` contains story files. You can store your story anywhere, but I recommend store it here.

`utils/` contains utilities you may need during development.

`index.html` contains UI. Feel free to edit it. Has `<link>` and `<script>` tags that include needed code.

## Development

You may need web development skills (JS, HTML).

Story in Ĉambraro is written in SSTA (made specially for Ĉambraro) format. There are two ways of writing SSTA:

### Direct

Open story file you need (don't forget to include it in `index.html`!) with your favorite text editor (I use Atom). Make a new array (let's call all arrays like that with name *scenes*):

```js
var storyChapter = [
  // your story is here
]
```

Each element in array must be written in SSTA format. For example:

```js
// init.js
var bird = new Character("The Bird", "green") // create new character
var chapter = [
  "___earth", // sets page background to earth.png
  "__forest", // sets world background to forest.png
  ";bird",    // sets bird.png sprite
  "_bird_Hello young hacker.", // bird says "Hello young hacker."
  "_bird_Do you want to fly with me?",
  [                // outputs list of possible answers
    "Yes--fly",    // if you click "Yes", you will go to scene fly
    "No--doNotFly" // if you click "No", you will go to scene doNotFly
  ]
]
var fly = [
  "_bird_<b>GET READY!</b>", // full html support
  "::$('body').html('')",    // runs js-code after ::
]
var doNotFly = [
  "_bird_WRONG! LET'S TRY AGAIN!",
  ":chapter:4" // throws you back to chapter scene, 5th element
]
story = chapter // setting initial scene
```

Give it a try [here](https://bouncepaw.github.io/cx/example.html).

### SSTA with compiler

Move `ssta_compiler.rb` to `story/`.

Compiler isn't fully featured for now. It can only handle one array for now and doesn't support creating of new characters. It will be more powerful soon.

Each array must be in separate file. So, create `chapter.ssta`, `fly.ssta`, `doNotFly.ssta`. Let's port code above:

```
// compiler doesn't support comments for now, but i will write them anyway

// chapter.ssta
___earth
__forest
;bird
_bird_Hello young hacker.
_bird_Do you want to fly with me?
[
Yes--fly
No--doNotFly
]

// fly.ssta
_bird_<b>GET READY!</b>
::$('body').html('')

// doNotFly.ssta
_bird_WRONG! LET'S TRY AGAIN!
:chapter:4
```

Run compiler and follow its instructions. At end, you will get 3 `.js`. You can include them that way or concatenate them.

As you can see, this way is not finished now. I will include new versions of compiler with new versions of Ĉambraro.

## Publishing

You can publish any way you want. For example, you can use GitHub Pages. Mention engine name and me somewhere in your game. For example, write this in credits:

```
CREDITS
<...>
Special thanks:
@bouncepaw for his awesome Ĉambraro engine and nice documentation
<...>
```

## Contributing

Any help is appreciated (translations, features, bugfixes and other corrections, new utilities, etc.). Follow these simple rules in your pull request:

- Indent with 2 spaces (not 4, not 8, not tabs)
- No semicolons
- Write simple (unlike me)

## Coming soon

- SSTA Compiler v1.1.0
- Ĉ-Init
- Plugins
  - Plugin-making guide
- Theme-making guide
- More features
- Translate to Russian
