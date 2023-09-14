import styles from "./gameBoard.module.css";

function NextStep() {
  return (
    <div className={styles.nextstep}>
      <span className={styles.nextstepText}>Next Player: X</span>
    </div>
  );
}

function Box({ item }) {
  return (
    <div className={styles.square}>
      <span className={styles.squareContent}>{item}</span>
    </div>
  );
}

function Row({ rowContent }) {
  const allBoxes = rowContent.map((item, index) => (
    <Box key={index} item={item} />
  ));
  return <div className={styles.row}>{allBoxes}</div>;
}

export default function GameBoard({ boardContent }) {
  const allRows = boardContent.map((rowItem, index) => (
    <Row key={index} rowContent={rowItem} />
  ));
  return (
    <div className={styles.gamePlay}>
      <NextStep />
      <div className={styles.gameBoard}>{allRows}</div>
    </div>
  );
}
