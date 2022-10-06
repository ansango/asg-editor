import Image from "next/image";
import { Icon } from "../common";
import { useDropZone } from "./dropzone";

export const Thumbs = () => {
  const { files, removeFile } = useDropZone();

  return (
    <>
      {files.length > 0 && (
        <aside className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
                      onClick={() => removeFile(file)}
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
      )}
    </>
  );
};
