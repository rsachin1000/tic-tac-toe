import Layout from "../components/layout";
import GameBoard from "../components/gameboard";
import MoveStack from "../components/moves";
import styles from "../styles/utils.module.css";

function Platform({ moveNums, boardContent }) {
  return (
    <div className={styles.platform}>
      <GameBoard boardContent={boardContent} />
      <MoveStack moveNums={moveNums} />
    </div>
  );
}

// let rowTemp = ["S", "P", "M"];
let boardContent = [
  ["X", "O", "X"],
  ["0", "", "X"],
  ["", "O", "O"],
];
// console.log(boardContent);
// let deepCopy = JSON.parse(JSON.stringify(rowTemp));
// boardContent[0] = deepCopy;
// rowTemp[0] = "G";
// console.log(boardContent);

export default function Home() {
  const moveNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Layout>
      <Platform moveNums={moveNums} boardContent={boardContent} />
    </Layout>
  );
}
