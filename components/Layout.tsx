import { ReactNode, FunctionComponent } from "react";

type Props = { children: ReactNode };

const Layout: FunctionComponent = ({ children }: Props) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;
