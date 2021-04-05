import { ChessInstance, Piece, ShortMove, Square } from "chess.js";
const Chess = require("chess.js");

export function getSquare(
  rankIndex: number,
  fileIndex: number,
  orientation: "w" | "b"
) {
  const rank = orientation === "b" ? rankIndex + 1 : 8 - rankIndex;
  const file = orientation === "b" ? 7 - fileIndex : fileIndex;
  return `${String.fromCharCode(file + 97)}${rank}` as Square;
}

export function getFenMap(fen: string) {
  const chess: ChessInstance = new Chess(fen);
  const map = new Map<Square, Piece>();

  chess.SQUARES.forEach((square) => {
    const piece = chess.get(square);
    if (piece) {
      map.set(square, piece);
    }
  });

  return map;
}

export function getSquareColor(rankIndex: number, fileIndex: number) {
  return (rankIndex + fileIndex) % 2 === 0 ? "w" : "b";
}
