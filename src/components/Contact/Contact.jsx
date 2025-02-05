import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-center py-48 px-60 border">
        <h1 className="text-7xl font-bold leading-20">
          GOOD THINGS HAPPEN <br /> WHEN YOU SAY
          <p className="text-[#407BFF]">“Hello”</p>
        </h1>
      </div>
      <div className="py-28 px-52 border bg-[#F6F6F6]">
        <div>
          <h1 className="text-6xl font-medium">Where to find us?</h1>
        </div>
        <div className="flex gap-8 mt-16">
          <Card color={"#499DFF"} />
          <Card color={"#FF9559"} />
          <Card color={"#00CA8E"} />
        </div>
      </div>
      <div className="bg-[#323E48] text-[#FFFFFF] flex flex-col justify-center items-center py-20">
        <div className="py-4 my-2">
          <h1 className="text-4xl font-medium">
            Fill out the form and we will be in touch.
          </h1>
        </div>
        <div className="min-w-2xl px-2">
          <form className="mx-auto w-full">
            <div className="flex flex-col w-full mb-5 my-12 gap-2">
              <label htmlFor="name">What’s Your Name?</label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
            </div>
            <div className="flex flex-col w-full mb-5 my-12 gap-2">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
            </div>
            <div className="flex flex-col w-full mb-5 my-12 gap-2">
              <label htmlFor="number">
                Would you like to add a phone number?
              </label>
              <input
                type="number"
                name="number"
                id="number"
                className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
            </div>
            <div className="flex flex-col w-full mb-5 my-12 gap-2">
              <p>Services that interest you*</p>
              <div className="grid grid-cols-3 grid-rows-3">
                <div className="flex items-start my-5">
                  <div className="flex items-center h-5">
                    <input
                      id="ecommerce"
                      type="checkbox"
                      value=""
                      className="size-5 border border-gray-300 rounded-sm bg-gray-50"
                      required
                    />
                  </div>
                  <label
                    htmlFor="ecommerce"
                    className="ms-2 text-sm font-medium"
                  >
                    eCommerce development
                  </label>
                </div>
                <div className="flex items-start my-5">
                  <div className="flex items-center h-5">
                    <input
                      id="design"
                      type="checkbox"
                      value=""
                      className="size-5 border border-gray-300 rounded-sm bg-gray-50"
                      required
                    />
                  </div>
                  <label htmlFor="design" className="ms-2 text-sm font-medium">
                    Creative Design
                  </label>
                </div>
                <div className="flex items-start my-5">
                  <div className="flex items-center h-5">
                    <input
                      id="redesign"
                      type="checkbox"
                      value=""
                      className="size-5 border border-gray-300 rounded-sm bg-gray-50"
                      required
                    />
                  </div>
                  <label
                    htmlFor="redesign"
                    className="ms-2 text-sm font-medium"
                  >
                    Redesign
                  </label>
                </div>
                <div className="flex items-start my-5">
                  <div className="flex items-center h-5">
                    <input
                      id="webdevelopment"
                      type="checkbox"
                      value=""
                      className="size-5 border border-gray-300 rounded-sm bg-gray-50"
                      required
                    />
                  </div>
                  <label
                    htmlFor="webdevelopment"
                    className="ms-2 text-sm font-medium"
                  >
                    web development
                  </label>
                </div>
                <div className="flex items-start my-5">
                  <div className="flex items-center h-5">
                    <input
                      id="shopify"
                      type="checkbox"
                      value=""
                      className="size-5 border border-gray-300 rounded-sm bg-gray-50"
                      required
                    />
                  </div>
                  <label htmlFor="shopify" className="ms-2 text-sm font-medium">
                    Shopify
                  </label>
                </div>
                <div className="flex items-start my-5">
                  <div className="flex items-center h-5">
                    <input
                      id="marketing"
                      type="checkbox"
                      value=""
                      className="size-5 border border-gray-300 rounded-sm bg-gray-50"
                      required
                    />
                  </div>
                  <label
                    htmlFor="marketing"
                    className="ms-2 text-sm font-medium"
                  >
                    Digital Marketing
                  </label>
                </div>
                <div className="flex items-start my-5">
                  <div className="flex items-center h-5">
                    <input
                      id="appdevelopment"
                      type="checkbox"
                      value=""
                      className="size-5 border border-gray-300 rounded-sm bg-gray-50"
                      required
                    />
                  </div>
                  <label
                    htmlFor="appdevelopment"
                    className="ms-2 text-sm font-medium"
                  >
                    App development
                  </label>
                </div>
                <div className="flex items-start my-5">
                  <div className="flex items-center h-5">
                    <input
                      id="wordpress"
                      type="checkbox"
                      value=""
                      className="size-5 border border-gray-300 rounded-sm bg-gray-50"
                      required
                    />
                  </div>
                  <label
                    htmlFor="wordpress"
                    className="ms-2 text-sm font-medium"
                  >
                    Wordpress
                  </label>
                </div>
                <div className="flex items-start my-5">
                  <div className="flex items-center h-5">
                    <input
                      id="other"
                      type="checkbox"
                      value=""
                      className="size-5 border border-gray-300 rounded-sm bg-gray-50"
                      required
                    />
                  </div>
                  <label htmlFor="other" className="ms-2 text-sm font-medium">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 my-12 gap-2">
              <label htmlFor="email">Briefly describe your Request</label>
              <input
                type="email"
                name="email"
                id="email"
                className="h-16 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
            </div>
            <div className="flex w-full mb-5 mt-12 h-20">
              <div className="w-full">im not a robot</div>
              <div className="w-full relative">
                <button
                  type="submit"
                  className="absolute bottom-0 right-0 uppercase py-3 px-10 bg-[#F48B3A] rounded-md text-xs font-medium"
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Card = ({ color }) => {
  return (
    <div
      className={
        "text-[#1F252B] rounded-md text-center px-20 py-10 bg-[" + color + "] "
      }
    >
      <div>
        <h1 className="text-2xl font-bold">Delhi NCR</h1>
      </div>
      <div className="my-5">
        <p className="font-medium">
          E-53,Block G, Sector 3 Noida,Pincode-201301 Uttar-Pradesh India
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img className="size-20" src="" alt="" />
      </div>
    </div>
  );
};

export default Contact;
