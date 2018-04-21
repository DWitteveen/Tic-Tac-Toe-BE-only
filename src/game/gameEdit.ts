//board in default state

export const defaultBoard = [
	['o', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
]

//array for given colors

const colorsList = ["red", "blue", "green", "yellow", "magenta"]

// function given by teachers

export const moves = (board1, board2) => 
  board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length

    //create var mover two parameters. map board1 (row, y) 
    //filter row and check if board2 is not equal to cell
    //add both together and outcome plus b check length

export const color = () => { 
   return colorsList[Math.floor(Math.random() * colorsList.length)]
}

//create new function that 