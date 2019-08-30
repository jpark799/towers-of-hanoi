
let towers = [[3, 2, 1], [], []];
let count = 0;

moveTowers = (start, end) => {
  const startPeg = start - 1
  const endPeg = end - 1
  const emptyEndPeg = towers[endPeg].length === 0 
  const notEmptyStartPeg = towers[startPeg].length !== 0 
  const lastItemInStartArray = towers[startPeg][towers[startPeg].length - 1]
  const lastItemInEndArray = towers[endPeg][towers[endPeg].length-1]
  if (lastItemInStartArray < lastItemInEndArray || emptyEndPeg && notEmptyStartPeg) {
    towers[endPeg].push(lastItemInStartArray);
    towers[startPeg].pop();
    count++;
  } else {
    console.log("Move is not legal.");
  }
  printBoard()
  checkWinner()
}

printBoard = () => {
  const pegs = '---'
  const pegsArrayMap = towers.map(x => pegs + x);
  pegsArrayMap.forEach(function(peg) {
    console.log(peg);
  }); 
  moveCounter()
}

checkWinner = () => {
  if ((towers === [[], [3, 2, 1],[]]) || (towers === [[], [], [3, 2, 1]])) {
    console.log('Congratulations, you won! It took you ', count, ' total moves.')
    resetBoard()
  }
}

// It felt cleaner to make a function that prints the move count rather than console logging it every time
moveCounter = () => {
  console.log(`Move Count: `, count)
}

resetBoard = () => {
  console.log('resetting board....')
  towers = [[3, 2, 1,], [], []]
  count = 0
}

// moveTowers(1,2);
// moveTowers(1,3);
// moveTowers(2,3);
// moveTowers(1,2);
// moveTowers(3,1);
// moveTowers(3,2);
// moveTowers(1,2);
