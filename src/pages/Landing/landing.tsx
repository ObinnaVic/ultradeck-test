import "./landing.css";
import landingCut from "../../assets/landing-cut.png";
import landingCut2 from "../../assets/landing-cut-2.png";
import landingCut3 from "../../assets/landing-cut-3.png";
import landingCut4 from "../../assets/landing-cut-4.png";
import howitworks1 from "../../assets/howitworks-1.png";
import howitworks2 from "../../assets/howitworks-2.png";
import howitworks3 from "../../assets/howitworks-3.png";
import howitworks4 from "../../assets/howitworks-4.png";
const Landing = () => {
    return(
        <div className="">
            <div className="landing-image lg:h-220 md:h-135 h-170 relative pt-20 rounded-b-3xl">
                <img src={landingCut} alt="landing-cut-background" className="absolute left-0 top-0 z-0 brightness-70 md:w-1/4 w-1/2"/>
                <div className="absolute md:left-[20%] lg:top-40 md:top-30 top-25 z-40 lg:max-w-2/3 md:w-2/3 text-center text-wrap">
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
                <img src={landingCut2} alt="landing-cut-background" className="absolute flex ml-auto right-0 bottom-5 z-[-9999] brightness-100 md:w-1/5 w-1/2"/>
            </div>
            <div className="bg-[#DEF0F7] text-black">
                <div className="flex flex-col lg:flex-row lg:px-20 md:px-10 px-5 py-15">
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
                    <div className="flex justify-center lg:w-1/2">
                        <img src={landingCut3} alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-center lg:flex-row flex-col-reverse lg:px-20 md:px-10 px-5 py-15">
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
            <div className="text-black">
                <div className="py-15">
                    <h2 className="text-3xl lg:text-left text-center">
                        How Radture Works
                    </h2>
                    <div className="flex lg:flex-row flex-col justify-center items-center gap-10 lg:gap-20 lg:px-20 md:px-10 px-5 py-5">
                        <div>
                            <img src={howitworks1} alt="How it works" className="rounded-xl mb-5 "/>
                            <p>Upload Image</p>
                        </div>
                        <div>
                            <img src={howitworks2} alt="How it works" className="rounded-xl mb-5 "/>
                            <p>AI Processing</p>
                        </div>
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
    )
}

export default Landing;