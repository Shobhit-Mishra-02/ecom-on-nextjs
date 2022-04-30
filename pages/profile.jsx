const userProfile = () => {
  return (
    <div className="pt-10 sm:pt-14 md:pt-16 xl:pt-24 text-gray-600">
      <div className="">
        {/* image section with name  */}
        <div className="sm:flex sm:flex-row sm:space-x-4 xl:justify-start xl:text-xl xl:space-x-10">
          <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-gray-400 m-auto xl:m-2"></div>

          <div className="sm:w-[300px] md:w-[380px] xl:space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="firstName">First name</label>
              <input
                className="border-2 rounded-md px-2 py-1 border-gray-400"
                type="text"
                name="firstName"
                placeholder="first name"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="lastName">Last name</label>
              <input
                className="border-2 rounded-md px-2 py-1 border-gray-400"
                type="text"
                name="lastName"
                placeholder="second name"
              />
            </div>
          </div>
        </div>

        {/* credential section  */}
        <div className="pt-10 md:space-y-2 xl:text-xl xl:space-y-4">
          <div className="flex flex-col space-y-2 lg:w-[600px]">
            <label htmlFor="email">Email</label>
            <input
              className="border-2 rounded-md px-2 py-1 border-gray-400"
              type="email"
              name="email"
              placeholder="enter email"
            />
          </div>
          <div className="flex flex-col space-y-2 sm:w-[300px]">
            <label htmlFor="country">Country</label>
            <input
              className="border-2 rounded-md px-2 py-1 border-gray-400"
              type="text"
              name="country"
              placeholder="enter country"
            />
          </div>
          <div className="flex flex-col space-y-2 xl:pr-36">
            <label htmlFor="address">Address</label>
            <input
              className="border-2 rounded-md px-2 py-1 border-gray-400"
              type="text"
              name="address"
              placeholder="enter address"
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
              />
            </div>

            <div className="flex flex-col space-y-2 sm:w-[260px]">
              <label htmlFor="pincode">Pin code</label>
              <input
                className="border-2 rounded-md px-2 py-1 border-gray-400"
                type="text"
                name="pincode"
                placeholder="enter pincode"
              />
            </div>
          </div>
        </div>

        {/* submit button  */}
        <div className="flex justify-center align-middle items-center py-6 md:py-12">
          <button className="px-4 py-1 text-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default userProfile;
