"use client"
import { useState } from "react";
import axios from "@/lib/my-axios";
// import fs from "fs/promises";
// import path from "path";
// import Link from "next/navigation";

// interface Props {
//   dirs: string[];
// }

// export const getImgs = async () => {
//     try {
//       const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"));
//       return dirs;
//     } catch (error) {
//       return error;
//     }
//   };

export default function () {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState();

//   const dirs = await getImgs();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/admin/post/upload-img", formData);
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
    setUploading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-20 space-y-6">
      <label>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
        />
        <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
          {selectedImage ? (
            <img src={selectedImage} alt="" />
          ) : (
            <span>Select Image</span>
          )}
        </div>
      </label>
      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ opacity: uploading ? ".5" : "1" }}
        className="bg-red-600 p-3 w-32 text-center rounded text-white"
      >
        {uploading ? "Uploading.." : "Upload"}
      </button>
      {/* <div className="mt-20 flex flex-col space-y-3">
        {dirs.map((item) => (
          <Link key={item} href={"/images/" + item}>
            <a className="text-blue-500 hover:underline">{item}</a>
          </Link>
        ))}
      </div> */}
    </div>
  );
};
