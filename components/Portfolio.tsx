import { FunctionComponent, useEffect } from "react";
import { RandomReveal } from "react-random-reveal";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ProjectCard from "components/ProjectCard";
import { useRouter } from "next/router";
type Props = {};
type TSProject = {
  cardName: string;
  cardDetail: string;
  techStack: string[];
};
const projects: TSProject[] = [
  {
    cardName: "Codesom ERP",
    cardDetail:
      "Enterprise resource planning (ERP) consists of technologies and systems companies use to manage and integrate their core business processes. such as human resources, customer relations management, warehouse management, financial, supply chain and more.",
    techStack: [
      "React",
      "React Native",
      "MySQL",
      "Javascript",
      "AWS",
      "NodeJS",
      "Typescript",
      "RESTful API",
    ],
  },
  {
    cardName: "GoGo Care",
    cardDetail:
      "application to help elderly patients or people who can't even take care of themselves. How will this application help them? So this application will match caregivers who will take care of patients all the way, even home-hospital and hospital-home.",
    techStack: ["React", "React Native"],
  },
  {
    cardName: "KL Warranty Management",
    cardDetail:
      "A management system I designed and developed the entire system by myself for my employer. The main purposes of this system are to let employers create and manage their products at a control panel site. Customers can track products by warranty ID through their customer site.",
    techStack: [
      "React",
      "React Native",
      "MongoDB",
      "Javascript",
      "AWS",
      "NodeJS",
    ],
  },
  {
    cardName: "WAX CPU Bank",
    cardDetail:
      "This project is related to blockchain technology. Since then, it has taken on a life of its own, with interest coming from many quarters. It's a CPU bank on WAX Chain (wax.io).",
    techStack: ["React", "Web3", "Javascript", "AWS", "NodeJS"],
  },
];
const Portfolio: FunctionComponent = (props: Props) => {
  const [ref, inView] = useInView();
  const router = useRouter();
  useEffect(() => {
    if (inView) {
      document.title = "Kunut Chirdchai | Portfolio";
      router.push("/", "/portfolio", { shallow: true });
    }

    return () => {};
  }, [inView]);

  return (
    <div
      ref={ref}
      className="h-full md:h-screen md:w-screen w-full grid grid-cols-7 text-neutral-50 overflow-hidden"
    >
      <div className="col-span-1 h-screen z-10 bg-neutral-300/80 flex-col hidden md:flex items-center justify-center">
        <p className="block portfolio text-7xl uppercase font-extrabold ">
          <RandomReveal
            isPlaying={inView}
            duration={3}
            characters="portfolio"
          />
        </p>
      </div>
      <motion.div className="hidden md:flex flex-col w-full col-span-6 overflow-y-scroll bg-neutral-800 z-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.cardName}
            cardName={project.cardName}
            cardDetail={project.cardDetail}
            techStack={project.techStack}
          />
        ))}
      </motion.div>
      <motion.div className="md:hidden flex flex-col bg-neutral-800 z-10 w-screen p-12">
        <h2 className="text-2xl uppercase font-bold mb-4">PORTFOLIO</h2>
        {projects.map((project) => (
          <div key={project.cardName} className="mb-4">
            <p className="font-bold mb-2">{project.cardName}</p>
            <p className="mb-2">
              Tech Stack: {project.techStack.map((stack) => stack + " ")}
            </p>
            <p>{project.cardDetail}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
