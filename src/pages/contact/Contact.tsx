import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Facebook,
  User,
  Building2,
  PhoneCall,
  ChevronDown,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage("");

    try {
      const response = await fetch("http://localhost:8080/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setResponseMessage("Your message has been sent successfully! We'll get back to you soon.");
        setFormData({
          fullName: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus('error');
        setResponseMessage(data.message || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Contact submission error:", error);
      setStatus('error');
      setResponseMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-8">Get in Touch</h2>
              <div className="space-y-4">
                <InfoCard
                  icon={<PhoneCall size={20} />}
                  title="Phone"
                  value="+91 7842770089"
                />

                <InfoCard
                  icon={<Mail size={20} />}
                  title="Email"
                  value={`info@wealthzonegroupai.com\nhr@wealthzonegroupai.com`}
                />

                <InfoCard
                  icon={<MapPin size={20} />}
                  title="Address"
                  value="2nd floor, A2 Square Building, Jai Hind Gandhi Rd, Madhapur, Hyderabad, Telangana 500081, India"
                />

                <InfoCard
                  icon={<Clock size={20} />}
                  title="Business Hours"
                  value="24/7 Available"
                />
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="mb-4 text-sm font-bold text-gray-900">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/wealth-zone-group-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <SocialIcon icon={<Linkedin size={18} />} />
                </a>

                <a
                  href="https://www.instagram.com/wealth_zone_group_ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <SocialIcon icon={<Instagram size={18} />} />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <SocialIcon icon={<Facebook size={18} />} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-10">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    icon={<User size={18} className="text-gray-400" />}
                    placeholder="Full Name *"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    disabled={status === 'loading'}
                  />
                  <Input
                    icon={<Mail size={18} className="text-gray-400" />}
                    type="email"
                    placeholder="Email Address *"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    icon={<Building2 size={18} className="text-gray-400" />}
                    placeholder="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={status === 'loading'}
                  />
                  <Input
                    icon={<Phone size={18} className="text-gray-400" />}
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    disabled={status === 'loading'}
                    className="appearance-none w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all disabled:bg-gray-50 disabled:text-gray-400"
                  >
                    <option value="" disabled>Select a Service *</option>
                    <option value="IT Internship Program">IT Internship Program</option>
                    <option value="IT Training Services">IT Training Services</option>
                    <option value="Staffing Solutions">Staffing Solutions</option>
                    <option value="Strategic Consulting">Strategic Consulting</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>

                <Input
                  placeholder="Subject *"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={status === 'loading'}
                />

                <textarea
                  rows={4}
                  placeholder="Message *"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none disabled:bg-gray-50 disabled:text-gray-400"
                />

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3 text-sm border border-green-100"
                    >
                      <CheckCircle2 size={20} />
                      {responseMessage}
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-red-50 text-red-700 p-4 rounded-xl flex items-center gap-3 text-sm border border-red-100"
                    >
                      <AlertCircle size={20} />
                      {responseMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full rounded-2xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">Our Location</h3>
          <div className="h-[400px] w-full overflow-hidden rounded-[2rem] border border-gray-100 shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=17.451194,78.387556&z=15&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Reusable Components ---------------- */

const Input = ({
  icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
}) => (
  <div className="relative group">
    {icon && (
      <div className="absolute left-5 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-blue-600">
        {icon}
      </div>
    )}
    <input
      {...props}
      className={`w-full rounded-2xl border border-gray-200 bg-white py-4 ${icon ? "pl-12 pr-5" : "px-5"
        } focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-600 placeholder:text-gray-400 disabled:bg-gray-50 disabled:text-gray-400`}
    />
  </div>
);

const InfoCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="flex items-center gap-6 rounded-[2rem] bg-blue-50/50 p-6 border border-blue-100/50">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
      {icon}
    </div>

    <div>
      <p className="text-base font-bold text-blue-900 mb-1">{title}</p>
      <p className="text-sm leading-relaxed text-gray-600 whitespace-pre-line font-medium">
        {value}
      </p>
    </div>
  </div>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-gray-100 bg-blue-50 text-blue-600 transition-all hover:bg-blue-600 hover:text-white hover:scale-110 shadow-sm">
    {icon}
  </div>
);

export default Contact;

