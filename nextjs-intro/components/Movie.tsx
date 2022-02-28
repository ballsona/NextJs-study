import Image from "next/image";

type Props = {
  title: String;
  poster: String;
};

export default function Movie({ title, poster }: Props) {
  return (
    <>
      <div className="movie-wrapper">
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="poster" />
        <div className="title">{title}</div>
      </div>
      <style jsx>{`
        .movie-wrapper {
          margin: 10px;
          width: 200px;
        }
        img {
          width: 200px;
          border-radius: 7px;
        }
        img:hover {
          transform: scale(1.1);
          transition: 0.3s all;
        }
        .title {
          font-weight: 600;
          text-align: center;
          margin: 10px 0px;
        }
      `}</style>
    </>
  );
}
