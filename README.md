# A Chessboard Component for React

A Chessboard Componenet build with React and Typescript.

## Usage

```
import { useState } from "react";
import ChessBoard from "./components/chess-board";
import { makeMove } from "./utils";

function App() {
  const [fen, setFen] = useState(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  );

  return (
    <ChessBoard
      size={400}
      fen={fen}
      onMove={(move) => {
        const newFen = makeMove(fen, move);
        if (newFen) {
          setFen(newFen);
        }
      }}
    />
  );
}

export default App;
```