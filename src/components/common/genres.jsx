import React from "react";

const Genres = (props) => {
  const { onGenreChange, genres } = props;
  return (
    <ul className="list-group">
      <li key={"all"} className="list-group-item active" aria-current="true">
        All Genres
      </li>
      {genres.map((genre) => (
        <li
          key={genre._id}
          className="list-group-item"
          onClick={() => onGenreChange(genre.name)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default Genres;
