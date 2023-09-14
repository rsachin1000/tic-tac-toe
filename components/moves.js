import styles from "./moves.module.css";

function GoToMove({ text }) {
  return (
    <div className={styles.goToMove}>
      <span className={styles.goToMoveText}>{text}</span>
    </div>
  );
}

export default function MoveStack({ moveNums }) {
  const allMoves = [<GoToMove key="start_move" text={"Go to $Game Start"} />];
  for (let i = 0; i < moveNums.length; i++) {
    allMoves.push(
      <GoToMove key={"other_moves_" + i} text={"Go to move #" + moveNums[i]} />
    );
  }
  return <div className={styles.allMoves}>{allMoves}</div>;
}
