import styles from "./moves.module.css";

function GoToMove({ text, showMovesUpto, setUpto }) {
  return (
    <div className={styles.goToMove}>
      <span
        className={styles.goToMoveText}
        onClick={() => setUpto(showMovesUpto)}
      >
        {text}
      </span>
    </div>
  );
}

export default function MoveStack({ linearBoard, setUpto }) {
  const allMoves = [
    <GoToMove
      key="start_move"
      text={"Go to $Game Start"}
      showMovesUpto={0}
      setUpto={setUpto}
    />,
  ];
  for (let i = 1; i <= linearBoard.length; i++) {
    allMoves.push(
      <GoToMove
        key={"other_moves_" + i}
        text={"Go to move #" + i}
        showMovesUpto={i}
        setUpto={setUpto}
      />
    );
  }
  return <div className={styles.allMoves}>{allMoves}</div>;
}
