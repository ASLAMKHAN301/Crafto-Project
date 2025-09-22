import React from "react";
import { useState } from "react";
import { Mail, Youtube, Briefcase, CheckIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FiArrowRight } from "react-icons/fi";
import { ReactTyped } from "react-typed";

const services = [
  {
    title: "Data engineers",
    image: "https://craftohtml.themezaa.com/images/demo-data-analysis-03.png",
    desc: "Data analysis also provides researchers with a selection of different tools, such as descriptive statistics.",
    link: "#",
  },
  {
    title: "Data mining",
    image: "https://craftohtml.themezaa.com/images/demo-data-analysis-04.png",
    desc: "Data analysis also provides researchers with a selection of different tools, such as descriptive statistics.",
    link: "#",
  },
  {
    title: "Data analysis",
    image: "https://craftohtml.themezaa.com/images/demo-data-analysis-09.png",
    desc: "Data analysis also provides researchers with a selection of different tools, such as descriptive statistics.",
    link: "#",
  },
  {
    title: "Data mining",
    image: "https://craftohtml.themezaa.com/images/demo-data-analysis-04.png",
    desc: "Data analysis also provides researchers with a selection of different tools, such as descriptive statistics.",
    link: "#",
  },
];

const steps = [
  {
    number: "01",
    title: "Data collecting",
    description:
      "Data can be collected through several sources including the online community.",
  },
  {
    number: "02",
    title: "Data organizing",
    description:
      "The data must be organized after it is collected so that it can be examined.",
  },
  {
    number: "03",
    title: "Data cleaning",
    description:
      "The data is first cleaned up to ensure that there is no overlap or mistake.",
  },
];

const plans = [
  {
    title: "Standard Plan",
    price: "$29.99",
    period: "/ Monthly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
  },
  {
    title: "Premium Plan",
    price: "$39.99",
    period: "/ Monthly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
  },
];

const testimonials = [
  {
    name: "Bella Roberts",
    review:
      "Crafto analytics offers a free web-based reporting solution that usually only big-budget sites can afford.",
  },
  {
    name: "Lesley Simms",
    review:
      "Crafto analytics makes it a lot easier to have access to data tables, create pivot charts and reports.",
  },
  {
    name: "Emma Causer",
    review:
      "Analytics has excellent up-time and remains fast and responsive, even with 2 million records in the database.",
  },
  {
    name: "Nickie Coombs",
    review:
      "I chose Crafto because of the interface and the robust features to handle our volumes of data quickly and efficiently.",
  },
];

const clients = [
  "demo-seo-agency-clients-01.jpg",
  "demo-seo-agency-clients-07.jpg",
  "demo-seo-agency-clients-02.jpg",
  "demo-seo-agency-clients-04.jpg",
  "demo-seo-agency-clients-05.jpg",
  "demo-seo-agency-clients-03.jpg",
];

const faqs = [
  {
    question: "What are some examples of AI technologies?",
    answer:
      "Lorem ipsum is simply dummy text of the printing typesetting industry. Industry's standard dummy text ever since the dummy.",
  },
  {
    question: "What is potential for AI in customer service?",
    answer:
      "Lorem ipsum is simply dummy text of the printing typesetting industry. Industry's standard dummy text ever since the dummy.",
  },
  {
    question: "Do you charge by the job or by the hour?",
    answer:
      "Lorem ipsum is simply dummy text of the printing typesetting industry. Industry's standard dummy text ever since the dummy.",
  },
];

export function Home(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* section-1 */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-100 to-white pt-32 pb-0 md:pl-[100px] ">
        <div className="container mx-auto h-full relative">
          {/* Background decorative images */}
          <img
            src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-01.png"
            alt="bg-shape"
            className="hidden xl:block absolute z-50 -top-10 left-[450px] w-32 animate-spin-slow"
          />
          <img
            src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-03.png"
            alt="bg-shape"
            className="hidden sm:block absolute top-5 right-5 w-20 animate-spin-slow"
          />
          <img
            src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-02.png"
            alt="bg-shape"
            className="hidden xl:block absolute -bottom-10 -left-28 w-50 animate-float"
          />

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5 md:px-0">
            {/* Text Side */}
            <div className="space-y-6 relative z-10 mb-16 md:mb-40">
              <div className="flex items-center gap-4">
                <span className="bg-red-500 text-white text-[10px] md:text-xs font-semibold uppercase px-4 py-2 rounded-full">
                  Get started
                </span>
                <span className="text-lg font-semibold text-gray-500">
                  <ReactTyped
                    strings={[
                      "Real-time data score analysis",
                      "Exploratory data analysis",
                      "Tailored pricing plans",
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                  />
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Analytics solutions for new{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">business.</span>
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-red-200 -z-10"></span>
                </span>
              </h1>

              <p className="text-gray-600 text-lg max-w-xl">
                Data analytics is the set of qualitative and quantitative
                approaches to derive valuable insights from data.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="#"
                  className="flex items-center relative gap-2 bg-gray-900  text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition group hover:-translate-y-0.5 delay-500"
                >
                  <span className="flex items-center space-x-4 transition-all group-hover:-translate-x-11">
                    <Youtube className="w-5 h-5" />
                    <span>How it works</span>
                    <Youtube className="w-5 h-5 absolute -right-5" />
                  </span>
                </a>

                <a
                  href="mailto:start@domain.com"
                  className="flex items-center gap-2 text-gray-900 text-lg hover:underline"
                >
                  <Mail className="w-5 h-5" />
                  <span>start@domain.com</span>
                </a>
              </div>
            </div>

            {/* Right Image Side */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-04.png"
                alt="Analytics Illustration"
                className="w-full md:h-[847px] animate-float z-10"
              />
              <img
                src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-05.png"
                alt="Background pattern"
                className="absolute -right-4 md:right-0 bottom-5 w-full opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section-2 */}
      <section className="relative p-0 overflow-hidden">
        {/* Floating images */}
        <img
          src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-06.png"
          className="absolute top-5 left-0 transform translate-y-20 hidden md:block"
          alt=""
        />
        <img
          src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-07.png"
          className="absolute top-2 right-0 lg:w-1/3 lg:bottom-0 transform translate-y-16 hidden md:block"
          alt=""
        />

        <div className="container px-5 md:px-0 mx-auto">
          {/* Section header */}
          <div className="flex flex-col items-center mb-8">
            <div className="inline-block bg-green-400 text-white font-semibold text-xs uppercase px-5 py-2 rounded-full mb-4">
              About company
            </div>
            <h2 className="text-3xl md:text-6xl font-bold max-w-[300px] md:max-w-3xl text-gray-800 text-center">
              Data{" "}
              <span className="relative">
                analytics
                <span className="absolute bottom-2 md:bottom-3 left-0 w-full h-2 bg-green-400 opacity-30"></span>
              </span>{" "}
              and business model solution
            </h2>
          </div>

          <div className="flex justify-center">
            {/* Features grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 md:w-[1140px]">
              {/* Feature item 1 */}
              <div className="bg-gray-50 rounded-md py-[27px] px-[17px] md:py-[43px] md:px-[54px] flex gap-5 items-start">
                <img
                  src="https://craftohtml.themezaa.com/images/demo-data-analysis-icon-01.png"
                  alt=""
                  className="w-12 h-12 flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Real-time segmentation
                  </h3>
                  <p className="text-gray-700">
                    This model is idea-driven as it involves daily engagement
                    activities with clients.
                  </p>
                </div>
              </div>

              {/* Feature item 2 */}
              <div className="bg-white rounded-md py-[27px] px-[17px] md:py-[43px] md:px-[54px] flex gap-5 items-start">
                <img
                  src="https://craftohtml.themezaa.com/images/demo-data-analysis-icon-02.png"
                  alt=""
                  className="w-12 h-12 flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Exploratory data analysis
                  </h3>
                  <p className="text-gray-700">
                    This model is idea-driven as it involves daily engagement
                    activities with clients.
                  </p>
                </div>
              </div>

              {/* Feature item 3 */}
              <div className="bg-red-100 rounded-md py-[27px] px-[17px] md:py-[43px] md:px-[54px] flex gap-5 items-start relative">
                <div className="absolute right-40 top-6 md:right-6 md:top-6 bg-white text-gray-800 text-xs font-semibold uppercase px-4 py-1 rounded-full shadow-md">
                  Popular
                </div>
                <img
                  src="https://craftohtml.themezaa.com/images/demo-data-analysis-icon-03.png"
                  alt=""
                  className="w-12 h-12 flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg pt-8 md:pt-0 font-semibold text-gray-800 mb-1">
                    Business intelligence
                  </h3>
                  <p className="text-gray-700">
                    This model is idea-driven as it involves daily engagement
                    activities with clients.
                  </p>
                </div>
              </div>

              {/* Feature item 4 */}
              <div className="bg-purple-100 rounded-md py-[27px] px-[17px] md:py-[43px] md:px-[54px] flex gap-5 items-start">
                <img
                  src="https://craftohtml.themezaa.com/images/demo-data-analysis-icon-04.png"
                  alt=""
                  className="w-12 h-12 flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Prescriptive analytics
                  </h3>
                  <p className="text-gray-700">
                    This model is idea-driven as it involves daily engagement
                    activities with clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Companies stats */}
          <div className="flex flex-col md:flex-row justify-center items-center text-center">
            <img
              src="https://craftohtml.themezaa.com/images/demo-data-analysis-01.png"
              alt=""
              className="mt-2"
            />
            <p className="text-gray-800 text-xl font-medium">
              World-class <span className="font-bold">30,000+ companies</span>{" "}
              are already work with Crafto.
            </p>
          </div>
        </div>
      </section>

      {/* section-3 */}
      <section className="relative md:pt-[90px] pb-0 overflow-hidden">
        {/* Background image */}
        <img
          src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-08.png"
          alt=""
          className="absolute top-[50px] lg:top-[120px] left-0 md:w-1/2 transform"
        />

        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row justify-center items-center px-5 md:px-0 mb-4 sm:mb-6">
            {/* Left image */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
              <img
                src="https://craftohtml.themezaa.com/images/demo-data-analysis-02.png"
                alt=""
                className="md:w-7/10 sm:w-full animate-float"
              />
            </div>

            {/* Right content */}
            <div className="w-full lg:w-5/12 lg:ml-8 space-y-4">
              <div className="inline-block bg-emerald-600 text-white font-semibold uppercase text-xs px-5 py-2 rounded-full">
                Effective benefits
              </div>
              <h2 className="text-3xl md:text-6xl font-bold text-gray-800 ">
                Target audience for your{" "}
                <span className="relative">
                  business.
                  <span className="absolute bottom-2 md:bottom-3 left-0 w-full h-2 bg-emerald-600 opacity-30"></span>
                </span>
              </h2>
              <p className="text-gray-700">
                Data analysis also provides researchers with a selection of
                different tools, such as descriptive statistics, inferential
                analysis and quantitative analysis.
              </p>

              {/* Feature list */}
              <div className="space-y-3">
                {[
                  "Personalization of products and services.",
                  "Improving quality of products and services.",
                  "Increase the efficiency of the work.",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-800">
                      <CheckIcon className="w-5 h-5 " />
                    </div>
                    <span className="text-gray-800 font-medium">{text}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4">
                <a
                  href="#"
                  className="relative inline-flex space-x-2 w-[170px] items-center px-6 py-3 bg-gray-800 text-white rounded-sm shadow hover:bg-gray-900 transition"
                >
                  <Youtube className="w-5 h-5" />
                  <span>How it works</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-gray-800 font-medium hover:text-gray-900 transition"
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Explore services</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper carousel */}
        <div className="container-fluid mt-10">
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            speed={6000}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {[
              "statistical modeling",
              "predictive analytics",
              "data engineers",
              "statistical modeling",
              "predictive analytics",
              "data engineers",
            ].map((text, idx) => (
              <SwiperSlide key={idx} className="w-auto py-8 md:py-16">
                <div className="text-4xl md:text-8xl  font-extrabold text-gray-400 tracking-widest relative flex items-center justify-center">
                  <span className="w-5 h-4 md:h-5 border-2 border-gray-400 rounded-full mx-12"></span>
                  {text}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* section-4 */}
      <section className="relative overflow-hidden pt-10">
        <div className="container mx-auto px-5 md:px-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
            }}
            modules={[Autoplay, Pagination]}
            className="pt-5 "
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
                  {/* Service image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute top-0 right-0 w-3/5 lg:w-3/5 opacity-90"
                  />

                  {/* Content */}
                  <div className="relative pt-40 md:pt-8 md:pb-16 w-full md:w-2/3">
                    <div className="inline-block bg-white text-gray-800 font-bold uppercase text-xs px-5 py-1 rounded-full shadow mb-4">
                      our services
                    </div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-3">
                      {service.title.split(" ")[0]}{" "}
                      <span className="relative">
                        {service.title.split(" ")[1] || ""}
                        <span className="absolute bottom-2 left-0 w-full h-2 bg-blue-400 opacity-30"></span>
                      </span>
                    </h3>
                    <p className="text-gray-600 mb-5 w-9/12">{service.desc}</p>

                    {/* Button */}
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-sm shadow hover:bg-gray-900 transition"
                    >
                      Learn more <FiArrowRight />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* section-5 */}
      <section className="relative overflow-hidden pt-[120px] pb-[54px] ">
        {/* Background images */}
        <img
          src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-07.png"
          alt=""
          className="absolute hidden md:block -top-24 right-0 lg:w-1/4"
        />
        <div className="absolute top-5 -right-12 sm:right-4 hidden sm:block animate-spin-slow">
          <img
            src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-10.png"
            alt=""
            className="lg:w-28"
          />
        </div>
        <div className="absolute top-6 left-12 hidden sm:block animate-spin-slow">
          <img
            src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-09.png"
            alt=""
            className="lg:w-32"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto relative">
          {/* Heading */}
          <div className="flex justify-center mb-8 text-center">
            <div>
              <div className="bg-emerald-600 text-white font-semibold uppercase text-xs px-6 py-2 rounded-full inline-block mb-4">
                How it works
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Simple{" "}
                <span className="relative">
                  process
                  <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 bg-emerald-600 opacity-30"></span>
                </span>
              </h2>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-lg px-6 py-8 md:px-[68px] md:py-[57px] "
              >
                <div className="absolute -top-4 left-6 text-gray-400 text-8xl font-extrabold opacity-20">
                  {step.number}
                </div>
                <h6 className="text-3xl font-bold text-gray-800 mb-2 relative">
                  {step.title}
                </h6>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section-6 */}
      <section className="relative py-16">
        {/* Background image */}
        <img
          src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-08.png"
          alt=""
          className="absolute top-12 left-0 w-1/2 object-contain -z-10 animate-float"
        />

        {/* Marquee text */}
        <div className="absolute -top-12 w-full overflow-hidden -z-10">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
          >
            <SwiperSlide>
              <div className="whitespace-nowrap text-center font-semibold text-[210px] opacity-30 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-sky-500">
                we love data analytics
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="whitespace-nowrap text-center font-semibold text-[210px] opacity-30 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500">
                we love data analytics
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="whitespace-nowrap text-center font-semibold text-[210px] opacity-30 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
                we love data analytics
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://craftohtml.themezaa.com/images/demo-data-analysis-05.png"
                alt=""
                className="w-3/4 md:w-full animate-float"
              />
            </div>

            {/* Right Content */}
            <div>
              <div className="bg-emerald-600 text-white font-semibold uppercase px-5 py-2 text-xs rounded-full inline-block mb-5">
                Flexible pricing
              </div>

              <h2 className="font-bold text-3xl md:text-6xl md:max-w-md text-gray-900 mb-10">
                Tailored{" "}
                <span className="relative inline-block">
                  pricing
                  <span className="absolute left-0 right-0 bottom-1 h-2 bg-emerald-600 opacity-30"></span>
                </span>{" "}
                plans for everyone.
              </h2>

              {/* Accordion */}
              <div className="space-y-4">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`rounded-xl shadow-lg border bg-white ${
                      activeIndex === index ? "ring-1 ring-blue-300" : ""
                    }`}
                  >
                    <button
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                      className="flex w-full justify-between items-center px-5 py-4 text-left font-semibold text-gray-800 text-2xl"
                    >
                      {plan.title}
                      <span>{activeIndex === index ? "▲" : "▼"}</span>
                    </button>
                    {activeIndex === index && (
                      <div className="px-5 pb-5">
                        <p className="text-gray-500 text-xl md:max-w-sm">
                          {plan.description}
                        </p>
                        <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h5 className="font-bold text-3xl text-gray-900">
                            {plan.price}{" "}
                            <span className="text-sm font-normal text-gray-500">
                              {plan.period}
                            </span>
                          </h5>
                          <a
                            href="#"
                            className="mt-3 sm:mt-0 max-w-[126px] bg-gray-800 text-white rounded-sm px-6 py-3 text-sm font-medium hover:bg-white hover:text-gray-800 border-2 border-blue-100"
                          >
                            Get started
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-7 */}
      <section className="pt-0 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-emerald-500 text-white uppercase px-6 py-2 text-sm rounded-full mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
              Happy{" "}
              <span className="relative">
                customers
                <span className="absolute bottom-0 md:bottom-2 left-0 w-full h-2 bg-emerald-500 opacity-20"></span>
              </span>
            </h2>
          </div>

          {/* Testimonials Swiper */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white">
                  <div className="pt-24 md:pt-[80px] ">
                    <h3 className="text-sm font-bold uppercase text-gray-700 rotate-270 inline-block">
                      {t.name}
                    </h3>
                  </div>
                  <div className="p-6 border-l border-gray-300 flex-1">
                    <p className="text-gray-600 mb-4">{t.review}</p>
                    <div className="bg-yellow-400 text-white inline-block px-4 pt-1 pb-2 rounded-full text-xl">
                      ★★★★★
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Clients */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center my-12">
            {clients.map((c, index) => (
              <div key={index} className="text-center">
                <img
                  src={`https://craftohtml.themezaa.com/images/${c}`}
                  alt="client"
                  className="mx-auto w-36 rounded-full shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center flex flex-col space-x-0 md:space-x-3 md:flex-row justify-center items-center">
            <img
              src="https://craftohtml.themezaa.com/images/demo-data-analysis-06.png"
              alt="icon"
              className="mt-2"
            />
            <p className="text-gray-700 text-xl font-semibold">
              World-class <span className="font-bold">30,000+ companies</span>{" "}
              are already working with Crafto.
            </p>
          </div>
        </div>
      </section>

      {/* section-8 */}
      <section className="bg-gradient-to-b from-gray-50 to-white pb-0">
        <div className="container mx-auto md:px-16 pt-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left content */}
            <div className="lg:w-1/2 relative text-center lg:text-left">
              <div className="inline-block bg-emerald-500 text-white uppercase px-5 py-2 text-xs rounded-full mb-5">
                Customer support
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 lg:w-3/5">
                Have you{" "}
                <span className="relative">
                  question?
                  <span className="absolute bottom-0 md:bottom-2 left-0 w-full h-2 bg-emerald-500 opacity-20"></span>
                </span>
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img
                  src="https://craftohtml.themezaa.com/images/demo-data-analysis-08.png"
                  alt="support"
                  className="w-40"
                />
                <div className="text-left">
                  <p className="font-medium text-gray-400 text-lg leading-6">
                    Support executive
                  </p>
                  <p className="font-bold text-gray-800">1000+ satisfied.</p>
                </div>
              </div>
              <img
                src="https://craftohtml.themezaa.com/images/demo-data-analysis-07.png"
                alt="decoration"
                className="absolute right-24 -top-40 w-60 hidden lg:block animate-float"
              />
            </div>

            {/* Right accordion */}
            <div className="lg:w-1/2">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button
                    className="w-full flex justify-between items-center p-4 text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-semibold text-gray-800 text-lg">
                      {faq.question}
                    </span>
                    <span className="text-black-500 text-2xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 border-b border-t-gray-200 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
