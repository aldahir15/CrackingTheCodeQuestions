// 6.1

// We have to figure out what makes that one bottle different than the others
// We need to use the weight to differentiatiate
// We need to differentiate each bottle, and vary the number of pills from each bottle

// 6.2

// P(B) = p
// [LWW]: (1 - p) * p * p +
// [WLW]: p * (1 - p) * p +
// [WWL]: p * p * (1 - p) +
// [WWW]: p * p * p
// = 3p^2 - 3p^3 + p^3
// = 3p^2 - 2p^3

// Pick Game 1 when p > 3p^2 - 2p^3
// Pick Game 2 when p < 3p^2 - 2p^3

// 2p^3 - 3p^2 + p

// p(2p^2 - 3p + 1)

// p(2p - 1)(p - 1)

// intersections are p = 0, p = 0.5, p = 1

// test p and 3p^2 - 2p^3 at p = 0, 0.25. 0.5, 0.75, and 1

// 6.3

// 8 x 8 chessboard = 64 squares
// cut off 2 squares = 62 squares
// 31 dominos of 2 squares = 62 squares

// Step 2: Reduce problem
// 2 x 2 chessboard = 4 squares
// cut off 2 squares = 2 squares
// 1 domino of 2 squares = 2 squares
// => impossible unless cut domino into 2

// Step 3: Test suspicion that it is impossible even for 8x8 chessboard
// every domino must have two adjecent squares to place on chessboard
// cutting opposite corners deprived two squares of adjacent squares
//
// if we viewed a chessboard as alternative black and white squares,
// two black squares or two white squares have been cut off
//
// a domino needs a black square and a white square to occupy the chessboard

// 6.4


// they do not collide only if:
// clockwise, clockwise, clockwise or
// anticlockwise, anticlockwise, anticlockwise

// since the probability of not colliding is 2 / (2 * 2 * 2)
// then the probability of colliding is 1 - 2 / (2 ^ 3)

// the generalized solution for non-collision is 1 - 2 / (2 ^ n)


// 6.5
// Jugs of Water

// 5 - quart jug, 3 - quart jug, unlimited supply of water but no measuring cups.
// How would we come up with exactly four quarts of water?
// Fill up 8 3-quarts, then take away 4 5-quarts, we will be left with 4-quarts
// This works because 3(8) = 24 - 5(4) = 24-20 = 4

// 6.6
// Blue-Eyed Island

// At least one day since the person will see nobody with blue eyes, so you have blue eyes
// It will take n days, depending on how many people (n)

// 6.7
// The Apocalypse

// Have at least one girl
// So if girl at first time -> No more kids, 1 girl, no boys
// If boy before girl -> More kids until girl, at least 1 boy, 1 girl
// On average since the chance of having a boy or girl is equal, we can assume that at least every
// family has one girl

function findRatio (n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer += (i - 1) / Math.pow(2, i);
  }
  return answer;
}
