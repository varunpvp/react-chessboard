import { Square } from "chess.js";

const ChessSquare: React.FC<{
  size: number;
  color: string;
  onPieceDrop: (from: Square) => void;
}> = ({ size, color, children, onPieceDrop }) => {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const from = e.dataTransfer.getData("from") as Square;
        onPieceDrop(from);
      }}
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

export default ChessSquare;
