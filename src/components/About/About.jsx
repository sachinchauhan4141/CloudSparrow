import React from "react";
import CraftProduct from "../Common/CraftProduct";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="flex gap-2 justify-center items-center pt-24 px-4 lg:pt-48 lg:px-50 bg-[radial-gradient(circle_at_bottom,#FDE7E1_20%,#FFF9EC_30%,#FFFFFF_60%)]">
        <div className="flex flex-col gap-4 lg:gap-8 justify-between items-start lg:w-[60%] pb-10 lg:pb-20">
          <h1 className="text-3xl lg:text-7xl font-bold lg:leading-20 text-[#1F252B]">
            We create brands that get noticed
          </h1>
          <button className="uppercase p-3 lg:py-3 lg:px-10 bg-[#F48B3A] rounded-md text-xs font-medium text-white">
            <Link to={"/contact"}>Get Started Now!</Link>
          </button>
        </div>
        <div className="hidden lg:block w-[40%] overflow-hidden">
          <img
            src="/cloudsparrow-all-img/robohand.png"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="p-4 lg:py-28 lg:px-60 bg-[#F6F6F6] lg:text-center">
        <h1 className="text-2xl lg:text-6xl font-medium lg:leading-20 text-[#1F252B]">
          Reason to Work with Us
        </h1>
        <p className="text-[#1F252B] text-xs lg:text-sm font-medium lg:my-10 my-4">
          Cloud Sparrow is the preferred digital marketing agency by commercial
          massive as well as start-ups who are seeming to get the most out of on
          limitless possibilities that digital marketing can provide. We strive
          to make the optimum use of technology for offering the finest when it
          comes to creating a strong brand awareness for our clients at several
          levels. Cloud Sparrow make sure that the customer is able to enjoy
          maximum advantages for the growth and expansion of their businesses.
          Our foremost aim is to deliver innovative solutions to emerging
          businesses and assist then in reaching their customers faster.
        </p>
        <div className="lg:flex gap-20 lg:mt-20">
          <div className="w-full flex gap-4 lg:gap-8 lg:my-0 my-10">
            <div className="w-[60%] rounded-4xl overflow-hidden">
              <img
                src="/cloudsparrow-all-img/boyandgirl.png"
                alt=""
                className="size-full"
              />
            </div>
            <div className="w-[40%] h-full flex flex-col gap-1 text-[#FFFFFF]">
              <div className="overflow-hidden rounded-full p-3 items-center justify-center flex">
                <img src="cloudsparrow-all-img/revenue.png" alt=" size-full" />
              </div>
              <div className="overflow-hidden rounded-4xl">
                <img
                  src="cloudsparrow-all-img/mansetup.png"
                  alt=""
                  className="size-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex h-[40%] bg-[#FFFFFF] p-6 gap-4">
              <div className="size-10 lg:w-[10%] p-1">
                <img
                  src="cloudsparrow-all-img/reliability.png"
                  alt=""
                  className="size-full"
                />
              </div>
              <div className="w-[90%] text-start flex flex-col gap-4 justify-start items-start">
                <h1 className="text-lg font-medium text-[#E05A32]">
                  Reliability
                </h1>
                <p className="text-xs lg:text-sm font-medium text-[#676767]">
                  Cloud Sparrow is a reliable Indian-owned company committed to
                  delivering top-notch digital solutions.
                </p>
              </div>
            </div>
            <div className="h-[20%] flex items-center justify-center p-6 gap-4">
              <div className="size-10 lg:w-[10%] p-1 overflow-hidden">
                <img
                  src="cloudsparrow-all-img/experience.png"
                  alt=""
                  className="size-full"
                />
              </div>
              <div className="w-[90%] text-start">
                <h1 className="text-lg font-medium text-black">Experience</h1>
              </div>
            </div>
            <div className="h-[20%] flex items-center justify-center p-6 gap-4 border-y-1 border-[#9CA7AA] ">
              <div className="size-10 lg:w-[10%] p-1 overflow-hidden">
                <img
                  src="cloudsparrow-all-img/solutions.png"
                  alt=""
                  className="size-full"
                />
              </div>
              <div className="w-[90%] text-start">
                <h1 className="text-lg font-medium text-black">Solutions</h1>
              </div>
            </div>
            <div className="h-[20%] flex items-center justify-center p-6 gap-4">
              <div className="size-10 lg:w-[10%] p-1 overflow-hidden">
                <img
                  src="cloudsparrow-all-img/services.png"
                  alt=""
                  className="size-full"
                />
              </div>
              <div className="w-[90%] text-start">
                <h1 className="text-lg font-medium text-black">Services</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pb-40">
        <div className="flex flex-col lg:flex-row border-b-2 border-[#9CA7AA] w-full lg:h-[33vh]">
          <div className="lg:py-0 py-6 w-full lg:border-r-2 lg:border-b-0 border-b-2 border-[#9CA7AA] flex lg:flex-col gap-4 items-center justify-evenly lg:justify-center text-center">
            <h1 className="text-5xl font-medium">99%</h1>
            <p className="text-[#EC4918] font-medium">
              Client Satisfaction Rate
            </p>
          </div>
          <div className="lg:py-0 py-10 w-full lg:border-r-2 lg:border-b-0 border-b-2 border-[#9CA7AA] flex lg:flex-col gap-4 items-center justify-evenly lg:justify-center text-center">
            <h1 className="text-5xl font-medium">5+</h1>
            <p className="text-[#EC4918] font-medium">Years of Expertise</p>
          </div>
          <div className="lg:py-0 py-10 w-full lg:border-r-2 lg:border-b-0 border-b-2 border-[#9CA7AA] flex lg:flex-col gap-4 items-center justify-evenly lg:justify-center text-center">
            <h1 className="text-5xl font-medium">200+</h1>
            <p className="text-[#EC4918] font-medium">
              Successful Projects Delivered
            </p>
          </div>
          <div className="lg:py-0 py-10 w-full flex lg:flex-col gap-4 items-center justify-evenly lg:justify-center text-center">
            <h1 className="text-5xl font-medium">50+</h1>
            <p className="text-[#EC4918] font-medium">
              Trusted Clients & Growing
            </p>
          </div>
        </div>
        <div className="flex lg:pt-20 lg:px-50 px-4 pt-10">
          <div className="lg:w-[60%]">
            <h1 className="text-3xl lg:text-6xl font-medium lg:leading-20 text-[#1F252B]">
              Increase <span className="text-[#F48B3A]">your leads</span> with{" "}
              <span className="text-[#EC4918]"> Expert Digital</span> Strategy
              and <span className="text-[#58B9F8]">Design</span>
            </h1>
            <p className="text-[#1F252B] text-xs lg:text-sm font-medium lg:mt-10 mt-4">
              At Cloud Sparrow, our team comprises highly skilled professionals
              with deep expertise in their respective fields. From tech-savvy
              developers and creative digital artists to innovative marketers
              and content strategists, we bring together the best minds to
              deliver top-notch digital solutions.
            </p>
            <p className="text-[#1F252B] text-xs lg:text-sm font-medium my-4">
              We specialize in a full spectrum of online marketing services,
              leveraging cutting-edge web technologies to ensure the highest
              standards of quality and commitment. Our dedicated team
              continuously monitors and optimizes online accounts across popular
              social platforms, ensuring that we exceed client expectations with
              every project.
            </p>
            <p className="text-[#1F252B] text-xs lg:text-sm font-medium lg:mb-10 mb-4">
              Based in India, we provide both offshore and on-site services for
              software development companies and end-users, working across
              various hardware and software platforms, including Linux, Windows,
              and Apache. Additionally, we utilize advanced technologies like
              HTML, PHP, and modern frameworks to deliver unparalleled solutions
              tailored to your business needs.
            </p>
          </div>
          <div className="hidden relative w-[40%] lg:flex items-end">
            <div className="w-full"></div>
            <div className="w-full bg-[#1B76FF] h-full rounded-tr-4xl"></div>
            <img
              className="absolute"
              src="/cloudsparrow-all-img/mancutout.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:absolute lg:h-[40vh] w-full my-4 lg:my-0">
          <div className="lg:w-[90%] h-full mx-auto py-4 lg:py-0 bg-[#FFEDC1] text-center flex flex-col items-center justify-center lg:gap-10 gap-2 lg:rounded-3xl">
            <h1 className="lg:text-5xl font-medium lg:leading-20">
              Want to measure your{" "}
              <span className="text-[#EC4918]">site Performance</span> for free?
            </h1>
            <button className="uppercase py-2 px-5 lg:py-4 lg:px-10 bg-[#F48B3A] rounded-md text-xs font-medium text-white">
              <Link to={"/contact"}>Get Started Now!</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block pt-4 pb-4 lg:pt-50 mb-20 lg:pb-20 px-10 lg:px-50 bg-[#F6F6F6] text-[#1F252B]">
        <h1 className="text-3xl lg:text-6xl font-medium lg:leading-20 mb-4 lg:mb-0">
          So, Are You <span className="text-[#EC4918]">Ready</span> To Enhance{" "}
          <br className="hidden lg:block" />
          Your <span className="text-[#1B76FF]">Business</span>{" "}
          <br className="hidden lg:block" /> With Us?
        </h1>
        <div className="h-[80vh] flex flex-col gap-6">
          <div className="flex h-full gap-4">
            <div className="flex items-end justify-end w-[30%] h-full">
              <img
                src="cloudsparrow-all-img/guysandgirls.png"
                alt=""
                className="size-60 rounded-2xl"
              />
            </div>
            <div className="w-[70%] h-full">
              <img
                src="cloudsparrow-all-img/meating.png"
                alt=""
                className="w-full h-[90%] rounded-2xl"
              />
            </div>
          </div>
          <div className="flex h-full gap-4">
            <div className="w-[40%]">
              <img
                src="cloudsparrow-all-img/discussion.png"
                alt=""
                className="size-full rounded-2xl"
              />
            </div>
            <div className="flex flex-col w-[60%] justify-between items-start px-30 pt-0">
              <p className="font-medium">
                Our primary goal is to empower clients with knowledge of the
                latest website development technologies, enabling them to
                effectively promote their business models. By leveraging
                cutting-edge technology, top-tier quality, and a comprehensive
                service portfolio, we strive to achieve complete customer
                satisfaction.
              </p>
              <button className="uppercase py-3 px-10 bg-[#F48B3A] rounded-md text-xs font-medium text-white">
                <Link to={"/contact"}>Get Started Now!</Link>
              </button>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <CraftProduct />
    </>
  );
};

export default About;
