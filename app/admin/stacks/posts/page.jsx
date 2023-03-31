"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((data) => data.json())
      .then((val) => setPosts(val.data));
  }, []);
  console.log(posts);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Staues</th>
            <th>Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, i) =>{
            const {id, title, categories, tags, status, created_at} = post;
            return (
            <tr key={id}>
              <th>{i+1}</th>
              <td>{title.slice(0, 45)}</td>
              <td>{categories}</td>
              <td>{tags}</td>
              <td>{status}</td>
              <td>{created_at}</td>
              <td>
                <Link href={`admin/stacks/posts/edit/${id}`}>
                  <img
                    className="w-6 cursor-pointer"
                    src="/site/edit.png"
                    alt="edit btn"
                  />
                </Link>
              </td>
            </tr>
          )})}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Staues</th>
            <th>Date</th>
            <th>Edit</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
