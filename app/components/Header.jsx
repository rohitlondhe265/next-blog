import Link from "next/link";

//https://remixicon.com/
const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center md:px-6 bg-base-200 text-base-content">

        <div className="inline-flex items-center font-medium text-gray-900">
          <img className="w-16" src="/education.png" alt="" />
          <span className="text-xl">Blog Website</span>
        </div>

      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center md:text-lg justify-center space-x-3 md:space-x-6 bg-info md:bg-inherit font-bold text-white md:text-gray-500 rounded-xl px-2 py-1">
        <Link href="#" className="hover:text-gray-900">First Link</Link>
        <Link href="#" className="hover:text-gray-900">Second Link</Link>
        <Link href="#" className="hover:text-gray-900">Third Link</Link>
        <Link href="#" className="hover:text-gray-900">Fourth Link</Link>
      </nav>

    </header>
  );
};

export default Header;
