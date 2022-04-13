export default function Productview() {
  return (
    <div className="py-6">
      <div className="w-full h-[400px] flex justify-center align-middle items-center bg-gray-400 rounded-md">
        Product Image
      </div>
      <div className="flex justify-between align-middle items-center">
        <div className="flex flex-col space-y-1">
          <h2>Product Name</h2>
          <h4>Sub title</h4>
        </div>
        <h2>$ 23.00</h2>
      </div>

      <div>
        <h2>Colors</h2>
      </div>
      <div>
        <h2>Size</h2>
      </div>

      <button>Buy now</button>

      <div>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          natus, quod vel voluptate porro aliquid ipsum. Mollitia quod iure
          neque itaque aliquid, nobis, porro delectus maxime at vel eum animi!
        </p>
      </div>
    </div>
  );
}
