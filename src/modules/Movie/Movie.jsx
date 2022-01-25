import React from "react";
import { useSelector } from "react-redux";
import { MovieData } from "./components/MovieData";
import { SearchMovie } from "./components/SearchMovie";

export default function Movie() {
  const data = useSelector((state) => state.movie.data);
  return (
    <div>
      <SearchMovie />
      <MovieData data={data} />
    </div>
  );
}
