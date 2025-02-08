import React from "react";
import CraftProduct from "../Common/CraftProduct";

const About = () => {
  return (
    <>
      <div className="flex gap-2 justify-center items-center pt-24 px-4 lg:pt-48 lg:px-50 bg-[radial-gradient(circle_at_bottom,#FDE7E1_20%,#FFF9EC_30%,#FFFFFF_60%)]">
        <div className="flex flex-col gap-4 lg:gap-8 justify-between items-start lg:w-[60%] pb-10 lg:pb-20">
          <h1 className="text-3xl lg:text-7xl font-bold lg:leading-20 text-[#1F252B]">
            We create brands that get noticed
          </h1>
          <button className="uppercase p-3 lg:py-3 lg:px-10 bg-[#F48B3A] rounded-md text-xs font-medium text-white">
            Get Started Now!
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
              <div className="w-[90%] text-start flex flex-col justify-evenly items-start">
                <h1 className="text-lg font-medium text-[#E05A32]">
                  Reliability
                </h1>
                <p className="text-xs lg:text-sm font-medium text-[#676767]">
                  The Cloud Sparrow is a reliable Indian Owned Company that has
                  expanded its operation successfully in India, Australia, and
                  the USA.
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
              Successful <br /> Years
            </p>
          </div>
          <div className="lg:py-0 py-10 w-full lg:border-r-2 lg:border-b-0 border-b-2 border-[#9CA7AA] flex lg:flex-col gap-4 items-center justify-evenly lg:justify-center text-center">
            <h1 className="text-5xl font-medium">100+</h1>
            <p className="text-[#EC4918] font-medium">
              Global <br /> Locations
            </p>
          </div>
          <div className="lg:py-0 py-10 w-full lg:border-r-2 lg:border-b-0 border-b-2 border-[#9CA7AA] flex lg:flex-col gap-4 items-center justify-evenly lg:justify-center text-center">
            <h1 className="text-5xl font-medium">20K+</h1>
            <p className="text-[#EC4918] font-medium">
              Projects <br /> Delivered
            </p>
          </div>
          <div className="lg:py-0 py-10 w-full flex lg:flex-col gap-4 items-center justify-evenly lg:justify-center text-center">
            <h1 className="text-5xl font-medium">100+</h1>
            <p className="text-[#EC4918] font-medium">
              Repeat and <br /> Referral
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
            <p className="text-[#1F252B] text-xs lg:text-sm font-medium lg:my-10 my-4">
              Cloud Sparrow has some of the best technical experts who are well
              experienced in their respective provinces while holding the
              perfect skills that are necessitated at the professional front.
              Our team consists of geekiest aficionados, imaginative digital
              artists, and the most ingenious and interactive marketers and
              writers, who can provide advanced services, covering the full
              umbrella of online marketing. Additionally, our team has a strong
              hold over the latest web technology and it is our unvarying
              venture to come up with the best in terms of quality and
              commitment. The bestowed team of Cloud Sparrow makes it an extreme
              priority to keep constant watch over the numerous online accounts
              that we manage on popular social networks and on other platforms.
              We make sure that we are able to surpass the expectations of our
              clients and also to prove our proficiency in all the projects that
              we embark on.
            </p>
            <p className="text-[#1F252B] text-xs lg:text-sm font-medium lg:my-10 my-4">
              In addition, based in India, we provide a prominence offshore and
              on-site services to software development companies and end-users
              on broad progressions of hardware and software platforms. These
              consist of Linux, windows, and Apache. Apart from this, we also
              apply progressive technologies like HTML and PHP to deliver
              un-equivalent solutions.
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
        <div className="lg:absolute lg:h-[40vh] w-full z-50 my-4 lg:my-0">
          <div className="lg:w-[90%] h-full mx-auto py-4 lg:py-0 bg-[#FFEDC1] text-center flex flex-col items-center justify-center lg:gap-10 gap-2 lg:rounded-3xl">
            <h1 className="lg:text-5xl font-medium lg:leading-20">
              Want to measure your{" "}
              <span className="text-[#EC4918]">site Performance</span> for free?
            </h1>
            <button className="uppercase py-2 px-5 lg:py-4 lg:px-10 bg-[#F48B3A] rounded-md text-xs font-medium text-white">
              Get Started Now!
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
                Our chief aim is to educate clients in relation to the most
                recent technologies in website development, which facilitates
                them to promote their business model accordingly. With help from
                latest technologies, superior quality, and a wide-ranging
                service portfolio, we endeavor towards complete customer
                satisfaction.
              </p>
              <button className="uppercase py-3 px-10 bg-[#F48B3A] rounded-md text-xs font-medium text-white">
                Get Started Now!
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
