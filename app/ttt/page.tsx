"use client"
import React, { useState } from 'react'

type Cell = "x"|"o"|undefined
type Board = Cell[][]

const createBoard = (size: number): Board  => {
  const board: Board = []
  for (let i = 0; i < size; i++) {
    board.push([...Array(size)])
  }
  return board
}

const rowWins = (board: Board): boolean => {
  for (let row of board) {
    const set = new Set()
    for (let cell of row) {
      set.add(cell)
    }
    if (!set.has(undefined) && set.size == 1) return true
  }
  return false
}
const colWins = (board: Board): boolean => {
  for (let col = 0; col < board.length; col++) {
    const set = new Set()
    for (let row = 0; row < board.length; row++) {
      set.add(board[row][col])
    }
    if (!set.has(undefined) && set.size == 1) return true
  }
  return false
}
const diagonalWins = (board: Board): boolean => {
  const topLeftBottomRight = new Set()
  const theOther = new Set()
  for (let i = 0; i < board.length; i++) {
    topLeftBottomRight.add(board[i][i])
    theOther.add(board[i][board.length - 1 - i])
  }
  if (!topLeftBottomRight.has(undefined) && topLeftBottomRight.size == 1) return true
  if (!theOther.has(undefined) && theOther.size == 1) return true
  return false
}

const hasWinner = (board: Board): boolean => {
  // rowWins
  // colWins
  // diagonalWins
  return rowWins(board) || colWins(board) || diagonalWins(board) ||false
}
export default function Ttt() {
  const size = 3
  const [board, setBoard] = useState(createBoard(size))
  const [currPlayer, setCurrPlayer] = useState<Cell>("x")


  const handleClick = (row: number, cell: number) => {
    if (board[row][cell] == undefined) {
      board[row][cell] = currPlayer
      setBoard(board)
    }
    if (hasWinner(board)) {
      console.dir({currPlayer, won: true})
      setBoard(createBoard(size))
      setCurrPlayer("x")
    } else {
      setCurrPlayer(currPlayer == "x" ? "o" : "x")
    }
  }

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div>
      {
        board.map((row, r: number)  => (
        <div key={r} style={{ 
          display: "flex",
          }}>
          {
            row.map((cell, c: number) => (
              <div 
                key={c}
                style={{
                  border: "black 1px solid",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer"
                }}
                onClick={() => handleClick(r, c)}
                >
                {cell}
              </div>
            ))
          }
        </div>))
      }
      </div>
    </div>
  )
}
