/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <div className="mt-28">
      <div>
        <div className="flex justify-center align-middle items-center py-2">
          <img className="w-24 h-24" src="/fashionlogo.png" alt="image" />
        </div>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          deleniti provident commodi sed ad nesciunt sunt iure voluptatibus
          sequi. Nisi obcaecati
        </p>
        <div className="flex space-x-3 justify-start align-middle py-3 px-1 text-gray-600">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
              fill="currentColor"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
              fill="currentColor"
            />
            <path
              d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
              fill="currentColor"
            />
          </svg>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.47005 3.54443H14.4701C16.1089 3.54443 17.4146 4.31866 18.0963 5.51496C19.3165 6.38743 19.9427 7.91487 19.6082 9.65332C19.0865 12.365 16.425 14.5633 13.6636 14.5633H11.6636L10.5301 20.4553H6.39824L6.62891 19.2563H3.44727L6.47005 3.54443ZM8.0922 5.50842H14.0922C15.7491 5.50842 16.8385 6.82737 16.5254 8.45439C16.2124 10.0814 14.6155 11.4004 12.9587 11.4004H8.95866L7.82511 17.2923H5.82511L8.0922 5.50842Z"
              fill="currentColor"
            />
          </svg>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z"
              fill="currentColor"
            />
            <path
              d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z"
              fill="currentColor"
            />
            <path
              d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="">
        <div className="w-fit flex flex-col space-y-1">
          <h2 className="pb-2">SOLUTION</h2>
          <li className="list-none">Marketing</li>
          <li className="list-none">Analytics</li>
          <li className="list-none">Commerce</li>
          <li className="list-none">Insights</li>
        </div>
        <div className="w-fit flex flex-col space-y-1">
          <h2 className="pb-2">COMPANY</h2>
          <li className="list-none">About</li>
          <li className="list-none">Blog</li>
          <li className="list-none">Jobs</li>
          <li className="list-none">Press</li>
          <li className="list-none">Partners</li>
        </div>
        <div className="w-fit flex flex-col space-y-1">
          <h2 className="pb-2">SUPPORT</h2>
          <li className="list-none">Pricing</li>
          <li className="list-none">Documentation</li>
          <li className="list-none">Guids</li>
          <li className="list-none">API Status</li>
        </div>
        <div className="w-fit flex flex-col space-y-1">
          <h2 className="pb-2">LEGAL</h2>
          <li className="list-none">Claim</li>
          <li className="list-none">Privacy</li>
          <li className="list-none">Terms</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
