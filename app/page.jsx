import Card from "./components/Card";
import Corousel from "./components/Corousel";
import PostList from "./components/PostList";

export default function Home() {
  const blogs = "hii";
  return (
    <main>
      <div className="flex flex-wrap justify-center items-center m-3 md:gap-12 space-y-6">
        <Corousel />
        <PostList />
      </div>

      <div className="divider"></div>
      <Card blogs={blogs} />
    </main>
  );
}