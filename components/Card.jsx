const Card = () => {
  return (
    <div className="w-[300px] rounded-md shadow-md shadow-gray-400 m-1 lg:m-3">
      <div className="flex justify-center align-middle items-center bg-gray-400 rounded-t-md w-full h-[300px]">
        Product Image
      </div>

      <div className="space-y-3 px-1">
        <div className="flex flex-col space-y-1">
          <h2 className="text-xl font-semibold hover:cursor-pointer">
            Shirt for man
          </h2>
          <h4 className="text-sm text-gray-500">GUCCI</h4>
        </div>

        <h2 className="text-xl font-semibold">$ 23.00</h2>
      </div>
      <div className="pt-4 px-1 py-1">
        <button className="border-2 border-blue-500 px-4 py-1 rounded-md font-semibold text-blue-500 hover:bg-blue-600 hover:text-white w-full">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
