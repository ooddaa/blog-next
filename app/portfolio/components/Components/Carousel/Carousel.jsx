import React, { useState } from "react";
import './carousel.css'

function CarouselItem({ item, id, getPrevious, getNext }) {
  const { text, author, position, img } = item;
  return (
    <div className="carousel-item">
      <img src={img.src} className="carousel-item__pic" alt="" />
      <blockquote className="testimonial">
        <p className="testimonial__comment">{text}</p>
        <p className="testimonial__author">{author}</p>
        <p className="testimonial__position">{position}</p>
      </blockquote>
      <button className="btn btn--left" onClick={() => getPrevious(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="btn__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="btn btn--right" onClick={() => getNext(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="btn__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

const items = [
  {
    id: 0,
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
    nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit quo
    sunt hic illo fugit.`,
    author: "Maria de Almeida",
    position: "Senior Product Manager at EDP Comercial",
    img: {
      src: "/maria.jpg",
    },
  },
  {
    id: 1,
    text: `Loooooooooool`,
    author: "Indigo",
    position: "Totallfy from another planet",
    img: {
      src: "/avatar.jpeg",
    },
  },
];

function Carousel() {
  const [id, setId] = useState(0);

  function getPrevious(id) {
    setId(id - 1 < 0 ? items.length - 1 : id - 1);
  }

  function getNext(id) {
    setId(id + 1 >= items.length ? 0 : id + 1);
  }

  return (
    <div className="carousel">
      {
        <CarouselItem
          item={items[id]}
          id={id}
          getPrevious={getPrevious}
          getNext={getNext}
        ></CarouselItem>
      }
      <div className="dots">
        {items.map((item, i) => {
          return <div key={i} className={`dot ${i === id && "full"}`}></div>;
        })}
      </div>
    </div>
  );
}

export const carousel = { component: <Carousel/>, description: (<div>Carousel component.</div>)}
