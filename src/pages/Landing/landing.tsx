import "./landing.css";
import landingCut from "../../assets/landing-cut.png";
import landingCut2 from "../../assets/landing-cut-2.png";
const Landing = () => {
    return(
        <div className="landing-image relative pt-20">
            <div>
                <img src={landingCut} alt="landing-cut-background" className="absolute left-0 top-0 z-0 brightness-70 md:w-1/4 w-1/2"/>
                <div className="absolute lg:left-[20%] lg:top-60 top-40 z-40 lg:max-w-2/3 w-full text-center text-wrap">
                    <h1 className="flex text-white lg:text-7xl text-4xl font-bold lg:leading-24 leading-15">
                        Advanced Radiology Imaging With the speed of AI.
                    </h1>
                    <p className="text-[120%] leading-10 pt-3">Precision in every Pixel, Care in every diagnosis</p>
                    <h2 className="lg:text-6xl text-4xl font-bold lg:mt-15 mt-10">
                        Upload scans, Get report in minutes.
                    </h2>
                    <p className="text-[120%] leading-10 pt-7">Instant scan Uploads, Fast reports</p>
                    <button className="flex bg-[#66B5DB] text-white rounded-xl px-5 py-2 font-bold ">
                        Contact Us
                    </button>
                </div>
                <img src={landingCut2} alt="landing-cut-background" className="absolute flex ml-auto right-0 bottom-0 z-0 brightness-70 md:w-1/5 w-1/2"/>
            </div>
        </div>
    )
}

export default Landing;