import Image from "next/image";
import {} from "../common";
import { useDropZone } from "./dropzone";

export const Thumbs = () => {
  const { files, totalSize } = useDropZone();

  return (
    <>
      {files.length > 0 && (
        <div className="flex flex-col pt-10 pb-20">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <caption className="py-2 text-left text-sm text-gray-600 dark:text-gray-500">
                    {files.length} files ({totalSize})
                  </caption>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Figure
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        File Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Extension
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Size
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file, i) => {
                      return (
                        <tr
                          key={`file-${i}`}
                          className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700"
                        >
                          {file.preview && (
                            <Image
                              src={file.preview}
                              onLoad={() => {
                                URL.revokeObjectURL(file.preview);
                              }}
                              className="object-cover rounded-sm"
                              width={50}
                              height={50}
                              alt={file.name}
                            />
                          )}
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                            {file.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            {file.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-500 hover:text-blue-700">
                              _
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
