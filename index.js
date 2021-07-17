let Gameboard = (function () {
  let chart = ["", "", "", "", "", "", "", "", ""];
  let markCounter = [];
  //o or x choice functionality
  let oxPlayer1Choice = "";
  let oxPlayer2Choice = "";
  let oChoiceButton = document.querySelector("#oChoice");
  oChoiceButton.addEventListener("click", () => {
    oxPlayer1Choice = "o";
    oxPlayer2Choice = "x";
  });
  oChoiceButton.addEventListener("mousedown", () => {
    oChoiceButton.style.cssText =
      "text-shadow: 0 0 5px green; box-shadow: 0 0 5px green";
  });
  oChoiceButton.addEventListener("mouseup", () => {
    oChoiceButton.style.cssText = "";
  });

  let xChoiceButton = document.querySelector("#xChoice");
  xChoiceButton.addEventListener("click", () => {
    oxPlayer1Choice = "x";
    oxPlayer2Choice = "o";
  });
  xChoiceButton.addEventListener("mousedown", () => {
    xChoiceButton.style.cssText =
      "text-shadow: 0 0 5px green; box-shadow: 0 0 5px green";
  });
  xChoiceButton.addEventListener("mouseup", () => {
    xChoiceButton.style.cssText = "";
  });

  let player1Play = document.querySelector("#player1ImgContainerDiv");
  let player2Play = document.querySelector("#player2ImgContainerDiv");

  let startButton = document.querySelector("#startButton");
  startButton.addEventListener("click", displayMarks);
  startButton.addEventListener("mousedown", () => {
    startButton.style.cssText =
      "text-shadow: 0 0 5px green; box-shadow: 0 0 5px green";
  });
  startButton.addEventListener("mouseup", () => {
    startButton.style.cssText = "";
  });

  //display marks functionality
  function displayMarks() {
    let chartCellList = document.querySelectorAll(".chartCell");
    chartCellList.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        if (markCounter.length == 0) {
          markCounter.push(oxPlayer1Choice);
          cell.textContent = oxPlayer1Choice;
          player2Play.style.cssText = "color: red";
          chart[parseInt(cell.id)] = oxPlayer1Choice;
        } else if (markCounter[markCounter.length - 1] === "x") {
          markCounter.push("o");
          cell.textContent = "o";
          player2Play.style.cssText = "";
          player1Play.style.cssText = "color: red";
          chart[parseInt(cell.id)] = "o";
        } else if (markCounter[markCounter.length - 1] === "o") {
          markCounter.push("x");
          cell.textContent = "x";
          player1Play.style.cssText = "";
          player2Play.style.cssText = "color: red";
          chart[parseInt(cell.id)] = "x";
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
          alert("x won");
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
          alert("o won");
        } else if (!chart.includes("")) {
          alert("tie");
        }
      });
    });
  }

  //return values
  return {
    chart,
    oxPlayer1Choice,
    oxPlayer2Choice,
  };
})();

/*let player = (oOrX) => {
  let oOrX = oOrX;

  return {
    oOrX,
  };
};

let player1 = player(Gameboard.oxPlayer1Choice);
let player2 = player(Gameboard.oxPlayer2Choice);*/
