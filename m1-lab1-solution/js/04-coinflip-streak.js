// 04 - Coin Flip Streak Game
// Keep flipping until Tails appears; log each flip and the heads streak length.

let coinFlip;
let streak = 0;

do {
  coinFlip = Math.floor(Math.random() * 2); // 0 or 1

  if (coinFlip === 0) {
    console.log("Heads");
    streak++;
  } else {
    console.log("Tails");
  }
} while (coinFlip === 0);

console.log("Heads streak length:", streak);
