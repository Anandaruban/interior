import banner from "../utils/banner.png";

const Banner = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div className="flex justify-center">
          <img src={banner} alt="" className="w-[95%] sm:w-full mx-auto" />
        </div>
        <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
          <h1 className="text-3xl font-bold font-serif">We believe that a team makes any project better</h1>
          <p className="text-gray-400 text-sm leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, magni alias unde, sequi eum est repellendus dignissimos neque dolor ducimus a.</p>
          <div>
          <button className="text-sm lg:text-base border-2 border-black px-2 py-1 sm:px-4 sm:py-2 shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white duration-300 hover:shadow-[5px_5px_0px_0px_gold] font-semibold">Discover Now</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner