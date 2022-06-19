import { FunctionComponent, useEffect } from "react";
import { RandomReveal } from "react-random-reveal";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import { Pagination } from "swiper";
import Head from "next/head";
import "swiper/css";
import "swiper/css/pagination";
import { getAllPorts } from "features/portfolio/portfolioSlice";
import { useSelector } from "react-redux";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

type Props = {};
const Portfolio: FunctionComponent = (props: Props) => {
  const [ref, inView] = useInView();
  const works = useSelector(getAllPorts);

  const router = useRouter();
  useEffect(() => {
    if (inView) {
      document.title = "Kunut Chirdchai | Portfolio";
      router.push("/", "/portfolio", { shallow: true });
    }

    return () => {};
  }, [inView]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + works[index].cardName + "</span>"
      );
    },
  };

  return (
    <>
      {inView && (
        <Head>
          <title>Kunut Chirdchai | Portfolio</title>
        </Head>
      )}
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
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {works.map((project) => (
              <SwiperSlide className="p-24" key={project.cardName}>
                <h2 className="text-2xl font-bold mb-4">{project.cardName}</h2>
                {project.img !== "" && (
                  <PhotoProvider maskOpacity={0.5} bannerVisible={false}>
                    <PhotoView src={project.img}>
                      <motion.img
                        initial={{ opacity: 0 }}
                        animate={inView && { opacity: 1 }}
                        transition={{ duration: 2 }}
                        src={project.img}
                        alt={project.cardName}
                        loading="lazy"
                        className="rounded-sm mb-4 object-contain max-h-[400px] w-2/5 hover:scale-110 duration-300"
                      />
                    </PhotoView>
                  </PhotoProvider>
                )}

                <motion.p
                  className="mt-4 indent-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  {project.cardDetail}
                </motion.p>
                <motion.p
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  {project.techStack.map((stack, index, entry) =>
                    entry.length - 1 === index ? stack : stack + " | "
                  )}
                </motion.p>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div className="md:hidden flex flex-col bg-neutral-800 z-10 w-screen p-12">
          <h2 className="text-2xl uppercase font-bold mb-4">PORTFOLIO</h2>
          {works.map((project) => (
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
    </>
  );
};

export default Portfolio;
