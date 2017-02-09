/* Vars for main elements. */
var responses = $("#responses")
var world = $("#world")
var output = $("#output")

/*
  Main functions used in Ĉambraro games.
  Functions have short names because typing them lots of times is pain.
  Don't even mention auto-completion.
  Name origins are mentioned after function declaration.

  Functions list
  sc & scs & rmc
  bg
  l & s
  r
  co & cr
*/

/* Gameworld-changing functions */

function sc(what = "none", where = 2) {
  $("#position-" + where).attr("src", `img/char/${what}.png`)
}// Set Character

function scs(first = "none", second = "none", third = "none") {
  sc(first, 1)
  sc(second, 2)
  sc(third, 3)
}// Set CharacterS

function bg(what = "none") {
  world.css("backgroundImage", `url(img/bg/${what}.png)`)
}// set BackGround

function rmc(where = 2) {
  sc(undefined, where)
}// ReMove Character

/* Message-sending functions */

function l(who, text) {
  output.append(`<p class="to-me"><span>${who}</span>${text}</p>`)
}// Listen

function s(text) {
  output.append(`<p class="from-me">${text}</p>`)
}// Say

/* Player-response functions */

function genResponse(text, scene) {
  return `<button onclick='response("${text}", ${scene})'>
  ${text}</button>`
}// made for r()

function response(text, scene) {
  s(text)
  cr()
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

/* Elements-clearing functions */

function co() {
  output.html("")
}// Clear Output

function cr() {
  responses.html("")
}// Clear Responses

function ca() {
  co()
  scs()
  bg()
}// Clear All
