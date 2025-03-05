import landingCut6 from "../../assets/footer-cut-6.png";
import footerLogo from "../../assets/footer-logo.png";

const Footer = () => {
    return (
        <footer className="relative h-[400px] w-full">
            <img src={landingCut6} alt="landing-page-cut image" className="absolute bottom-0 left-0 z-[-9999] w-[20%] hidden md:block" />
            <div className="flex flex-col md:flex-row lg:px-15 md:px-10 px-3 pt-15">
                <div className="flex md:block w-full md:w-2/5 mb-10 md:mb-0 justify-center md:justify-start">
                    <img src={footerLogo} alt="logo" className="" />
                </div>
                <div className="w-full md:w-3/5 text-black">
                    <div className="flex justify-between text-center md:text-left">
                        <div>
                            <h3 className="mb-2 md:mb-5 text-sm md:text-md lg:text-lg">Quick Links</h3>
                            <ul className="text-xs lg:text-md">
                                <li className="mb-2">
                                    <p>Home</p>
                                </li>
                                <li className="mb-2">
                                    <p>About Us</p>
                                </li>
                                <li className="mb-2">
                                    <p>Hospitals</p>
                                </li>
                                <li className="mb-2">
                                    <p>Radiologists</p>
                                </li>
                                <li className="mb-2">
                                    <p>How it works</p>
                                </li>
                                <li className="mb-2">
                                    <p>Blog</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-2 md:mb-5 text-sm md:text-md lg:text-lg">Socials</h3>
                            <ul className="text-xs lg:text-md">
                                <li className="mb-2">
                                    <p>Careers</p>
                                </li>
                                <li className="mb-2">
                                    <p>Contact Us</p>
                                </li>
                                <li className="mb-2">
                                    <p>FAQ's</p>
                                </li>
                                <li className="mb-2">
                                    <p>Privacy Policy</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-2 md:mb-5 text-sm md:text-md lg:text-lg">Contact Us</h3>
                            <ul className="text-xs lg:text-md">
                                <li className="mb-2">
                                    <p>Phone number: </p>
                                </li>
                                <li className="mb-2">
                                    <p>Email: info@radture.com</p>
                                </li>
                                <li className="mb-2">
                                    <p>Address</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row content-center md:justify-between w-full mt-10">
                        <div className="flex justify-center md:justify-start">
                            <i className="fa-brands fa-facebook bg-[#C2D4FE] p-2 lg:p-3 mr-3 rounded-full"></i>
                            <i className="fa-brands fa-instagram bg-[#C2D4FE] p-2 lg:p-3 mr-3 rounded-full"></i>
                            <i className="fa-brands fa-square-x-twitter bg-[#C2D4FE] p-2 lg:p-3 mr-3 rounded-full"></i>
                            <i className="fa-brands fa-linkedin bg-[#C2D4FE] p-2 lg:p-3 mr-3 rounded-full"></i>
                        </div>
                        <div className="flex justify-center md:justify-end lg:text-lg text-xs mt-5 md:mt-0">
                         <p>© 2025 Radture. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;