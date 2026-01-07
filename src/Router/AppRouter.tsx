import React, { lazy, Suspense } from "react";
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
import BonjourProject from "../pages/About/project/BonjourProject";
import HRMSProject from "../pages/About/project/HRMSProject";
import OTRSProject from "../pages/About/project/OTRSProject";
import WZGProject from "../pages/About/project/WZGProject";
import MarketingProject from "../pages/About/project/MarketingProject";
import CyberSecurityProject from "../pages/About/project/CyberSecurityProject";
import InternshipProgram from "../pages/Programs/InternshipProgram";
import JobDetails from "../pages/Careers/JobDetails";
import JavaDeveloper from "../pages/Careers/JavaDeveloper";
import ReactDeveloper from "../pages/Careers/ReactDeveloper";
import DigitalMarketing from "../pages/Careers/DigitalMarketing";
import AWSEngineer from "../pages/Careers/AWSEngineer";
import PythonDeveloper from "../pages/Careers/PythonDeveloper";
import CyberSecurity from "../pages/Careers/CyberSecurity";
import ScrollToTop from "../components/ScrollToTop";

const AppRouter: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <div className="pt-20"> {/* Add padding top to account for sticky navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:id" element={<ServiceDetail />} />
                    <Route path="/programs/internship" element={<InternshipProgram />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/careers/job-details" element={<JobDetails />} />
                    <Route path="/careers/java-developer" element={<JavaDeveloper />} />
                    <Route path="/careers/react-developer" element={<ReactDeveloper />} />
                    <Route path="/careers/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="/careers/aws-engineer" element={<AWSEngineer />} />
                    <Route path="/careers/python-developer" element={<PythonDeveloper />} />
                    <Route path="/careers/cyber-security" element={<CyberSecurity />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects/bonjour" element={<BonjourProject />} />
                    <Route path="/projects/hrms" element={<HRMSProject />} />
                    <Route path="/projects/otrs" element={<OTRSProject />} />
                    <Route path="/projects/wzg" element={<WZGProject />} />
                    <Route path="/projects/marketing" element={<MarketingProject />} />
                    <Route path="/projects/cybersecurity" element={<CyberSecurityProject />} />

                </Routes>
            </div>
            <Footer />
            <AIChatWidget />
        </>
    );
}

export default AppRouter;
