import { Piece, Square } from "chess.js";

const pieces = {
  b: {
    b: require("../images/bB.svg").default,
    k: require("../images/bK.svg").default,
    q: require("../images/bQ.svg").default,
    r: require("../images/bR.svg").default,
    p: require("../images/bP.svg").default,
    n: require("../images/bN.svg").default,
  },
  w: {
    b: require("../images/wB.svg").default,
    k: require("../images/wK.svg").default,
    q: require("../images/wQ.svg").default,
    r: require("../images/wR.svg").default,
    p: require("../images/wP.svg").default,
    n: require("../images/wN.svg").default,
  },
};

const ChessPiece: React.FC<{ size: number; piece: Piece; square: Square }> = ({
  size,
  piece,
  square,
}) => {
  return (
    <img
      draggable="true"
      src={pieces[piece.color][piece.type]}
      style={{ width: size, height: size }}
      alt="Chess Piece"
      onDragStart={(e) => e.dataTransfer.setData("from", square)}
    />
  );
};

export default ChessPiece;
