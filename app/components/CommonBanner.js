const CommonBanner = ({ title }) => {
  return (
    <div className="relative w-full h-120 mx-auto"> 
      <img
        src="./images/banner.jpg"
        alt="Ellora Caves Banner"
        className="w-full h-full object-cover filter blur-[0.5px]"  
      />
      <div className="absolute inset-0 bg-black opacity-30"></div> 
      <div className="relative z-10 w-full lg:w-11/12 2xl:w-10/12 flex items-center justify-center h-full"> 
        <div className="text-center">
          
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;