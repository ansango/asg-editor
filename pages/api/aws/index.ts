import {
  corsMiddleware,
  sessionMiddleware,
  router,
  customErrors,
} from "../../../lib/api/";
import {
  s3Client,
  getBucketList,
  clientConfig,
  bucket,
} from "../../../lib/aws";
router
  .use(corsMiddleware)
  .use(sessionMiddleware)
  .get(async (req, res) => {
    const { CMS } = bucket;

    const client = s3Client({ ...clientConfig });
    const files = await (await getBucketList({ client }, { Bucket: CMS }))
      .map(({ Key }) =>
        Key?.includes(".webp") ||
        Key?.includes(".jpg") ||
        Key?.includes(".jpeg")
          ? Key
          : null
      )
      .filter((e) => e !== null);

    let folders: {
      name: string;
      files?: (string | null)[];
    }[] = [];

    files.forEach((file, i) => {
      const folder = file?.split("/")[0];
      if (folder && !folders.find((e) => e.name === folder)) {
        folders.push({ name: folder });
      }
      return;
    });

    folders.forEach((folder, i) => {
      const _files = files
        .filter((file) => file?.includes(folder.name))
        .map((file) => {
          return `https://${CMS}.s3.amazonaws.com/${file}`;
        });
      folders[i].files = _files;
    });

    res.status(200).json({ folders });
  });

export default router.handler(customErrors);
