import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import ButtonFilters from "./components/ButtonFilters";
import Movies from "./components/Movies";

export const MovieContext = createContext();

const App = () => {
  const [movies, setmovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      setmovies(data.results);
      setFilterMovie(data.results);
    };
    fetchMovies();
  }, []);

  const value = {
    movies,
    filterMovie,
    setFilterMovie,
  };

  return (
    <>
      <MovieContext.Provider value={value}>
        <ButtonFilters />
        <Movies />
      </MovieContext.Provider>
    </>
  );
};

export default App;
