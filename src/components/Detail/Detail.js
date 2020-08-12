import React, { useEffect } from "react";
import "./Detail.css";

const Detail = (props) => {
  console.log(props);
  const {
    history,
    location: { state },
  } = props;

  useEffect(() => {
    if (state === undefined) {
      history.push("/");
    }
  }, []);

  return (
    <div className="detail__box">
      <div className="detail__img">
        <img
          src={state.poster}
          alt={state.title}
          title={state.title}
          className="detail__bg"
        />
      </div>
      <div className="detail__data">
        <img
          src={state.poster}
          alt={state.title}
          title={state.title}
          className="detail__poster"
        />
        <div className="detail__text">
          <h1 className="detail__title">{state.title}</h1>
          <h4 className="detail__year">{state.year}</h4>
          <ul className="detail__genre">
            {state.genres.map((genre, index) => (
              <li key={index} className="genre__genres">
                {genre}
              </li>
            ))}
          </ul>
          <h2 className="detail__summary">{state.summary}</h2>
        </div>
      </div>
    </div>
  );
};

export default Detail;
