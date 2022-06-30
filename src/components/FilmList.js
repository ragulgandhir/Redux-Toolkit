import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../reduxtoolkit/filmSlice";

export const FilmList = () => {
  const film = useSelector((state) => state.film);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <div>
      <h2>List of Movies:</h2>
      {film.loading && <div>Loading...</div>}
      {!film.loading && film.error ? <div>Error: {film.error}</div> : null}
      {!film.loading && film.films.length ? (
        <ul>
          {film.films.map((film) => (
            <div key={film.id}>
              <img className='imgStyle' src={film.image} alt="" />
              <h2>Title: {film.title}</h2>
              <h3>Original_Title: {film.original_title}</h3>
              <h4>Director : {film.director}</h4>
              <h5>Release_Date : {film.release_date}</h5>
              <h6>Playtime : {film.running_time}</h6>
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
