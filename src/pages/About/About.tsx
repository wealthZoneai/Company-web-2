import { Link } from "react-router-dom";
import img20 from "../../assets/images/Advertisement_women.png";
import innovation from "../../assets/images/cap.png";
import integrity from "../../assets/images/cap.png";
import customer from "../../assets/images/cap.png";
import teamwork from "../../assets/images/cap.png";
import accountability from "../../assets/images/cap.png";
import excellence from "../../assets/images/cap.png";
import two from "../../assets/viedos/team.mp4"
import OurTeam from "./OurTeam";
import bulb from "../../assets/images/bulb.png";


import hyderabad from "../../assets/images/places/hyd.png";
import vijayawada from "../../assets/images/places/vija.png";
import bengaluru from "../../assets/images/places/bnglr.png";
import vizag from "../../assets/images/places/viz.png";




// import video from "../assets/hero-bg.mp4"
export default function About() {
  return (
    <div className="bg-gray-50">

     {/* HERO SECTION WITH BACKGROUND VIDEO */}
<section className="relative h-screen overflow-hidden">
  
    {/* BACKGROUND VIDEO */}
    {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={two}
        autoPlay
        loop
        muted
        playsInline
      />


  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-/70"></div>

  {/* Content */}
  <div className="relative z-10 py-24 text-center px-6 text-white flex flex-col items-center justify-center h-full bg-black/40">
    <h1 className="text-4xl font-bold mb-4">
      Empowering Growth with Advanced <br />
      Artificial Intelligence
    </h1>

    <p className="max-w-3xl mx-auto text-sm mb-8">
      Wealth Zone Group AI is dedicated to revolutionizing strategies
      through cutting-edge technology and unparalleled expertise.
    </p>

    <div className="flex justify-center gap-4">
      <Link
        to="/contact"
        className="bg-blue-600 px-6 py-3 rounded-md font-medium"
      >
        Contact Us
      </Link>

      <Link
        to="/services"
        className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium"
      >
        Our Services
      </Link>
    </div>
  </div>
</section>

    {/* WHO WE ARE */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <div className="flex items-start gap-4">

    {/* Blue Vertical Line */}
    <div className="w-[2px] h-8 bg-blue-600 mt-1"></div>

    {/* Content */}
    <div>
      <h2 className="text-blue-700 text-lg justify-content: center font-semibold mb-5">
        Who We Are
      </h2>

      <p className="text-gray-600 text-[15px] leading-7 max-w-5xl font-normal">
        At Wealth Zone Group AI, we are architects of digital transformation.
        We are a global technology powerhouse dedicated to creating intelligent,
        scalable, and secure solutions that drive progress.
        <br /><br />
        Our purpose is to harness the power of artificial intelligence to solve
        complex business challenges, foster innovation, and deliver unparalleled
        value to clients across the globe.
        <br /><br />
        We are committed to pushing the boundaries of technology to build a
        smarter, more connected world.
      </p>
    </div>

  </div>
</section>


      {/* OUR JOURNEY */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-blue-700 font-semibold mb-4">
          Our Journey
        </h2>

        <div className="border-2 border-blue-600 rounded-x p-8 bg-white relative">
          <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">
            Founded in 2010s as Cyber Technologies and later rebranded to WealthZone
            Group AI, our company has grown into a leading product and service-based
            IT organization specializing in Artificial Intelligence (AI), Advanced
            Digital Solutions, Software Development, and Digital Marketing Services.
            <br /><br />
            At WealthZone Group AI, we combine innovation, intelligence, and technology
            to empower businesses with transformative digital solutions.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "AI & ML",
              "Cloud Computing",
              "Software Development",
              "Digital Marketing",
              "Cyber Security",
              "App Development",
            ].map(tag => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* WOMAN IMAGE (BOTTOM RIGHT) */}
         <img
  src={img20}
  alt="Wealth_Zone_Group_AI"
  className="absolute right-0 bottom-0 h-64 hidden md:block"
/>    
        </div>
      </section>

   
{/* MISSION & VISION */}
<section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">

  {/* MISSION CARD */}
  <div className="relative overflow-hidden rounded-xl p-6 text-white">

    {/* Background Video */}
    <iframe
      className="absolute inset-0 w-full h-full pointer-events-none scale-125"
      src="https://www.youtube.com/embed/PcBoVZZI9jo?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=PcBoVZZI9jo"
      title="Mission Background"
      frameBorder="0"
      allow="autoplay; fullscreen"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-blue-900/80"></div>

    {/* Content */}
    <div className="relative z-10">
      <h3 className="font-bold text-xl mb-2">Mission</h3>
      <p className="text-sm">
        To empower businesses with transformative AI-driven solutions,
        enhancing efficiency, fostering growth, and creating sustainable
        value for clients, employees, and society.
      </p>
    </div>
  </div>

  {/* VISION CARD */}
  <div className="relative overflow-hidden rounded-xl p-6 text-white">

    {/* Background Video */}
    <iframe
      className="absolute inset-0 w-full h-full pointer-events-none scale-125"
      src="https://www.youtube.com/embed/PcBoVZZI9jo?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=PcBoVZZI9jo"
      title="Vision Background"
      frameBorder="0"
      allow="autoplay; fullscreen"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-purple-900/80"></div>

    {/* Content */}
    <div className="relative z-10">
      <h3 className="font-bold text-xl mb-2">Vision</h3>
      <p className="text-sm">
        To become a leading global tech company known for innovative AI
        products, simple user experiences, and reliable digital solutions.
      </p>
    </div>
  </div>
</section>
 {/* OUR CORE VALUES */}
<section className="max-w-7xl mx-auto  bg-white px-6 py-16">
 <div className="flex items-center gap-3 mb-10">
  <div className="w-[3px] h-10 bg-blue-700 rounded-full"></div>

  <h2 className="text-blue-800 font-semibold">
    Our Core Values
  </h2>
</div>
  <div className="grid md:grid-cols-3 gap-8">
    {/* Innovation */}
    <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-300">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3z"/>
          </svg>
        </div>
        <h4 className="font-semibold text-lg text-gray-900">
          Innovation
        </h4>
      </div>
      <p className="text-gray-600 text-sm leading-6">
        We continuously explore new ideas and technologies to deliver cutting-edge solutions.
      </p>
    </div>

    {/* Integrity */}
    <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-300">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4"/>
          </svg>
        </div>
        <h4 className="font-semibold text-lg text-gray-900">
          Integrity
        </h4>
      </div>
      <p className="text-gray-600 text-sm leading-6">
        We uphold the highest standards of ethics and transparency in all we do.
      </p>
    </div>

    {/* Customer First */}
    <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-300">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
          </svg>
        </div>
        <h4 className="font-semibold text-lg text-gray-900">
          Customer-First
        </h4>
      </div>
      <p className="text-gray-600 text-sm leading-6">
        Our clients' success is our priority, and we are dedicated to their needs.
      </p>
    </div>

    {/* Teamwork */}
    <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-300">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 13a3 3 0 100-6 3 3 0 000 6zM17 13a3 3 0 100-6 3 3 0 000 6z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 20c0-2.5 2-4.5 4.5-4.5M22 20c0-2.5-2-4.5-4.5-4.5"/>
          </svg>
        </div>
        <h4 className="font-semibold text-lg text-gray-900">
          Teamwork
        </h4>
      </div>
      <p className="text-gray-600 text-sm leading-6">
        We foster a collaborative environment to achieve excellence together.
      </p>
    </div>

    {/* Accountability */}
    <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-300">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="4" y="7" width="16" height="12" rx="2"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V5a3 3 0 016 0v2"/>
            <circle cx="12" cy="13" r="1"/>
          </svg>
        </div>
        <h4 className="font-semibold text-lg text-gray-900">
          Accountability
        </h4>
      </div>
      <p className="text-gray-600 text-sm leading-6">
        We take ownership of our commitments and deliver on our promises.
      </p>
    </div>

    {/* Excellence */}
    <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-300">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l3 6 6 .8-4.5 4.2 1 6-5.5-3-5.5 3 1-6L3 9.8 9 9l3-6z"/>
          </svg>
        </div>
        <h4 className="font-semibold text-lg text-gray-900">
          Excellence
        </h4>
      </div>
      <p className="text-gray-600 text-sm leading-6">
        We strive for world-class quality in our solutions, services, and operations.
      </p>
    </div>

  </div>
</section>

{/* WHAT WE DO */}
<section className="max-w-7xl mx-auto px-6 bg-white py-16">
  <div className="flex items-center gap-4">
  <div className="w-[3px] h-10 bg-blue-700"></div>
  <h2 className="text-blue-800 font-bold">
    What We Do
  </h2>
</div>

  <div className="grid md:grid-cols-2 gap-6 mt-6">

    {/* Enterprise Solutions */}
    <div className="bg-[#F3F6FF] p-6 rounded-xl   shadow-lg hover:shadow-lg transition-shadow duration-300">
      <h3 className="font-semibold text-gray-900 m-0">
        Enterprise Solutions
      </h3>

      <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 m-0 mt-2">
        <li>Advanced HRMS Systems</li>
        <li>OTRS & Support Tools</li>
        <li>Custom Software Development</li>
      </ul>
    </div>

    {/* Digital Services */}
    <div className="bg-[#FFF6ED] p-6 rounded-xl   shadow-lg hover:shadow-lg transition-shadow duration-300">
      <h3 className="font-semibold text-gray-900 m-0">
        Digital Services
      </h3>

      <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 m-0 mt-2">
        <li>Comprehensive Cybersecurity Services</li>
        <li>Strategic Digital Marketing</li>
        <li>Targeted Staffing Solutions</li>
      </ul>
    </div>

    {/* Consumer Technology */}
    <div className="bg-[#FFF6ED] p-6 rounded-xl   shadow-lg hover:shadow-lg transition-shadow duration-300">
      <h3 className="font-semibold text-gray-900 m-0">
        Consumer Technology
      </h3>

      <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 m-0 mt-2">
        <li>Food Delivery Applications</li>
        <li>Innovative STEM Learning Products</li>
      </ul>
    </div>

    {/* Custom Development */}
    <div className="bg-[#F3F6FF] p-6 rounded-xl   shadow-lg hover:shadow-lg transition-shadow duration-300">
      <h3 className="font-semibold text-gray-900 m-0">
        Custom Development
      </h3>

      <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 m-0 mt-2">
        <li>Bespoke Application Building</li>
        <li>AI & ML Model Integration</li>
      </ul>
    </div>

  </div>
</section>

    {/* WHY CHOOSE US */}
<section className="max-w-7xl mx-auto px-6 pb-16">

  {/* Heading with blue vertical line */}
  <div className="flex items-center gap-3 mb-10">
    <div className="w-[3px] h-8 bg-blue-600 rounded-full"></div>
    <h2 className="text-blue-700 font-semibold text-lg">
      Why Choose Us
    </h2>
  </div>

  {/* Content */}
  <div className="grid md:grid-cols-3 gap-6 text-center">

    {/* Expertise & Innovation */}
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
          {/* Bulb / Innovation Icon */}
          <svg
            className="w-7 h-7 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a7 7 0 00-4 12c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2a7 7 0 00-4-12z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6" />
          </svg>
        </div>
      </div>

      <h4 className="font-semibold text-gray-900 mb-2">
        Expertise & Innovation
      </h4>

      <p className="text-sm text-gray-600 leading-6">
        Our team combines deep industry expertise with innovative thinking to
        deliver intelligent, future-ready solutions.
      </p>
    </div>

    {/* End-to-End Solutions */}
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
          {/* Layers / Solutions Icon */}
          <svg
            className="w-7 h-7 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 5-9 5-9-5 9-5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 5 9-5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l9 5 9-5" />
          </svg>
        </div>
      </div>

      <h4 className="font-semibold text-gray-900 mb-2">
        End-to-End Solutions
      </h4>

      <p className="text-sm text-gray-600 leading-6">
        From strategy and design to development and deployment, we provide
        complete solutions tailored to your business needs.
      </p>
    </div>

    {/* Security & Quality */}
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
          {/* Shield / Security Icon */}
          <svg
            className="w-7 h-7 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          </svg>
        </div>
      </div>

      <h4 className="font-semibold text-gray-900 mb-2">
        Security & Quality
      </h4>

      <p className="text-sm text-gray-600 leading-6">
        We follow strict security standards and quality processes to ensure
        reliable, scalable, and high-performance solutions.
      </p>
    </div>

  </div>
</section>
    
     {/* BRANCHES */}
<section className="max-w-7xl mx-auto px-6 pb-16">
 <div className="flex items-center gap-3 mb-10">
  <div className="w-[3px] h-8 bg-blue-700 rounded-full"></div>

  <h2 className="text-blue-800 font-semibold">
    Our Branches
  </h2>
</div>

  <div className="grid md:grid-cols-4 gap-6">

    {/* Hyderabad */}
    <div className="bg-white rounded-lg shadow overflow-hidden text-center">
      <img
        src={hyderabad}
        alt="Wealth_Zone_Group_AI"
        className="h-32 w-full object-cover"
      />
      <p className="py-3 font-medium">Hyderabad</p>
    </div>

    {/* Vijayawada */}
    <div className="bg-white rounded-lg shadow overflow-hidden text-center">
      <img
        src={vijayawada}
        alt="Wealth_Zone_Group_AI"
        className="h-32 w-full object-cover"
      />
      <p className="py-3 font-medium">Vijayawada</p>
    </div>

    {/* Bengaluru */}
    <div className="bg-white rounded-lg shadow overflow-hidden text-center">
      <img
        src={bengaluru}
        alt="Wealth_Zone_Group_AI"
        className="h-32 w-full object-cover"
      />
      <p className="py-3 font-medium">Bengaluru</p>
    </div>

    {/* Vizag */}
    <div className="bg-white rounded-lg shadow overflow-hidden text-center">
      <img
        src={vizag}
        alt="Wealth_Zone_Group_AI"
        className="h-32 w-full object-cover"
      />
      <p className="py-3 font-medium">Vizag</p>
    </div>

  </div>
</section>


      {/* STATS */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          <div><h3 className="text-2xl font-bold">500+</h3><p>Happy Clients</p></div>
          <div><h3 className="text-2xl font-bold">20+</h3><p>Years Experience</p></div>
          <div><h3 className="text-2xl font-bold">500+</h3><p>Projects Completed</p></div>
          <div><h3 className="text-2xl font-bold">98%</h3><p>Success Rate</p></div>
        </div>
      </section>

  {/* FUTURE GOAL */}
<section className="max-w-7xl mx-auto px-6 py-10">
  <div className="flex items-center">
    {/* Blue vertical line */}
    <div className="w-1 h-12 bg-blue-700 mr-3"></div>

    <h2 className="text-blue-800 font-semibold text-xl">
      Our Future Goal
    </h2>
  </div>

  <p className="text-gray-700 max-w-4xl mt-4">
    Looking ahead, WealthZoneGroup-AI is focused on pioneering new frontiers
    in artificial intelligence through next-generation products, global
    market expansion, and enterprise-level AI solutions.
  </p>
</section>
{/* CTA SECTION */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <div className="bg-blue-700 rounded-[40px] py-20 text-center">

   

    {/* Logo + Heading */}
    <div className="flex justify-center items-center gap-4 mb-6">
      <div className="bg-white p-3 rounded-xl">
        <img src={bulb} alt="Wealth_Zone_Group_AI" className="w-6 h-6" />
      </div>

      <h2 className="text-white text-2xl md:text-3xl font-semibold">
        Lets Build The Future Together
      </h2>
    </div>
     {/* bottom text */}
    <p className="text-white font-medium mb-6">
      Ready to Transform your business with Intelligent Technology? <br />
       Contact Us to learn how our solutions can drive your success.
    </p>

    {/* Button */}
    <button className="bg-white text-blue-700 px-10 py-3 rounded-xl font-semibold">
      Contact Us
    </button>

  </div>
</section>
      <OurTeam />

      {/* FINAL CTA */}
      <section className="bg-blue-700 py-16 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Let’s Build The Future Together
        </h2>
        <p className="mb-6">
          Ready to transform your business with intelligent technology?
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
