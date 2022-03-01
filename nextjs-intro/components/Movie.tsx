import Link from "next/link";
import { useRouter } from "next/router";

interface movieProps {
  id: number;
  title: string;
  poster: string;
}

export default function Movie({ id, title, poster }: movieProps) {
  const router = useRouter();
  const onClick = (id: number) => {
    router.push({
      pathname: `/movies/${id}`,
      query: {
        id,
        title,
        poster,
      },
    });
  };
  return (
    <>
      <div className="movie-wrapper" onClick={() => onClick(id)}>
        {/* <Link href={`/movies/${id}`} passHref> */}
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
        <div className="title">{title}</div>
        {/* </Link> */}
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
