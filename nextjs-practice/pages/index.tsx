import React from "react";
import { NextPage } from "next";
import { Login } from "../src/components/common/molecules/Login";
import { LoginButton } from "../src/components/common/atoms/LoginButton";

const Home: NextPage = () => {
  return (
    <>
      <Login />
      <LoginButton social={"kakao"} />
    </>
  );
};

export default Home;
