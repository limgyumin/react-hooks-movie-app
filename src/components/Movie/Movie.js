import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

const sliceText = (string, maxLen) => {
  if (string.length > maxLen) {
    return string.slice(0, maxLen) + "...";
  } else {
    return string;
  }
};

const Movie = ({ id, year, title, summary, poster, genres }) => {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie__box">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h1 className="movie__title">{sliceText(title, 12)}</h1>
          <h3 className="movie__year">{year}</h3>
        </div>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
