/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const Button = css({
  width: "354px",
  height: "42px",
  border: "none",
  borderRadius: "8px",
  color: "#000",
  fontSize: "14px",
  fontWeight: "600",
});

const KakaoTheme = css({
  background: "#FEE500",
  color: "#000",
});

const GoogleTheme = css({
  backgroundColor: "#fff",
  border: "1px solid #000",
  color: "#000",
});
const AppleTheme = css({
  backgroundColor: "#0a0a0a",
  color: "#fff",
});

export { Button, KakaoTheme, GoogleTheme, AppleTheme };
