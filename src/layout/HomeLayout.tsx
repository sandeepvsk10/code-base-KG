import type { ReactNode } from "react";

type HomeLayoutProps = {
  children?: ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>{children}</main>
  );
};

export default HomeLayout;
