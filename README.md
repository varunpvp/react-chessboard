# A Chessboard Component for React (WIP)

<p align="center">
  <a href="https://conventionalcommits.org">
    <img alt="Conventional Commits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>

A Chessboard Componenet build with React and Typescript.

## Install

npm

```
npm install @varunpvp/react-chessboard@1.2.2
```

yarn

```
yarn add @varunpvp/react-chessboard@1.2.2
```

## Import

```
import ChessBoard from '@varunpvp/react-chessboard@1.2.2'
```

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
