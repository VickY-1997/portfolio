import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="flex mt-4 fixed top-0 left-0 w-full  z-50 ">
        <img
          src="/Black logo - no background.png"
          alt="logo"
          width={"250px"}
          className="ml-10 opacity-100"
        />
        <div className="bg-white  rounded-lg max-w-6xl mx-auto shadow-sm flex justify-center items-center px-4 ml-29">
          <nav>
            <ul className="flex space-x-10 text-lg text-[#666]">
              <li>
                <Link href={"/"}>
                  <button className="font-semibold cursor-pointer px-4 py-1.5 rounded-md border hover:bg-blue-400 hover:text-white border-neutral-300  text-lg hover:-translate-y-1 transform transition duration-200 hover:shadow-md border-none">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/About">
                  <button className="font-semibold cursor-pointer px-4 py-1.5 rounded-md border hover:bg-blue-400 hover:text-white border-neutral-300  text-lg hover:-translate-y-1 transform transition duration-200 hover:shadow-md border-none">
                    About
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/Project"}>
                  <button className="font-semibold cursor-pointer px-4 py-1.5 rounded-md border hover:bg-blue-400 hover:text-white border-neutral-300  text-lg hover:-translate-y-1 transform transition duration-200 hover:shadow-md border-none">
                    Project
                  </button>
                </Link>
              </li>
              <li>
                <Link href={'/Contact'}>
                  <button className="font-semibold cursor-pointer px-4 py-1.5 rounded-md border border-neutral-300 hover:bg-blue-400 hover:text-white text-lg hover:-translate-y-1 transform transition duration-200 hover:shadow-md border-none">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
