import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./nav.css";
function Nav() {
    return (
        <div className="nav">
            {/* Mobile nav */}
            <div className="lg:hidden flex justify-between w-full p-3">
                <div className="flex justify-right align-middle w-1/2">
                    <img src={logo} alt="logo" />
                </div>
                <div className="w-1/2 text-white flex justify-end">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII=" className="bg-white md:w-10 md:h-10 w-7 h-7"/>
                </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex md:text-sm align-center w-full pt-5">
                <div className="flex justify-end w-1/4">
                    <img src={logo} alt="logo" className="" />
                </div>
                <div className="menus flex w-full justify-center">
                    <ul className="flex items-center gap-10 text-white">
                        <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]">
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]">
                            <Link to="About">
                                <p>About Us</p>
                            </Link></li>
                        <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]">
                            <Link to="HowItWorks">
                                <p>How it works</p>
                            </Link></li>
                        <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]">
                            <Link to="Hospitals">
                                <p>For Hospitals</p>
                            </Link>
                        </li>
                        <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]">
                            <Link to="Hospitals">
                                <p>For Radiologists</p>
                            </Link>
                        </li>
                        <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]">
                            <Link to="Blog">
                                <p> Blog</p>
                            </Link>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
                <div className="flex w-1/6 items-center">
                    <button className="flex bg-[#66B5DB] text-white rounded-xl px-5 py-2 font-bold">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav;