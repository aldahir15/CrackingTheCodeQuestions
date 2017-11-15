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