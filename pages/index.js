import Layout from "../components/layout";
import GameBoard from "../components/gameboard";
import MoveStack from "../components/moves";
import styles from "../styles/utils.module.css";
import { useState } from "react";

function Platform({ linearBoard, updateBoard, upto, setUpto }) {
  // Move stack shows all the moves that have gone by so far and
  // helps in switching to a previous move.
  return (
    <div className={styles.platform}>
      <GameBoard
        upto={upto}
        linearBoard={linearBoard}
        updateBoard={updateBoard}
      />
      <MoveStack linearBoard={linearBoard} setUpto={setUpto} />
    </div>
  );
}

class Item {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.winner = false;
  }
}

function testSingleCase(oneCaseList) {
  var rowMap = new Map();
  var columnMap = new Map();
  const diag1 = [0, 0, 0];
  const diag2 = [0, 0, 0];

  let item;
  for (let i = 0; i < oneCaseList.length; i++) {
    item = oneCaseList[i];

    if (item.i === item.j) {
      diag1[item.i] = 1;
      if (item.i === 1) {
        diag2[item.i] = 1;
      }
    }

    if ((item.i === 2 && item.j === 0) || (item.i === 0 && item.j === 2)) {
      diag2[item.i] = 1;
    }

    let rowValue = rowMap.has(item.i) ? rowMap.get(item.i) + 1 : 1;
    if (rowValue === 3) {
      return true;
    }
    rowMap.set(item.i, rowValue);
    let colValue = columnMap.has(item.j) ? columnMap.get(item.j) + 1 : 1;
    if (colValue === 3) {
      return true;
    }
    columnMap.set(item.j, colValue);
  }

  const diag1Sum = diag1.reduce((sum, currVal) => sum + currVal, 0);
  const diag2Sum = diag2.reduce((sum, currVal) => sum + currVal, 0);
  if (diag1Sum === 3 || diag2Sum === 3) {
    return true;
  }

  return false;
}

function stringBoard(linearBoard) {
  let text = "";
  for (let i = 0; i < linearBoard.length; i++) {
    let item = linearBoard[i];
    text = text + "(" + item.i + "," + item.j + ") ";
  }
  return text;
}

function checkWinner(linearBoard) {
  // console.log("Checkwinner: " + stringBoard(linearBoard));
  let evens = [];
  let odds = [];
  for (let i = 0; i < linearBoard.length; i++) {
    if (i % 2 === 0) {
      evens.push(linearBoard[i]);
    } else {
      odds.push(linearBoard[i]);
    }
  }
  return testSingleCase(odds) || testSingleCase(evens);
}

export default function Home() {
  // Upto tells how long of the board you want to show
  const [upto, setUpto] = useState(0);
  // It keeps a sequential record of the moves
  const [board, setBoard] = useState([]);

  function updateBoard(i, j) {
    if (upto >= 5 && board[upto - 1].winner) {
      return;
    }
    let updating = false;
    for (let k = 0; k < upto; k++) {
      let item = board[k];
      if (item.i === i && item.j === j) {
        updating = true;
        break;
      }
    }
    if (updating) {
      return;
    }
    const newBoard = [...board.slice(0, upto), new Item(i, j)];
    newBoard[newBoard.length - 1].winner = checkWinner(newBoard);
    setUpto(newBoard.length);
    setBoard(newBoard);
  }

  return (
    <Layout>
      <Platform
        linearBoard={board}
        updateBoard={updateBoard}
        upto={upto}
        setUpto={setUpto}
      />
    </Layout>
  );
}
