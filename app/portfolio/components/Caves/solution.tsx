import { useEffect, useState } from "react";

export const caveSystem = {
  start: ["b"],
  b: ["A", "end"],
  A: ["b", "end"],
  end: ["A", "b"],
};

type Position = {
  x: number;
  y: number;
  direction?: "up" | "down" | "left" | "right";
};
interface RenderCaveProps {
  position: Position;
  width: number;
  height: number;
  fill: string;
  label: string;
  radius: { rx: number; ry: number };
  children: JSX.Element | JSX.Element[];
}
interface RenderLineProps {
  from: Position;
  to: Position;
  stroke?: string;
  fill?: string;
  strokeWidth?: number | string;
}
function renderCave({
  position,
  width,
  height,
  fill,
  label,
  radius,
  children,
}: Partial<RenderCaveProps> = {}) {
  const _x = position?.x ? position?.x : 0;
  const _y = position?.y ? position?.y : 0;
  const _width = width ? width : 50;
  const _height = height ? height : 50;
  return (
    <svg x={_x} y={_y}>
      {children}
      <rect
        x={0}
        y={0}
        width={_width}
        height={_height}
        fill={fill || "#818cf8"}
        rx={10}
        ry={10}
      />
      <text x={_width / 2 - _width / 10} y={_height / 2 + _height / 10}>
        {label}
      </text>
    </svg>
  );
}
function renderSmallCave({
  position,
  width,
  height,
  fill,
  label,
  radius,
  children,
}: Partial<RenderCaveProps> = {}) {
  const _x = position?.x ? position?.x : 0;
  const _y = position?.y ? position?.y : 0;
  const _width = width ? width : 30;
  const _height = height ? height : 30;
  const _fill = fill ? fill : "#7dd3fc";
  const _radius = radius ? radius : { rx: 10, ry: 10 };
  return renderCave({
    position: { x: _x, y: _y },
    width: _width,
    height: _height,
    fill: _fill,
    label,
    radius: _radius,
    children,
  });
}
function renderDot({
  position,
  width,
  height,
  fill,
}: Partial<RenderCaveProps> = {}) {
  const _x = position?.x ? position?.x : 0;
  const _y = position?.y ? position?.y : 0;
  const _width = width ? width : 1;
  const _height = height ? height : 1;
  return (
    <svg>
      <rect
        x={_x}
        y={_y}
        width={_width}
        height={_height}
        fill={fill || "black"}
      />
    </svg>
  );
}
function renderLine({
  from,
  to,
  stroke,
  fill,
  strokeWidth,
}: Partial<RenderLineProps>): JSX.Element {
  const _stroke = stroke ? stroke : "#94a3b8";
  const _fill = fill ? fill : "#none";
  const _strokeWidth = strokeWidth ? strokeWidth : 4;
  return (
    <line
      x1={from?.x}
      y1={from?.y}
      x2={to?.x}
      y2={to?.y}
      stroke={_stroke}
      fill={_fill}
      strokeWidth={_strokeWidth}
      strokeLinecap="square"
    />
  );
}
type GridSize = {
  rows: number;
  cols: number;
};
type Grid = Position[];
function makeGrid(
  side = 100,
  { rows, cols }: GridSize = { rows: 10, cols: 10 }
): Grid {
  /* grid is made of squares with 100px side  */
  let grid = [];
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      grid.push({ x: x * side, y: y * side });
    }
  }
  return grid;
}

type GridProps = {
  position: Position;
  side: number;
  size: GridSize;
  children?: JSX.Element | JSX.Element[];
};
type RenderGridProps = {
  position: Position;
  grid: Grid;
  children?: JSX.Element | JSX.Element[];
};
function renderGrid({
  position: { x, y },
  grid,
  children,
}: RenderGridProps): JSX.Element[] {
  return grid.map((position) => {
    return (
      <>
        <svg x={x} y={y}>
          {renderDot({ position })}
          {children}
        </svg>
      </>
    );
  });
}

function Grid({ position, side, size, children }: GridProps) {
  const grid = makeGrid(side, size);
  return renderGrid({ position, grid, children });
}
function Cave(props: Partial<RenderCaveProps>) {
  return renderCave(props);
}
function Line(props: Partial<RenderLineProps>) {
  return renderLine(props);
}

export function renderCaveSystem(caveSystem: object): JSX.Element {
  const side = 60,
    x = 60,
    y = 0;
  return (
    <div className="w-full flex flex-row gap-12 justify-between items-between">
      <svg width={600} height={600}>
        {/* <Grid position={{ x, y }} side={side} size={{ rows: 10, cols: 10 }}> */}
          <Cave
            position={{ x: side * 2.5, y: side * 0.5 }}
            width={side * 3}
            height={side}
            label={"Start"}
            fill="#a7f3d0"
          >
            <Line
              from={{ x: side * 0.5, y: side }}
              to={{ x: side * 0.5, y: side * 2.5 }}
            />
            <Line
              from={{ x: side * 2.5, y: side }}
              to={{ x: side * 2.5, y: side * 2.5 }}
            />
          </Cave>

          <Cave
            position={{ x: side * 0.5, y: side * 2.5 }}
            width={side}
            height={side}
            label={"c"}
            fill="#e2e8f0"
          >
            <Line
              from={{ x: side, y: side * 0.5 }}
              to={{ x: side * 2.5, y: side * 0.5 }}
            />
          </Cave>

          <Cave
            position={{ x: side * 2.5, y: side * 2.5 }}
            width={side}
            height={side}
            label={"A"}
          >
            <Line
              from={{ x: side * 0.5, y: side }}
              to={{ x: side * 0.5, y: side * 2.5 }}
            />
            <Line
              from={{ x: side, y: side * 0.5 }}
              to={{ x: side * 2.5, y: side * 0.5 }}
            />
          </Cave>

          <Cave
            position={{ x: side * 4.5, y: side * 2.5 }}
            width={side}
            height={side}
            label={"b"}
            fill="#e2e8f0"
          >
            <Line
              from={{ x: side * 0.5, y: side }}
              to={{ x: side * 0.5, y: side * 2.5 }}
            />
            <Line
              from={{ x: side, y: side * 0.5 }}
              to={{ x: side * 2.5, y: side * 0.5 }}
            />
          </Cave>

          <Cave
            position={{ x: side * 6.5, y: side * 2.5 }}
            width={side}
            height={side}
            label={"d"}
            fill="#e2e8f0"
          >
            {/* <Line from={{x: side, y: side * .5}} to={{x: side * 2.35, y: side * .5}} /> */}
          </Cave>

          <Cave
            position={{ x: side * 2.5, y: side * 4.5 }}
            width={side * 3}
            height={side}
            label={"End"}
            fill="#a7f3d0"
          >
            {/* <Line from={{x: side, y: side}} to={{x: side * .5, y: side * 2}} />
          <Line from={{x: side, y: side}} to={{x: side * 2.5, y: side * 2.5}} /> */}
          </Cave>
        {/* </Grid> */}
      </svg>
      {renderPaths()}
    </div>
  );
}

export function renderPaths(): JSX.Element {
  const side = 10,
    x = 5,
    y = 5,
    rows = 5,
    cols = 7;
  const grid = makeGrid(side, { rows, cols });
  // console.log(grid)
  return (
    <div className="bg-white w-1/3 p-6 flex flex-row gap-4 flex-wrap justify-start items-start content-start">
      <svg width={cols * side} height={rows * side}>
        <Grid position={{ x, y }} side={side} size={{ rows, cols }}>
          {/* Start -> A */}
          <Line
            from={{ x: side * 2, y: 0 }}
            to={{ x: side * 2, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* A -> End */}
          <Line
            from={{ x: side * 2, y: side * 2 }}
            to={{ x: side * 2, y: side * 4 }}
            stroke="red"
            strokeWidth={2}
          />
        </Grid>
      </svg>

      {/* Start -> A -> c -> A -> End */}
      <svg width={cols * side} height={rows * side}>
        <Grid position={{ x, y }} side={side} size={{ rows, cols }}>
          {/* Start -> A */}
          <Line
            from={{ x: side * 2, y: 0 }}
            to={{ x: side * 2, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* c -> A*/}
          <Line
            from={{ x: 0, y: side * 2 }}
            to={{ x: side * 2, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* A -> End */}
          <Line
            from={{ x: side * 2, y: side * 2 }}
            to={{ x: side * 2, y: side * 4 }}
            stroke="red"
            strokeWidth={2}
          />
        </Grid>
      </svg>

      <svg width={cols * side} height={rows * side}>
        <Grid position={{ x, y }} side={side} size={{ rows, cols }}>
          {/* Start -> A */}
          <Line
            from={{ x: side * 2, y: 0 }}
            to={{ x: side * 2, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* A -> End */}
          <Line
            from={{ x: side * 2, y: side * 2 }}
            to={{ x: side * 2, y: side * 4 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* c -> A -> b*/}
          <Line
            from={{ x: 0, y: side * 2 }}
            to={{ x: side * 4, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
        </Grid>
      </svg>

      {/* Start -> A -> c -> A -> b -> A -> End */}
      <svg width={cols * side} height={rows * side}>
        <Grid position={{ x, y }} side={side} size={{ rows, cols }}>
          {/* Start -> A */}
          <Line
            from={{ x: side * 2, y: 0 }}
            to={{ x: side * 2, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* c -> A -> b*/}
          <Line
            from={{ x: 0, y: side * 2 }}
            to={{ x: side * 4, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* b -> End */}
          <Line
            from={{ x: side * 4, y: side * 2 }}
            to={{ x: side * 4, y: side * 4 }}
            stroke="red"
            strokeWidth={2}
          />
        </Grid>
      </svg>

      {/* Start -> A -> b -> A -> c -> A -> End */}
      <div className="hover:scale-[1.1] cursor-pointer active:scale-[.98] hover:shadow-md bg-white flex justify-center items-center rounded-md">
        <svg width={cols * side} height={rows * side}>
          <Grid position={{ x, y }} side={side} size={{ rows, cols }}>
            {/* Start -> A */}
            <Line
              from={{ x: side * 2, y: 0 }}
              to={{ x: side * 2, y: side * 2 }}
              stroke="red"
              strokeWidth={2}
            />
            {/* c -> A -> b*/}
            <Line
              from={{ x: 0, y: side * 2 }}
              to={{ x: side * 4, y: side * 2 }}
              stroke="red"
              strokeWidth={2}
            />
            {/* b -> End */}
            <Line
              from={{ x: side * 4, y: side * 2 }}
              to={{ x: side * 4, y: side * 4 }}
              stroke="red"
              strokeWidth={2}
            />
          </Grid>
        </svg>
      </div>

      {/* Start -> A -> b -> End */}
      <svg width={cols * side} height={rows * side}>
        <Grid position={{ x, y }} side={side} size={{ rows, cols }}>
          {/* Start -> A */}
          <Line
            from={{ x: side * 2, y: 0 }}
            to={{ x: side * 2, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* A -> b */}
          <Line
            from={{ x: side * 2, y: side * 2 }}
            to={{ x: side * 4, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* b -> End */}
          <Line
            from={{ x: side * 4, y: side * 2 }}
            to={{ x: side * 4, y: side * 4 }}
            stroke="red"
            strokeWidth={2}
          />
        </Grid>
      </svg>

      {/* Start -> A -> b -> A -> End */}
      <svg width={cols * side} height={rows * side}>
        <Grid position={{ x, y }} side={side} size={{ rows, cols }}>
          {/* Start -> A */}
          <Line
            from={{ x: side * 2, y: 0 }}
            to={{ x: side * 2, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* A -> b */}
          <Line
            from={{ x: side * 2, y: side * 2 }}
            to={{ x: side * 4, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* A -> End */}
          <Line
            from={{ x: side * 2, y: side * 2 }}
            to={{ x: side * 2, y: side * 4 }}
            stroke="red"
            strokeWidth={2}
          />
        </Grid>
      </svg>

      {/* Start -> b -> End */}
      <svg width={cols * side} height={rows * side}>
        <Grid position={{ x, y }} side={side} size={{ rows, cols }}>
          {/* Start -> b */}
          <Line
            from={{ x: side * 4, y: 0 }}
            to={{ x: side * 4, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* b -> End */}
          <Line
            from={{ x: side * 4, y: side * 2 }}
            to={{ x: side * 4, y: side * 4 }}
            stroke="red"
            strokeWidth={2}
          />
        </Grid>
      </svg>

      {/* Start -> b -> A -> c -> A -> End */}
      <svg width={cols * side} height={rows * side}>
        <Grid position={{ x, y }} side={side} size={{ rows, cols }}>
          {/* Start -> b */}
          <Line
            from={{ x: side * 4, y: 0 }}
            to={{ x: side * 4, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* A -> b */}
          <Line
            from={{ x: side * 2, y: side * 2 }}
            to={{ x: side * 4, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* A -> End */}
          <Line
            from={{ x: side * 2, y: side * 2 }}
            to={{ x: side * 2, y: side * 4 }}
            stroke="red"
            strokeWidth={2}
          />
        </Grid>
      </svg>

      {/* Start -> b -> A -> End */}
      <svg width={cols * side} height={rows * side}>
        <Grid position={{ x, y }} side={side} size={{ rows, cols }}>
          {/* Start -> b */}
          <Line
            from={{ x: side * 4, y: 0 }}
            to={{ x: side * 4, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* c -> A -> b*/}
          <Line
            from={{ x: 0, y: side * 2 }}
            to={{ x: side * 4, y: side * 2 }}
            stroke="red"
            strokeWidth={2}
          />
          {/* A -> End */}
          <Line
            from={{ x: side * 2, y: side * 2 }}
            to={{ x: side * 2, y: side * 4 }}
            stroke="red"
            strokeWidth={2}
          />
        </Grid>
      </svg>
    </div>
  );
}

export function Test() {
  const [position, setPosition] = useState<Position>({
    x: 10,
    y: 10,
    direction: "right",
  });

  function calculatePosition({ x, y, direction }: Position): Position {
    switch (direction) {
      case "right": {
        if (x < 100) return { x: x + 10, y, direction };
        return { x: x - 10, y, direction: "left" };
      }
      case "left": {
        if (x > 10) return { x: x - 10, y, direction };
        return { x: x + 10, y, direction: "right" };
      }
      default: {
        return { x, y, direction };
      }
    }
  }

  useEffect(() => {
    setInterval(() => {
      setPosition((position) => calculatePosition(position));
    }, 100);
  }, []);

  return (
    <div className="border">
      {JSON.stringify(position)}
      <svg width={1000} height={100}>
        {renderSmallCave({ position })}
      </svg>
    </div>
  );
}

// {/* {renderGrid({position: {x,y}, grid: makeGrid(side), children: [
//       renderCave({position: {x: side * 2, y: side * 3}, width: side, height: side, label: "A", children: [
//         renderLine({from: {x: side, y: side * .5}, to: {x: side * 2.35, y: side * .5}})
//         ]}),
//       renderSmallCave({position: {x: side * .175, y: side * 3.175}, width: side * .65, height: side * .65, label: "c", children: [
//         renderLine({from: {x: side * .65, y: side * .35}, to: {x: side * 1.85, y: side * .35}})
//         ]}),
//       renderSmallCave({position: {x: side * 4.175, y: side * 3.175}, width: side * .65, height: side * .65, label: "b", children: [
//         renderLine({from: {x: side * .65, y: side * .35}, to: {x: side * 2, y: side * .35}})
//       ]}),
//       renderSmallCave({position: {x: side * 6.175, y: side * 3.175}, width: side*.65, height: side*.65, label: "d"})
//     ]
//   })} */}
