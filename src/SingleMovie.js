import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovieDetails(data);
        } else {
          setError(data.Error);
        }

        setIsLoading(false);
      } catch (error) {
        setError("An error occurred while fetching movie details.");
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-container">
        <div className="loading" style={{ color: "white" }}>
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="movie-container">
        <div className="error-message">Error: {error}</div>
      </div>
    );
  }

  if (!movieDetails) {
    return (
      <div className="movie-container">
        <div className="error-message">
          No movie details available for the given ID.
        </div>
      </div>
    );
  }

  const { Title, Poster, Year, Type } = movieDetails;

  return (
    <div className="movie-container">
      <div className="inner-box">
        <img className="poster-image" src={Poster} alt={`${Title} Poster`} />
        <div className="movie-details">
          <h3>{Title}</h3>
          <h3>{Year}</h3>
          <h3>{Type}</h3>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
