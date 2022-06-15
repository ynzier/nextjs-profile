import { FunctionComponent, useEffect } from "react";
import { motion } from "framer-motion";
import { RandomReveal } from "react-random-reveal";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaAws,
  FaServer,
  FaNode,
  FaCubes,
  FaCode,
  FaSmile,
} from "react-icons/fa";
import { MdDesignServices, MdWork } from "react-icons/md";
import { useRouter } from "next/router";
type Props = {};

const Service: FunctionComponent = (props: Props) => {
  const [ref, inView] = useInView();
  const router = useRouter();
  useEffect(() => {
    if (inView) {
      document.title = "Kunut Chirdchai | Actions";
      router.push("/", "/actions", { shallow: true });
    }

    return () => {};
  }, [inView]);

  return (
    <div className="h-full md:h-screen w-full grid grid-rows-5 text-neutral-50">
      <div className="flex flex-col bg-neutral-800 h-full p-12 w-full z-10 row-span-4">
        <div className="flex-row flex items-center">
          <div className="bg-red-300 h-1 w-6 md:w-12  mr-2 md:mr-4" />
          <p className="text-lg md:text-4xl font-bold">Actions</p>
        </div>
        <p className="text-2xl md:text-7xl font-extrabold">
          <RandomReveal
            isPlaying={inView}
            duration={2}
            characters="What I Do"
            characterSet={["W", "h", "a", "I", "D", "o"]}
          />
        </p>
        <div
          ref={ref}
          className="hidden md:flex flex-grow w-4/5 m-12 self-center"
        >
          <div className="grid h-full w-full grid-rows-2 gap-8">
            <div className="about-row">
              <motion.div
                className="about-child"
                initial={{
                  opacity: 0,
                  translateX: -50,
                  translateY: -50,
                }}
                animate={inView && { opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: 0 * 0.2 }}
              >
                <FaReact size={"50px"} className="about-icon" />
                <h4 className="text-xl text-center">Front-end React</h4>
              </motion.div>
              <motion.div
                className="about-child border-x-2"
                initial={{
                  opacity: 0,
                  translateY: -50,
                }}
                animate={inView && { opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: 1 * 0.2 }}
              >
                <FaNode size={"50px"} className="about-icon" />
                <h4 className="text-xl text-center">Back-end NodeJS</h4>
              </motion.div>
              <motion.div
                className="about-child"
                initial={{
                  opacity: 0,
                  translateX: 50,
                  translateY: -50,
                }}
                animate={inView && { opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: 2 * 0.2 }}
              >
                <FaAws size={"50px"} className="about-icon" />
                <h4 className="text-xl text-center">AWS Management</h4>
              </motion.div>
            </div>
            <div className="about-row">
              <motion.div
                className="about-child"
                initial={{
                  opacity: 0,
                  translateX: -50,
                  translateY: 50,
                }}
                animate={inView && { opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: 3 * 0.2 }}
              >
                <MdDesignServices size={"50px"} className="about-icon" />
                <h4 className="text-xl text-center">
                  System Analysis and Design
                </h4>
              </motion.div>
              <motion.div
                className="about-child border-x-2"
                initial={{
                  opacity: 0,
                  translateX: 0,
                  translateY: 50,
                }}
                animate={inView && { opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: 4 * 0.2 }}
              >
                <FaServer size={"50px"} className="about-icon" />
                <h4 className="text-xl text-center">Linux Server Management</h4>
              </motion.div>
              <motion.div
                className="about-child"
                initial={{
                  opacity: 0,
                  translateX: 50,
                  translateY: -50,
                }}
                animate={inView && { opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: 5 * 0.2 }}
              >
                <FaCubes size={"50px"} className="about-icon" />
                <h4 className="text-xl text-center">Blockchain Technology</h4>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:hidden grid grid-cols-2">
          <div className="about-child">
            <FaReact size={"50px"} className="about-icon" />
            <h4 className="text-xl text-center">Front-end React</h4>
          </div>
          <div className="about-child">
            <FaNode size={"50px"} className="about-icon" />
            <h4 className="text-xl text-center">Back-end NodeJS</h4>
          </div>
          <div className="about-child">
            <FaAws size={"50px"} className="about-icon" />
            <h4 className="text-xl text-center">AWS Management</h4>
          </div>
          <div className="about-child">
            <MdDesignServices size={"50px"} className="about-icon" />
            <h4 className="text-xl text-center">System Analysis and Design</h4>
          </div>
          <div className="about-child">
            <FaServer size={"50px"} className="about-icon" />
            <h4 className="text-xl text-center">Linux Server Management</h4>
          </div>
          <div className="about-child">
            <FaCubes size={"50px"} className="about-icon" />
            <h4 className="text-xl text-center">Blockchain Technology</h4>
          </div>
        </div>
      </div>

      <div className="flex bg-neutral-500/80 h-full w-full z-10 row-span-1 items-center justify-evenly p-4 text-lg">
        <div className="items-center flex-col flex">
          <FaSmile className="about-icon" />
          <span>
            <span className="text-3xl">
              <RandomReveal
                isPlaying={inView}
                duration={2}
                characters="100"
                characterSet={[
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                ]}
              />
            </span>
            <span className="align-top text-teal-300">+</span>
          </span>
          <span className="text-sm">Happy Users</span>
        </div>
        <div className="items-center flex-col flex">
          <MdWork className="about-icon" />
          <span>
            <span className="text-3xl">2</span>
            <span className="align-top text-teal-300">+</span>
          </span>
          <span className="text-sm">Years of experience</span>
        </div>
        <div className="items-center flex-col flex">
          <FaCode className="about-icon" />
          <span>
            <span className="text-3xl">
              <RandomReveal
                isPlaying={inView}
                duration={2}
                characters="50000"
                characterSet={[
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                ]}
              />
            </span>
            <span className="align-top text-teal-300">+</span>
          </span>
          <span className="text-sm">Lines of Code</span>
        </div>
      </div>
    </div>
  );
};

export default Service;
