/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { RadioGroup } from "@headlessui/react";

export default function Productview() {
  const router = useRouter();
  const { id } = router.query;

  // states for managing radio buttons
  const [size, setSize] = useState("S");
  const [sizeStyles, setSizeStyles] = useState({
    XXL: 0,
    XS: 0,
    S: 1,
    LG: 0,
    XL: 0,
  });

  const [color, setColor] = useState("gray");
  const [colorStyles, setColorStyles] = useState({
    gray: 1,
    white: 0,
    pink: 0,
  });

  const [prod, setProd] = useState({});
  const [loading, setStatus] = useState(1);

  const requestForProd = async () => {
    const data = await fetch(`/api/db/prodById/${id}`);
    const json = await data.json();
    setProd(json);
    setStatus(0);
  };

  useEffect(() => {
    requestForProd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <div>loading </div>
      ) : (
        <div className="py-6 flex justify-center align-middle flex-wrap mt-12 space-x-3 xl:space-x-12">
          <img
            src={`/uploads/${prod.productImage}`}
            alt="image"
            className="w-full sm:w-[350px] h-[400px] flex justify-center align-middle items-center bg-gray-400 rounded-md"
          ></img>
          <div className="sm:w-[500px]">
            <div className="flex justify-between align-middle items-center">
              <div className="flex flex-col space-y-1">
                <h2 className="text-xl font-semibold">{prod.productName}</h2>
                <h4 className="text-sm text-gray-500">{prod.productBrand}</h4>
              </div>
              <h2 className="text-xl">$ {prod.productPrice}</h2>
            </div>

            <div className="py-3">
              <h2 className="text-xl">Colors</h2>

              <div className="flex space-x-1 flex-wrap">
                <div
                  id="gray"
                  className={
                    colorStyles["gray"]
                      ? "w-10 h-10 rounded-full bg-gray-500 border-2 border-blue-500 cursor-pointer"
                      : "w-10 h-10 rounded-full bg-gray-500 border-2 border-gray-500 cursor-pointer"
                  }
                  onClick={(e) => {
                    setColor(e.target.id);
                    setColorStyles({
                      ...colorStyles,
                      gray: 1,
                      white: 0,
                      pink: 0,
                    });
                  }}
                ></div>
                <div
                  id="white"
                  className={
                    colorStyles["white"]
                      ? "w-10 h-10 rounded-full bg-white border-2 border-blue-500 cursor-pointer"
                      : "w-10 h-10 rounded-full bg-white border-2 border-gray-500 cursor-pointer"
                  }
                  onClick={(e) => {
                    setColor(e.target.id);
                    setColorStyles({
                      ...colorStyles,
                      gray: 0,
                      white: 1,
                      pink: 0,
                    });
                  }}
                ></div>
                <div
                  id="pink"
                  className={
                    colorStyles["pink"]
                      ? "w-10 h-10 rounded-full bg-pink-500 border-2 border-blue-500 cursor-pointer"
                      : "w-10 h-10 rounded-full bg-pink-500 border-2 border-gray-500 cursor-pointer"
                  }
                  onClick={(e) => {
                    setColor(e.target.id);
                    setColorStyles({
                      ...colorStyles,
                      gray: 0,
                      white: 0,
                      pink: 1,
                    });
                  }}
                ></div>
              </div>
            </div>
            <div>
              <h2 className="text-xl">Size</h2>
              <div className="flex space-x-1 flex-wrap">
                <button
                  id="XXL"
                  className={
                    sizeStyles["XXL"]
                      ? "border-2 border-blue-500 bg-blue-500 text-white rounded-md px-2 py-1"
                      : "border-2 border-gray-500 rounded-md px-2 py-1"
                  }
                  onClick={(e) => {
                    setSize(e.target.id),
                      setSizeStyles({
                        ...sizeStyles,
                        XXL: 1,
                        XS: 0,
                        S: 0,
                        LG: 0,
                        XL: 0,
                      });
                  }}
                >
                  XXL
                </button>
                <button
                  id="XS"
                  className={
                    sizeStyles["XS"]
                      ? "border-2 border-blue-500 bg-blue-500 text-white rounded-md px-2 py-1"
                      : "border-2 border-gray-500 rounded-md px-2 py-1"
                  }
                  onClick={(e) => {
                    setSize(e.target.id),
                      setSizeStyles({
                        ...sizeStyles,
                        XXL: 0,
                        XS: 1,
                        S: 0,
                        LG: 0,
                        XL: 0,
                      });
                  }}
                >
                  XS
                </button>
                <button
                  id="S"
                  className={
                    sizeStyles["S"]
                      ? "border-2 border-blue-500 bg-blue-500 text-white rounded-md px-2 py-1"
                      : "border-2 border-gray-500 rounded-md px-2 py-1"
                  }
                  onClick={(e) => {
                    setSize(e.target.id),
                      setSizeStyles({
                        ...sizeStyles,
                        XXL: 0,
                        XS: 0,
                        S: 1,
                        LG: 0,
                        XL: 0,
                      });
                  }}
                >
                  S
                </button>
                <button
                  id="LG"
                  className={
                    sizeStyles["LG"]
                      ? "border-2 border-blue-500 bg-blue-500 text-white rounded-md px-2 py-1"
                      : "border-2 border-gray-500 rounded-md px-2 py-1"
                  }
                  onClick={(e) => {
                    setSize(e.target.id),
                      setSizeStyles({
                        ...sizeStyles,
                        XXL: 0,
                        XS: 0,
                        S: 0,
                        LG: 1,
                        XL: 0,
                      });
                  }}
                >
                  LG
                </button>
                <button
                  id="XL"
                  className={
                    sizeStyles["XL"]
                      ? "border-2 border-blue-500 bg-blue-500 text-white rounded-md px-2 py-1"
                      : "border-2 border-gray-500 rounded-md px-2 py-1"
                  }
                  onClick={(e) => {
                    setSize(e.target.id),
                      setSizeStyles({
                        ...sizeStyles,
                        XXL: 0,
                        XS: 0,
                        S: 0,
                        LG: 0,
                        XL: 1,
                      });
                  }}
                >
                  XL
                </button>
              </div>
            </div>

            <button className="bg-blue-500 px-4 py-1 rounded-md font-semibold text-white hover:bg-blue-600 my-9 w-full">
              Add to cart
            </button>

            <div>
              <h2 className="text-xl">Description</h2>
              <p className="text-sm text-gray-500">{prod.productDesc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
