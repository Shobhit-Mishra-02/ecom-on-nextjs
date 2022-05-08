/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Link from "next/link";

const Orders = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(1);
  const [gotData, setGotData] = useState(0);

  const requestToOrder = async () => {
    const data = await fetch("/api/db/makeOrder");
    const json = await data.json();
    setOrder(json);
    setLoading(0);
    setGotData(1);
  };

  const convertDate = (string) => {
    const testDate = new Date(string);
    let res = "";
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    res = `${testDate.getDate()} ${
      months[testDate.getMonth()]
    } ${testDate.getFullYear()}`;

    return res;
  };

  useEffect(() => {
    requestToOrder();
  }, []);

  if (gotData) {
    if (!order.length) {
      return (
        <div className="pt-36">
          <div className="text-6xl font-semibold text-gray-500 text-center">
            Make some orders...
          </div>
        </div>
      );
    }
  }

  return (
    <div className="py-16">
      <h1 className="text-4xl font-semibold">Order history</h1>

      {/* order section  */}
      <div className=" mt-16 divide-y divide-gray-300">
        {!loading ? (
          order.map((item) => (
            <div className="py-8" key={item._id}>
              <div className="flex justify-between space-x-5 py-3 sm:justify-start sm:space-x-9">
                <span className="flex flex-col space-y-1">
                  <p className="text-xl font-semibold">Order Number</p>
                  <p className="text-gray-600">{item._id.slice(0, 6)}</p>
                </span>
                <span className="flex flex-col space-y-1">
                  <p className="text-xl font-semibold">Order placed</p>
                  <p className="text-gray-600">{convertDate(item.createdAt)}</p>
                </span>
                <span className="flex flex-col space-y-1">
                  <p className="text-xl font-semibold">Total amount</p>
                  <p className="text-gray-600">${item.totalAmount}</p>
                </span>
              </div>

              {/* card  */}
              {item.products.map((prod) => (
                <div className="sm:flex sm:space-x-3 py-2" key={prod._id}>
                  <img
                    src={`/uploads/${prod.productImage}`}
                    alt="image"
                    className=" w-[200px] m-auto h-[210px] rounded-md sm:w-[300px]"
                  ></img>

                  <div className="sm:w-full">
                    <div className="flex flex-col py-1 sm:py-2">
                      <p className="text-xl md:font-semibold">
                        {prod.productName}
                      </p>
                      <p className="text-xl md:font-semibold">
                        ${prod.productPrice}
                      </p>
                    </div>
                    <div className="sm:py-2">
                      <p className="h-[70px] overflow-hidden text-gray-600">
                        {prod.productDesc}
                      </p>
                    </div>

                    <div className="py-2">
                      <Link href={`/productview/${prod._id}`}>
                        <a className="w-full py-1 px-2 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white sm:w-fit">
                          View product
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
