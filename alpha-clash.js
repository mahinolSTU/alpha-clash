/* function play() {
  const homeSection = document.getElementById("home-section");
  homeSection.classList.add("hidden");
  //console.log(homeSection.classList);
  const playGround = document.getElementById("play-ground");
  playGround.classList.remove("hidden");
  //console.log(playGround.classList);
} */
/* function handleKeyboardButtonPress() {
  console.log("button press");
}
//capture keyboard keypress
document.addEventListener("keyup", handleKeyboardButtonPress); */
// keyboard
function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;

  console.log("player pressed", playerPressed);

  //stop the game if pressed Esc Button;
  if (playerPressed === "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  if (playerPressed === expectedAlphabet) {
    console.log("you got a coin");
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
    const currentScore = getTextElementValueById("current-score");
    console.log(currentScore);
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    // 1.update score
    /* const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);
    // 2. increase the score by 1
    const newScore = currentScore + 1;
    // 3. show the updated score
    currentScoreElement.innerText = newScore;
    //START NEW ROUND
    console.log("you have pressed correctly", expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame(); */
  } else {
    console.log("you missed the coin");
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);
    /* const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    //console.log(currentLife);
    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife; */
    if (updatedLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  const alphabet = getARandomAlphabet();
  //console.log("your random alphabet", alphabet);

  //set randomly generated alphabet to the screen (show it)
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  //setBackgroundColor
  setBackgroundColorById(alphabet);
}

function play() {
  //hide everything show the only playground

  hideThePlay("home-section");
  hideThePlay("final-score");
  showThePlay("play-ground");

  //reset the score and life
  setTextElementValueById("current-life", 10);
  setTextElementValueById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideThePlay("play-ground");
  showThePlay("final-score");

  //update the final score
  //1.get the final score
  const lastScore = getTextElementValueById("current-score");
  console.log(lastScore);
  setTextElementValueById("last-score", lastScore);
  // clear the last selected highlights
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
