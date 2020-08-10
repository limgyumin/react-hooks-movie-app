import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import Movie from "../Movie";
import "./Main.css";
import axios from "axios";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();

  const getMovieAPI = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    setMovies(movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovieAPI();
  }, []);

  return (
    <section className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className="movies">
          {movies.map((movie, index) => (
            <Movie
              key={index}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Main;
