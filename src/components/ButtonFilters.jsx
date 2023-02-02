import React, { useContext, useState } from "react";
import { MovieContext } from "../App";
import { genres } from "../untils";

const ButtonFilters = () => {
  const [active, setActive] = useState(0);
  const { movies, setFilterMovie } = useContext(MovieContext);

  const handleClickFilter = (id) => {
    setActive(id);
    const filterMovie = movies.filter((movie) => movie.genre_ids.includes(id));
    if (id === 0) {
      setFilterMovie(movies);
    } else {
      setFilterMovie(filterMovie);
    }
  };

  return (
    <div className="flex flex-wrap gap-16 rounded items-center justify-center mt-20 w-full">
      {genres.map((item) => (
        <button
          key={item.id}
          className={
            active === item.id
              ? "active"
              : undefined
          }
          onClick={() => handleClickFilter(item.id)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ButtonFilters;
