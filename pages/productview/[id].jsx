/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function Productview() {
  const router = useRouter();
  const { id } = router.query;

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
                <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-blue-500"></div>
                <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-500"></div>
                <div className="w-10 h-10 rounded-full bg-pink-300 border-2 border-gray-500"></div>
              </div>
            </div>
            <div>
              <h2 className="text-xl">Size</h2>
              <div className="flex space-x-1 flex-wrap">
                <button className="border-2 border-gray-500 rounded-md px-2 py-1">
                  XXL
                </button>
                <button className="border-2 border-gray-500 rounded-md px-2 py-1">
                  XS
                </button>
                <button className="border-2 border-gray-500 rounded-md px-2 py-1">
                  S
                </button>
                <button className="border-2 border-gray-500 rounded-md px-2 py-1">
                  LG
                </button>
                <button className="border-2 border-gray-500 rounded-md px-2 py-1">
                  XL
                </button>
              </div>
            </div>

            <button className="bg-blue-500 px-4 py-1 rounded-md font-semibold text-white hover:bg-blue-600 my-9 w-full">
              Buy now
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
