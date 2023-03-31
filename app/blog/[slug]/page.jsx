import { fetchSingleBlog, fetchBlogs } from "@/lib/fetchers";
import { notFound } from "next/navigation";
import Content from "./Content"
import Sidebar from "./Sidebar"

export const dynamicParams = true;

export async function generateMetadata({ params: { slug } }) {
  const blog = await fetchSingleBlog(slug);
  return {
    title: blog.title,
  }
}

export default async function Page({ params: { slug } }) {
  const blog = await fetchSingleBlog(slug);

  if (!blog.title) {
    return notFound();
  }

  return (
    <main className="flex flex-col lg:flex-row">
      <Content blog={blog} />
      <Sidebar />
    </main>
  )
}

export async function generateStaticParams() {
  const blogs = await fetchBlogs();
  return blogs.data.map((blog) => ({
    slug: blog.slug,
  }));
}