import React, { useState } from "react";
import { FiMapPin, FiMail, FiPhone, FiUsers } from "react-icons/fi";
import {
  FaFacebookF,
  FaDribbble,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  BsEmojiSmile,
  BsTelephone,
  BsEnvelope,
  BsJournals,
  BsChatSquareDots,
} from "react-icons/bs";

export function Contact(props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Email must be a valid @gmail.com address";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully ✅");
      console.log(formData);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <>
      {/* section-1 */}
      <section
        className="relative bg-cover bg-center pt-32 pb-12 md:py-24 md:pt-[130px] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://craftohtml.themezaa.com/images/demo-data-analysis-title-bg.jpg')",
        }}
      >
        <div className="container mx-auto relative h-full">
          {/* Floating left image */}
          <div className="absolute -top-10 left-5 md:top-0 md:left-20 xs:left-2 animate-spin-slow">
            <img
              src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-01.png"
              alt="decor"
              className="w-20 md:w-36"
            />
          </div>

          {/* Floating right image */}
          <div className="absolute right-4 bottom-20 md:right-20 xs:right-2 animate-spin-slow">
            <img
              src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-03.png"
              alt="decor"
              className="w-20 md:w-28"
            />
          </div>

          {/* Title content */}
          <div className="flex justify-center items-center h-full px-5 md:px-0">
            <div className="text-center md:max-w-xl">
              <h1 className="bg-emerald-500 text-white text-xs uppercase font-semibold px-5 py-2 rounded-full inline-block mb-4">
                Contact us
              </h1>
              <h2 className="text-3xl md:text-6xl font-bold text-gray-800">
                Do you need help?{" "}
                <span className="relative">
                  contact
                  <span className="absolute left-0 bottom-0 md:bottom-2 w-full h-2 bg-emerald-500 opacity-30"></span>
                </span>{" "}
                with us!
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* section-2 */}
      <section className="pt-0 md:pt-[76px] md:pb-[110px] ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:mx-32 md:justify-center text-center sm:text-left">
            {/* Office Location */}
            <div className="mb-[35px] md:mb-0">
              <span className="font-semibold text-lg text-gray-800 border-b-2 border-gray-800 pb-3 mb-3 inline-block w-[90%] md:w-[80%]">
                <FiMapPin className="inline-block mr-2 mb-2 text-gray-700" />
                Office location
              </span>
              <p className="m-0 text-gray-500">
                16122 Collins Street, <br /> Melbourne, Australia
              </p>
            </div>

            {/* Send a Message */}
            <div className="mb-[35px] md:mb-0">
              <span className="font-semibold text-lg text-gray-800 border-b-2 border-gray-800 pb-3 mb-3 inline-block w-[90%] md:w-[80%]">
                <FiMail className="inline-block mr-2 mb-2 text-gray-700" />
                Send a message
              </span>
              <a
                href="mailto:info@yourdomain.com"
                className="block text-gray-500 hover:text-gray-800"
              >
                info@yourdomain.com
              </a>
              <a
                href="mailto:sales@yourdomain.com"
                className="block text-gray-500 hover:text-gray-800"
              >
                sales@yourdomain.com
              </a>
            </div>

            {/* Call Us Directly */}
            <div className="mb-[35px] md:mb-0">
              <span className="font-semibold text-lg text-gray-800 border-b-2 border-gray-800 pb-3 mb-3 inline-block w-[90%] md:w-[80%]">
                <FiPhone className="inline-block mr-2 mb-2 text-gray-700" />
                Call us directly
              </span>
              <a
                href="tel:1800222000"
                className="block text-gray-500 hover:text-gray-800"
              >
                1-800-222-000
              </a>
              <a
                href="tel:1800222002"
                className="block text-gray-500 hover:text-gray-800"
              >
                1-800-222-002
              </a>
            </div>

            {/* Join Our Team */}
            <div className="mb-[35px] md:mb-0">
              <span className="font-semibold text-lg text-gray-800 border-b-2 border-gray-800 pb-3 mb-3 inline-block w-[90%] md:w-[80%]">
                <FiUsers className="inline-block mr-2 mb-2 text-gray-700" />
                Join our team
              </span>
              <a
                href="mailto:hire@yourdomain.com"
                className="block text-gray-500 hover:text-gray-800"
              >
                hire@yourdomain.com
              </a>
              <a
                href="mailto:hr@yourdomain.com"
                className="block text-gray-500 hover:text-gray-800"
              >
                hr@yourdomain.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* section-3 */}
      <section
        className="p-0 h-[400px] md:h-[500px] overlap-height relative"
        id="location"
      >
        <div className="container-fluid h-full overlap-gap-section">
          <div className="row justify-content-center h-full">
            <div className="col-12 p-0">
              <div className="map h-[550px] md:h-[400px] sm:h-[450px]">
                <iframe
                  title="Crafto Data Analysis Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094094!2d144.962312!3d-37.805688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dfb5f47a5%3A0xb68d1c9e1c89a851!2s16122%20Collins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1695200000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* section-4 */}
        <section className="absolute top-46 md:left-10 pb-20 px-5 md:px-0">
          <div className="container mx-auto">
            <div className="flex justify-center my-16">
              <div className="lg:w-10/12 bg-white p-[28px] md:p-[78px] rounded-md shadow-2xl">
                <div className="text-center mb-6">
                  <h2 className="font-bold text-4xl md:text-5xl text-gray-800">
                    Have a{" "}
                    <span className="relative">
                      project
                      <span className="absolute bottom-2 left-0 w-full h-2 bg-emerald-500 opacity-30"></span>
                    </span>{" "}
                    in mind?
                  </h2>
                </div>

                {/* Contact Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="text-sm uppercase text-gray-800 font-semibold">
                        Your name*
                      </label>
                      <div className="relative mt-1">
                        <BsEmojiSmile className="absolute right-2 top-3 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="What's your good name?"
                          className="w-full p-2 border-b border-gray-300 bg-transparent"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-sm uppercase text-gray-800 font-semibold">
                        Your phone number*
                      </label>
                      <div className="relative mt-1">
                        <BsTelephone className="absolute right-2 top-3 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full p-2 border-b border-gray-300 bg-transparent"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-sm uppercase text-gray-800 font-semibold">
                        Your email address*
                      </label>
                      <div className="relative mt-1">
                        <BsEnvelope className="absolute right-2 top-3 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          className="w-full p-2 border-b border-gray-300 bg-transparent"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="text-sm uppercase text-gray-800 font-semibold">
                        Your subject
                      </label>
                      <div className="relative mt-1">
                        <BsJournals className="absolute right-2 top-3 text-gray-400" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className="w-full p-2 border-b border-gray-300 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm uppercase text-gray-800 font-semibold">
                      Your message
                    </label>
                    <div className="relative mt-1">
                      <BsChatSquareDots className="absolute right-2 top-3 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Describe about your message"
                        className="w-full p-2 border-b md:border border-gray-300 bg-transparent"
                      ></textarea>
                    </div>
                  </div>

                  {/* Privacy + Submit */}
                  <div className="grid md:grid-cols-2 items-center">
                    <p className="text-md text-gray-600">
                      We are committed to protecting your privacy. We will never
                      collect information about you without your explicit
                      consent.
                    </p>
                    <div className="text-center md:text-right mt-4 md:mt-0">
                      <button
                        type="submit"
                        className="bg-gray-800 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-900 transition"
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Social Media */}
            <div className="flex flex-col md:flex-row justify-center items-center mt-10  space-y-4 md:space-y-0 md:space-x-6">
              {" "}
              <span className="text-2xl font-semibold text-gray-800">
                {" "}
                Connect with social media{" "}
              </span>{" "}
              <div className="hidden lg:block w-40 h-px bg-gray-700 opacity-40"></div>{" "}
              <ul className="flex space-x-12 md:space-x-6 text-xl text-gray-700">
                {" "}
                <li>
                  {" "}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FaFacebookF />{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FaDribbble />{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FaTwitter />{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FaInstagram />{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FaLinkedinIn />{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
