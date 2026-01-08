import React from "react";
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
} from "lucide-react";

const Contact = () => {
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
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    icon={<User size={18} className="text-gray-400" />}
                    placeholder="Full Name *"
                  />
                  <Input
                    icon={<Mail size={18} className="text-gray-400" />}
                    type="email"
                    placeholder="Email Address *"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    icon={<Building2 size={18} className="text-gray-400" />}
                    placeholder="Company"
                  />
                  <Input
                    icon={<Phone size={18} className="text-gray-400" />}
                    placeholder="Phone Number"
                  />
                </div>

                <div className="relative">
                  <select className="appearance-none w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all">
                    <option>Select a Service *</option>
                    <option>IT Internship Program</option>
                    <option>IT Training Services</option>
                    <option>Staffing Solutions</option>
                    <option>Strategic Consulting</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>

                <Input placeholder="Subject *" />

                <textarea
                  rows={4}
                  placeholder="Message *"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
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
  type = "text",
  placeholder,
}: {
  icon?: React.ReactNode;
  type?: string;
  placeholder: string;
}) => (
  <div className="relative">
    {icon && (
      <div className="absolute left-5 top-1/2 -translate-y-1/2">
        {icon}
      </div>
    )}
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full rounded-2xl border border-gray-200 bg-white py-4 ${icon ? "pl-12 pr-5" : "px-5"
        } focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-600 placeholder:text-gray-400`}
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
