import { fetchBlogs } from "@/lib/fetchers";
import Link from "next/link";

export default async function Footer() {

  const {data} = await fetchBlogs();

  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:gap-9 justify-center items-center">

      {data.map((blog) => {
        const {id, title, thumbnail, meta_title, slug, categories, created_at} = blog;
        return (
          <div key={id} className="card card-compact bg-base-100 shadow-xl border border-gray-300">
            <figure>
              <img
                src={`/images/${thumbnail}`}
                alt="Shoes"
                className="aspect-video"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between text-primary"><span>{categories}</span><span>{created_at}</span></div>
              <h2 className="card-title">{title}</h2>
              <p>{meta_title}</p>
              <div className="card-actions justify-end">
                <Link href={`/blog/${slug}`}><button className="btn btn-primary btn-sm">Read More</button></Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
            alt="Shoes"
            className="aspect-video"
          />
        </figure>

        <div className="card-body">
          <div className="flex justify-between text-primary"><span>Cricket</span><span>19 April, 2023</span></div>
          <h2 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laborum ab commodi, tenetur accusamus consequatur architecto nobis pariatur repellat animi recusandae similique explicabo ad voluptates mollitia magni in numquam consequuntur?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Read More</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
            alt="Shoes"
            className="aspect-video"
          />
        </figure>

        <div className="card-body">
          <div className="flex justify-between text-primary"><span>Cricket</span><span>19 April, 2023</span></div>
          <h2 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laborum ab commodi, tenetur accusamus consequatur architecto nobis pariatur repellat animi recusandae similique explicabo ad voluptates mollitia magni in numquam consequuntur?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Read More</button>
          </div>
        </div>
      </div> */}

    </section>
  );
}
