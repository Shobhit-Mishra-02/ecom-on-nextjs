/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import { useContext } from "react";
import cartStatus from "../components/context";

const Cart = ({ user }) => {
  const [cartProd, setCartProd] = useState([]);
  const [subTotal, setSubTotal] = useState(1);
  const [status, setStatus] = useContext(cartStatus);

  useEffect(() => {
    requestToCartProd();
    setStatus(0);
  }, []);

  // here I will make a request to the mongodb to get the cart products of a particular user
  const requestToCartProd = async () => {
    const data = await fetch(`/api/db/getCartProd`, {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
      }),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await data.json();
    console.log(json);
    setCartProd(json);

    let temp = 0;
    json.forEach((element) => {
      temp +=
        parseInt(element.quantity) * parseInt(element.product.productPrice);
    });

    setSubTotal(temp);
  };

  // This will make request to update the quantity value in the mongodb
  const requestToUpdateProd = async (id, quan, status) => {
    if (status) {
      //This will increment the quantity by one
      quan += 1;
      const toIncrement = await fetch("/api/db/getCartProd", {
        method: "PUT",
        body: JSON.stringify({ id, quan }),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const json = await toIncrement.json();
      console.log(json);
    } else {
      //This will decrement the quantity by one
      if (quan != 1) {
        quan -= 1;
        const toDecrement = await fetch("/api/db/getCartProd", {
          method: "PUT",
          body: JSON.stringify({ id, quan }),
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        const json = await toDecrement.json();
        console.log(json);
      }
    }

    requestToCartProd();
  };

  // This will delete the product from cart by Id
  const requestToDeleteProd = async (id) => {
    const deleteProd = await fetch("/api/db/getCartProd", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    console.log(deleteProd);

    requestToCartProd();
  };

  return (
    <>
      {cartProd.length ? (
        <div className="mt-12 py-5">
          <h1 className="text-2xl text-center font-semibold py-6 sm:text-3xl xl:text-6xl xl:py-14">
            Shoping Cart
          </h1>
          <div className="lg:flex">
            {/* card section  */}
            <div className="flex flex-wrap justify-center align-middle lg:w-fit">
              {/* Card  */}
              {cartProd.map((item) => (
                <div
                  key={item._id}
                  className="m-1 rounded-md shadow-md shadow-gray-500"
                >
                  <img
                    src={`/uploads/${item.product.productImage}`}
                    alt="image"
                    className=" w-[250px] h-[250px] rounded-md"
                  ></img>

                  <div className="p-1">
                    <div className="flex justify-between">
                      <div>
                        <h2 className="text-xl ">{item.product.productName}</h2>
                        <h2 className="text-sm text-gray-500">{item.color}</h2>
                        <h2 className="text-sm text-gray-500">{item.size}</h2>
                      </div>
                      <div>
                        <h2 className="text-xl">
                          ${item.product.productPrice}
                        </h2>
                      </div>
                    </div>

                    <div className="flex space-x-2 justify-center align-middle items-center w-fit mt-3 mb-3">
                      <PlusIcon
                        className="text-gray-500 w-4 h-4 cursor-pointer"
                        onClick={() =>
                          requestToUpdateProd(
                            item._id,
                            parseInt(item.quantity),
                            1
                          )
                        }
                      />{" "}
                      <span className="">{item.quantity}</span>{" "}
                      <MinusIcon
                        className="text-gray-500 w-4 h-4 cursor-pointer"
                        onClick={() =>
                          requestToUpdateProd(
                            item._id,
                            parseInt(item.quantity),
                            0
                          )
                        }
                      />
                    </div>

                    <div>
                      <button
                        className="text-red-500 border-2 border-red-500 rounded-md px-2 py-1 hover:bg-red-500 hover:text-white w-full"
                        onClick={() => requestToDeleteProd(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* summary  */}
            <div className="py-20 md:w-[500px] lg:h-full md:m-auto space-y-1 xl:space-y-2 lg:mt-0 ">
              <div className="flex justify-between align-middle text-gray-500">
                <h2>Subtotal</h2>
                <h2>${subTotal}</h2>
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
                <h2>${subTotal + 2 + 2}</h2>
              </div>

              <button className="px-2 py-1 text-white bg-blue-500 rounded-md w-full">
                Confirm order
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Nothing to show</div>
      )}
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Cart;
