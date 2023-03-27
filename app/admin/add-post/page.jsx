"use client";

import { useState } from "react";
import Editor from "./Editor";
import { useRouter } from "next/navigation";

export default function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const router = useRouter();
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`/posts/`, {
            title,
            description,
            category,
            thumbnail: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            description,
            category,
            thumbnail: file ? imgUrl : "",
          });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-6">
      {/* Content */}
      <main className="px-2 lg:px-9 bg-slate-300" style={{ flex: "5" }}>
        <section className="mt-3 space-y-2">
          <input
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-purple-400 focus:shadow-md"
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Editor setDesc={setDescription} />
          <p>{description}</p>
        </section>
        <div className="divider"></div>
        <section className="space-y-2">
          <input
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-purple-400 focus:shadow-md"
            type="text"
            placeholder="URL Slug"
            onChange={(e) => setSlug(e.target.value)}
          />
          <input
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-purple-400 focus:shadow-md"
            type="text"
            placeholder="Meta Title"
            onChange={(e) => setMetaTitle(e.target.value)}
          />
          <textarea
            rows="4"
            onChange={(e) => setMetaDescription(e.target.value)}
            placeholder="Meta Description"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-purple-400 focus:shadow-md"
          ></textarea>
          <p>
            {metaTitle}
            {metaDescription}
            {slug} {title}
          </p>
        </section>
      </main>

      {/* Sidebar */}
      <aside
        className="flex flex-col gap-6 bg-slate-300 px-3 py-6"
        style={{ flex: "2" }}
      >
        <div className="flex justify-between">
          <button
            className="bg-blue-500 px-4 py-2 font-semibold text-white text-center cursor-pointer items-center space-x-2 rounded"
            onClick={handleClick}
          >
            Publish
          </button>
          <button
            className="bg-blue-500 px-4 py-2 font-semibold text-white text-center cursor-pointer items-center space-x-2 rounded"
            onClick={handleClick}
          >
            Save as Draft
          </button>
        </div>

        {/* 3. post thumbnail */}
        <div>
          <label className="font-semibold">Upload Post Thumbnail</label>
          <input
            className="hidden"
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label
            htmlFor="file"
            className="relative mt-2 flex min-h-[99px] items-center justify-center cursor-pointer rounded-md border border-dashed border-blue-600 p-12 text-center"
          >
            Select Image
          </label>
        </div>

        <div className="form-control">
          <h3>Select Category</h3>
          <label className="label cursor-pointer w-1/2">
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-info"
            />
            <span className="label-text">Remember me</span>
          </label>
          <label className="label cursor-pointer w-1/2">
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-info"
            />
            <span className="label-text">Remember me</span>
          </label>
          <label className="label cursor-pointer w-1/2">
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-info"
            />
            <span className="label-text">Remember me</span>
          </label>
        </div>

        <div className="form-control">
          <h3>Select Tag</h3>
          <label className="label cursor-pointer w-1/2">
            <input
              type="checkbox"
              value="web"
              className="checkbox checkbox-info"
            />
            <span className="label-text">Remember me</span>
          </label>
          <label className="label cursor-pointer w-1/2">
            <input
              type="checkbox"
              value="dev"
              className="checkbox checkbox-info"
            />
            <span className="label-text">Remember me</span>
          </label>
          <label className="label cursor-pointer w-1/2">
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-info"
            />
            <span className="label-text">Remember me</span>
          </label>
        </div>
      </aside>
    </div>
  );
}
