import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useEffect, useState } from "react";

export const Header = () => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        if (darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [darkMode]);

       const activeClass = "text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  const inActiveClass = "text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";




    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8 rounded-full" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rishabh Kumar</span>
                    </Link>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>Home</NavLink>
                            </li>
                            <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inActiveClass}>About</NavLink>
                            </li>
                            <li>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Contact</NavLink>
                            </li>
                            <li>
                            <NavLink to="/resume" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Resume</NavLink>
                            </li>
                            <li>
                                <span onClick={() =>setDarkMode(!darkMode)} className="text-xl cursor-pointer dark:text-white bi bi-moon"></span>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
