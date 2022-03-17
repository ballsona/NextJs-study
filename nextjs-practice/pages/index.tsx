import Axios from "axios";
import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div>
      {!session && (
        <>
          <a
            href={`/api/auth/signin`}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        </>
      )}
    </div>
  );
};

export default Home;
