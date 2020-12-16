let funds = 50;
const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
//* returns a random integer in the range [m,n]
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

//* randomly returns a string representing one of the six-face
function randFace() {
  //   let face = ["crown", "anchor", "heart", "spade", "club", "diamond"];
  //   return face[rand(0, 5)];

  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

while (funds > 1 && funds < 100) {
  //* place bets
  let totalBet = rand(1, funds);
  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    //* distribute total bet
    let remaining = totalBet;
    do {
      let bet = rand(1, remaining);
      let face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
    } while (remaining > 0);
  }
  funds = funds - totalBet;
  //* roll dice
  const hand = [];
  for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }
  console.log(`\tcurrent turn result: ${hand}`);
  //* collect winnings
  let winnings = 0;
  for (let die = 0; die < hand.length; die++) {
    let face = hand[die];
    if (bets[face] > 0) winnings = winnings + bets[face];
  }
  funds = funds + winnings;
  //   console.log(`\twinnings: ${winnings}`);
  console.log(`\tcurrent fund: ${funds}`);
}

console.log(`\tENDING FUND: ${funds}`);
