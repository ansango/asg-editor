import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDropzone as useDROPZONE } from "react-dropzone";

export type DropFile = File & {
  preview: string;
};

type DropZoneContextValue = {
  totalSize: string | null;
  files: DropFile[];
  setFiles: (files: DropFile[]) => void;
  removeAllFiles: () => void;
  getRootProps: any;
  getInputProps: any;
};

const initialState: DropZoneContextValue = {
  totalSize: null,
  files: [],
  setFiles: () => {},
  removeAllFiles: () => {},
  getRootProps: () => {},
  getInputProps: () => {},
};

const DropZoneContext = createContext<DropZoneContextValue>(
  initialState as DropZoneContextValue
);

export const useDropZone = () => useContext(DropZoneContext);

export const DropZoneProvider: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [files, setFiles] = useState<DropFile[]>([]);
  const { getRootProps, getInputProps } = useDROPZONE({
    accept: {
      "image/*": [],
    },
    onDrop: useCallback((acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    }, []),
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const removeAllFiles = () => setFiles([]);
  const totalSizeInMB = (
    files.reduce((acc, file) => acc + file.size, 0) /
    1024 /
    1024
  ).toFixed(2);

  const totalSize =
    totalSizeInMB && parseFloat(totalSizeInMB) > 0
      ? `${totalSizeInMB} Mb`
      : null;

  return (
    <DropZoneContext.Provider
      value={{
        ...initialState,
        files,
        setFiles,
        removeAllFiles,
        totalSize,
        getRootProps,
        getInputProps,
      }}
    >
      <div className={className}>{children}</div>
    </DropZoneContext.Provider>
  );
};

export const DropZone = () => {
  const { getInputProps, getRootProps } = useDropZone();
  return (
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
  );
};
