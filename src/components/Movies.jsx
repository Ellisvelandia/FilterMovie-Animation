import { motion } from "framer-motion";
import React, { useContext } from "react";
import { MovieContext } from "../App";

const Movies = () => {
  const { filterMovie } = useContext(MovieContext);

  return (
    <div className="grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-auto h-auto  gap-4 my-4 px-8">
      {filterMovie.map((movie) => (
        <motion.div
          key={movie.id}
          className="relative grid border shadow-xl text-ellipsis text-center"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
            className="aspect-video rounded"
          />
          <h2 className="my-2 absolute bottom-2 text-white text-xl font-bold px-2">
            {movie.title}
          </h2>
        </motion.div>
      ))}
    </div>
  );
};

export default Movies;
