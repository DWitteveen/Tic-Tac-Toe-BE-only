"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultBoard = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o']
];
exports.colorsList = ["red", "blue", "green", "yellow", "magenta"];
exports.moves = (board1, board2) => board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length;
exports.color = () => {
    return exports.colorsList[Math.floor(Math.random() * exports.colorsList.length)];
};
//# sourceMappingURL=gameEdit.js.map