import Seo from "../components/Seo";
import Movie from "../components/Movie";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <>
      <Seo title="Home" />
      <div className="container">
        {results?.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
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

export async function getServerSideProps() {
  // 클라이언트가 아닌 서버쪽에서만 실행
  // API로부터 데이터를 모두 전달받기 전까지 사용자에게 아무것도 보여주지 않음.
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    //서버 사이드가 props를 페이지에게 전달
    props: {
      results,
    },
  };
}
