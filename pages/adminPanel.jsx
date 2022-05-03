/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { SearchIcon, PlusIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";

const AdminPanel = ({ content }) => {
  const { user } = useUser();
  const [authorized, setAuthorized] = useState(0);

  const [adminStatus, setAdminStatus] = useState(0);
  const [prodID, setProdID] = useState("");
  const [prodData, setProdData] = useState([]);

  const checkAuthorization = () => {
    if (user) {
      if (user.email === "shobhitmishra2002@gmail.com") {
        setAuthorized(1);
      }
    }
  };

  const requestForProdData = async () => {
    const data = await fetch("/api/db/prod");
    const json = await data.json();
    setProdData(json);
    setProdID(json[0]._id);
  };

  useEffect(() => {
    requestForProdData();
    checkAuthorization();
  }, [user]);

  //   the content bellow uploads the new product
  const [prodInfo, setProdInfo] = useState({
    productName: "",
    productPrice: "",
    productBrand: "",
    productDesc: "",
    categoryName: "",
  });

  const [image, setImage] = useState(null);

  const updateImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const onSubmit = async () => {
    const body = new FormData();

    body.append("file", image);
    for (const [key, value] of Object.entries(prodInfo)) {
      body.append(`${key}`, value);
    }

    content.map((item) => {
      if (item.categoryName == prodInfo.categoryName) {
        body.append("category", item._id);
        console.log(item._id);
      }
    });

    const response = await fetch("/api/upload", {
      method: "POST",
      body,
    });

    setImage(null);
    setProdInfo({
      ...prodInfo,
      productName: "",
      productPrice: "",
      productBrand: "",
      productDesc: "",
      categoryName: "",
    });
    requestForProdData();
  };

  //   the content bellow shows the product details
  const [product, setProduct] = useState({});

  const requestForProdById = async () => {
    const data = await fetch(`/api/db/prodById/${prodID}`);
    const json = await data.json();
    setProduct(json);
  };

  useEffect(() => {
    requestForProdById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prodID]);

  //   the content bellow will delete the product
  const requestToRemoveProd = async () => {
    const data = await fetch(`/api/db/deleteById/${prodID}`);
    const json = await data.json();
    console.log(json);
    requestForProdData();
  };

  //   the content bellow will update the product
  const requestToUpdateProd = async () => {
    const data = await fetch(`/api/db/updateById/${prodID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const json = await data.json();

    requestForProdData();
  };

  if (!authorized) {
    return <div></div>;
  }

  return (
    authorized && (
      <div className="mt-16 flex justify-center align-top items-start space-x-14 flex-wrap">
        <div>
          {/* search section  */}
          <div className="flex align-middle space-x-3 py-5 mb-5">
            <input
              className="px-2 py-1 rounded-md border-2 border-gray-500 focus:outline-blue-500"
              type="text"
              placeholder="Search"
            />

            <button className="px-3 py-1 border-2 border-gray-500 rounded-md text-gray-500 hover:bg-blue-500 hover:text-white hover:border-blue-500">
              <SearchIcon className="w-6 h-6" />
            </button>
            <div>
              <button
                className="px-3 py-1 border-2 border-gray-500 rounded-md text-gray-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 mx-5"
                onClick={() => setAdminStatus(1)}
              >
                <PlusIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* product display section  */}
          <div className="flex flex-col justify-center align-middle h-[300px] overflow-auto">
            {prodData.length ? (
              prodData.map((item) => (
                <div
                  key={item._id}
                  id={item._id}
                  className="flex space-x-1 align-middle items-center py-2 px-1 mt-2 w-[400px] rounded-md shadow-md shadow-gray-400 cursor-pointer"
                  onClick={() => {
                    setProdID(item._id);
                    setAdminStatus(0);
                  }}
                >
                  <div>
                    <img
                      src={`/uploads/${item.productImage}`}
                      alt="img"
                      className="w-20 h-20 rounded-full bg-gray-400"
                    ></img>
                  </div>

                  <div className="flex flex-col justify-center align-middle">
                    <h3 className="text-xl">{item.productName}</h3>
                    <h4 className="text-sm text-gray-500">
                      {item.productBrand}
                    </h4>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>

        {/* this section with handler the removal and updation of the product  */}
        {adminStatus ? (
          //   product upload form
          <div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="image">upload Image</label>
              <input type="file" id="image" onChange={(e) => updateImage(e)} />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                id="name"
                placeholder="enter name"
                value={prodInfo.productName}
                onChange={(e) =>
                  setProdInfo({
                    ...prodInfo,
                    productName: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                placeholder="enter price"
                value={prodInfo.productPrice}
                onChange={(e) =>
                  setProdInfo({
                    ...prodInfo,
                    productPrice: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                id="brand"
                placeholder="enter price"
                value={prodInfo.productBrand}
                onChange={(e) =>
                  setProdInfo({
                    ...prodInfo,
                    productBrand: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="desc">Description</label>
              <textarea
                type="text"
                id="desc"
                value={prodInfo.productDesc}
                onChange={(e) =>
                  setProdInfo({
                    ...prodInfo,
                    productDesc: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select category
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(e) =>
                  setProdInfo({
                    ...prodInfo,
                    categoryName: e.target.value,
                  })
                }
              >
                <option> </option>
                {content.map((item) => {
                  return (
                    <option key={item._id} id={item._id}>
                      {item.categoryName}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="py-6">
              <button
                className="rounded-md border-2 border-blue-500 text-blue-500 px-2 py-1"
                onClick={() => onSubmit()}
              >
                Add Product
              </button>
            </div>
          </div>
        ) : (
          //   display product details
          <div className="p-6">
            <img
              src={`/uploads/${product.productImage}`}
              className="w-40 h-44 bg-gray-400 rounded-md my-8"
            ></img>

            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                value={product.productName}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    productName: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                placeholder="Enter price"
                value={product.productPrice}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    productPrice: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="brandName">Brand Name</label>
              <input
                type="text"
                id="brandName"
                placeholder="Enter name"
                value={product.productBrand}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    productBrand: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="desc">Description</label>
              <textarea
                className="w-64"
                type="text"
                id="desc"
                placeholder="Enter description"
                value={product.productDesc}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    productDesc: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-x-4">
              <button
                className="text-xl border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md px-2 py-1"
                onClick={() => requestToRemoveProd()}
              >
                Remove
              </button>
              <button
                className="text-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md px-2 py-1"
                onClick={() => requestToUpdateProd()}
              >
                Update
              </button>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export async function getServerSideProps() {
  const categoryData = await fetch(`${process.env.API_URL}/api/db/category`);
  const content = await categoryData.json();

  return {
    props: { content },
  };
}

export default AdminPanel;
