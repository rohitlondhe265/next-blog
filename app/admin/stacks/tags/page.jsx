"use client";
import axios from "@/lib/my-axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts/tags")
      .then((data) => data.json())
      .then((val) => setTags(val));
  }, []);
  console.log(tags);
  return (
    <main className="w-full">
      <section className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold">All Tags</h3>
        <Link href="/admin/stacks/tags/add-new">
          <button className="btn btn-info gap-2 text-white">
            <img src="/site/dashbord/click.svg" className="w-9" alt="" />
            Add New Tag
          </button>
        </Link>
      </section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Meta Title</th>
              <th>Description</th>
              <th>Slug</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tags.map((cat, i) => {
              const { id, title, meta_title, description, slug } = cat;
              return (
                <tr key={id}>
                  <th>{i+1}</th>
                  <td>{title}</td>
                  <td>{meta_title}</td>
                  <td>{description}</td>
                  <td>{slug}</td>
                  <td>
                    <Link href={`admin/stacks/tags/edit/${id}`}>
                      <img
                        className="w-6 cursor-pointer"
                        src="/site/edit.png"
                        alt="edit btn"
                      />
                    </Link>
                  </td>
                  <td>
                    <img
                      className="w-6 cursor-pointer"
                      src="/site/delete.png"
                      alt="edit btn"
                      onClick={async () => {
                        await axios.delete(`admin/tag/${id}`)
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
