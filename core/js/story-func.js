/* Основные функции, используемые в играх на Ĉambraro. */

/* Функции изменения игрового мира */
function setChar(what = "none", where = 2) {
  let image = document.getElementById('position-' + where);
  image.src = "img/char/" + what + ".png"
};
function setChars(first = "none", second = "none", third = "none") {
  setChar(first, 1);
  setChar(second, 2);
  setChar(third, 3);
};
function setBg(what) {
  world.style.backgroundImage = "url(img/bg/" + what + ".png)";
};

/* Функции отправки сообщений */
function toMe(who, text) {
  let msg = document.createElement("p");
  msg.className = "to-me";
  msg.innerHTML = "<b>" + who + "</b>" + text;
  output.appendChild(msg);
};
function fromMe(text) {
  let msg = document.createElement("p");
  msg.className = "from-me";
  msg.innerHTML = text;
  output.appendChild(msg);
};

/* Функции очистки элементов */
function clearOutput() {
  output.innerHTML = "";
};
function clearResponses() {
  responses.innerHTML = "";
};
