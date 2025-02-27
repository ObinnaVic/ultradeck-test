import "./landing.css";
import landingCut from "../../assets/landing-cut.png";
import landingCut2 from "../../assets/landing-cut-2.png";
import landingCut3 from "../../assets/landing-cut-3.png";
import landingCut4 from "../../assets/landing-cut-4.png";
import howitworks1 from "../../assets/howitworks-1.png";
import howitworks2 from "../../assets/howitworks-2.png";
import howitworks3 from "../../assets/howitworks-3.png";
import howitworks4 from "../../assets/howitworks-4.png";
import landingCut5 from "../../assets/landing-cut-5.png";
import section4Image from "../../assets/section-4-image.png";
import landingCut6 from "../../assets/landing-cut-6.png";
import logo from "../../assets/logo.png";
const Landing = () => {
    return(
        <div className="">
            <div className="landing-image lg:h-220 md:h-135 h-170 relative  rounded-b-3xl">
                <img src={landingCut} alt="landing-cut-background" className="absolute left-0 top-0 z-0 brightness-70 md:w-1/4 w-1/2"/>
                <div className="absolute w-full h-full">
                    <div className="flex flex-col md:w-[70%] w-[90%] h-full justify-self-center items-center justify-center text-center">
                        <h1 className="flex text-white lg:text-6xl text-4xl font-bold lg:leading-24 leading-15">
                            Advanced Radiology Imaging With the speed of AI.
                        </h1>
                        <p className="lg:text-[120%] lg:leading-10 pt-3">Precision in every Pixel, Care in every diagnosis</p>
                        <h2 className="lg:text-5xl text-3xl font-bold lg:mt-15 mt-10">
                            Upload scans, Get report in minutes.
                        </h2>
                        <p className="lg:text-[120%] lg:leading-10 pt-3">Instant scan Uploads, Fast reports</p>
                        <div className="flex justify-center mt-10">
                            <button className="flex bg-[#66B5DB] text-white rounded-xl lg:px-5 lg:py-2 px-3 py-1 lg:font-bold text-sm ">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                <img src={landingCut2} alt="landing-cut-background" className="absolute flex ml-auto right-0 bottom-5 z-[-9999] brightness-100 md:w-1/5 w-1/2"/>
            </div>
            <div className="bg-[#DEF0F7] text-black lg:px-15 md:px-10 px-3">
                <div className="flex flex-col lg:flex-row py-15">
                    <div className="lg:w-1/2 lg:pb-0 pb-15">
                        <h2 className="text-3xl pb-5"> 
                            Radture Tele-Radiology Solution.
                        </h2>
                        <p>
                        Radture is a tele-radiology solution that helps hospitals and healthcare 
                        institutions manage their medical imaging needs more efficiently. 
                        It’s designed to reduce the time it takes for doctors to receive 
                        radiology reports, particularly in cases where speed is critical to 
                        patient care. Radiology is an essential part of modern healthcare, 
                        used to diagnose conditions through imaging techniques such as X-rays, 
                        CT scans, MRIs, UltraSounds and more. However, many hospitals face delays 
                        in receiving imaging reports due to limited access to radiologists, 
                        who are often overwhelmed with work. These delays can affect patient 
                        outcomes, especially when dealing with time-sensitive diagnoses like 
                        strokes, cancers, or fractures. Radture solves this problem by 
                        streamlining the radiology workflow through a combination of artificial 
                        intelligence (AI) and remote collaboration with radiologists.
                        </p>
                    </div>
                    <div className="flex md:justify-end justify-center lg:w-1/2">
                        <img src={landingCut3} alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-center lg:flex-row flex-col-reverse py-15">
                    <div className="lg:w-1/2 lg:pb-0 py-15">
                        <img src={landingCut4} alt="" />
                    </div>
                    <div className="flex flex-col lg:w-1/2">
                        <h2 className="text-3xl pb-5">
                            Solving Radiography Problems
                        </h2>
                        <p>
                        At Radture, we are solving one of Africa’s most pressing healthcare challenges: 
                        the shortage of radiologists. By leveraging AI and seamless workflows, 
                        Radture bridges the gap between hospitals and radiologists, ensuring 
                        faster diagnoses and better outcomes for patients. But this is just the beginning. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-black bg-[#EBF1FF]">
                <div className="flex flex-col justify-self-center w-[80%] py-15">
                    <h2 className="text-3xl lg:text-left text-center">
                        How Radture Works
                    </h2>
                    <div className="flex lg:flex-row flex-col gap-x-5 gap-y-5 pt-8">
                        <div className="flex justify-center items-center md:flex-row flex-col gap-x-5 gap-y-5">
                            <div>
                                <img src={howitworks1} alt="How it works" className="rounded-xl mb-5 "/>
                                <p>Upload Image</p>
                            </div>
                            <div>
                                <img src={howitworks2} alt="How it works" className="rounded-xl mb-5 "/>
                                <p>AI Processing</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center md:flex-row flex-col gap-x-5 gap-y-5">
                            <div>
                                <img src={howitworks3} alt="How it works" className="rounded-xl mb-5 "/>
                                <p>Radiologist Review</p>
                            </div>
                            <div>
                                <img src={howitworks4} alt="How it works" className="rounded-xl mb-5 "/>
                                <p>Receive Report</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative text-black w-full lg:px-15 md:px-10 px-3 h-150 content-center">
                <button className="flex bg-[#66B5DB] text-white rounded-xl lg:px-5 lg:py-2 px-3 py-1 lg:font-bold text-sm mb-10">
                    what our numbers say &#x1F389;
                </button>
                <div className="flex md:flex-row flex-col lg:gap-x-20 gap-x-10 gap-y-15 md:w-3/5 w-1/2">
                    <div>
                        <h2 className="font-bold lg:text-5xl md:text-3xl text-2xl">45+</h2>
                        <p className="text-xs">Minutes or less wait-time</p>
                    </div>
                    <div>
                        <h2 className="font-bold lg:text-5xl md:text-3xl text-2xl">45+</h2>
                        <p className="text-xs">Minutes or less wait-time</p>
                    </div>
                    <div>
                        <h2 className="font-bold lg:text-5xl md:text-3xl text-2xl">45+</h2>
                        <p className="text-xs">Minutes or less wait-time</p>
                    </div>
                </div>
                <div className="absolute right-0 top-0 lg:w-1/3 md:w-2/5 w-[70%]">
                    <img src={landingCut5} alt="section-three-image" className="opacity-50" />
                </div>
            </div>
            <div className="text-black flex md:flex-row flex-col items-center md:gap-x-10 lg:p-15 md:p-10 p-3">
                <div className="md:w-1/2 w-full">
                    <div className="mb-10">
                        <h2 className="font-bold text-3xl">Introducing Radture Link</h2>
                    </div>
                    <div>
                        <p className="text-sm mb-5">
                        With RadtureLink, hospitals can improve efficiency, reduce costs, 
                        and empower patients with instant access to their radiology scans.
                        </p>
                        <button className="flex bg-[#66B5DB] text-white rounded-xl lg:px-5 lg:py-2 px-3 py-1 lg:font-bold text-sm mb-10">
                            learn more
                        </button>
                    </div>
                </div>
                <div className="flex justify-center md:w-1/2 w-full">
                    <img src={section4Image} alt="section-4-image" />
                </div>
            </div>
            <div>
                <div>
                    <img src={logo} alt="logo" className="" />
                    <img src={landingCut6} alt="landing-page-cut image" />
                </div>
                <div className="lg:p-15 md:p-10 p-3">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Landing;