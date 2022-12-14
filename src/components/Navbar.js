import { FaRegUserCircle } from "react-icons/fa";
import logo2 from "../assets/logo2.png";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


export default function Navbar() {
  return (
    <div>
      <nav class="fixed monserat menuBG px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 ">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/#landing-section" class="flex items-center">
            <img src={logo2} class="mr-2 h-6 sm:h-9" alt="Kacha Logo"></img>
              <span class="monserate self-center text-xl font-bold whitespace-nowrap ">
                Kacha
              </span>
          </Link>
          <div class="flex md:order-2 text-lg">
            <Link to="/Login">
              <span className="monserat text-lg orangeTxt inline-flex hidden md:inline-flex items-center mr-5 mt-3 font-semibold ">
                Login
              </span>
            </Link>
            <Link to="/Register">
              <button
                type="button"
                class=" text-white kacha-orange focus:ring-4 focus:outline-none focus:ring-orange-300 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0 "
              >
                <FaRegUserCircle className="text-2xl mr-2.5 inline-flex" />
                Sign Up
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class=" flex flex-col p-4 mt-4 menuBG rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <a
                  href="/"
                  class=" block py-2 pr-4 pl-3 text-slate-600 monserat text-lg  rounded  md:p-0"
                  aria-current="page"
                >
                  Agent
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-slate-600 monserat text-lg  rounded  md:p-0"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-slate-600 monserat text-lg  rounded  md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-slate-600 monserat text-lg  rounded  md:p-0"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-slate-600 monserat text-lg  rounded  md:p-0"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
