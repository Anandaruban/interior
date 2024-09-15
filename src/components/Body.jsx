import Header from "./Header"
import Title from "./Title"
import Brands from "./Brands"
import Services from "./Services"
import Banner from "./Banner" 
import Banner2 from "./Banner2"
import Testimonials from "./Testimonials"
import NewsLetter from "./NewsLetter"
import Footer from "./Footer"

const Body = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Title />
      <Brands />
      <Services />
      <Banner />
      <Banner2 />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Body