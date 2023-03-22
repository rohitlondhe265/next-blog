
export default function SingleBlog ({ blog }) {
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    )
}