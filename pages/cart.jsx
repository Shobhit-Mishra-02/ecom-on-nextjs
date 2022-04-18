import { PlusIcon, MinusIcon } from "@heroicons/react/outline";

const Cart = () => {
  return (
    <div className="mt-12 py-5">
      <h1 className="text-2xl text-center font-semibold py-6 sm:text-3xl xl:text-6xl xl:py-14">
        Shoping Cart
      </h1>
      <div className="lg:flex">
        {/* card section  */}
        <div className="flex flex-wrap justify-center align-middle lg:w-fit">
          {/* Card  */}
          <div className="m-1 rounded-md shadow-md shadow-gray-500">
            <div className="bg-gray-500 w-[250px] h-[250px] rounded-md"></div>

            <div className="p-1">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl ">Product name</h2>
                  <h2 className="text-sm text-gray-500">Black</h2>
                  <h2 className="text-sm text-gray-500">LG</h2>
                </div>
                <div>
                  <h2 className="text-xl">$23.00</h2>
                </div>
              </div>

              <div className="flex space-x-2 justify-center align-middle items-center w-fit mt-3 mb-3">
                <PlusIcon className="text-gray-500 w-4 h-4" />{" "}
                <span className="">2</span>{" "}
                <MinusIcon className="text-gray-500 w-4 h-4" />
              </div>

              <div>
                <button className="text-blue-500 border-2 border-blue-500 rounded-md px-2 py-1 hover:bg-blue-500 hover:text-white w-full">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="m-1 rounded-md shadow-md shadow-gray-500">
            <div className="bg-gray-500 w-[250px] h-[250px] rounded-md"></div>

            <div className="p-1">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl ">Product name</h2>
                  <h2 className="text-sm text-gray-500">Black</h2>
                  <h2 className="text-sm text-gray-500">LG</h2>
                </div>
                <div>
                  <h2 className="text-xl">$23.00</h2>
                </div>
              </div>

              <div className="flex space-x-2 justify-center align-middle items-center w-fit mt-3 mb-3">
                <PlusIcon className="text-gray-500 w-4 h-4" />{" "}
                <span className="">2</span>{" "}
                <MinusIcon className="text-gray-500 w-4 h-4" />
              </div>

              <div>
                <button className="text-blue-500 border-2 border-blue-500 rounded-md px-2 py-1 hover:bg-blue-500 hover:text-white w-full">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* summary  */}
        <div className="py-20 md:w-[500px] lg:h-full md:m-auto space-y-1 xl:space-y-2 lg:mt-0 ">
          <div className="flex justify-between align-middle text-gray-500">
            <h2>Subtotal</h2>
            <h2>$20</h2>
          </div>
          <hr />
          <div className="flex justify-between align-middle text-gray-500">
            <h2>Shiping</h2>
            <h2>$2</h2>
          </div>
          <hr />
          <div className="flex justify-between align-middle text-gray-500">
            <h2>Tax</h2>
            <h2>$2</h2>
          </div>
          <hr />
          <div className="flex justify-between align-middle text-xl py-4">
            <h2>Order total</h2>
            <h2>$40</h2>
          </div>

          <button className="px-2 py-1 text-white bg-blue-500 rounded-md w-full">
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
