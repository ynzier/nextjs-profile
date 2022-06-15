import { ReactNode, FunctionComponent } from "react";

type Props = { children: ReactNode };

const Section: FunctionComponent = ({ children }: Props) => {
  return (
    <section className="flex justify-center items-center md:snap-start min-h-screen">
      {children}
    </section>
  );
};

export default Section;
