//board in default state
export const defaultBoard = [
	['o', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
]

//array for given colors
export const colorsList = ["red", "blue", "green", "yellow", "magenta"]


//a function that returns the number of changes between boards
export const moves = (board1, board2) => 
  board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length


//pick a random color from colorList using Math.floor Math.random
//Math.floor generates an rendom number 0 -1 
// *.lenght of the colorlist 
//Math.floor get it to be a whole number
export const color = () => { 
   return colorsList[Math.floor(Math.random() * colorsList.length)]
}

