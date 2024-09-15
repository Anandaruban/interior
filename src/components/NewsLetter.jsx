import { useState } from "react";

const NewsLetter = () => {

  const [text, setText] = useState("")

  const handleChange = (e) => setText(e.target.value);

  const message = () => {
    if (text.length !== 0) {
      alert("Thanks for Subscribe")
    }
  }

  return (
    <div className="w-[500px] pb-8 mx-auto space-y-5">
      <h1 className="text-3xl font-bold font-serif text-center">Subsribe to our Newsletter</h1>
      <p className="text-sm max-w-[300px] m-auto text-gray-500 text-center">Lorem ipsum, Odio nostrum ratione, animi at sapiente exercitationem esse veritatis sunt!</p>
      <div className="flex justify-center mt-10">
        <input type="email" placeholder="Enter your email" onChange={handleChange} value={text} className="border rounded-l-md text-lg border-gray-300 py-4 px-6" />
        <button className="bg-black text-white rounded-r-md py-4 px-6 uppercase" onClick={message}>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter