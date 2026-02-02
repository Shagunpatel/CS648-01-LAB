// 02 - Coin Flip Game
// Flips a coin and compares to the user's choice.

(function () {
  const coinFlipNum = Math.floor(Math.random() * 2); // 0=heads, 1=tails
  const isHeads = (coinFlipNum === 0); // boolean

  const choice = prompt("Heads or Tails?").trim().toLowerCase();

  if (choice !== "heads" && choice !== "tails") {
    alert("Please type exactly Heads or Tails.");
    return;
  }

  if (isHeads && choice === "heads") {
    alert("The flip was heads and you chose heads...you win!");
  } else if (isHeads && choice === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
  } else if (!isHeads && choice === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
  } else {
    alert("The flip was tails and you chose tails...you win!");
  }
})();
