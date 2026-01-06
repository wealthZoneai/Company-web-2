import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mt-2 text-gray-500">
            Ready to transform your business? Contact us today to discuss how we
            can help you achieve your goals.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Form */}
          <form className="space-y-5 bg-gray-50 p-6 rounded-2xl">
            <Input label="Full Name *" placeholder="Enter Full Name" />
            <Input
              label="Email Address *"
              type="email"
              placeholder="Enter Email Address"
            />
            <Input label="Company Name" placeholder="Enter Company Name" />
            <Input label="Phone Number" placeholder="Enter Phone Number" />

            <div>
              <label className="text-sm font-medium">Services *</label>
              <select className="mt-1 w-full rounded-md border px-3 py-2">
                <option>Select a Service</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI/UX Design</option>
                <option>Consulting</option>
              </select>
            </div>

            <Input label="Subject *" placeholder="Enter Subject" />

            <div>
              <label className="text-sm font-medium">Message *</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info Wrapper (BACKGROUND FIX HERE) */}
          <div className="rounded-2xl bg-gray-50 p-6 space-y-4">
            <InfoCard
              icon={<Phone size={20} />}
              title="Phone Number"
              value="+91 78945 61222"
            />

            <InfoCard
              icon={<Mail size={20} />}
              title="Email ID"
              value={`info@wealthzonegroupai.com\nhr@wealthzonegroupai.com`}
            />

            <InfoCard
              icon={<MapPin size={20} />}
              title="Address"
              value="Office Address"
            />

            <InfoCard
              icon={<Clock size={20} />}
              title="Business Hours"
              value="24/7 Available"
            />

            {/* Social */}
            <div className="pt-2">
              <p className="mb-2 text-sm font-medium text-gray-900">
                Follow us
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/wealth-zone-group-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Wealth_Zone_Group_AI on LinkedIn"
                >
                  <SocialIcon icon={<Linkedin size={18} />} />
                </a>

                <a
                  href="https://www.instagram.com/wealth_zone_group_ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Wealth_Zone_Group_AI on Instagram"
                >
                  <SocialIcon icon={<Instagram size={18} />} />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Wealth_Zone_Group_AI on Facebook"
                >
                  <SocialIcon icon={<Facebook size={18} />} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-2xl font-bold">Our Location</h3>

          <div className="h-64 w-full overflow-hidden rounded-lg border">
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
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
  <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700 text-white">
      {icon}
    </div>

    <div>
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="text-sm leading-relaxed text-gray-500 whitespace-pre-line">
        {value}
      </p>
    </div>
  </div>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-white text-gray-600 transition hover:bg-blue-700 hover:text-white">
    {icon}
  </div>
);

export default Contact;
