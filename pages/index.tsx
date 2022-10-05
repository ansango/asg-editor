import type { NextPage } from "next";
import { ContainerBase, Layout } from "../components";
import { fetcher } from "../lib/utlis";

const Home = () => {
  const data = fetcher("http://localhost:3000/api/hello");

  return (
    <Layout>
      <ContainerBase>
        <h1>Hello World</h1>
      </ContainerBase>
    </Layout>
  );
};

Home.auth = true;

export default Home;
