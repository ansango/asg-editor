import { useDropZone } from "./dropzone";

export const Actions = () => {
  const { removeAllFiles, files } = useDropZone();
  return (
    <>
      {files.length > 0 && (
        <div className="flex space-x-5">
          <button
            type="button"
            className="w-full ml-auto sm:w-auto py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            onClick={removeAllFiles}
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
      )}
    </>
  );
};
