import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Services from "../pages/Service/Services";
import ServiceDetail from "../pages/Service/ServiceDetail";
import Contact from "../pages/contact/Contact";
import Careers from "../pages/Careers/Careers";
import JobDetail from "../pages/Careers/JobDetail";
import AIChatWidget from "../components/AIChatWidget";
import BonjourProject from "../pages/About/project/BonjourProject";
import HRMSProject from "../pages/About/project/HRMSProject";
import OTRSProject from "../pages/About/project/OTRSProject";
import WZGProject from "../pages/About/project/WZGProject";
import MarketingProject from "../pages/About/project/MarketingProject";
import CyberSecurityProject from "../pages/About/project/CyberSecurityProject";



import JobDetails from "../pages/Careers/JobDetails";
import JavaDeveloper from "../pages/Careers/JavaDeveloper";
import ReactDeveloper from "../pages/Careers/ReactDeveloper";
import DigitalMarketing from "../pages/Careers/DigitalMarketing";
import AWSEngineer from "../pages/Careers/AWSEngineer";
import PythonDeveloper from "../pages/Careers/PythonDeveloper";
import CyberSecurity from "../pages/Careers/CyberSecurity";

import InternshipProgram from "../pages/Programs/InternshipProgram";
import DataAnalytics from "../pages/Programs/Details/DataAnalytics";
import RoboticEngineer from "../pages/Programs/Details/RoboticEngineer";
import MicrosoftTechnologies from "../pages/Programs/Details/MicrosoftTechnologies";
import PythonFullStack from "../pages/Programs/Details/PythonFullStack";
import MernStack from "../pages/Programs/Details/MernStack";
import Salesforce from "../pages/Programs/Details/Salesforce";
import QualityAssurance from "../pages/Programs/Details/QualityAssurance";
import CloudTechnologies from "../pages/Programs/Details/CloudTechnologies";
import CyberSecurityDetails from "../pages/Programs/Details/CyberSecuritydetails";
import AIMLDetails from "../pages/Programs/Details/AIMLdetails";
import JavaFullStackDetails from "../pages/Programs/Details/JavaFullStackDetails";
import Reviews from "../pages/Programs/Reviews/Reviews";
import ScrollToTop from "../components/ScrollToTop";

const AppRouter: React.FC = () => {
    const location = useLocation();
    const isInternshipPage = location.pathname === '/internship' || location.pathname === '/reviews' || location.pathname.startsWith('/programs/internship/');

    return (
        <>
            <ScrollToTop />
            {!isInternshipPage && <Navbar />}
            <div className={isInternshipPage ? "" : "pt-20"}> {/* Add padding top to account for sticky navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:id" element={<ServiceDetail />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/careers/job-details" element={<JobDetails />} />
                    <Route path="/careers/java-developer" element={<JavaDeveloper />} />
                    <Route path="/careers/react-developer" element={<ReactDeveloper />} />
                    <Route path="/careers/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="/careers/aws-engineer" element={<AWSEngineer />} />
                    <Route path="/careers/python-developer" element={<PythonDeveloper />} />
                    <Route path="/careers/cyber-security" element={<CyberSecurity />} />
                    <Route path="/careers/:id" element={<JobDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects/bonjour" element={<BonjourProject />} />
                    <Route path="/projects/hrms" element={<HRMSProject />} />
                    <Route path="/projects/otrs" element={<OTRSProject />} />
                    <Route path="/projects/wzg" element={<WZGProject />} />
                    <Route path="/projects/marketing" element={<MarketingProject />} />
                    <Route path="/projects/cybersecurity" element={<CyberSecurityProject />} />

                    {/* Internship Program Routes */}
                    <Route path="/internship" element={<InternshipProgram />} />
                    <Route path="/programs/internship/data-analytics" element={<DataAnalytics />} />
                    <Route path="/programs/internship/robotic-engineer" element={<RoboticEngineer />} />
                    <Route path="/programs/internship/microsoft-technologies" element={<MicrosoftTechnologies />} />
                    <Route path="/programs/internship/python-fullstack" element={<PythonFullStack />} />
                    <Route path="/programs/internship/mern-stack" element={<MernStack />} />
                    <Route path="/programs/internship/salesforce" element={<Salesforce />} />
                    <Route path="/programs/internship/quality-assurance" element={<QualityAssurance />} />
                    <Route path="/programs/internship/cloud-technologies" element={<CloudTechnologies />} />
                    <Route path="/programs/internship/cyber-security" element={<CyberSecurityDetails />} />
                    <Route path="/programs/internship/ai-ml" element={<AIMLDetails />} />
                    <Route path="/programs/internship/java-fullstack" element={<JavaFullStackDetails />} />
                    <Route path="/reviews" element={<Reviews />} />

                </Routes >
            </div >
            {!isInternshipPage && <Footer />}
            <AIChatWidget />
        </>
    );
}

export default AppRouter;
