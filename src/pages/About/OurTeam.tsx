
import medam from "../../assets/images/logo/medam.png";
import {
  FaLightbulb,
  FaUsers,
  FaAward,
  FaHeart,
} from "react-icons/fa";
// import party from "../assets/core/party.mp4";

export default function OurTeam() {

  const values = [
    {
      title: "Innovation First",
      text: "We constantly explore new technologies to deliver forward-thinking solutions.",
      icon: <FaLightbulb />,
    },
    {
      title: "Collaboration",
      text: "We build strong partnerships with our clients and within our team.",
      icon: <FaUsers />,
    },
    {
      title: "Excellence",
      text: "We are committed to the highest quality in everything we do.",
      icon: <FaAward />,
    },
    {
      title: "People First",
      text: "We invest in our team’s growth and well-being.",
      icon: <FaHeart />,
    },
  ];

  return (
    <div className="w-full overflow-hidden">

    

      {/* WHO WE ARE */}
     <section className="max-w-7xl mx-auto px-6 py-16">
  {/* Section Title */}
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
    Who We Are
  </h2>

  {/* Description */}
  <p className="text-gray-600 leading-relaxed max-w-5xl">
    At our core, we are a team of passionate technologists, strategists, and
    problem-solvers committed to delivering exceptional results. We partner
    with businesses to navigate the complexities of the digital landscape,
    offering bespoke solutions that drive growth, efficiency, and market
    leadership. Our mission is to transform your vision into reality through
    innovative technology and unparalleled service.
  </p>
</section>
      {/* LEADERSHIP */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">
            Our Leadership
          </h2>
<p className="text-gray-500 mb-4">
  Visionary leaders guiding our journey to excellence
</p>


          <div className="flex justify-center mt-10">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm">
              <div className="flex justify-center mb-4">
                <img
                  src={medam}
                  alt="Company Logo"
                  className="w-20 h-20 rounded-full border"
                />
              </div>
              <h3 className="font-semibold text-lg">B. Sri Lakshmi</h3>
              <p className="text-blue-700 font-medium">Founder & CEO</p>
              <p className="text-gray-600 mt-2 text-sm">
                MBA (Finance & IT). Visionary leader with 12 years of experience.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* OUR VALUES */}
<section className="max-w-7xl mx-auto px-6 py-1">
  

  <div className="grid md:grid-cols-4 gap-6 text-center">
    {values.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl p-8
                   shadow-lg shadow-blue-100
                   hover:shadow-xl hover:-translate-y-1
                   transition-all duration-300"
      >
        {/* LOGO / ICON (NO CIRCLE, NO BORDER) */}
        <div className="flex justify-center mb-4 text-blue-600 text-4xl">
          {item.icon}
        </div>

        {/* TITLE */}
        <h4 className="font-semibold text-lg mb-2">
          {item.title}
        </h4>

        {/* TEXT */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {item.text}
        </p>
      </div>
    ))}
  </div>
</section>
{/* LIFE AT WEALTH ZONE AI */}
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-blue-700 font-bold text-2xl mb-2">
      Life at Wealth Zone AI
    </h2>

    <p className="text-gray-500 mb-12">
      A culture of innovation, collaboration, and growth
    </p>

    {/* TEXT COLUMNS */}
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="font-semibold mb-2">Innovative Culture</h3>
        <p className="text-sm text-gray-600">
          We encourage creativity, experimentation, and bold ideas to push
          boundaries in AI and digital transformation.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="font-semibold mb-2">Collaborative Team</h3>
        <p className="text-sm text-gray-600">
          Open communication and teamwork are at the heart of everything we do.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="font-semibold mb-2">Growth & Learning</h3>
        <p className="text-sm text-gray-600">
          Continuous learning, mentorship, and career development are core to
          our people-first approach.
        </p>
      </div>
    </div>

    {/* VIDEO COLUMN BELOW */}
    <div className="max-w-5xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Optional caption */}
        <div className="absolute bottom-6 left-6 text-white text-left">
          <h4 className="text-lg font-semibold">
            Inside Life at Wealth Zone AI
          </h4>
          <p className="text-sm text-gray-200">
            Where ideas turn into impact
          </p>
        </div>
      </div>
    </div>

  </div>
</section>


     {/* TEAM */}
<section className="max-w-7xl mx-auto px-6 py-16 text-center">
  <h2 className="text-blue-700 font-bold text-xl mb-10">
    Our Team
  </h2>

  <div className="grid md:grid-cols-4 gap-6">
    {["UI/UX Designer", "Frontend Developer", "Backend Developer", "QA Engineer"].map(
      (role, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6
                     shadow-lg shadow-blue-100
                     hover:shadow-xl hover:-translate-y-1
                     transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-blue-700 text-white mx-auto
                          flex items-center justify-center font-bold mb-4">
            R
          </div>

          <h3 className="font-semibold">Ravi Teja</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      )
    )}
  </div>
</section>
    </div>
  );
}
