import Content from "./Content"
import Sidebar from "./Sidebar"

// export const dynamicParams = true;

// dynamic meta data
// export async function generateMetadata({ params: { slug } }) {
//   const blog = await fetctSingleBlog(slug);
//   return {
//     title: blog.title,
//   }
// }

// page to render
export default async function Page({ params: { slug } }) {
  // const blog = await fetctSingleBlog(slug);

  // if (!blog.title) {
  //   return notFound();
  // }

  return (
    <main className="flex flex-col lg:flex-row">
      <Content />
      <Sidebar />
    </main>
  )
}

// return blogs.data.map(blog => ({
//   slug: blog.slug.replace(/\s+/g, "-").toLowerCase()
// }))

// generate static paths
// export async function generateStaticParams() {
//   const blogs = await fetctBlogs();
//   return blogs.data.map((blog) => ({
//     slug: blog.slug,
//   }));
// }