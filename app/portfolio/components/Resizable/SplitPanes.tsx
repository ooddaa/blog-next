/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from "react";

interface SplitPanesProps {
  width: number;
  height: number;
}

function SplitPanes({ width, height }: SplitPanesProps) {
  const [leftPaneWidth, setLeftPaneWidth] = useState(0);
  const rightPane = useRef(null)
  const [resizerWidth, setResizerWidth] = useState(90)
  const [isDragged, setIsDragged] = useState(false);
  const [resizerInitPositionX, setResizerInitPositionX] = useState<
    number | null
  >(null);

  useEffect(()=>{
    /* init left pane width */
    /* rightPane is dealt with by flexbox */
    setLeftPaneWidth(width/2)
  },[])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragged(true);
    setResizerInitPositionX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragged) {
      let movedByX = e.clientX - (resizerInitPositionX ?? 0);

      /* normalize left boundary */
      /* resizer fully closed left pane */
      if (leftPaneWidth <= 0 && movedByX < 0) {
        movedByX = 0
      } 

      /* normalize right boundary */
      if (rightPane.current) {
        let newRightPaneWidth = (rightPane.current as {clientWidth: number}).clientWidth

        /* resizer fully closed right pane */
        if (newRightPaneWidth <= 0 && movedByX > 0) {
          movedByX = 0
        }
      }
      
      /* adjust left pane width, flexbox will take care of the rest */
      setLeftPaneWidth(leftPaneWidth + movedByX);

      /* remember cursor position, this makes the whole thing work
      in smalles increments - per 1px move */
      setResizerInitPositionX(e.clientX);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragged) {
      setIsDragged(false);
    }
  };
  
  const handleMouseLeave = (e: React.MouseEvent) => {
    if (isDragged) {
      setIsDragged(false);
    }
  };

  return (
    <div
      className="split-panes"
      data-testid="__split-panes"
      css={{
        display: "flex",
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div
        className="left-pane"
        data-testid="__left-pane"
        css={{
          width: `${leftPaneWidth}px`,
          height,
          backgroundColor: "green",
        }}
      ></div>
      <div
        className="resizer"
        css={{
          width: `${resizerWidth}px`,
          height: "100%",
          backgroundColor: "black",
          cursor: "col-resize",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="right-pane"
        ref={rightPane}
        css={{
          height,
          backgroundColor: "red",
          flex: '1'
        }}
      ></div>
    </div>
  );
}

export default SplitPanes;
