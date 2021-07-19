let player1Play = document.querySelector("#player1ImgContainerDiv");
let player2Play = document.querySelector("#player2ImgContainerDiv");
let gameOverMessage = document.querySelector("#gameOverMessage");
let gameOverMessageContent = document.querySelector("#gameOverMessageContent");
let chartDiv = document.querySelector("#chart");
let allButtonsList = document.querySelectorAll("button");
let player1ImgContainerDiv = document.querySelector("#player1ImgContainerDiv");
let player2ImgContainerDiv = document.querySelector("#player2ImgContainerDiv");
let player1Name = document.querySelector("#player1Name");
let player2Name = document.querySelector("#player2Name");
let player1ChoiceOOrX = document.querySelector("#player1ChoiceOOrX");
let player2ChoiceOOrX = document.querySelector("#player2ChoiceOOrX");

allButtonsList.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.cssText =
      "color: rgb(0, 255, 0); border-color: rgb(0, 255, 0)";
  });
  button.addEventListener("mouseup", () => {
    button.style.cssText = "";
  });
});

let Game = (function () {
  let chart = ["", "", "", "", "", "", "", "", ""];
  let markCounter = [];
  let oxPlayer1Choice = "";
  let oxPlayer2Choice = "";

  let oChoiceButton = document.querySelector("#oChoice");
  oChoiceButton.addEventListener("click", () => {
    oxPlayer1Choice = "o";
    oxPlayer2Choice = "x";
    player1ChoiceOOrX.textContent = "O";
    player2ChoiceOOrX.textContent = "X";
  });

  let xChoiceButton = document.querySelector("#xChoice");
  xChoiceButton.addEventListener("click", () => {
    oxPlayer1Choice = "x";
    oxPlayer2Choice = "o";
    player1ChoiceOOrX.textContent = "X";
    player2ChoiceOOrX.textContent = "O";
  });

  let submitNamesButton = document.querySelector("#submitNamesButton");
  submitNamesButton.addEventListener("click", () => {
    if (player1Name.value && player2Name.value) {
      player1ImgContainerDiv.textContent = player1Name.value;
      player2ImgContainerDiv.textContent = player2Name.value;
      player2Name.value = "";
      player1Name.value = "";
    }
  });

  let restartButton = document.querySelector("#restartButton");
  restartButton.addEventListener("click", () => {
    markCounter = [];
    chart = ["", "", "", "", "", "", "", "", ""];
    oxPlayer1Choice = "";
    oxPlayer2Choice = "";
    let chartCellList = document.querySelectorAll(".chartCell");
    chartCellList.forEach((cell) => {
      cell.textContent = "";
    });
    player1Play.style.cssText = "";
    player2Play.style.cssText = "";
    chartDiv.style.cssText = "display: grid";
    gameOverMessage.style.cssText = "display: none";
    player1ImgContainerDiv.textContent = "Player1";
    player2ImgContainerDiv.textContent = "Player2";
    player1ChoiceOOrX.textContent = "";
    player2ChoiceOOrX.textContent = "";
  });

  let chartCellList = document.querySelectorAll(".chartCell");
  chartCellList.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      gamePlay(e);
    });
  });

  function gamePlay(e) {
    if (markCounter.length === 0 && oxPlayer1Choice !== "") {
      if (oxPlayer1Choice === "x") {
        e.target.textContent = "x";
        player2Play.style.cssText = "color: rgb(0, 255, 0)";
        chart[parseInt(e.target.id)] = "x";
        markCounter.push("x");
      } else if (oxPlayer1Choice === "o") {
        e.target.textContent = "x";
        player1Play.style.cssText = "color: rgb(0, 255, 0)";
        chart[parseInt(e.target.id)] = "x";
        markCounter.push("x");
      }
    } else if (markCounter[markCounter.length - 1] === "x") {
      if (chart[parseInt(e.target.id)] !== "") {
        e.target.textContent = chart[parseInt(e.target.id)];
      } else {
        chart[parseInt(e.target.id)] = "o";
        markCounter.push("o");
        e.target.textContent = "o";
        if (oxPlayer1Choice === "o" && oxPlayer2Choice === "x") {
          player1Play.style.cssText = "";
          player2Play.style.cssText = "color: rgb(0, 255, 0)";
        } else if (oxPlayer1Choice === "x" && oxPlayer2Choice === "o") {
          player1Play.style.cssText = "color: rgb(0, 255, 0)";
          player2Play.style.cssText = "";
        }
      }
    } else if (markCounter[markCounter.length - 1] === "o") {
      if (chart[parseInt(e.target.id)] !== "") {
        e.target.textContent = chart[parseInt(e.target.id)];
      } else {
        chart[parseInt(e.target.id)] = "x";
        markCounter.push("x");
        e.target.textContent = "x";
        if (oxPlayer1Choice === "o" && oxPlayer2Choice === "x") {
          player1Play.style.cssText = "color: rgb(0, 255, 0)";
          player2Play.style.cssText = "";
        } else if (oxPlayer1Choice === "x" && oxPlayer2Choice === "o") {
          player1Play.style.cssText = "";
          player2Play.style.cssText = "color: rgb(0, 255, 0)";
        }
      }
    }
    if (
      (chart[0] == "x" && chart[1] == "x" && chart[2] == "x") ||
      (chart[3] == "x" && chart[4] == "x" && chart[5] == "x") ||
      (chart[6] == "x" && chart[7] == "x" && chart[8] == "x") ||
      (chart[0] == "x" && chart[3] == "x" && chart[6] == "x") ||
      (chart[1] == "x" && chart[4] == "x" && chart[7] == "x") ||
      (chart[2] == "x" && chart[5] == "x" && chart[8] == "x") ||
      (chart[0] == "x" && chart[4] == "x" && chart[8] == "x") ||
      (chart[2] == "x" && chart[4] == "x" && chart[6] == "x")
    ) {
      player1Play.style.cssText = "";
      player2Play.style.cssText = "";
      setTimeout(() => {
        chartDiv.style.cssText = "display: none";
        gameOverMessage.style.cssText = "display: flex";
        if (
          player1ImgContainerDiv.textContent &&
          player2ImgContainerDiv.textContent
        ) {
          if (oxPlayer1Choice === "x") {
            gameOverMessageContent.textContent =
              player1ImgContainerDiv.textContent + " (x) won";
          } else if (oxPlayer2Choice === "x") {
            gameOverMessageContent.textContent =
              player2ImgContainerDiv.textContent + " (x) won";
          }
        } else {
          if (oxPlayer1Choice === "x") {
            gameOverMessageContent.textContent = "Player 1 (x) won";
          } else if (oxPlayer2Choice === "x") {
            gameOverMessageContent.textContent =
              player2ImgContainerDiv.textContent + "Player 2 (x) won";
          }
        }
      }, 170);
    } else if (
      (chart[0] == "o" && chart[1] == "o" && chart[2] == "o") ||
      (chart[3] == "o" && chart[4] == "o" && chart[5] == "o") ||
      (chart[6] == "o" && chart[7] == "o" && chart[8] == "o") ||
      (chart[0] == "o" && chart[3] == "o" && chart[6] == "o") ||
      (chart[1] == "o" && chart[4] == "o" && chart[7] == "o") ||
      (chart[2] == "o" && chart[5] == "o" && chart[8] == "o") ||
      (chart[0] == "o" && chart[4] == "o" && chart[8] == "o") ||
      (chart[2] == "o" && chart[4] == "o" && chart[6] == "o")
    ) {
      player1Play.style.cssText = "";
      player2Play.style.cssText = "";
      setTimeout(() => {
        chartDiv.style.cssText = "display: none";
        gameOverMessage.style.cssText = "display: flex";
        if (
          player1ImgContainerDiv.textContent &&
          player2ImgContainerDiv.textContent
        ) {
          if (oxPlayer1Choice === "o") {
            gameOverMessageContent.textContent =
              player1ImgContainerDiv.textContent + " (o) won";
          } else if (oxPlayer2Choice === "o") {
            gameOverMessageContent.textContent =
              player2ImgContainerDiv.textContent + " (o) won";
          }
        } else {
          if (oxPlayer1Choice === "o") {
            gameOverMessageContent.textContent = "Player 1 (o) won";
          } else if (oxPlayer2Choice === "o") {
            gameOverMessageContent.textContent =
              player2ImgContainerDiv.textContent + "Player 2 (o) won";
          }
        }
      }, 170);
    } else if (!chart.includes("")) {
      player1Play.style.cssText = "";
      player2Play.style.cssText = "";
      setTimeout(() => {
        chartDiv.style.cssText = "display: none";
        gameOverMessage.style.cssText = "display: flex";
        gameOverMessageContent.textContent = "Tie";
      }, 170);
    }
  }
})();
