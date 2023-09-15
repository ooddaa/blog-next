/**
 * Below you have the barebones of a tic-tac-toe game in React
 * We'd like you to go through the following tasks:
 * 1. Implement the stubbed-out functions in order to make the game functional
 * 2. Make the game state persistent between refreshes
 * 3. Implement a persistent game history, that allows the user to step back and forth
 *    through each state of the game
 */
/** @jsxImportSource @emotion/react */
import * as React from "react";
import { Global } from "@emotion/react";

// TYPES

type Value = "X" | "O";
type Square = null | Value;
type Winner = Square;

// HELPERS
const calculateStatus = (
  winner: Winner,
  squares: Square[],
  nextValue: Value
) => {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`;
};

const calculateNextValue = (squares: Square[]) => {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
};

const calculateWinner = (squares: Square[]): Winner => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const getLocalState = (key: string) => {
  const localState = localStorage.getItem(key);
  if (localState) {
    return JSON.parse(localState);
  }
  return null;
};

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const navButtons = { 
  width: '50%', height: '30px',  backgroundColor: '#fff', border: 'none',
  borderRadius: '5px',
  '&:hover': {
    boxShadow: '0 0 2px 2px #fecaca'
  },
  '&:active': {
    transform: 'translateY(2%)'
  }}

/* 
Steps.

1. init states
2. track user's clicks, once user makes a move: 
  a. update board
  b. update history 
  c. reset history pointer
  d. save all states
3. if user restarts -> reset all states
4. if user "travels in time":
  a. move pointer to a historical state 
  b. render historical state
  c. if user makes a move while in historical state:
    i. "future has been changed" - go to step 2
5. on page refresh the last available state persists
*/

// BOARD
const Board = ({ squares, onSquareClick }: any) => {
  const renderSquare = (i: number) => {
    let borderRadius = {};
    let radius = "10px"
    if (i === 0) {
      borderRadius = { borderTopLeftRadius: radius };
    } else if (i === 2) {
      borderRadius = { borderTopRightRadius: radius };
    } else if (i === 6) {
      borderRadius = { borderBottomLeftRadius: radius };
    } else if (i === 8) {
      borderRadius = { borderBottomRightRadius: radius };
    }

    return (
      <button
        className="square"
        onClick={() => onSquareClick(i)}
        css={{
          background: "#fff",
          border: "1px solid #999",
          float: "left",
          fontSize: "48px",
          fontWeight: "bold",
          lineHeight: "68px",
          height: "68px",
          marginRight: "-1px",
          marginTop: "-1px",
          padding: "0",
          textAlign: "center",
          width: "68px",
          "&:focus": {
            outline: "none",
            background: "#fee2e2",
          },
          ...borderRadius
        }}
      >
        {squares[i]}
      </button>
    );
  };

  return (
    <div
      className="board"
      css={{
        borderRadius: '10px',
      }}
    >
      <div
        className="board-row"
        css={{
          "&:after": {
            clear: "both",
            content: '""',
            display: "table",
          },
        }}
      >
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div
        className="board-row"
        css={{
          "&:after": {
            clear: "both",
            content: '""',
            display: "table",
          },
        }}
      >
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div
        className="board-row"
        css={{
          "&:after": {
            clear: "both",
            content: '""',
            display: "table",
          },
        }}
      >
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

// GAME LOGIC
const TicTacToe = () => {
  const [squares, setSquares] = React.useState<Square[]>([]);
  const [history, setHistory] = React.useState<Square[][]>([]);
  const [pointer, setPointer] = React.useState<number>(0);

  const initStates = () => {
    const savedHistory = getLocalState("history");
    const savedPointer = getLocalState("pointer");

    console.log(savedHistory && savedPointer);
    const initState =
      savedHistory && savedPointer
        ? savedHistory[savedPointer]
        : Array(9).fill(null);
    setSquares(initState);

    const initHistory = savedHistory ?? [initState];
    setHistory(initHistory);

    const initPointer = savedPointer ?? 0;
    setPointer(initPointer);
  };

  React.useEffect(initStates, []);

  const nextValue = calculateNextValue(squares);
  const winner = calculateWinner(squares);
  const status = calculateStatus(winner, squares, nextValue);

  const selectSquare = (square: number) => {
    // implement what happens when a square is clicked
    if (winner || squares[square]) {
      return;
    }

    // make a move
    // update local board state
    let newSquares: Square[] = [...squares];
    newSquares[square] = nextValue;
    setSquares(newSquares);

    // persist board state
    const savedState = JSON.stringify(newSquares);
    localStorage.removeItem("state");
    localStorage.setItem("state", savedState);

    // update local history
    // we let user change history. User can go back some steps
    // and choose other moves. The discarded game branch will disappear.
    const newHistory = [...history.slice(0, pointer + 1), newSquares];
    setHistory(newHistory);

    // persist history
    const savedHistory = JSON.stringify(newHistory);
    localStorage.removeItem("history");
    localStorage.setItem("history", savedHistory);

    // move pointer to the end of history
    const newPointer = newHistory.length - 1;
    setPointer(newPointer);

    // persist pointer
    localStorage.removeItem("pointer");
    localStorage.setItem("pointer", newPointer.toString());
  };

  const restart = () => {
    // implement game restart
    localStorage.removeItem("state");
    localStorage.removeItem("history");
    localStorage.removeItem("pointer");

    initStates();
  };

  function renderHistoricalState(newPointer: number) {
    setPointer(newPointer);
    // localStorage.removeItem("pointer");
    localStorage.setItem("pointer", newPointer.toString());
    setSquares([...history[newPointer]]);
  }

  const goBackOneStep = () =>
    renderHistoricalState(pointer === 0 ? 0 : pointer - 1);

  const goForwardOneStep = () =>
    renderHistoricalState(
      pointer >= history.length - 1 ? pointer : pointer + 1
    );

  return (
    
    <div
      className="wrapper"
    >
      <div
        className="game"
        css={{
          font: '14px "Century Gothic", Futura, sans-serif',
          margin: "20px",
          minHeight: "260px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <div className="game-board" css={{}}>
          <div className="status" 
            css={{
              ...center,
              marginBottom: "20px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >{status}</div>
          <Board onSquareClick={selectSquare} squares={squares} />
          <div
            className="navigation-buttons"
            css={{ display: "flex", gap: "8px", marginTop: "10px" }}
          >
            <button className="backward" onClick={goBackOneStep} css={{ ...center, ...navButtons }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                css={{ height: "20px", width: "30px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </button>
            <button className="forward" onClick={goForwardOneStep} css={{ ...center, ...navButtons }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                css={{ height: "20px", width: "30px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          <button
            className="restart"
            onClick={restart}
            css={{ 
              ...navButtons, 
              marginTop: "10px", 
              width: "100%",
              height: '40px',
            }}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
