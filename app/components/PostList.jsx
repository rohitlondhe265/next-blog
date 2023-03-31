import { fetchBlogs } from "@/lib/fetchers";
import Link from "next/link";

export default async function Footer() {

  const { data } = await fetchBlogs();

  return (
    <section className="text-gray-600 body-font overflow-hidden mx-3 md:w-1/3">
      <h3 className="bg-primary text-xl text-white font-bold text-center py-1 mb-2">
        Trending Posts
      </h3>

      <div className="space-y-3 md:space-y-6 ">

        {data.map((blog) => {
          const { id, title, thumbnail, slug, categories, created_at } = blog;
          return (
            <div key={id} className="flex items-center justify-center flex-nowrap space-x-2 drop-shadow-xl">
              <div className="w-80">
                <img
                  src={`/images/${thumbnail}`}
                  className="cursor-pointer rounded-xl"
                />
              </div>
              <div className="">
                <Link href={`/blog/${slug}`}><h2 className="text-base font-semibold text-gray-900 hover:text-primary text-justify">{title}</h2></Link>
                <div className="flex justify-between text-primary">
                  <span>{categories}</span>
                  <span>{created_at}</span>
                </div>
              </div>
            </div>
          )
        })}

        {/* <div className="flex items-center justify-center flex-nowrap space-x-2 drop-shadow-xl">
          <div className="w-80">
            <img
              src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
              className="cursor-pointer rounded-xl"
            />
          </div>
          <div className="">
            <h2 className="text-xl font-medium text-gray-900 hover:text-primary text-justify">
              Bitters hash waistcoat fashion axe chia unicorn
            </h2>
            <div className="flex justify-between text-primary">
              <span>Cricket</span>
              <span>19 April, 2023</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-nowrap space-x-2 drop-shadow-xl">
          <div className="w-80">
            <img
              src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
              className="cursor-pointer rounded-xl"
            />
          </div>
          <div className="">
            <h2 className="text-xl font-medium text-gray-900 hover:text-primary text-justify">
              Bitters hash waistcoat fashion axe chia unicorn
            </h2>
            <div className="flex justify-between text-primary">
              <span>Cricket</span>
              <span>19 April, 2023</span>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}
