import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
// import "../src/styles/Movies.css";
const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading" style={{ color: "white" }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="movie-page-container">
        <div className=" container grid grid-4-col">
          {movie.map((currentMovie) => {
            const { imdbID, Poster, Title } = currentMovie;
            const movieName = Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {movieName.length >= 15 ? `${movieName}...` : movieName}
                    </h2>
                    <img src={Poster} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
