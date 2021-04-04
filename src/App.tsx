import { ChessInstance, Piece, Square } from "chess.js";
import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Chess = require("chess.js");

const pieces = {
  b: {
    b: require("./images/bB.svg").default,
    k: require("./images/bK.svg").default,
    q: require("./images/bQ.svg").default,
    r: require("./images/bR.svg").default,
    p: require("./images/bP.svg").default,
    n: require("./images/bN.svg").default,
  },
  w: {
    b: require("./images/wB.svg").default,
    k: require("./images/wK.svg").default,
    q: require("./images/wQ.svg").default,
    r: require("./images/wR.svg").default,
    p: require("./images/wP.svg").default,
    n: require("./images/wN.svg").default,
  },
};

function getSquare(
  rankIndex: number,
  fileIndex: number,
  orientation: "w" | "b"
) {
  const rank = orientation == "b" ? rankIndex + 1 : 8 - rankIndex;
  const file = orientation == "b" ? 7 - fileIndex : fileIndex;
  return `${String.fromCharCode(file + 97)}${rank}` as Square;
}

const chess: ChessInstance = new Chess(
  "6N1/2p1p2K/P7/2P5/P1Q5/P3r3/3P2pp/bkB5 w - - 0 1"
);

const oneToSeven = new Array(8).fill(0);

function App() {
  const boardSize = 400;
  const squareSize = boardSize / 8;

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {oneToSeven.map((_, rankIndex) => (
          <div style={{ display: "flex" }}>
            {oneToSeven.map((_, fileIndex) => (
              <SquareComp
                size={squareSize}
                color={
                  (rankIndex + fileIndex) % 2 === 0 ? "#f0d9b5" : "#b58862"
                }
              >
                <PieceComp
                  size={squareSize}
                  piece={chess.get(getSquare(rankIndex, fileIndex, "w"))}
                />
              </SquareComp>
            ))}
          </div>
        ))}
      </div>
    </DndProvider>
  );
}

const PieceComp: React.FC<{ size: number; piece?: Piece | null }> = ({
  size,
  piece,
}) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "piece",
      item: { data: "hello" },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );

  if (!piece) {
    return null;
  }

  return (
    <img
      src={pieces[piece.color][piece.type]}
      style={{ opacity, width: size, height: size }}
      ref={dragRef}
    />
  );
};

const SquareComp: React.FC<{ size: number; color: string }> = ({
  size,
  color,
  children,
}) => {
  const [, ref] = useDrop(() => ({
    drop(item) {
      console.log({ item });
    },
    accept: "piece",
  }));

  return (
    <div
      ref={ref}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
};

export default App;
