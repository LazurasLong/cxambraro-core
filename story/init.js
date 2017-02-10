/* Code below will always be executed at start. */
bg("forest")
sc("birdo")
l("birdo", "waddup m8. wanna go borking w/me?")
r([
  "But you cant bork, can you?", "borkTheHedgehog",
  "I want to go", "gtfo",
  "k m8 lets go r8 now", "borkersBizzareAdventure"
])

function borkTheHedgehog() {
  l("birdo", "i do can u stupid boooi. wanna see?")
  r([
    "Yes", "borkersBizzareAdventure",
    "No", "gtfo"
  ])
}

function gtfo() {
  l("birdo", "u kek. gtfo plz")
}

function borkersBizzareAdventure() {
  l("birdo", [
    "now is da time. ahem. boooi, everybody do DA BORK.",
    "<i>BORK</i>"
  ])
  s("wtf r u")
}
