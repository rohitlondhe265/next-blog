import Link from "next/link";
import { fetctBlogs } from "@/lib/fetchers";


export default async function BlogsGrid () {
  const blogs = await fetctBlogs();
  return (
    <main>{
      blogs.data.map((blog) => (
        <p>
          <Link href={`/blog/${blog.slug}`}>Blog: {blog.title}</Link>
        </p>
      ))
    }</main>
  )
}