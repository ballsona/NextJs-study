import React from "react";
import { LoginButton } from "../atoms/LoginButton";

export const Login = () => {
  return (
    <>
      <h1>로그인</h1>
      <LoginButton social={"kakao"} />
      <LoginButton social={"google"} />
      <LoginButton social={"apple"} />
    </>
  );
};
