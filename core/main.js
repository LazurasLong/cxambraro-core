/* Vars for main elements. */
var responses = $("#responses")
var world = $("#world")
var output = $("#output")

/* Animations vars
   Used in animations, can be changed anytime */
var charFx = "ExpandInBounce"
var tomeFx = "StampIn"
var frommeFx = "StampIn"

/*
  Main functions used in Ĉambraro games.
  Functions have short names because typing them lots of times is pain.
  Don't even mention auto-completion.
  Name origins are mentioned after function declaration.
*/

/* Gameworld-changing functions */

function sc(what = "none", where = 2) {
  $("#position-" + where)
    .attr("src", `img/char/${what}.png`)
    .addClass(`animated td${charFx}`)
}// Set Character

function scs(first = "none", second = "none", third = "none") {
  sc(first, 1)
  sc(second, 2)
  sc(third, 3)
}// Set CharacterS

function bg(what = "none") {
  world.css("backgroundImage", `url(img/bg/${what}.png)`)
}// set BackGround

function rc(where = 2) {
  sc(undefined, where)
}// Remove Character

/* Elements-clearing functions */

function co() {
  output.html("")
}// Clear Output

function ca() {
  co()
  scs()
  bg()
}// Clear All

var Character = function(who, color) {
  this.l = function(text) {
    if (Array.isArray(text)) {
      for (let i = 0; i < text.length; i++) {
        output.append(
          `<p class="to-me animated td${tomeFx}"><span style="color:${color}">
          ${who}</span>${text[i]}</p>`
        )
      }
    } else {
      output.append(
        `<p class="to-me animated td${tomeFx}"><span style="color:${color}">
        ${who}</span>${text}</p>`
      )
    }
  }// Listen
}

/* Message-sending functions */

function s(text) {
  output.append(`<p class="from-me animated td${frommeFx}">${text}</p>`)
}// Say

/* Player-response functions */

function genResponse(text, scene) {
  return `<button onclick='response("${text}", ${scene})'>
  ${text}</button>`
}// made for r()

function response(text, scene) {
  s(text)
  responses.html("")
  scene()
}// made for r()

function r(resps) {
  for (var i = 0; i < resps.length; i = i + 2) {
    responses.append(
      genResponse(resps[i], resps[i + 1])
    )
  }
}// set Responses
//  WARN:
//  If you use ', button won't work. Just don't use it, try this — ’
