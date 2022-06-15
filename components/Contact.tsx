import { useRouter } from "next/router";
import { FunctionComponent, useEffect } from "react";
import { FaPhone, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
type Props = {};

const Contact: FunctionComponent = (props: Props) => {
  const [ref, inView] = useInView();
  const router = useRouter();
  useEffect(() => {
    if (inView) {
      document.title = "Kunut Chirdchai | Contact";
      router.push("/", "/contact", { shallow: true });
    }

    return () => {};
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      animate={inView ? { x: 0 } : { x: "-100vw" }}
      transition={{ duration: 1 }}
      className="h-screen w-screen md:h-screen md:w-screen grid grid-rows-6 overflow-hidden p-8 md:p-24 text-neutral-50"
    >
      <div className="row-span-1 justify-center items-center bg-neutral-800 z-10 flex">
        <h1 className="uppercase text-4xl font-extrabold m-12">
          how to contact
        </h1>
      </div>
      <div className="row-span-5 bg-neutral-800 z-10 text-2xl justify-center items-center flex flex-col gap-4">
        <div className="flex gap-4">
          <FaPhone size={30} />
          <h2>(+66) 86 541 9870</h2>
        </div>
        <div className="flex gap-4">
          <FaLinkedin size={30} />
          <h2>linkedin.com/in/kntcc</h2>
        </div>
        <div className="flex gap-4">
          <HiMail size={30} />
          <h2>kkunut.cc@gmail.com</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;