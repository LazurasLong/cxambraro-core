/* Основные функции, используемые в играх на Ĉambraro. */

/* Функция, которая обновляет страницу хитро */
function gen() {
  for (let i = 0; i < responses.length; i++) {
    
  }
};

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
  let world = document.getElementById('world');
  world.style.backgroundImage = "url(img/bg/" + what + ".png)";
  world.style.backgroundPosition = "center";
};

/* Функции отправки сообщений */
function toMe(who, text) {
  output.push("<p class='to-me'><b>" + who + "</b>" + text + "</p>");
};
function fromMe(text) {
  output.push("<p class='from-me'>" + text + "</p>");
};

/* Функции ответов игрока */
function giveResponses(responses) {
  for (let i = 0; i < responses.length; i++) {
    responses.push("<button onclick='response(" + responses[i] + ")'>" + responses[i] + "</button>");
  };
};
function response(text) {
  fromMe(text)
  trade = text;
};

/* Функции очистки элементов */
function clearOutput() {
  output.innerHTML = "";
};
function clearResponses() {
  responses.innerHTML = "";
};
