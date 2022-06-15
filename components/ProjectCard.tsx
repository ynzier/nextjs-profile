import { FunctionComponent, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
type Props = {
  cardName: string;
  cardDetail: string;
  techStack: string[];
  children?: string;
};

const ProjectCard: FunctionComponent<Props> = ({
  cardName,
  cardDetail,
  techStack,
  children,
}: Props) => {
  const [viewRef, inView] = useInView();
  return (
    <motion.div
      ref={viewRef}
      className="flex flex-col flex-1 items-center py-8 px-12 text-xl overflow-y-scroll xl:overflow-hidden"
      transition={{ duration: 2 }}
    >
      <h2 className="text-2xl font-bold">{cardName}</h2>
      {
        <>
          <motion.p
            className="mt-4 indent-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
          >
            {cardDetail}
          </motion.p>
          <motion.p
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
          >
            {techStack.map((stack) => stack + " ")}
          </motion.p>
        </>
      }
    </motion.div>
  );
};

export default ProjectCard;
