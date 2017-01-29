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
  let world = document.getElementById('world');
  world.style.backgroundImage = "url(img/bg/" + what + ".png)";
  world.style.backgroundPosition = "center";
};

/* Функции отправки сообщений */
function toMe(who, text) {
  output.data.messages.push(
    {text: "<b>" + who + "</b>" + text}
  )
};
function fromMe(text) {
  let msg = document.createElement("p");
  msg.className = "from-me";
  msg.innerHTML = text;

  let world = document.getElementById('world');
  world.appendChild(msg);
};

/* Функции ответов игрока */
function giveResponses(responses) {
  let answers = document.getElementById("answers");
  for (let i = 0; i < responses.length; i++) {
    answers.appendChild(
      "<button onclick='response(" + responses[i] + ")'>" + responses[i] + "</button>"
    );
  };
};
function response(text) {
  let output = document.getElementById("output")
  output.appendChild(
    "<p class='from-me'>" + text + "</p>"
  );
  trade = text;
};

/* Функции очистки элементов */
function clearOutput() {
  let output = document.getElementById("output");
  output.innerHTML = "";
};
function clearAnswers() {
  let answers = document.getElementById("answers");
  answers.innerHTML = "";
};
