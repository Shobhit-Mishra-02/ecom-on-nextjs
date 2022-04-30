const userProfile = () => {
  return (
    <div className="py-6">
      <div className="">
        <div className="w-[100px] h-[100px] rounded-full bg-gray-400 m-auto"></div>

        <div className="">
          <div>
            <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" />
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <input type="text" name="lastName" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default userProfile;
