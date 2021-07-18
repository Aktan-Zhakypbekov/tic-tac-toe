let player1Play = document.querySelector("#player1ImgContainerDiv");
let player2Play = document.querySelector("#player2ImgContainerDiv");
let gameOverMessage = document.querySelector("#gameOverMessage");
let gameOverMessageContent = document.querySelector("#gameOverMessageContent");
let chartDiv = document.querySelector("#chart");

let Game = (function () {
  let chart = ["", "", "", "", "", "", "", "", ""];
  let markCounter = [];
  let oxPlayer1Choice = "";
  let oxPlayer2Choice = "";

  let oChoiceButton = document.querySelector("#oChoice");
  oChoiceButton.addEventListener("click", () => {
    oxPlayer1Choice = "o";
    oxPlayer2Choice = "x";
  });

  let xChoiceButton = document.querySelector("#xChoice");
  xChoiceButton.addEventListener("click", () => {
    oxPlayer1Choice = "x";
    oxPlayer2Choice = "o";
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
  });

  let chartCellList = document.querySelectorAll(".chartCell");
  chartCellList.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      gamePlay(e);
    });
  });

  function gamePlay(e) {
    if (markCounter.length == 0) {
      markCounter.push(oxPlayer1Choice);
      e.target.textContent = oxPlayer1Choice;
      player2Play.style.cssText = "color: red";
      chart[parseInt(e.target.id)] = oxPlayer1Choice;
    } else if (markCounter[markCounter.length - 1] === "x") {
      markCounter.push("o");
      e.target.textContent = oxPlayer2Choice;
      player2Play.style.cssText = "";
      player1Play.style.cssText = "color: red";
      chart[parseInt(e.target.id)] = "o";
    } else if (markCounter[markCounter.length - 1] === "o") {
      markCounter.push("x");
      e.target.textContent = oxPlayer1Choice;
      player1Play.style.cssText = "";
      player2Play.style.cssText = "color: red";
      chart[parseInt(e.target.id)] = "x";
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
      chartDiv.style.cssText = "display: none";
      gameOverMessage.style.cssText = "display: flex";
      gameOverMessageContent.textContent = "X won";
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
      chartDiv.style.cssText = "display: none";
      gameOverMessage.style.cssText = "display: flex";
      gameOverMessageContent.textContent = "O won";
    } else if (!chart.includes("")) {
      chartDiv.style.cssText = "display: none";
      gameOverMessage.style.cssText = "display: flex";
      gameOverMessageContent.textContent = "Tie";
    }
  }
})();

/*let player = (oOrX) => {
  let oOrX = oOrX;

  return {
    oOrX,
  };
};

let player1 = player(Gameboard.oxPlayer1Choice);
let player2 = player(Gameboard.oxPlayer2Choice);*/
