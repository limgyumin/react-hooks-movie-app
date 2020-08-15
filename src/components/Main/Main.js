import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import Movie from "../Movie";
import "./Main.css";
import axios from "axios";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const getMovieAPI = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    setMovie(movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovieAPI();
  }, []);

  useEffect(() => {
    if (movie !== undefined && movie !== null) {
      setFilteredMovies(
        movie.filter((movie) => {
          return movie.title.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  }, [search, movie]);

  return (
    <section className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className="movies">
          <input
            type="text"
            placeholder="Search With Movie Name..."
            onChange={(e) => setSearch(e.target.value)}
          />
          {filteredMovies.map((movie, index) => (
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
