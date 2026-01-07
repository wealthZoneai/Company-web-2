import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../pages/home/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import DataAnalytics from "../pages/Services/DataAnalytics";
// import SoftwareDevelopment from "../pages/Services/SoftwareDevelopment";

const AppRouter: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20"> {/* Add padding top to account for sticky navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/data-analytics" element={<DataAnalytics />} />
                    {/* <Route path="/services/software-development" element={<SoftwareDevelopment />} /> */}
                </Routes>
            </div>
        </>
    );
}

export default AppRouter;
