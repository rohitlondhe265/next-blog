"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Editor from "./Editor";
import Link from "next/link";
import axios from "@/lib/my-axios";

export default function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [file, setFile] = useState(null);

  const router = useRouter();
  const [apiCat, setApiCat] = useState([]);
  const [apiTag, setApiTag] = useState([]);
  const [selectedCats, setSelectedCats] = useState([]);
  const [selectedtags, setSelectedTags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts/categories").then(data => data.json()).then(val => setApiCat(val));
    fetch("http://localhost:3000/api/posts/tags").then(data => data.json()).then(val => setApiTag(val))
  }, []);
  const handleChangeCats = (e, id) => {
    const activeData = document.getElementById(id).checked;
    if (activeData == true) {
      setSelectedCats(oldData => [...oldData, e.target.value])
    } else {
      setSelectedCats(selectedCats.filter(values => values !== e.target.value))
    }
  }
  const handleChangeTags = (e, id) => {
    const activeData = document.getElementById(id).checked;
    if (activeData == true) {
      setSelectedTags(oldData => [...oldData, e.target.value])
    } else {
      setSelectedTags(selectedtags.filter(values => values !== e.target.value))
    }
  }

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
    try {
      const res = await axios.post(`/admin/post`, {
        // title,
        // content: ,
        // status: ,
        // thumbnail: ,
        // meta_title: ,
        // slug: ,
        // categories: ,
        // tags: ,
        // metadata: ,
      });
      setStatus(res.status);
    } catch (err) {
      setStatus(404);
      console.log(err.message);
    }
    setTimeout(() => {
      router.push("/admin/stacks/tags");
    }, 3000);
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
          <Link href="/admin/add-post">
            <button className="btn btn-info gap-2" onClick={handleClick}>
              <img src="/img/upload.svg" className="w-9" alt="" />
              Publish
            </button>
          </Link>
          <Link href="/admin/add-post">
            <button className="btn btn-info gap-2" onClick={handleClick}>
              <img src="/img/save.svg" className="w-9" alt="" />
              Save as Draft
            </button>
          </Link>
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
          {
            apiCat.map((cat) =>
              <div key={cat.id} className="label cursor-pointer w-1/2">
                <input id={cat.id} type="checkbox" value={cat.id} onChange={(e) => handleChangeCats(e, cat.id)} className="checkbox checkbox-info" />
                <span className="label-text">{cat.title}</span>
              </div>
            )
          }
        </div>
        <div className="form-control">
          <h3>Select Tags</h3>
          {
            apiTag.map((tag) =>
              <div key={tag.id} className="label cursor-pointer w-1/2">
                <input id={tag.id} type="checkbox" value={tag.id} onChange={(e) => handleChangeTags(e, tag.id)} className="checkbox checkbox-info" />
                <span className="label-text">{tag.title}</span>
              </div>
            )
          }
        </div>

      </aside>
    </div>
  );
}
