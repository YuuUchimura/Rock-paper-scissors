// // cpの手
// const cpHand = document.getElementById("cpHand");
// // cpの手の初期値
// cpHand.textContent = `相手の手：`;
// // 結果
// const log = document.getElementById("log");
// // 結果表示の初期値
// log.textContent = `結果：`;

// // スタートボタンの取得
// const start = document.getElementById("gameStart");
// // スタートボタンを押した時の処理
// start.addEventListener("click", () => {
//     // myHandの取得
//     const myNum = document.getElementById("myHand").value;
//     // cpの手に１〜３までの数字をランダムで代入
//     const cpNum = Math.floor(Math.random() * myHand.length);
//     switch(cpNum){
//         case 0:{
//             cpHand.textContent = "相手の手：グー";
//         }
//             break;
//         case 1:{
//             cpHand.textContent = "相手の手：チョキ";
//         }
//             break;
//         case 2:{
//             cpHand.textContent = "相手の手：パー";
//         }
//             break;
//     }
//     // if (cpNum === 0) {
//     //     cpHand.textContent = "相手の手：グー";
//     // } else if (cpNum === 1) {
//     //     cpHand.textContent = "相手の手：チョキ";
//     // } else if (cpNum === 2) {
//     //     cpHand.textContent = "相手の手：パー";
//     // }

//     switch (myNum) {
//         case "0": {
//             if (cpNum === 0) {
//                 log.textContent = "結果：引き分け";
//             } else if (cpNum === 1) {
//                 log.textContent = "結果：勝ち";
//             } else if (cpNum === 2) {
//                 log.textContent = "結果：負け";
//             }
//             break;
//         }
//         case "1": {
//             if (cpNum === 0) {
//                 log.textContent = "結果：引き分け";
//             } else if (cpNum === 1) {
//                 log.textContent = "結果：勝ち";
//             } else if (cpNum === 2) {
//                 log.textContent = "結果：負け";
//             }
//             break;
//         }
//         case "2": {
//             if (cpNum === 0) {
//                 log.textContent = "結果：引き分け";
//             } else if (cpNum === 1) {
//                 log.textContent = "結果：勝ち";
//             } else if (cpNum === 2) {
//                 log.textContent = "結果：負け";
//             }
//             break;
//         }
//     }
// });

// ここからチャレンジ問題
// 各要素の取得
const nowTurn = document.getElementById("player");
const setBtn = document.getElementById("setHand");
const player1Hand = document.getElementById("player1Hand");
const player2Hand = document.getElementById("player2Hand");
let turn = 0;
let player1Num;
let player2Num;

setBtn.addEventListener("click", () => {
    if (turn === 0) {
        player1Num = document.getElementById("playerHand").value;
        player1Hand.textContent = "player1:セット完了";
        nowTurn.textContent = "player2";
    } else {
        player2Num = document.getElementById("playerHand").value;
        player2Hand.textContent = "player2:セット完了";
        nowTurn.textContent = "両者セット完了";
    }
    turn++;
});

let log = document.getElementById("log");
log.textContent = "結果：";

const start = document.getElementById("gameStart");
start.addEventListener("click", () => {
    if (turn !== 2) {
        alert("２回以上押さないで下さい");
        return;
    }
    switch (player1Num) {
        case "0": {
            if (player2Num === "0") {
                log.textContent = "引き分け";
            } else if (player2Num === "1") {
                log.textContent = "負け";
            } else if (player2Num === "2") {
                log.textContent = "勝ち";
            }
            break;
        }
        case "1": {
            if (player2Num === "0") {
                log.textContent = "勝ち";
            } else if (player2Num === "1") {
                log.textContent = "引き分け";
            } else if (player2Num === "2") {
                log.textContent = "負け";
            }
            break;
        }
        case "2": {
            if (player2Num === "0") {
                log.textContent = "負け";
            } else if (player2Num === "1") {
                log.textContent = "勝ち";
            } else if (player2Num === "2") {
                log.textContent = "引き分け";
            }
            break;
        }
    }
    turn = 0;
    player1Hand.textContent = "player1:";
    player2Hand.textContent = "player2:";
    nowTurn.textContent = "player1";
});