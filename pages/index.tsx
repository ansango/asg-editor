
import { ContainerBase, Layout } from "../components";

const Home = () => {
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
