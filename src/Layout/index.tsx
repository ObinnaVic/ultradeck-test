import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/nav";
import Footer from "../components/Footer/footer";
import "./layout.css";

const Layout = () => {
    return ( 
    <div className="layout min-h-screen relative">
        <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-70">
            <Nav />
        </nav>
        <main >
            < Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

export default Layout