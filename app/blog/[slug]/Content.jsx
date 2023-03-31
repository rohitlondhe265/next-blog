
export default async function Page({ blog }) {
    const {title, content, thumbnail, meta_title, created_at, categories, tags, meta_data} = blog;
    const createMarkup = (content) => {
        return { __html: content };
    }
    return (
        <main className="px-2 lg:px-12 bg-gray-100 space-y-3" style={{ flex: "5" }}>

            <img className='w-full p-3 lg:p-6 aspect-video' src={`/images/${thumbnail}`} alt="poster image" />

            <article className="prose max-w-none text-justify lg:px-12">
                <h1>{title}</h1>
                <main dangerouslySetInnerHTML={createMarkup(content)}></main>
            </article>

        </main>
    )
}