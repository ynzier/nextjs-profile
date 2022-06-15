import type { NextPage } from "next";
import Head from "next/head";
import Layout from "components/Layout";
import Container from "components/Container";
import Section from "components/Section";
import Intro from "components/Intro";
import { getStatus } from "features/lookup/lookupSlice";
import { useSelector } from "react-redux";
import About from "components/About";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Service from "components/Service";
import Portfolio from "components/Portfolio";
import Contact from "components/Contact";

const IndexPage: NextPage = () => {
  const status = useSelector(getStatus);
  const FCParticles = Particles as any;

  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const hiddenPage = [<About />, <Service />, <Portfolio />, <Contact />];

  return (
    <Layout>
      <Head>
        <title>Kunut Chirdchai | Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="absolute">
          <FCParticles
            init={particlesInit}
            options={{
              particles: {
                links: {
                  color: "#000",
                  distance: 200,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
              },
              fullscreen: { enable: true, zIndex: -1 },
            }}
          />
        </div>
        <Section>
          <Intro />
        </Section>
        {!["asking", "nope"].includes(status) &&
          hiddenPage.map((comp, index) => (
            <Section key={index}>{comp}</Section>
          ))}
      </Container>
    </Layout>
  );
};

export default IndexPage;
