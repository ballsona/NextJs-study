/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { NextPage } from "next";

const style = css`
  color: hotpink;
`;
const style2 = css({
  textDecoration: "underline",
});
const ExComponent = ({ children }: { children: JSX.Element }) => (
  <div css={style}>
    this is hotpink color
    {children}
  </div>
);

const ExComponent2 = () => <div css={style2}>this is underline</div>;

type ButtonType = {
  primary?: boolean;
};

const Button = styled.button<ButtonType>`
  color: ${(props) => (props.primary ? "hotpink" : "none")};
`;

const Button2 = styled.button<ButtonType>(
  {
    padding: 10,
    backgroundColor: "hotpink",
  },
  (props) => ({ color: props.primary ? "green" : "none" }),
);

const Home: NextPage = () => {
  return (
    <>
      <Button primary>버튼1</Button>
      <Button>버튼2</Button>
      <Button2>버튼3</Button2>
    </>
  );
};

export default Home;
