import { FunctionComponent, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import Head from "next/head";

type Props = {};
type TSSkill = {
  name: string;
  year: number;
  progress: number;
};
const skill: TSSkill[] = [
  { name: "React", year: 2, progress: 100 },
  { name: "NodeJS", year: 2, progress: 100 },
  { name: "Javascript", year: 2, progress: 100 },
  { name: "Typescript", year: 1, progress: 50 },
  { name: "React Native", year: 1, progress: 50 },
  { name: "Amazon Web Service", year: 2, progress: 100 },
  { name: "Solidity", year: 1, progress: 50 },
  { name: "MySQL", year: 2, progress: 100 },
];
const About: FunctionComponent = (props: Props) => {
  const [ref, inView] = useInView();
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      document.title = "Kunut Chirdchai | About me";
      router.push("/", "/about", { shallow: true });
    }
    return () => {};
  }, [inView]);

  return (
    <>
      {inView && (
        <Head>
          <title>Kunut Chirdchai | About me</title>
        </Head>
      )}
      <div className="w-screen grid">
        <div className="flex p-12">
          <div className="w-full h-full z-10 md:grid md:grid-cols-2 text-neutral-50">
            <div className="flex flex-col justify-center bg-neutral-800 md:p-12">
              <div className="flex-row flex items-center">
                <div className="bg-red-300 h-1 w-6 md:w-12  mr-2 md:mr-4" />
                <p className="text-lg md:text-4xl font-bold">About me</p>
              </div>
              <p className="text-2xl md:text-7xl font-extrabold">
                I'm a Full Stack Developer
              </p>
              <div className="bg-red-300 h-1 w-12 mt-4 hidden md:block" />
              <p className="mt-4">
                I’m a software engineer who wants to know how I can be the best
                at it. I am always looking for an opportunity to drive any part
                of this world. All the projects on my GitHub were designed and
                developed by myself. I’m a quick learner who is looking for
                bigger challenges and new experiences.
              </p>
              <div className="flex flex-row gap-2 mt-4">
                <a href="https://github.com/ynzier" target="_blank">
                  <FaGithub
                    className="hover:text-teal-300 animate-bounce duration-500"
                    size="1.4em"
                  />
                </a>
                <a href="https://linkedin.com/in/kntcc" target="_blank">
                  <FaLinkedin
                    className="hover:text-teal-300 animate-bounce duration-500"
                    size="1.4em"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center p-12 bg-neutral-300/80 text-neutral-800">
              <div className="flex-row flex items-center">
                <div className="bg-red-300 h-1 w-6 md:w-12  mr-2 md:mr-4" />
                <p className="text-lg md:text-4xl font-bold">My Skills</p>
              </div>
              <div className="flex flex-col md:gap-1" ref={ref}>
                {skill.map((entry, index) => (
                  <div key={index}>
                    <span>{entry.name}</span>
                    <div className="flex">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          inView
                            ? { width: entry.progress + "%" }
                            : { width: 0 }
                        }
                        transition={{ duration: Math.random() * 3 + 1 }}
                        className={`progress`}
                      />
                      <span className="ml-2 whitespace-nowrap">
                        {entry.year} Year(s)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
