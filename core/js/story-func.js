/* Основные функции, используемые в играх на Ĉambraro. */

/* Функции изменения игрового мира */
function setChar(what = "none", where = 2) {
  let image = document.getElementById('position-' + where);
  image.src = `img/char/${what}.png`;
};
function setChars(first = "none", second = "none", third = "none") {
  setChar(first, 1);
  setChar(second, 2);
  setChar(third, 3);
};
function setBg(what) {
  world.style.backgroundImage = `url(img/bg/${what}.png)`;
};
function removeChar(where = 2) {
  setChar(undefined, where);
};

/* Функции отправки сообщений */
function listen(who, text) {
  let msg = `<p class="to-me"><span>${who}</span>${text}</p>`;
  output.innerHTML += msg;
};
function say(text) {
  let msg = `<p class="from-me">${text}</p>`;
  output.innerHTML += msg;
};

/* Функции обратной связи с игроком */
function setResponse(text) {
  let btn = `<button onclick="response('${text}')">${text}</button>`;
  responses.innerHTML += btn;
};
function setResponses(resps) {
  for (var i = 0; i < resps.length; i + 2) {
    setResponse(resps[i], resps[i + 1]);
  };
};
function response(text, doWhat) {
  say(text);
  clearResponses();
  trade = text;
  eval(bicycle[doWhat]);
};

/* Функции очистки элементов */
function clearOutput() {
  output.innerHTML = "";
};
function clearResponses() {
  responses.innerHTML = "";
};
