import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

const IndexPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return null;
};

export default IndexPage;
