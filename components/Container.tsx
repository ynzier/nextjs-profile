import { ReactNode, FunctionComponent } from "react";

type Props = {
  children: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="h-screen snap-y snap-mandatory w-screen overflow-scroll scroll-smooth">
      {children}
    </div>
  );
};

export default Container;
