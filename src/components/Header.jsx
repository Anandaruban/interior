import logo from "../utils/Logo.png"

const Header = () => {
  return (
    <div className="container flex justify-between py-2 items-center">
      <div className="flex items-center py-4 gap-3">
        <img src={logo} alt="logo" className="w-12" />
        <h1 className="text-xl sm:text-2xl font-bold">Interior</h1>
      </div>
      
      <div>
        <ul className="flex overflow-hidden gap-4 text-sm sm:text-xl font-semibold">
          <li>About</li>
          <li>Services</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <button className="text-sm lg:text-base border-2 border-black px-2 py-1 sm:px-4 sm:py-2 shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white duration-300 hover:shadow-[5px_5px_0px_0px_gold] font-semibold">Try for Free</button>
      </div>
    </div>
  )
}

export default Header