import { Piece, Square } from "chess.js";

const pieces = {
  b: {
    b: require("../pieces/bB.svg").default,
    k: require("../pieces/bK.svg").default,
    q: require("../pieces/bQ.svg").default,
    r: require("../pieces/bR.svg").default,
    p: require("../pieces/bP.svg").default,
    n: require("../pieces/bN.svg").default,
  },
  w: {
    b: require("../pieces/wB.svg").default,
    k: require("../pieces/wK.svg").default,
    q: require("../pieces/wQ.svg").default,
    r: require("../pieces/wR.svg").default,
    p: require("../pieces/wP.svg").default,
    n: require("../pieces/wN.svg").default,
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
