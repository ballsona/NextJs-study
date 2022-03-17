import React from "react";

/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const selectColor = (text: string) => {
  switch (text) {
    case "kakao":
      return "yellow";
    case "apple":
      return "black";
    case "google":
      return "green";
  }
};

const Button = styled.button<{ social: string }>((props) => ({
  width: 300,
  height: 50,
  backgroundColor: selectColor(props.social),
  border: 0,
  borderRadius: 30,
  color: "#fff",
}));

interface SampleButtonProps {
  primary: boolean;
  social: string;
}
export default function SampleButton({
  primary = true,
  social = "kakao",
}: SampleButtonProps) {
  return <Button social={social}>{social}</Button>;
}
