/* Code below will always be executed at start. */
birdo = new Character("birdo", "black")
bg("forest")
sc("birdo")
birdo.l("waddup m8. wanna go borking w/me?")
r([
  "But you cant bork, can you?", "borkTheHedgehog",
  "I want to go", "gtfo",
  "k m8 lets go r8 now", "borkersBizzareAdventure"
])

function borkTheHedgehog() {
  birdo.l("i do can u stupid boooi. wanna see?")
  r([
    "Yes", "borkersBizzareAdventure",
    "No", "gtfo"
  ])
}

function gtfo() {
  birdo.l("u kek. gtfo plz")
}

function borkersBizzareAdventure() {
  birdo.l([
    "now is da time. ahem. boooi, everybody do DA BORK.",
    "<i>BORK</i>"
  ])
  s("wtf r u")
}
