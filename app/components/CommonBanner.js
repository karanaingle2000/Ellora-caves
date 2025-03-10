const CommonBanner = ({ title }) => {
  return (
    <div className="relative w-full mx-auto">
      <img
        src="./images/banner.jpg"
        alt="Ellora Caves Banner"
        className="w-full h-40 lg:h-60 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for better text visibility */}
      <div className="relative z-10 w-full lg:w-11/12 2xl:w-10/12 pt-5 mx-auto mb-5">
        <h1
          className="text-left text-2xl lg:text-3xl 2xl:text-4xl text-white tracking-wider font-bold border-l-8 border-solid border-[#ff5f15] pl-2"
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CommonBanner;