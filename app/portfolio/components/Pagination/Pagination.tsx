import { useState } from "react";
import './pagination.css'

const chevronLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="pagination-chevron pagination-chevron-left"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const chevronRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="pagination-chevron pagination-chevron-right"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

interface Pages {
  pages: number;
}

function Pagination({ pages }: Pages): JSX.Element {
  // const pagesArr = [...Array(20).keys()].slice(1)
  const pagesArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

  const [{ from, to }, setIndices] = useState<{ from: number, to: number }>({ from: 0, to: 6 });
  const [displayedPages, setDisplayedPages] = useState<number[]>(pagesArr.slice(from, to));
  function update(newFrom: number, newTo: number) {
    setIndices({ from: newFrom, to: newTo });
    setDisplayedPages(pagesArr.slice(newFrom, newTo));
  }

  function movePagesLeft(): void {
    let newFrom = from - 6,
      newTo;

    if (newFrom <= 0) {
      newTo = 6;
      newFrom = 0;
    } else {
      newTo = to - 6;
    }

    update(newFrom, newTo)
  }

  function movePagesRight(): void {
    let newFrom,
      newTo = to + 6;

    newTo = Math.min(newTo, pagesArr.length);
    newFrom = newTo - 6;

    update(newFrom, newTo)
  }

  return (
    <div className="pagination pagination-center">
      <button className="pagination-btn pagination-btn-nav pagination-center" onClick={movePagesLeft}>
        {chevronLeft}
      </button>
      <>
        {displayedPages.map((page) => {
          return (
            <a className={`pagination-btn pagination-page-btn pagination-center`} key={page} href="#">
              {page}
            </a>
          );
        })}
      </>
      <button className="pagination-btn pagination-btn-nav pagination-center" onClick={movePagesRight}>
        {chevronRight}
      </button>
    </div>
  );
}

export default Pagination;
