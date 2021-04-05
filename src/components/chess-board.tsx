import { ShortMove } from "chess.js";
import React from "react";
import { getFenMap, getSquare, getSquareColor } from "../utils";
import ChessPiece from "./chess-piece";
import ChessSquare from "./chess-square";

const oneToSeven = new Array(8).fill(0);

const ChessBoard: React.FC<{
  size: number;
  fen: string;
  onMove: (move: ShortMove) => void;
  lightSquareColor?: string;
  darkSquareColor?: string;
}> = ({
  size,
  fen,
  onMove,
  lightSquareColor = "#f0d9b5",
  darkSquareColor = "#b58862",
}) => {
  const squareSize = size / 8;
  const fenMap = getFenMap(fen);

  return (
    <div>
      {oneToSeven.map((_, rankIndex) => (
        <div style={{ display: "flex" }}>
          {oneToSeven.map((_, fileIndex) => {
            const squareColor = getSquareColor(rankIndex, fileIndex);
            const square = getSquare(rankIndex, fileIndex, "w");
            const piece = fenMap.get(square);
            return (
              <ChessSquare
                size={squareSize}
                color={squareColor === "w" ? lightSquareColor : darkSquareColor}
                onPieceDrop={(from) =>
                  onMove({ from, to: square, promotion: "q" })
                }
              >
                {piece && (
                  <ChessPiece size={squareSize} piece={piece} square={square} />
                )}
              </ChessSquare>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
