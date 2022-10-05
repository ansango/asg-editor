import {
  S3Client,
  type S3ClientConfig,
  paginateListObjectsV2,
  type S3PaginationConfiguration,
  type ListObjectsV2CommandInput,
} from "@aws-sdk/client-s3";

export const bucket = {
  CMS: process.env.S3_BUCKET as string,
};

export const clientConfig: S3ClientConfig = {
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY as string,
    secretAccessKey: process.env.S3_SECRET_KEY as string,
  },
  region: process.env.S3_REGION as string,
};

export const s3Client = ({ credentials, region }: S3ClientConfig) =>
  new S3Client({ credentials, region });

export const getBucketList = async (
  config: S3PaginationConfiguration,
  params: ListObjectsV2CommandInput
) => {
  const totalFiles = [];
  for await (const page of paginateListObjectsV2(config, params)) {
    totalFiles.push(...(page.Contents || []));
  }
  return totalFiles;
};
