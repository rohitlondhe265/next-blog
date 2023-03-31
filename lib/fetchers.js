export const url = process.env.API_BASE_URL;

export async function fetchBlogs () {
    const res = await fetch(`${url}/posts`, {
        next: { revalidate: 30 }
      });
    const blogs = await res.json();
    return blogs;
}

export async function fetchBlogsByCategory ( category ) {
    const res = await fetch(`${url}/posts/category/${category}`, {
        next: { revalidate: 30 }
      });
    const blogs = await res.json();
    return blogs;
}

export async function fetchBlogsByTag ( tag ) {
    const res = await fetch(`${url}/posts/tag/${tag}`, {
        next: { revalidate: 30 }
      });
    const blogs = await res.json();
    return blogs;
}

export async function fetchSingleBlog ( slug ) {
    const res = await fetch(`${url}/posts/${slug}`, {
        next: { revalidate: 30 }
      });
    const blog = await res.json();
    return blog;
}