import type { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="w-full max-w-300 m-auto">{children}</div>;
};

export default Container;
