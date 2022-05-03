/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ToastContainer, toast } from "react-toastify";

const userProfile = ({ user }) => {
  const [details, setDetails] = useState({
    userFirstName: user.name.split(" ")[0],
    userLastName: user.name.split(" ")[1],
    userEmail: user.email,
    userAddress: "",
    userCountry: "",
    userCity: "",
    userPinCode: "",
    userPhoneNumber: "",
  });

  const updatedProfile = () => toast.success("Profile updated");

  const fillWholeForm = () => toast.warning("Fill all entities");

  useEffect(() => {
    requestToCheckUser();
  }, []);

  const requestToCheckUser = async () => {
    const data = await fetch("/api/db/getUser", {
      method: "POST",
      body: JSON.stringify({ userEmail: user.email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await data.json();
    console.log(json);

    if (json.length) {
      setDetails({
        ...details,
        userAddress: json[0].userAddress,
        userCountry: json[0].userCountry,
        userCity: json[0].userCity,
        userPinCode: json[0].userPinCode,
        userPhoneNumber: json[0].userPhoneNumber,
      });
    }
  };

  const onSubmit = async () => {
    if (
      details.userAddress.length &&
      details.userCountry.length &&
      details.userCity.length &&
      details.userPinCode.length &&
      details.userPhoneNumber.length
    ) {
      const data = await fetch("/api/db/addUserProfile", {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await data.json();
      console.log(json);
      updatedProfile();
    } else {
      fillWholeForm();
    }
  };

  return (
    <div className="pt-10 sm:pt-14 md:pt-16 xl:pt-24 text-gray-600">
      <div className="">
        {/* image section with name  */}
        <div className="sm:flex sm:flex-row sm:space-x-4 xl:justify-start xl:text-xl xl:space-x-10">
          <img
            src={user.picture}
            alt="img"
            className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full  m-auto xl:m-2"
          ></img>

          <div className="sm:w-[300px] md:w-[380px] xl:space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="firstName">First name</label>
              <input
                className="border-2 rounded-md px-2 py-1 border-gray-400 bg-gray-100"
                type="text"
                name="firstName"
                placeholder="first name"
                value={details.userFirstName}
                onChange={(e) =>
                  setDetails({
                    ...details,
                    userFirstName: e.target.value,
                  })
                }
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="lastName">Last name</label>
              <input
                className="border-2 rounded-md px-2 py-1 border-gray-400 bg-gray-100"
                type="text"
                name="lastName"
                placeholder="second name"
                value={details.userLastName}
                onChange={(e) =>
                  setDetails({
                    ...details,
                    userLastName: e.target.value,
                  })
                }
                readOnly
              />
            </div>
          </div>
        </div>

        {/* credential section  */}
        <div className="pt-10 md:space-y-2 xl:text-xl xl:space-y-4">
          <div className="flex flex-col space-y-2 lg:w-[600px]">
            <label htmlFor="email">Email</label>
            <input
              className="border-2 rounded-md px-2 py-1 border-gray-400 bg-gray-100"
              type="email"
              name="email"
              placeholder="enter email"
              value={details.userEmail}
              onChange={(e) =>
                setDetails({
                  ...details,
                  userEmail: e.target.value,
                })
              }
              readOnly
            />
          </div>
          <div className="flex flex-col space-y-2 sm:w-[300px]">
            <label htmlFor="country">Country</label>
            <input
              className="border-2 rounded-md px-2 py-1 border-gray-400"
              type="text"
              name="country"
              placeholder="enter country"
              value={details.userCountry}
              onChange={(e) =>
                setDetails({
                  ...details,
                  userCountry: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col space-y-2 xl:pr-36">
            <label htmlFor="address">Address</label>
            <input
              className="border-2 rounded-md px-2 py-1 border-gray-400"
              type="text"
              name="address"
              placeholder="enter address"
              value={details.userAddress}
              onChange={(e) =>
                setDetails({
                  ...details,
                  userAddress: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col space-y-2 sm:w-[300px] xl:w-[400px]">
            <label htmlFor="phNumber">Phone number</label>
            <input
              className="border-2 rounded-md px-2 py-1 border-gray-400"
              type="tel"
              name="phNumber"
              placeholder="ph no."
              value={details.userPhoneNumber}
              onChange={(e) =>
                setDetails({
                  ...details,
                  userPhoneNumber: e.target.value,
                })
              }
            />
          </div>

          <div className="sm:flex sm:space-x-2 sm:justify-start sm:align-middle">
            <div className="flex flex-col space-y-2 sm:w-[260px]">
              <label htmlFor="city">City</label>
              <input
                className="border-2 rounded-md px-2 py-1 border-gray-400"
                type="text"
                name="city"
                placeholder="enter city"
                value={details.userCity}
                onChange={(e) =>
                  setDetails({
                    ...details,
                    userCity: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex flex-col space-y-2 sm:w-[260px]">
              <label htmlFor="pincode">Pin code</label>
              <input
                className="border-2 rounded-md px-2 py-1 border-gray-400"
                type="text"
                name="pincode"
                placeholder="enter pincode"
                value={details.userPinCode}
                onChange={(e) =>
                  setDetails({
                    ...details,
                    userPinCode: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>

        {/* submit button  */}
        <div className="flex justify-center align-middle items-center py-6 md:py-12">
          <button
            className="px-4 py-1 text-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default userProfile;
