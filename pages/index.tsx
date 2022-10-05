import type { NextPage } from "next";
import { ContainerBase, Layout } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <ContainerBase>
        <h1>Hello World</h1>
      </ContainerBase>
    </Layout>
  );
};

export default Home;
