import React from "react";
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

import {
  Button,
  KakaoTheme,
  AppleTheme,
  GoogleTheme,
} from "./LoginButton.style";

interface LoginButtonProps {
  social: string;
}

interface socialThemesType {
  [key: string]: {
    label: string;
    style: any;
  };
}

const socialThemes: socialThemesType = {
  kakao: {
    label: "카카오 로그인",
    style: KakaoTheme,
  },
  apple: {
    label: "Apple로 계속하기",
    style: AppleTheme,
  },
  google: {
    label: "Google로 계속하기",
    style: GoogleTheme,
  },
};

export const LoginButton = ({ social = "kakao" }: LoginButtonProps) => {
  const socialTheme = socialThemes[social].style;
  return (
    <button css={[Button, socialTheme]}>{socialThemes[social].label}</button>
  );
};
