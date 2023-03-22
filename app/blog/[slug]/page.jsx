import SingleBlog from '@/app/components/SingleBlog';
import { notFound } from 'next/navigation'
import { fetctSingleBlog, fetctBlogs } from "@/lib/fetchers";

export const dynamicParams = true;

// dynamic meta data
export async function generateMetadata({ params: { slug } }) {
  const blog = await fetctSingleBlog(slug);
  return {
    title: blog.title,
  }
}

// page to render
export default async function ({ params: { slug } }) {
  const blog = await fetctSingleBlog(slug);

  if (!blog.title) {
    return notFound();
  }

  return (
    <main className="pt-12">
      <SingleBlog blog={blog} />
    </main>
  )
}

// return blogs.data.map(blog => ({
//   slug: blog.slug.replace(/\s+/g, "-").toLowerCase()
// }))

// generate static paths
export async function generateStaticParams() {
  const blogs = await fetctBlogs();
  return blogs.data.map((blog) => ({
    slug: blog.slug,
  }));
}