import { useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaCode,
  FaCloud,
  FaRobot,
  FaBriefcase,
  FaBullhorn,
  FaUserCog,
  FaMapMarkedAlt,
  FaBug,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
   FaBrain,
    FaSearchDollar,
     FaProjectDiagram,
} from "react-icons/fa";
import {
  FiTrendingUp,
  FiSettings,
  FiShield,
  FiDatabase ,
  FiArrowLeft ,
} from "react-icons/fi";
import Footer from "../../components/Footer";
import two from "../../assets/viedos/dataa.mp4"
export default function DataAnalytics() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
    <section className="relative h-[420px] overflow-hidden">

  {/* BACKGROUND VIDEO */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src={two}
    autoPlay
    loop
    muted
    playsInline
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0"></div>

 

  {/* CONTENT */}
<div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
  <div className="text-white max-w-xl">

    {/* BACK ARROW – EXACTLY ABOVE "Unlock" */}
    <button
      onClick={() => navigate("/services")}
      className="mb-4
                 bg-white/90 hover:bg-white
                 p-2 rounded-full shadow-lg
                 transition"
    >
      <FiArrowLeft className="text-blue-700 text-xl" />
    </button>

    <h2 className="text-3xl font-bold mb-4">
      Unlock Actionable Insight With <br /> WZG-AI Data Analytics
    </h2>

    <p className="text-sm mb-6">
      Transform your raw data into tangible business growth and gain a
      competitive edge in your industry.
    </p>

    <button className="bg-white text-blue-700 px-6 py-3 rounded font-medium">
      Learn More
    </button>
  </div>
</div>

</section>


     {/* ================= DRIVE GROWTH SECTION ================= */}
<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="grid md:grid-cols-3 gap-8">

    {/* Drive Growth */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 mb-4">
        <FiTrendingUp className="text-blue-600 text-2xl" />
      </div>
      <h3 className="font-semibold mb-2">Drive Growth</h3>
      <p className="text-sm text-gray-600">
        Utilize predictive analytics to identify opportunities and accelerate
        sustainable business growth.
      </p>
    </div>

    {/* Enhance Efficiency */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 mb-4">
        <FiSettings className="text-green-600 text-2xl" />
      </div>
      <h3 className="font-semibold mb-2">Enhance Efficiency</h3>
      <p className="text-sm text-gray-600">
        Streamline operations and optimize workflows using data-driven
        automation and insights.
      </p>
    </div>

    {/* Mitigate Risks */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 mb-4">
        <FiShield className="text-red-600 text-2xl" />
      </div>
      <h3 className="font-semibold mb-2">Mitigate Risks</h3>
      <p className="text-sm text-gray-600">
        Identify potential risks early and ensure compliance with intelligent
        monitoring and analytics.
      </p>
    </div>

  </div>
</section>


      {/* ================= SERVICES GRID ================= */}
   <section className="bg-gray-50 py-5">

  {/* FULL-WIDTH CARD */}
  <div
    className="
      bg-white
      w-full
      px-20
      py-8
      shadow-[0_-6px_10px_-6px_rgba(0,0,0,0.15),0_6px_10px_-6px_rgba(0,0,0,0.15)]
    "
  >
    <div className="max-w-7xl mx-auto">

      {/* Heading */}
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Our Comprehensive Analytics Services
      </h2>

      {/* Matter */}
      <p className="text-gray-600 max-w-4xl text-sm">
        We provide end-to-end data solutions designed to address your most
        complex challenges and drive measurable business results through
        advanced analytics and AI-driven insights.
      </p>

    </div>
  </div>

</section>
  <section className="bg-gray-50 py-8">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-6">

      {/* Card 1 */}
      <div className="bg-white p-6 rounded-xl
                      shadow-[0_12px_28px_-6px_rgba(0,0,0,0.25)]
                      hover:shadow-[0_18px_40px_-8px_rgba(0,0,0,0.35)]
                      transition-shadow duration-300">
        <FaChartLine className="text-blue-600 text-3xl mb-4" />
        <h3 className="font-semibold text-gray-900 mb-2">
          Predictive Analytics
        </h3>
        <p className="text-sm text-gray-600">
          Anticipate future trends and behaviours with high accuracy to make
          proactive business decisions.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-xl
                      shadow-[0_12px_28px_-6px_rgba(0,0,0,0.25)]
                      hover:shadow-[0_18px_40px_-8px_rgba(0,0,0,0.35)]
                      transition-shadow duration-300">
        <FaBrain className="text-blue-600 text-3xl mb-4" />
        <h3 className="font-semibold text-gray-900 mb-2">
          Predictive Analytics
        </h3>
        <p className="text-sm text-gray-600">
          Anticipate future trends and behaviours with high accuracy to make
          proactive business decisions.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-xl
                      shadow-[0_12px_28px_-6px_rgba(0,0,0,0.25)]
                      hover:shadow-[0_18px_40px_-8px_rgba(0,0,0,0.35)]
                      transition-shadow duration-300">
        <FaSearchDollar className="text-blue-600 text-3xl mb-4" />
        <h3 className="font-semibold text-gray-900 mb-2">
          Predictive Analytics
        </h3>
        <p className="text-sm text-gray-600">
          Anticipate future trends and behaviours with high accuracy to make
          proactive business decisions.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-xl
                      shadow-[0_12px_28px_-6px_rgba(0,0,0,0.25)]
                      hover:shadow-[0_18px_40px_-8px_rgba(0,0,0,0.35)]
                      transition-shadow duration-300">
        <FaProjectDiagram className="text-blue-600 text-3xl mb-4" />
        <h3 className="font-semibold text-gray-900 mb-2">
          Predictive Analytics
        </h3>
        <p className="text-sm text-gray-600">
          Anticipate future trends and behaviours with high accuracy to make
          proactive business decisions.
        </p>
      </div>

    </div>
  </div>
</section>



     <section className="py-20" style={{ backgroundColor: "#d1d7ddff" }}>
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
      Our Process
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-sm">
      Hear Directly from our satisfied clients about how WZG-AI transformed
      their data into a competitive advantage
    </p>

    <div className="grid md:grid-cols-3 gap-12">

      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          <FiDatabase className="text-blue-700 text-2xl" />
        </div>
        <h3 className="font-semibold text-gray-900">Data Collection</h3>
        <p className="text-sm text-gray-500 mt-1">Step 1</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          <FiSettings className="text-blue-700 text-2xl" />
        </div>
        <h3 className="font-semibold text-gray-900">Processing & Analysis</h3>
        <p className="text-sm text-gray-500 mt-1">Step 2</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          <FiTrendingUp className="text-blue-700 text-2xl" />
        </div>
        <h3 className="font-semibold text-gray-900">Insight Delivery</h3>
        <p className="text-sm text-gray-500 mt-1">Step 3</p>
      </div>

    </div>
  </div>
</section>

      {/* ================= TESTIMONIALS ================= */}
      {/* ================= WHAT OUR CLIENTS SAY ================= */}
<section className="bg-[#F7FAFD] py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
      What Our Clients Say
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-sm">
      Hear Directly from our satisfied clients about how WZG-AI transformed
      their data into a competitive advantage
    </p>

    {/* Testimonials */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-xl p-6 text-left
                      shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white
                          flex items-center justify-center font-semibold">
            R
          </div>
          <h4 className="font-semibold text-gray-900">
            Ravi Teja
          </h4>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          “WZG-AI’s predictive analytics model was a game-changer for our
          marketing strategy. We’ve seen 30% increase in conversion rates
          since implementation.”
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl p-6 text-left
                      shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white
                          flex items-center justify-center font-semibold">
            R
          </div>
          <h4 className="font-semibold text-gray-900">
            Revanth
          </h4>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          “The real-time BI dashboards have given us visibility into our
          supply chain. We can now identify and resolve bottlenecks before
          they become major issues.”
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl p-6 text-left
                      shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white
                          flex items-center justify-center font-semibold">
            L
          </div>
          <h4 className="font-semibold text-gray-900">
            Lithish
          </h4>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          “Their team didn’t just provide a service — they became a true
          partner. Their insights helped us navigate volatile markets and
          emerge stronger than ever.”
        </p>
      </div>

    </div>
  </div>
</section>


      {/* ================= FOOTER ================= */}
     <Footer/>
    </div>
  );
}