/* SSTA */
class SSTA {
  static setBg(subj) {
    subj = subj.split("")
    subj.splice(0, 2)
    subj = subj.join("")
    world.css("background-image", `url(img/bg/${subj}.png)`)
    counter++
    this.parse(story[counter])
  }
  static setBg2(subj) {
    subj = subj.split("")
    subj.splice(0, 3)
    subj = subj.join("")
    $("body").css("background-image", `url(img/bg/${subj}.png)`)
    counter++
    this.parse(story[counter])
  }
  static setSprite(subj) {
    subj = subj.split("")
    subj.splice(0, 1)
    subj = subj.join("")
    sprite.attr("src", `img/sprite/${subj}.png`)
    counter++
    this.parse(story[counter])
  }
  static listen(subj) {
    subj = subj.split("")
    subj.splice(0, 1)
    subj = subj.join("").split("_")
    eval(`${subj[0]}.listen("${subj[1]}")`)
    counter++
  }
  static say(subj) {
    output.append(
      `<p class="from-me animated tdExpandIn">← ${subj}</p>`
    )
  }
  static runCode(subj) {
    subj = subj.split("")
    subj.splice(0, 2)
    subj = subj.join("")
    eval(subj)
    counter++
  }
  static setStoryCounter(subj) {
    subj = subj.split("")
    subj.splice(0, 1)
    subj = subj.join("").split(":")
    eval(`story = ${subj[0]}; counter = ${subj[1]}`)
    this.parse(story[counter])
  }
  static sendResponses(subj) {
    controls.html("")
    for (let i = 0; i < subj.length; i++) {
      let str = subj[i].split("--")
      controls.append(
        `<button onclick="SSTA.response('${str[0]}', '${str[1]}')"
        class="controls__button animated tdExpandIn">${str[0]}</button>`
      )
    }
  }
  static response(text, scene) {
    this.say(text)
    this.setStoryCounter(`:${scene}:0`)
    controls.html("&nbsp;")
    this.parse(story[counter])
  }
  static parse(subj) {
    if (typeof subj === "string") {
      if (subj.charAt(0) === "_") {
        if (subj.charAt(2) === "_") this.setBg2(subj)
        else if (subj.charAt(1) === "_") this.setBg(subj)
        else this.listen(subj)
      } // if _*
      else if (subj.charAt(0) === ":") {
        if (subj.charAt(1) === ":") this.runCode(subj) // ::code
        else this.setStoryCounter(subj) // :story:counter
      } // if :*
      else if (subj.charAt(0) === ";") {
        this.setSprite(subj)
      }
    } // end if string
    else if (Array.isArray(subj)) {
      this.sendResponses(subj) // ["resp1--scene1", "resp2--scene2"]
    }// end if array
    else this.say(subj)
  }
}
