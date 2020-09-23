//board: a0|a1|a2
//      ---------
//       b0|b1|b2
//      ---------
//       c0|c1|c2

//winning combo: (a0,a1,a2),(b0,b1,b2),(c0,c1,c2),(a0,b0,c0),(a1,b1,c1),(a2,b2,c2),(a0,b1,c2),(c0,b1,a2)

let win = {};//{a0:o,a1:o,a2:o,b0:o,b1:0,b2:0,c0:o,c1:o,c2:o}

//x turn: place your selection on the board: a1 win.
//if (win.a1 !== undefined) {
  //console.log(please play at another spot)
//} else {
  //win.a1 = 1;
}
// winning validations fro each player
if (win.a0 === 'o' && win.a1 === 'o' && win.a2 === 'o') {
  console.log('o player wins');
} else if (win.a0 === 'x' && win.a1 === 'x' && win.a2 === 'x') {
  console.log('x player wins');
} else if (win.b0 === 'x' && win.b1 === 'x' && win.b2 === 'x') {
  console.log('x player wins');
} else if (win.b0 === 'o' && win.b1 === 'o' && win.b2 === 'o') {
  console.log('o player wins');
} else if (win.c0 === 'x' && win.c1 === 'x' && win.c2 === 'x') {
  console.log('x player wins');
} else if (win.c0 === 'o' && win.c1 === 'o' && win.c2 === 'o') {
  console.log('o player wins');
} else if (win.a0 === 'x' && win.b0 === 'x' && win.c0 === 'x') {
  console.log('x player wins');
} else if (win.a0 === 'o' && win.b0 === 'o' && win.c0 === 'o') {
  console.log('o player wins');
} else if (win.a1 === 'o' && win.b1 === 'o' && win.c1 === 'o') {
  console.log('o player wins');
} else if (win.a1 === 'x' && win.b1 === 'x' && win.c1 === 'x') {
  console.log('x player wins');
} else if (win.a2 === 'o' && win.b2 === 'o' && win.c2 === 'o') {
  console.log('o player wins');
} else if (win.a2 === 'x' && win.b2 === 'x' && win.c2 === 'x') {
  console.log('x player wins');
} else if (win.a0 === 'o' && win.b1 === 'o' && win.c2 === 'o') {
  console.log('o player wins');
} else if (win.a0 === 'x' && win.b1 === 'x' && win.c2 === 'x') {
  console.log('x player wins');
} else if (win.a2 === 'o' && win.b1 === 'o' && win.c0 === 'o') {
  console.log('o player wins');
} else if (win.a2 === 'x' && win.b1 === 'x' && win.c0 === 'x') {
  console.log('x player wins');