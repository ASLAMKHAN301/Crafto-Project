import React from "react";
import { Mail, CheckIcon, Briefcase } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const steps = [
  {
    id: "01",
    title: "Business founded",
    desc: "Lorem ipsum is simply text the printing typesetting standard dummy.",
  },
  {
    id: "02",
    title: "Build new office",
    desc: "Lorem ipsum is simply text the printing typesetting standard dummy.",
  },
  {
    id: "03",
    title: "Relocates headquarter",
    desc: "Lorem ipsum is simply text the printing typesetting standard dummy.",
  },
  {
    id: "04",
    title: "Revenues of millions",
    desc: "Lorem ipsum is simply text the printing typesetting standard dummy.",
  },
];

const team = [
  {
    name: "Jeremy Dupont",
    role: "Executive officer",
    img: "https://craftohtml.themezaa.com/images/demo-data-analysis-team-01.jpg",
  },
  {
    name: "Jessica Dover",
    role: "Project manager",
    img: "https://craftohtml.themezaa.com/images/demo-data-analysis-team-02.jpg",
  },
  {
    name: "Herman Miller",
    role: "Chief executive",
    img: "https://craftohtml.themezaa.com/images/demo-data-analysis-team-03.jpg",
  },
  {
    name: "John Parker",
    role: "Support technician",
    img: "https://craftohtml.themezaa.com/images/demo-data-analysis-team-04.jpg",
  },
];

export function About(props) {
  return (
    <>
      {/* Section-1 */}
      <section
        className="relative bg-cover bg-center overflow-hidden pb-0 md:pt-32"
        style={{
          backgroundImage:
            "url('https://craftohtml.themezaa.com/images/demo-data-analysis-title-bg.jpg')",
        }}
      >
        <img
          src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-01.png"
          alt=""
          className="absolute top-40 left-52 hidden md:block w-28 animate-spin-slow"
        />
        <img
          src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-03.png"
          alt=""
          className="absolute bottom-36 right-52 hidden md:block w-24 animate-spin-slow"
        />

        <div className="container mx-auto md:max-w-[1220px] flex justify-center text-center pt-32 md:py-20 px-4 md:px-0">
          <div className="max-w-xl">
            <h1 className="bg-emerald-600 text-white text-xs uppercase font-semibold px-5 py-2 rounded-full inline-block mb-4">
              About company
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
              Analytics{" "}
              <span className="relative inline-block">
                solutions
                <span className="absolute left-0 bottom-1 w-full h-2 bg-emerald-600 opacity-30"></span>
              </span>{" "}
              for new business
            </h2>
          </div>
        </div>
      </section>

      {/* Section-2 */}
      <section className="relative py-16 px-4 md:px-0">
        <img
          src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-08.png"
          alt=""
          className="absolute -z-10 -top-12 left-0 w-2/5"
        />

        <div className="container mx-auto md:max-w-[1220px] grid lg:grid-cols-2 gap-5 lg:gap-28 items-center justify-center">
          <div className="text-center">
            <img
              src="https://craftohtml.themezaa.com/images/demo-data-analysis-about-01.png"
              alt="About"
              className="mx-auto animate-float"
            />
          </div>

          <div className="md:w-[450px]">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 ">
              We are master in data{" "}
              <span className="relative inline-block">
                analysis.
                <span className="absolute left-0 bottom-1 w-full h-2 bg-emerald-600 opacity-30"></span>
              </span>
            </h2>
            <p className="mt-4 text-gray-400 md:w-[350px] lg:w-full ">
              Data analysis also provides researchers with a selection of
              different tools, such as descriptive statistics.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex md:items-start items-center">
                <div className="w-[70px] md:w-14 h-14 flex items-center justify-center rounded-full bg-green-100 mr-4">
                  <CheckIcon className="w-6 h-6 text-emerald-600 " />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Trusted by 16,000+ data-driven businesses.
                  </h4>
                  <p className="text-gray-500">
                    Lorem ipsum is simply dummy printing.
                  </p>
                </div>
              </div>

              <div className="flex md:items-start items-center">
                <div className="w-[70px] md:w-14 h-14 flex items-center justify-center rounded-full bg-green-100 mr-4">
                  <CheckIcon className="w-6 h-6 text-emerald-600 " />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Serverless real-time data segmentation.
                  </h4>
                  <p className="text-gray-500">
                    Lorem ipsum is simply dummy printing.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-10">
              <a
                href="#"
                className="flex items-center relative gap-2 bg-gray-900  text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition group hover:-translate-y-0.5 delay-500"
              >
                <span className="flex items-center space-x-4 transition-all group-hover:-translate-x-11">
                  <Briefcase className="w-5 h-5" />
                  <span>Explore services</span>
                  <Briefcase className="w-5 h-5 absolute -right-5" />
                </span>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 relative text-gray-900 text-lg transition group bg-gray-black "
              >
                <span className="flex items-center space-x-6 relative transition-all overflow-hidden group-hover:-translate-x-11">
                  <Mail className="w-5 h-5" />
                  <span>Quick contact</span>
                  <Mail className="w-5 h-5 absolute -right-0  transform translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section-3 */}
      <section className="md:py-16 px-4 md:px-0">
        <div className="container mx-auto md:max-w-[1220px] text-center mb-12 md:mb-20">
          <h1 className="bg-emerald-600 text-white text-xs uppercase font-semibold px-5 py-2 rounded-full inline-block mb-4">
            Process cycle
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Business{" "}
            <span className="relative inline-block">
              timeline
              <span className="absolute left-0 bottom-1 w-full h-2 bg-emerald-600 opacity-30"></span>
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 md:max-w-[1220px] container mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="relative bg-white p-6">
              <div className="absolute -top-4 left-0 text-6xl md:text-7xl font-extrabold  text-gray-200">
                {step.id}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2 relative">
                {step.title}
              </h3>
              <p className="text-gray-500">{step.desc}</p>
              <span className="block w-16 h-[2px] bg-gray-800 mt-4"></span>
            </div>
          ))}
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

      {/* Section-4 */}
      <section className="relative px-4 md:px-0">
        <img
          src="https://craftohtml.themezaa.com/images/demo-data-analysis-bg-07.png"
          alt=""
          className="absolute right-0 top-4 -z-10"
        />
        <div className="container mx-auto md:max-w-[1220px] text-center mb-12">
          <h1 className="bg-emerald-600 text-white text-xs uppercase font-semibold px-5 py-2 rounded-full inline-block mb-4">
            Committed people
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Leadership{" "}
            <span className="relative inline-block">
              team
              <span className="absolute left-0 bottom-1 w-full h-2 bg-emerald-600 opacity-30"></span>
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto md:max-w-[1220px]">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="text-center relative group rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-90"
              />

              {/* Caption Box */}
              <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-6 transition-all duration-500 rounded-b-lg">
                <span className="block font-semibold text-lg text-gray-800">
                  {member.name}
                </span>
                <p className="text-sm text-gray-500">{member.role}</p>

                {/* Social Icons */}
                <div className="flex gap-4 mt-3 justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-800 font-semibold hover:text-blue-600"
                  >
                    Fb.
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-800 font-semibold hover:text-pink-500"
                  >
                    In.
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-800 font-semibold hover:text-sky-500"
                  >
                    Tw.
                  </a>
                  <a
                    href="https://dribbble.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-800 font-semibold hover:text-rose-500"
                  >
                    Dr.
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center md:mt-10 flex flex-col md:flex-row justify-center space-x-2 items-center">
          <img
            src="https://craftohtml.themezaa.com/images/demo-data-analysis-about-02.png"
            alt=""
            className="mb-3 mt-5"
          />
          <p className="text-xl md:text-2xl text-gray-700">
            We believe teams can do{" "}
            <span className="font-bold">remarkable work</span> when they
            actually get to work.
          </p>
        </div>
      </section>
    </>
  );
}
