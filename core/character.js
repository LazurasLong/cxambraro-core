/* Class that is used for characters */
class Character {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  listen(text) {
    output.append(
      `<p class="to-me animated tdExpandIn">→ <span style="color:${this.color}">
      ${this.name}</span>: ${text}</p>`
    )
  }
}
