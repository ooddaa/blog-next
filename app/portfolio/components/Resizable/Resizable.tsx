/** @jsxImportSource @emotion/react */
import { MouseEventHandler, useState } from "react";

interface MouseStartPosition {
  initX: number;
  initY: number;
}

interface ChildState {
  width: string;
  height: string;
  [key: string]: any;
}

interface ResizableProps {
  height: string;
  width: string;
  border?: boolean;
  horizontal?: boolean;
  vertical?: boolean;
  splitRatios?: number[];
  children?: JSX.Element[];
  _css?: { [key: string]: string | number };
  dividerCSS?: { [key: string]: string | number | any; width: string };
}

const shareWidth = (width: string, dividerWidth: string): string => {
  let unit = "px";
  const rv = `${(parseFloat(width) - parseFloat(dividerWidth)) / 2}${unit}`;
  return rv
};

/* We should take measurements of children's top element and wrap Resizable  */
function Resizable({
  height,
  width,
  border,
  horizontal,
  vertical,
  _css,
  dividerCSS,
  children,
}: ResizableProps) {
  // console.log(_css);
  const [parent] = useState({
    height,
    width,
    horizontal,
    vertical,
  });

  const [divider] = useState<ChildState>({
    width: (dividerCSS?.width && dividerCSS.width) ?? "10px",
    height: parent.height ? "auto" : height ?? "10px",
    // height: '100%' 
  });

  /**
   * CHILDREN WIDTH:
   * 1. if Resizable has width -> share it equally
   * 2. if not -> use child's width
   * 3. -> make it 100 just to notice problem
   */
  const [childLeft, setChildLeft] = useState<ChildState>({
    // width: '50%',
    width: width
      ? shareWidth(width, divider.width)
      : children !== undefined
      ? children[0].props?.width
      : "50%",
    // height: '100%',
        height: height ?? (children !== undefined ? children[0].props?.height : "100%"),
  });

  const [childRight, setChildRight] = useState<ChildState>({
    width: width
      ? shareWidth(width, divider.width)
      : children !== undefined
      ? children[1].props?.width
      : "50%",
    height:
      height ?? (children !== undefined ? children[1].props?.height : "100%"),
    // width: '50%',
    // height: '100%'
  });

  const handleMouseDown: MouseEventHandler<HTMLElement> = (e) => {
    let { clientX, clientY } = e;

    /* record where mouse was when it clicked the divider */
    const newState: MouseStartPosition = {
      initX: clientX,
      initY: clientY,
    };

    /* we need to close over current scope to preserve mouse position */
    const fn = handleMouseMove(newState);

    /* set up listeners */
    window.addEventListener("mousemove", fn);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", fn);
    });
  };

  const normalizeX = (totalMovedX: number): number => {
    let leftBoundary = parseFloat(childLeft.width) * -1;
    let rightBoundary = parseFloat(childRight.width);
    if (totalMovedX <= leftBoundary) return leftBoundary;
    if (totalMovedX >= rightBoundary) return rightBoundary;
    return totalMovedX;
  };

  /**
   * While mouse is moving, child--left & child--right's widths are
   * adjusted by how much cursor travelled horizontally.
   * Implementation uses closure as we set up event listeners that call
   * this function from another event handler and need to close over that state.
   * @param state
   * @returns {Function}
   */
  const handleMouseMove = (state: MouseStartPosition) => {
    const inner: any = (e: any) => {
      /* recevie current cursor position */
      let { clientX, clientY } = e;

      if (horizontal) {
        /* calc horizontal change */
        let lastTimeMovedX = clientX - state.initX;
        /* normalize - don't let divider leave children */
        let totalMovedX = normalizeX(lastTimeMovedX);

        /* adjust children widths accordingly */
        setChildLeft({
          ...childLeft,
          width: `${parseFloat(childLeft.width) + totalMovedX}px`,
        });

        setChildRight({
          ...childRight,
          width: `${parseFloat(childRight.width) + totalMovedX * -1}px`,
        });
      } else if (vertical) {
        // /* calc horizontal change */
        // let lastTimeMovedY = clientY - state.initY;
        // /* normalize - don't let divider leave children */
        // let totalMovedY = normalizeX(lastTimeMovedY);
        // /* adjust children widths accordingly */
        // setChildLeft({
        //   ...childLeft,
        //   height: childLeft.height + totalMovedY,
        // });
        // setChildRight({
        //   ...childRight,
        //   height: childRight.height + totalMovedY * -1,
        // });
      }
    };
    return inner;
  };

  /**
   * Atm I cannot do more than 2 children. Not even sure there is a good
   * case for 2+ children.
   * @param children
   * @returns {JSX.Element[]}
   */
  const processChildren = (children: JSX.Element[]): JSX.Element[] => {
    const [childA, childB] = children.map((child, i) => {
      let { children, className, css, ...otherProps } = child.props;
      let classNames = [
        className,
        i === 0 ? "child--left" : "child--right",
      ].join(" ");
      const width = i === 0 ? childLeft.width : childRight.width;
      let height;
      if (parent.height) {
        height = "auto";
      } else {
        height = i === 0 ? childLeft.height : childRight.height;
      }

      const childCSS = {
        width,
        height,
        overflow: "scroll",
      };

      const rv = (
        <div
          key={i}
          className={classNames}
          css={
            css
              ? { ...childCSS, ...css }
              : {
                  ...childCSS,
                  backgroundColor: "transparent",
                }
          }
          {...otherProps}
        >
          {children ?? "no children on child--left"}
        </div>
      );
      return rv;
    });

    const dividerComponentCSS = {
      width: divider.width,
      height: divider.height,
      cursor: "col-resize",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f3f4f6",
      border: "1px solid #e5e7eb",
      borderRadius: "5px",
    };

    const dividerComponent = (
      <div
        className="divider"
        onMouseDown={handleMouseDown}
        css={
          dividerCSS
            ? { ...dividerComponentCSS, ...dividerCSS }
            : {
                ...dividerComponentCSS,
                "&:hover .divider-handle": {
                  backgroundColor: "#e5e7eb",
                  // backgroundColor: "#d1d5db",
                  transitionDelay: "80ms",
                },
              }
        }
      >
        <div
          className="divider-handle"
          css={{
            height: "80px",
            width: "4px",
            backgroundColor: "#e5e7eb",
            borderRadius: "3px",
          }}
        ></div>
      </div>
    );

    return [childA, dividerComponent, childB];
  };

  const resizableContainerCSS = {
    width,
    height,
    display: "flex",
  };
  return (
    <div
      className="resizable-container"
      css={
        _css
          ? { ...resizableContainerCSS, ..._css }
          : {
              ...resizableContainerCSS,
              // margin: "50px",
              border: border ? "1px solid grey" : "none",
            }
      }
    >
      {children && processChildren(children)}
    </div>
  );
}

export default Resizable;
