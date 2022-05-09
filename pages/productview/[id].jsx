/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { useUser } from "@auth0/nextjs-auth0";
import { useContext } from "react";
import cartStatus from "../../components/context";
import { ToastContainer, toast } from "react-toastify";

export default function Productview({ content }) {
  const { user } = useUser();
  const [status, setStatus] = useContext(cartStatus);

  const AddedToCart = () => toast.success("Added to cart");
  const LoginFirst = () => toast.warn("Log in first");

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

  const [quantity, setQuantity] = useState(1);

  const addToCart = async () => {
    if (user) {
      const data = {
        email: user.email,
        color: color,
        size: size,
        product: content._id,
        orderStatus: false,
        quantity: quantity,
      };

      const request = await fetch("/api/db/addToCart", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await request.json();
      AddedToCart();
      setStatus(status + 1);
      console.log(json);
    } else {
      LoginFirst();
    }
  };

  return (
    <>
      <div className="py-6 flex justify-center align-middle flex-wrap mt-12 space-x-3 xl:space-x-12">
        <img
          src={`/uploads/${content.productImage}`}
          alt="image"
          className="w-full sm:w-[450px] h-[500px] flex justify-center align-middle items-center bg-gray-400 rounded-md"
        ></img>
        <div className="sm:w-[500px]">
          <div className="flex justify-between align-middle items-center">
            <div className="flex flex-col space-y-1">
              <h2 className="text-2xl font-semibold">{content.productName}</h2>
              <h4 className="text-sm text-gray-500">{content.productBrand}</h4>
            </div>
            <h2 className="text-xl">$ {content.productPrice}</h2>
          </div>

          {/* color section  */}
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

          {/* size section  */}
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

          {/* quantity section  */}

          <div className="py-3">
            <h2 className="text-xl">Size</h2>
            <div className="flex justify-center items-center align-middle w-fit space-x-2 py-1">
              <PlusIcon
                className="w-6 h-6 text-gray-500 cursor-pointer"
                onClick={() => setQuantity(quantity + 1)}
              />
              <span className="text-xl font-semibold px-1">{quantity}</span>
              <MinusIcon
                className="w-6 h-6 text-gray-500 cursor-pointer"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              />
            </div>
          </div>

          <button
            className="bg-blue-500 px-4 py-1 rounded-md font-semibold text-white hover:bg-blue-600 my-5 w-full"
            onClick={() => {
              addToCart();
            }}
          >
            Add to cart
          </button>

          <div>
            <h2 className="text-xl">Description</h2>
            <p className="text-sm text-gray-500">{content.productDesc}</p>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

// export async function getStaticPaths() {
//   const data = await fetch(`${process.env.API_URL}/api/db/getAllProdId`);
//   const json = await data.json();
//   const paths = json.map((item) => ({
//     params: { id: item._id },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const data = await fetch(
//     `${process.env.API_URL}/api/db/prodById/${params.id}`
//   );
//   const content = await data.json();
//   return {
//     props: { content },
//   };
// }

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await fetch(`${process.env.API_URL}/api/db/prodById/${id}`);
  const content = await data.json();

  return {
    props: { content },
  };
}
