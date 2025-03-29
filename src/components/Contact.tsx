import { ChangeEvent, FormEvent, useState } from "react";
import {
  MdOutlineEmail,
  MdOutlineForum,
  MdOutlineLocationOn,
} from "react-icons/md";
import Socials from "./Socials";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thanks for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black to-[#0a0a0a] py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-[#ff0055] to-[#00ccff]"></div>
          <p className="text-lg text-white/80">
            Have questions about joining our team or want to discuss sponsorship
            opportunities? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-[#ff0055]/20 p-3">
                  <MdOutlineEmail className="h-6 w-6 text-[#ff0055]" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Email</h4>
                  <p className="text-white/70">contact@derbyesports.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-[#00ccff]/20 p-3">
                  <MdOutlineLocationOn className="h-6 w-6 text-[#00ccff]" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Location</h4>
                  <p className="text-white/70">
                    Derby, Derbyshire
                    <br />
                    East Midlands, England
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-[#ffcc00]/20 p-3">
                  <MdOutlineForum className="h-6 w-6 text-[#ffcc00]" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Social Media</h4>
                  <Socials size={24} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus:ring-2 focus:ring-[#00ccff]/50 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus:ring-2 focus:ring-[#00ccff]/50 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus:ring-2 focus:ring-[#00ccff]/50 focus:outline-none"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
