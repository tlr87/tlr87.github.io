document.addEventListener('DOMContentLoaded', startGame)

var Demining = false;
function isMineRandom() {
  var x = Math.floor((Math.random() * 10) + 1);
  console.log(x);
  if (x % 2 == 0) {
    return Demining = false;
    console.log("NoBoom!",Demining)
  } else {
    return Demining = true;
    console.log("Boom!",Demining);
  }
}

// Define your `board` object here!
var board = {
  cells:[
    //Row0
    {
      isMine: isMineRandom(),
      hidden: true,
      row: 0,
      col: 0
    },
    {
      isMine: isMineRandom(),
      hidden: true,
      row: 0,
      col: 1
    },
    {
      isMine: isMineRandom(),
      hidden: true,
      row: 0,
      col: 2
    },
    {
      isMine: isMineRandom(),
      hidden: true,
      row: 0,
      col: 3
    },
    //Row1
    {
      isMine: isMineRandom(),
      hidden: true,
      row: 1,
      col: 0
    },
    {
      isMine: isMineRandom(),
      hidden: true,
      row: 1,
      col: 1
    },
    {
      isMine: isMineRandom(),
      hidden: true,
      row: 1,
      col: 2
    },
    {
      isMine: isMineRandom(),
      hidden: true,
      row: 1,
      col: 3
    },
    //Row2
    {
      isMine: isMineRandom(),
      hidden: true,
      row: 2,
      col: 0
    },
    {
      isMine: isMineRandom(),
      hidden: true,
      row: 2,
      col: 1
    },
    {
      isMine: isMineRandom(),
      hidden: true,
      row: 2,
      col: 2
  },
  {
    isMine: isMineRandom(),
    hidden: true,
    row: 2,
    col: 3
  },


  {
    isMine: isMineRandom(),
    hidden: true,
    row: 3,
    col: 0
  },
  {
    isMine: isMineRandom(),
    hidden: true,
    row: 3,
    col: 1
  },
  {
    isMine: isMineRandom(),
    hidden: true,
    row: 3,
    col: 2
},
{
  isMine: isMineRandom(),
  hidden: true,
  row: 3,
  col: 3
}



  ]
}

for (var i = 0; i < board.cells.length; i++){
    console.log(board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]));
  }


function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}



document.addEventListener('contextmenu', checkForWin)
document.addEventListener('click', checkForWin)
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')

var isWin = false;


  for (var i = 0; i < board.cells.length; i++) {
    if(board.cells[i].isMarked === true && board.cells[i].isMine === true){
      isWin = true;
    }
    else if(board.cells[i].hidden === true && board.cells[i].isMine === false){
          isWin = false;
    }
}
if(isWin===true){
  lib.displayMessage('You win!')
}
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.


//function countSurroundingMines (cell) {
//  var surroundingCells = getSurroundingCells(row, col);
//}


//function countSurroundingMines (cell) {
//  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//  return surrounding.filter(function (adjacentCell) {return adjacentCell.isMine}).length;
//}

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;
  for (var i =0; i < surrounding.length; i++){
    if (surrounding[i].isMine ==  true){
      count +=1;
    }
  }
  return count;
}
