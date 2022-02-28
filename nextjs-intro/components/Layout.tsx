import Navbar from "./Navbar";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
