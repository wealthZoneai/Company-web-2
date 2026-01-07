import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import ServiceDetail from "../pages/Services/ServiceDetail";
import Contact from "../pages/contact/Contact";
import Careers from "../pages/Careers/Careers";
import AIChatWidget from "../components/AIChatWidget";

const AppRouter: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20"> {/* Add padding top to account for sticky navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:id" element={<ServiceDetail />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
            <AIChatWidget />
        </>
    );
}

export default AppRouter;
