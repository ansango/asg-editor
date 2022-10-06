import { memo, useCallback, useEffect, useRef, useState } from "react";
import { ContainerBase, Icon, Layout } from "../components";

import { useDropzone } from "react-dropzone";
import Image from "next/image";

type DropFile = File & {
  preview: string;
};

const Thumbs = ({
  files,
  action,
}: {
  files: DropFile[];
  action: (file: DropFile) => () => void;
}) => {
  return (
    <aside className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10">
      {files.map((file, index) => (
        <div key={`${index}-${file.name}`}>
          <div className="flex gap-5">
            {file.preview && (
              <Image
                src={file.preview}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
                className="object-cover rounded-sm"
                width={125}
                height={125}
                alt={file.name}
              />
            )}
            <div className="space-y-4 text-sm text-slate-700 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300">
              <div className="flex gap-2 items-center">
                <p>{file.name}</p>
                <button
                  className="text-slate-500 hover:text-slate-700"
                  onClick={action(file)}
                >
                  <Icon name="FiXCircle" />
                </button>
              </div>
              <p>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
};

function DropZone() {
  const [files, setFiles] = useState<DropFile[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: any) =>
      setFiles([
        ...files,
        ...acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]),
    [files]
  );
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
  });

  const removeFile = (file: DropFile) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };
  const totalSizeInMB =
    (files.reduce((acc, file) => acc + file.size, 0) / 1024 / 1024).toFixed(2) +
    " MB";

  const resetAll = () => setFiles([]);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div className="space-y-10">
      <div
              {...getRootProps()}
        className="relative p-20 border-[3px] border-dashed border-blue-200 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-700 transition duration-500 rounded-md group"
      >
        <input
          className="w-full opacity-0 absolute inset-0 p-2 hover:cursor-pointer"
          {...getInputProps()}
          style={{ display: "block" }}
        />
        <h3 className="text-center text-blue-400 group-hover:text-blue-600 font-medium transition duration-500">
          Drag and drop your files here
        </h3>
      </div>
      {files && files.length > 0 && (
        <div className="space-y-10">
          <div className="flex justify-between space-x-5">
            <div className="space-x-5">
              <button
                type="button"
                className="w-full sm:w-auto py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                onClick={resetAll}
              >
                Remove all
              </button>
              <button
                type="button"
                className="w-full sm:w-auto py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Submit ({files.length} files)
              </button>
            </div>
            <div>Total: {totalSizeInMB}</div>
          </div>
          <Thumbs files={files} action={removeFile} />
        </div>
      )}
    </div>
  );
}

const Uploads = () => {
  return (
    <Layout>
      <ContainerBase>
        <DropZone />
      </ContainerBase>
    </Layout>
  );
};

Uploads.auth = true;

export default Uploads;
