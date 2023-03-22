export const url = process.env.API_BASE_URL;

export async function fetctBlogs () {
    const res = await fetch(`${url}/posts`, {
        next: { revalidate: 30 }
      });
    const blogs = await res.json();
    return blogs;
}

export async function fetctBlogsByCategory ( category ) {
    const res = await fetch(`${url}/posts/category/${category}`, {
        next: { revalidate: 30 }
      });
    const blogs = await res.json();
    return blogs;
}

export async function fetctBlogsByTag ( tag ) {
    const res = await fetch(`${url}/posts/tag/${tag}`, {
        next: { revalidate: 30 }
      });
    const blogs = await res.json();
    return blogs;
}

export async function fetctSingleBlog ( slug ) {
    const res = await fetch(`${url}/posts/${slug}`, {
        next: { revalidate: 30 }
      });
    const blog = await res.json();
    return blog;
}