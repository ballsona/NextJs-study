import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <Image src="/movie-logo.svg" width={30} height={30} alt="movie-logo" />
      <div className="router">
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/" ? "" : "active"}>About</a>
        </Link>
      </div>

      <style jsx>
        {`
          nav {
            // width: 500px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0px 0px 20px 4px rgba(110, 110, 110, 0.3);
          }
          a {
            font-weight: 700;
            padding: 10px;
          }
          .router {
            display: flex;
            justify-content: center;
          }
          .active {
            color: tomato;
          }
        `}
      </style>
    </nav>
  );
}
