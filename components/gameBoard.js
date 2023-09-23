import styles from "./gameBoard.module.css";

function NextStep({ linearBoard, upto }) {
  let cellText;
  if (upto >= 5 && linearBoard[upto - 1].winner) {
    if (upto % 2 === 1) {
      cellText = "Winner: X";
    } else {
      cellText = "Winner: O";
    }
  } else {
    if (upto % 2 === 1) {
      cellText = "Next Player: O";
    } else {
      cellText = "Next Player: X";
    }
  }
  return (
    <div className={styles.nextstep}>
      <span className={styles.nextstepText}>{cellText}</span>
    </div>
  );
}

function Box({ item, row, column, updateBoard }) {
  return (
    <div className={styles.square} onClick={() => updateBoard(row, column)}>
      <span className={styles.squareContent}>{item}</span>
    </div>
  );
}

function Row({ rowContent, row, updateBoard }) {
  const allBoxes = rowContent.map((item, index) => (
    <Box
      key={index}
      item={item}
      row={row}
      column={index}
      updateBoard={updateBoard}
    />
  ));
  return <div className={styles.row}>{allBoxes}</div>;
}

export default function GameBoard({ upto, linearBoard, updateBoard }) {
  let defaultBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  for (let i = 0; i < upto; i++) {
    let value = i % 2 == 0 ? "X" : "O";
    let item = linearBoard[i];
    defaultBoard[item.i][item.j] = value;
  }

  const allRows = defaultBoard.map((rowItem, index) => (
    <Row
      key={index}
      rowContent={rowItem}
      row={index}
      updateBoard={updateBoard}
    />
  ));
  return (
    <div className={styles.gamePlay}>
      <NextStep linearBoard={linearBoard} upto={upto} />
      <div className={styles.gameBoard}>{allRows}</div>
    </div>
  );
}
