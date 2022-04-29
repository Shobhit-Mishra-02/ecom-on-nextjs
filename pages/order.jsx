const Orders = () => {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-semibold">Order history</h1>

      {/* order section  */}
      <div className=" mt-16 divide-y divide-gray-400">
        {/* first order details  */}
        <div className="">
          <div className="flex justify-between space-x-5 py-3 sm:justify-start sm:space-x-9">
            <span className="flex flex-col space-y-1">
              <p className="text-xl font-semibold">Order Number</p>
              <p className="text-gray-600">1233435</p>
            </span>
            <span className="flex flex-col space-y-1">
              <p className="text-xl font-semibold">Order placed</p>
              <p className="text-gray-600">May 12, 2022</p>
            </span>
            <span className="flex flex-col space-y-1">
              <p className="text-xl font-semibold">Total amount</p>
              <p className="text-gray-600">$230</p>
            </span>
          </div>

          {/* card  */}
          <div className="sm:flex sm:space-x-3 py-2">
            <div className="bg-gray-500 w-full h-[210px] rounded-md sm:w-[300px]"></div>

            <div className="sm:w-full">
              <div className="flex flex-col py-1 sm:py-2">
                <p className="text-xl md:font-semibold">Product heading</p>
                <p className="text-xl md:font-semibold">$230</p>
              </div>
              <div className="sm:py-2">
                <p className="h-[70px] overflow-hidden text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam rerum quasi praesentium nostrum perspiciatis. Fugit,
                  aliquam excepturi corporis amet quod ipsum rem? Ullam labore,
                  et suscipit repudiandae eum delectus quasi!
                </p>
              </div>

              <div className="py-2">
                <button className="w-full py-1 px-2 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white sm:w-fit">
                  View product
                </button>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:space-x-3 py-2">
            <div className="bg-gray-500 w-full h-[210px] rounded-md sm:w-[300px]"></div>

            <div className="sm:w-full">
              <div className="flex flex-col py-1 sm:py-2">
                <p className="text-xl md:font-semibold">Product heading</p>
                <p className="text-xl md:font-semibold">$230</p>
              </div>
              <div className="sm:py-2">
                <p className="h-[70px] overflow-hidden text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam rerum quasi praesentium nostrum perspiciatis. Fugit,
                  aliquam excepturi corporis amet quod ipsum rem? Ullam labore,
                  et suscipit repudiandae eum delectus quasi!
                </p>
              </div>

              <div className="py-2">
                <button className="w-full py-1 px-2 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white sm:w-fit">
                  View product
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* second order details  */}
        <div className="">
          <div className="flex justify-between space-x-5 py-3 sm:justify-start sm:space-x-9">
            <span className="flex flex-col space-y-1">
              <p className="text-xl font-semibold">Order Number</p>
              <p className="text-gray-600">1233435</p>
            </span>
            <span className="flex flex-col space-y-1">
              <p className="text-xl font-semibold">Order placed</p>
              <p className="text-gray-600">May 12, 2022</p>
            </span>
            <span className="flex flex-col space-y-1">
              <p className="text-xl font-semibold">Total amount</p>
              <p className="text-gray-600">$230</p>
            </span>
          </div>

          {/* card  */}
          <div className="sm:flex sm:space-x-3 py-2">
            <div className="bg-gray-500 w-full h-[210px] rounded-md sm:w-[300px]"></div>

            <div className="sm:w-full">
              <div className="flex flex-col py-1 sm:py-2">
                <p className="text-xl md:font-semibold">Product heading</p>
                <p className="text-xl md:font-semibold">$230</p>
              </div>
              <div className="sm:py-2">
                <p className="h-[70px] overflow-hidden text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam rerum quasi praesentium nostrum perspiciatis. Fugit,
                  aliquam excepturi corporis amet quod ipsum rem? Ullam labore,
                  et suscipit repudiandae eum delectus quasi!
                </p>
              </div>

              <div className="py-2">
                <button className="w-full py-1 px-2 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white sm:w-fit">
                  View product
                </button>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:space-x-3 py-2">
            <div className="bg-gray-500 w-full h-[210px] rounded-md sm:w-[300px]"></div>

            <div className="sm:w-full">
              <div className="flex flex-col py-1 sm:py-2">
                <p className="text-xl md:font-semibold">Product heading</p>
                <p className="text-xl md:font-semibold">$230</p>
              </div>
              <div className="sm:py-2">
                <p className="h-[70px] overflow-hidden text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam rerum quasi praesentium nostrum perspiciatis. Fugit,
                  aliquam excepturi corporis amet quod ipsum rem? Ullam labore,
                  et suscipit repudiandae eum delectus quasi!
                </p>
              </div>

              <div className="py-2">
                <button className="w-full py-1 px-2 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white sm:w-fit">
                  View product
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <hr className="bg-black" /> */}
      </div>
    </div>
  );
};

export default Orders;
