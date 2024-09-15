import hero from "../utils/hero.png";

const Title = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[450px] gap-10">
        <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
          <h1 className="text-3xl  font-bold">SKETCH LUXURY INTERIOR DESIGN</h1>
          <p className="text-sm text-gray-500">Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</p>

          <div className="space-x-4">
            <button className="text-sm lg:text-base bg-black text-white border-2 border-black px-4 py-2 shadow-[5px_5px_0px_0px_gold] font-semibold">GET STARTED</button>
            <button className="text-sm lg:text-base border-2 border-black px-4 py-2 shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white duration-300 hover:shadow-[5px_5px_0px_0px_gold] font-semibold">CONTACT US</button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src={hero} alt="hero" className="w-[80%] md:w-[700px] object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Title