import { FC, useState } from "react";
import { useRef } from "react";
import { Icons } from "./Icons";

interface CustomizeProps {}

const Customize: FC<CustomizeProps> = ({}) => {
  const uploadRef = useRef<any>(null);
  const [amount, setAmount] = useState(1);
  return (
    <div className="text-white mt-20">
      <div className="text-4xl font-semibold text-center text-yellow-500 mb-10">
        <span className="font-thin">Phone</span> Customization Studio
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="absolute top-4 -right-12 ">
              <img className="w-40 z-[1]" src="/diagram.png" alt="" />
              <div className="absolute top-5 right-6 w-12 h-12 block text-center">
                <input className="bg-transparent " type="color" />
                <label htmlFor="">case color</label>
              </div>
            </div>
            <div className="absolute top-40 -right-12 ">
              <img className="w-40 z-[1]" src="/diagram.png" alt="" />
              <div className="absolute top-5 right-6 w-12 h-12 block text-center">
                <img src="/frontmobile.png" className="cursor-pointer" alt="" />
                <label htmlFor="">case color</label>
              </div>
            </div>

            <div className="absolute top-80 -right-12 ">
              <img className="h-40 z-[999]" src="/b_diagram.png" alt="" />
              <div className="absolute top-20 right-8  w-12 block text-center z-[999]">
                <img src="/frontmobile.png" className="cursor-pointer" alt="" />
                <label htmlFor="">case color</label>
              </div>
            </div>

            <div className="absolute -left-14 z-[1]">
              <img className="w-40 z-[1]" src="/l_diagram.png" alt="" />
              <div className="absolute top-5 left-5 w-12 h-12 block text-center">
                <input className="bg-transparent " type="color" />
                <label htmlFor="">phone color</label>
              </div>
            </div>

            <div className="absolute -left-16 top-44 z-[1]">
              <img className="w-40 z-[999]" src="/l_diagram.png" alt="" />
              <div className="absolute top-5 left-5 w-12 h-12 block text-center">
                <input
                  ref={uploadRef}
                  className="bg-transparent hidden"
                  type="file"
                />
                <img
                  src="/upload.png"
                  alt=""
                  className="w-12 h-12 cursor-pointer"
                  onClick={() => {
                    uploadRef.current.click();
                  }}
                />
                <label htmlFor="">case image</label>
              </div>
            </div>
            <img src="/phone.png" className="relative w-80 z-[900]" />
          </div>
        </div>
        <div className="p-10">
          <button className="bg-yellow-500 font-semibold flex text-black items-center justify-center rounded-md gap-2 p-4 w-full">
            <Icons.magic className="w-4 h-4" />
            Let AI decide for me
          </button>
          <div className="grid grid-cols-2 mt-5 gap-4">
            <div className="md:justify-end gap-2 flex-wrap">
              <div className="grid grid-cols-1 gap-2 w-full">
                <div className="grid grid-cols-3 md:grid-cols-3 h-12 md:h-auto">
                  <button
                    onClick={() => {
                      if (amount > 1) {
                        setAmount((prev) => prev - 1);
                      }
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-l-md text-xl p-2"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    onChange={(event) => {
                      setAmount(Number(event.target.value));
                    }}
                    value={amount}
                    className="outline-none border-2 border-yellow-500 text-center text-black"
                    min={1}
                  />
                  <button
                    onClick={() => {
                      setAmount((prev) => prev + 1);
                    }}
                    className="text-white bg-yellow-500 hover:bg-yellow-600  rounded-r-md text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button className="bg-yellow-500 text-black rounded-md">
              Buy Now
            </button>
          </div>
          <div className="mt-5 border-2 rounded-lg">
            <div className="w-full  p-2">
              <h1>Free Delivery</h1>
              <p>Enter your postal code for Delivery Availability</p>
            </div>

            <div className="w-full  p-2">
              <h1>Return Delivery</h1>
              <p>Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
