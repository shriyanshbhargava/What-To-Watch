import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDataBase = {
  Action: [
    {
      img: "./img/big-boys.jpg",
      name: "Bad Boys For Life",
      rating: "3/5"
    },
    {
      img: "./img/download.jpg",
      name: "Mulan",
      rating: "2.7/5"
    },
    {
      img: "./img/z.jpg",
      name: "Fast & Furious Presents: Hobbs & Shaw",
      rating: "3.5/5"
    },
    {
      img: "./img/y.jpg",
      name: "Angel Has Fallen",
      rating: "4/5"
    }
  ],

  Animation: [
    {
      img: "./img/a.jpg",
      name: "The Boss Baby",
      rating: "5/5"
    },
    {
      img: "./img/hari puttar.jpg",
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    },
    {
      img: "./img/x.jpg",
      name: "Abominable",
      rating: "2/5"
    },
    {
      img: "./img/w.jpg",
      name: "Justice League Dark: Apokolips War",
      rating: "3/5"
    }
  ],
  Comedy: [
    {
      img: "./img/b.jpg",
      name: "Dolittle",
      rating: "3.5/5"
    },
    {
      img: "./img/c.jpg",
      name: "The Grinch",
      rating: "4/5"
    },
    {
      img: "./img/aa.jpg",
      name: "Ocean's 8",
      rating: "4/5"
    },
    {
      img: "./img/bb.jpg",
      name: "Knives Out",
      rating: "3/5"
    }
  ],
  Documentary: [
    {
      img: "./img/d.jpg",
      name: "The Great Hack",
      rating: "3.5/5"
    },
    {
      img: "./img/e.jpg",
      name: "The Game Changers",
      rating: "4/5"
    },
    {
      img: "./img/cc.jpg",
      name: "Rising Phoenix",
      rating: "4/5"
    },
    {
      img: "./img/dd.jpg",
      name: "Ronaldo",
      rating: "2.7/5"
    }
  ],

  Drama: [
    {
      img: "./img/f.jpg",
      name: "Little Women",
      rating: "4/5"
    },
    {
      img: "./img/g.jpg",
      name: "#Alive",
      rating: "3/5"
    },
    {
      img: "./img/ee.jpg",
      name: "Ford v Ferrari",
      rating: "4/5"
    },
    {
      img: "./img/ff.jpg",
      name: "Palasa 1978",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <div className="navbar">
        <h1> 🤔 What to Watch </h1>
        <p style={{ fontSize: "smaller" }}>
          {" "}
          Checkout my favorite movies. Select a genre to get started{" "}
        </p>
      </div>
      <div className="genre">
        {Object.keys(moviesDataBase).map((genre) => (
          <button
            className="btn-genre"
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="cards" style={{ textAlign: "left" }}>
        <div style={{ display: "flex", padding: "20px" }}>
          {moviesDataBase[selectedGenre].map((movie) => (
            <div
              key={movie.name}
              style={{
                listStyle: "none",
                margin: "5rem",
                borderRadius: "0.5rem",
                width: "1000px"
              }}
            >
              {" "}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingBottom: "5px",
                  width: "20px"
                }}
              >
                <img src={movie.img} width="180px" alt="" /> {movie.image}{" "}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingBottom: "5px"
                }}
              >
                {" "}
                {movie.name}{" "}
              </div>
              <div style={{ fontSize: "12px" }}> {movie.rating} </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        Made By{" "}
        <a href="https://shriyanshhh.netlify.app/">Shriyansh Bhargava</a>
      </footer>
    </div>
  );
}
