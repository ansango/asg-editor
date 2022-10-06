import {
  ContainerBase,
  DropZoneProvider,
  DropZone,
  Layout,
  Thumbs,
} from "../components";
import { Actions } from "../components/dropzone/actions";

const Uploads = () => {
  return (
    <Layout>
      <ContainerBase>
        <DropZoneProvider className="space-y-10">
          <DropZone />
          <Actions />
          <Thumbs />
        </DropZoneProvider>
      </ContainerBase>
    </Layout>
  );
};

Uploads.auth = true;

export default Uploads;
