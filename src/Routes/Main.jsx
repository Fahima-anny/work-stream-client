import { Outlet } from "react-router-dom";
import Footer from "../Layout/Shared/Footer";
import Navbar from "../Layout/Shared/Navbar";
import ThemeProvider from "../Authentication/ThemeContext";


const Main = () => {
    return (
        <div>
   <ThemeProvider>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <div className="overflow-hidden">
                <Footer></Footer>
            </div>
            </ThemeProvider>
            
        </div>
    );
};

export default Main;