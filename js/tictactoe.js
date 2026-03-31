"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Schachnosa - 2026-03-15
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
//const BATTLEFIELD =
//    [
//        [O, X, O],
//        [X, X, X],
//        [O, O, X],
//    ];

const BATTLEFIELD =
     [
         [null, X, X],
         [X, O, null],
         [O, O, O],
     ];
// const BATTLEFIELD =
//     [
//        [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];

// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!
function findWinners(field) {
    const size = field.length;
    const winners = [];

// Check Horizontal
    for (const row of field) {
        const first = row[0];
        if (first !== null && row.every(cell => cell === first)) {
            winners.push("Winner horizontal: " + first);
        }
    }



// Check Vertical

    for (let col = 0; col < size; col++) {
        const first = field[0][col];
        if (first !== null) {
            let win = true;
            for (const row of field) {
                if (row[col] !== first) {
                    win = false;
                    break;
                }
            }
            if (win) winners.push("Winner vertical: " + first);
        }
    }

// Check Main Diagonal
let firstDiag = field[0][0];
if (firstDiag !== null) {
    let win = true;
    for (let i = 0; i < size; i++) {
        if (field[i][i] !== firstDiag) {
            win = false;
            break;
        }
    }
    if (win) winners.push("Winner main diagonal: " + firstDiag);
}

// Check Anti Diagonal

let firstAnti = field[0][size - 1];
if (firstAnti !== null) {
    let win = true;
    for (let i = 0; i < size; i++) {
        if (field[i][size - 1 - i] !== firstAnti) {
            win = false;
            break;
        }
    }
    if (win) winners.push("Winner anti-diagonal: " + firstAnti);
}

return winners;
}

const winners = findWinners(BATTLEFIELD);

if (winners.length === 0) {
    console.log("No winners ");
} else {
    console.log("All winners:");
    for (const w of winners) {
        console.log(w);
    }
}