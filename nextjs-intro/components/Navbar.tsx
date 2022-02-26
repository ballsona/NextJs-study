import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? "active" : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`${styles.link} ${
            router.pathname === "/about" ? "active" : ""
          }`}
        >
          About
        </a>
      </Link>

      <style jsx>
        {`
          nav {
            background-color: #d8d8d8;
            display: flex;
            justify-content: space-between;
            padding: 20px;
          }
          .active {
            color: yellow;
          }
        `}
      </style>
    </nav>
  );
}
