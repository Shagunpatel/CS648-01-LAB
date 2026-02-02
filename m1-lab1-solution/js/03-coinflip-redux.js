// 03 - Coin Flip Game Redux
// Flip a coin 10 times and print Heads/Tails to the console.

let coinFlip;

for (let i = 0; i < 10; i++) {
  coinFlip = Math.floor(Math.random() * 2); // 0 or 1
  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
}
