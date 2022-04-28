const Orders = () => {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-semibold">Order history</h1>

      {/* order section  */}
      <div className=" mt-16">
        {/* order details  */}
        <div>
          <div className="flex space-x-9 py-3">
            <span className="flex flex-col space-y-1">
              <p className="text-xl font-semibold">Order Number</p>
              <p>1233435</p>
            </span>
            <span className="flex flex-col space-y-1">
              <p className="text-xl font-semibold">Order placed</p>
              <p>May 12, 2022</p>
            </span>
            <span className="flex flex-col space-y-1">
              <p className="text-xl font-semibold">Total amount</p>
              <p>$230</p>
            </span>
          </div>

          {/* card  */}
          <div className="flex space-x-6 flex-wrap">
            <div className="bg-gray-500 rounded-md w-[250px] h-[200px]"></div>

            <div className="w-full">
              <div className="flex justify-between align-middle items-center w-full py-3">
                <h2 className="text-2xl font-semibold">Product heading</h2>
                <p className="text-2xl font-semibold">$230</p>
              </div>

              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea
                consectetur laborum! Sed consequuntur possimus fugit nisi veniam
                ad labore sint iusto voluptatum accusamus! Sunt deserunt
                nesciunt dolores necessitatibus tempore!
              </p>

              <div className="py-2">
                <button className="text-xl px-2 py-1 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                  view product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
