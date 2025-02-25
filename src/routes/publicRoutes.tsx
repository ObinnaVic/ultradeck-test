import Contact from "../pages/Contact/contact";
import About from "../pages/Blog/blog";
import Blog from "../pages/Blog/blog";
import HowItWorks from "../pages/HowItWorks/howitworks";

export const routes = [
    {
        path: "Contact",
        element: <Contact/>
    },
    {
        path: " About",
        element: <About/>
    },
    {
        path: "Blog",
        element: <Blog/>
    },
    {
        path: "HowItWorks",
        element: <HowItWorks/>
    }
]