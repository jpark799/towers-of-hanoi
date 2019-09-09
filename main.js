
let towers = [[3, 2, 1], [], []];
let count = 0;

moveTowers = (start, end) => {
  isValidMove(start, end)
  printBoard()
  checkWinner()
}

isValidMove = (start, end) => {
  const startPeg = start - 1
  const endPeg = end - 1
  const lastItemInStartArray = towers[startPeg][towers[startPeg].length - 1]
  if (lastItemInStartArraySmallerThanLastItemInEndArrayCheck(startPeg, endPeg)|| moveToEmptyPegCheck(startPeg, endPeg)) {
    towers[endPeg].push(towers[startPeg].pop());
    count++;
  } else {
    console.log("Move is not legal.");
  }
}

moveToEmptyPegCheck = (startPeg, endPeg) => {
  const emptyEndPeg = towers[endPeg].length === 0 
  const notEmptyStartPeg = towers[startPeg].length !== 0 
  if (emptyEndPeg && notEmptyStartPeg) {
    return true  
  } else 
    return false
}

lastItemInStartArraySmallerThanLastItemInEndArrayCheck = (startPeg, endPeg) => {
  const lastItemInStartArray = towers[startPeg][towers[startPeg].length - 1]
  const lastItemInEndArray = towers[endPeg][towers[endPeg].length-1]
  if (lastItemInStartArray < lastItemInEndArray ) {
    return true
  } else {
    return false
  }
}

printBoard = () => {
  towers.map((element, index) => console.log(`${++index} --- ${element}`))
  moveCounter()
}

checkWinner = () => {
  if ((towers[1].length === 3) || (towers[2].length === 3)) {
    console.log('Congratulations, you won! It took you ', count, ' total moves.')
    resetBoard()
  }
}

// It felt cleaner to make a function that prints the move count rather than console logging it every time
moveCounter = () => {
  console.log(`Move Count: `, count)
}

resetBoard = () => {
  console.log('Resetting board...')
  towers = [[3, 2, 1,], [], []]
  count = 0
}


// uncomment for winning combination
// moveTowers(1,2);
// moveTowers(1,3);
// moveTowers(2,3);
// moveTowers(1,2);
// moveTowers(3,1);
// moveTowers(3,2);
// moveTowers(1,2);
