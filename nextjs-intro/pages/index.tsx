import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Movie from "../components/Movie";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("/api/movies")).json();
      console.log(results);
      setMovies(results);
    })();
  }, []);
  return (
    <>
      <Seo title="Home" />
      {!movies && <h1>Loading</h1>}
      <div className="container">
        {movies?.map((movie: any) => (
          <Movie
            key={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
          />
        ))}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
