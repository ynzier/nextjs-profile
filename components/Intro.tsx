import { answerNope, answerYes, getStatus } from "features/lookup/lookupSlice";
import { FunctionComponent, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";
import { GlitchText } from "glitch-text";
import { useRouter } from "next/router";

type Props = {};

const Intro: FunctionComponent = (props: Props) => {
  const [ref, inView] = useInView();
  const [errorRef, errorInView] = useInView();
  const animated = useAnimation();
  const errorAnimated = useAnimation();
  const status = useSelector(getStatus);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (inView)
      animated.start({
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 2.4,
          stiffness: 260,
          damping: 20,
        },
      });
    if (errorInView)
      errorAnimated.start({
        x: 0,
        scale: 1,
        transition: { duration: 0.4 },
      });

    if (inView) {
      document.title = "Kunut Chirdchai | Profile";
      router.push("/", "/", { shallow: true });
    }
    return () => {};
  }, [inView, errorInView]);

  return (
    <>
      <div className="p-4 flex overflow-hidden">
        <div className="z-10 md:p-8 bg-white flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="flex-1 md:px-16 py-16"
            initial={{ x: "-100vh" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex-row flex items-center">
              <div className="bg-red-300 h-1 w-12 mr-4" />
              <p className="text-xl">Hello world, I'm</p>
            </div>
            <h2 className="text-6xl md:text-8xl text-right font-extrabold">
              <GlitchText theme="blue" text={"Kunut"} />
            </h2>
            <h2 className="text-6xl md:text-8xl text-right font-extrabold">
              <GlitchText theme="blue" text={"Chirdchai"} />
            </h2>
            <span className="text-4xl text-teal-300 text-right font-bold">
              <Typewriter
                options={{
                  strings: ["Software Engineer", "React/NodeJS"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <div className="w-full flex justify-center items-center mt-8">
              <a
                href="/assets/KunutCV.pdf"
                target="_blank"
                className="btn hover:cursor-pointer text-neutral-400 animate-bounce duration-500"
              >
                Download CV
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100vh" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className={`flex w-96 flex-col px-16 md:px-0 ${
              status === "looking" ? "hidden" : "block"
            }`}
          >
            <h3 className="text-xl md:text-2xl">Are you looking for me?</h3>
            <a
              onClick={() => dispatch(answerYes())}
              className="text-gray-500 hover:cursor-pointer hover:underline"
            >
              Yes, I am.
            </a>
            <a
              onClick={() => dispatch(answerNope())}
              className="text-gray-500 hover:cursor-pointer hover:underline"
            >
              Nope.
            </a>
          </motion.div>
          <motion.div
            ref={ref}
            className={`w-48 md:w-96 ${
              status === "looking" ? "block" : "hidden"
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={animated}
          >
            <img
              src="/assets/profile/profile1.png"
              className="md:grayscale md:brightness-100 hover:filter-none transition duration-1000 rounded-lg"
            />
            {inView && (
              <motion.div
                className="w-full text-sm justify-center flex text-neutral-500 mt-8 animate-bounce"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    duration: 2.4,
                    stiffness: 260,
                    damping: 20,
                    delay: 0.8,
                  },
                }}
              >
                Scroll down, I'd like to tell you more.
              </motion.div>
            )}
          </motion.div>
          <motion.div
            ref={errorRef}
            initial={{ x: 200, scale: 0 }}
            animate={errorAnimated}
            className={`flex w-96 flex-col absolute top-10 right-10 px-16 md:px-0 ${
              status === "nope" ? "block" : "hidden"
            }`}
          >
            <h3 className="text-xl md:text-2xl text-red-500">Seriously?</h3>
            <p className="text-red-500 ">Try another one.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Intro;
