import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import footerLogo from "../../assets/footer-logo.png";
import "./nav.css";
function Nav() {
    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);

    const CloseNav = () => setNav(false);

    return (
        <div className="nav lg:px-15 md:px-10 px-3">
            {/* Mobile nav */}
            <div className="flex lg:hidden">
                <div className="flex justify-between items-center w-full mt-3 text-black">
                    <img src={logo} alt="logo" />
                    <i className="fa-solid fa-bars fa-fade bg-white p-2" onClick={handleNav}></i>
                </div>
                <div className={nav ? "mobileNav" : "mobileNav openNav"}>
                    <div className="flex justify-between items-center w-full text-black">
                        <img src={footerLogo} alt="logo" className="" />
                        <i className="fa-solid fa-xmark fa-2xl" onClick={handleNav}></i>
                    </div>
                    <div>
                        <ul className="flex flex-col items-center text-black">
                            <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]" onClick={CloseNav}>
                                <Link to="/">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]" onClick={CloseNav}>
                                <Link to="About">
                                    <p>About Us</p>
                                </Link></li>
                            <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]" onClick={CloseNav}>
                                <Link to="HowItWorks">
                                    <p>How it works</p>
                                </Link></li>
                            <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]" onClick={CloseNav}>
                                <Link to="Hospitals">
                                    <p>For Hospitals</p>
                                </Link>
                            </li>
                            <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]" onClick={CloseNav}>
                                <Link to="Hospitals">
                                    <p>For Radiologists</p>
                                </Link>
                            </li>
                            <li className="no-underline md:hover:underline md:active:underline decoration-[#66B5DB] decoration-2 underline-offset-[15px]" onClick={CloseNav}>
                                <Link to="Blog">
                                    <p> Blog</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex md:text-sm align-center w-full pt-5">
                <div className="flex w-1/4">
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
                    </ul>
                </div>
                <div className="flex w-1/6 items-center justify-end">
                    <button className="flex bg-[#66B5DB] text-white rounded-xl px-5 py-2 font-bold">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav;