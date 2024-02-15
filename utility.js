function hideThePlay(hideId) {
  const hide = document.getElementById(hideId);
  hide.classList.add("hidden");
}

function showThePlay(showId) {
  const show = document.getElementById(showId);
  show.classList.remove("hidden");
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

//---------------------------------
//score element
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getARandomAlphabet() {
  //get or create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //console.log(alphabets);
  //get a random index between 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  //console.log(index);

  //
  const alphabet = alphabets[index];
  console.log(index, alphabet);
  return alphabet;
}
