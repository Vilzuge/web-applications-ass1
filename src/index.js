if (document.readyState !== "loading") {
  console.log("Document ready, executing");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready, executing after a wait");
    initializeCode();
  });
}

let XTurn = 1;

function initializeCode() {
  createBoard(5, 5);
  document.querySelectorAll("td").forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      var selected = button.id;
      gameEvent(selected, button);
      checkWinner(selected, button);
      XTurn = XTurn * -1;
      event.stopPropagation();
    });
  });
}

function createBoard(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("table");
    row.className = "rows";
    for (let j = 0; j < columns; j++) {
      let cell = document.createElement("td");
      cell.className = "boardbutton";
      cell.setAttribute("id", "R" + i + "C" + j);
      cell.setAttribute("state", "blank");
      cell.style.display = "inline-block";
      cell.style.fontSize = "40px";
      cell.innerText = "[ ]";
      row.appendChild(cell);
    }
    document.getElementById("board").appendChild(row);
  }
}

function checkWinner(selected, button) {
  let row = selected[1];
  let col = selected[3];
  let pressedState = button.getAttribute("state");
  let won = false;

  console.log("Painettu:" + pressedState);
  console.log("Rivi: " + row + " Sarake: " + col);
  console.log();

  //Row winning condition
  for (let i = 0; i <= 4; i++) {
    if (
      document.getElementById("R" + row + "C" + i).getAttribute("state") ===
      pressedState
    ) {
      won = true;
    } else {
      won = false;
      break;
    }
  }
  if (won === true) {
    if (pressedState === "X") {
      alert("Player 1 won!");
      return;
    } else if (pressedState === "O") {
      alert("Player 2 won!");
    } else {
      alert("Error! Nobody actually won...");
    }
  }

  //Column winning condition
  for (let j = 0; j <= 4; j++) {
    if (
      document.getElementById("R" + j + "C" + col).getAttribute("state") ===
      pressedState
    ) {
      won = true;
    } else {
      won = false;
      break;
    }
  }
  if (won === true) {
    if (pressedState === "X") {
      alert("Player 1 won!");
      return;
    } else if (pressedState === "O") {
      alert("Player 2 won!");
    } else {
      alert("Error! Nobody actually won...");
    }
  }

  //Diagonal winning condition (top left to bottom right)
  for (let j = 0; j <= 4; j++) {
    if (
      document.getElementById("R" + j + "C" + j).getAttribute("state") ===
      pressedState
    ) {
      won = true;
    } else {
      won = false;
      break;
    }
  }
  if (won === true) {
    if (pressedState === "X") {
      alert("Player 1 won!");
      return;
    } else if (pressedState === "O") {
      alert("Player 2 won!");
    } else {
      alert("Error! Nobody actually won...");
    }
  }

  //Diagonal winning condition (bottom left to top right)
  for (let j = 0; j <= 4; j++) {
    if (
      document.getElementById("R" + j + "C" + (4 - j)).getAttribute("state") ===
      pressedState
    ) {
      won = true;
    } else {
      won = false;
      break;
    }
  }
  if (won === true) {
    if (pressedState === "X") {
      alert("Player 1 won!");
      return;
    } else if (pressedState === "O") {
      alert("Player 2 won!");
    } else {
      alert("Error! Nobody actually won...");
    }
  }
}

function gameEvent(selected, button) {
  if (button.innerText === "[ ]") {
    let turnIndicator = document.getElementById("turn");
    if (XTurn === 1) {
      console.log(selected + "---" + button.className);
      button.style.color = "black";
      button.innerText = "[X]";
      button.setAttribute("state", "X");
      turnIndicator.innerText = "O's turn.";
      console.log(XTurn);
    } else if (XTurn === -1) {
      console.log(selected + "---" + button.className);
      button.style.color = "black";
      button.innerText = "[O]";
      button.setAttribute("state", "O");
      turnIndicator.innerText = "X's turn.";
      console.log(XTurn);
    }
  } else {
    XTurn = XTurn * -1;
  }
}
