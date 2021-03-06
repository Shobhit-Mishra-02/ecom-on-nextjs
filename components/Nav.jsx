import { useState } from "react";
import CartIcon from "./Carticon";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Dropdown from "./Userdropdown";
import { useRouter } from "next/router";
import { IdentificationIcon } from "@heroicons/react/outline";

const Navigation = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const { user } = useUser();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const onSearch = () => {
    if (search.length) {
      const content = search.replace(" ", "%20");
      router.push(`/search/${content}`);
    }
  };

  return (
    <nav className="text-xl">
      <div className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-11 w-11"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => setSliderPosition(1)}
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>

        <div className="flex flex-col justify-center align-middle items-center pt-6">
          <svg
            width="175"
            height="24"
            viewBox="0 0 175 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => router.push("/")}
          >
            <g clipPath="url(#clip0_22_434)">
              <path
                d="M0 22.5725H2.20493V11.7652H11.0565V9.60954H2.20493V2.70933H11.0565V0.553711H0V22.5725Z"
                fill="#383838"
              />
              <path
                d="M19.6863 0.553711L9.26021 22.5725H11.7207L15.1584 15.3275H24.6654L28.1362 22.5725H30.5179L20.2268 0.553711H19.6863ZM23.7113 13.2018H16.1668L19.9481 5.23221L23.7113 13.2018Z"
                fill="#383838"
              />
              <path
                d="M32.2161 22.0562C33.3064 22.7696 34.521 23.1256 35.8612 23.1256C37.6019 23.1256 39.079 22.5376 40.2948 21.3597C41.5101 20.1818 42.1174 18.7957 42.1174 17.1982C42.1174 16.0913 41.7625 14.9889 41.0521 13.8902C40.3417 12.7928 39.0315 11.5401 37.1215 10.1333C35.5107 8.94608 34.561 8.21279 34.2711 7.93344C33.7406 7.40466 33.3758 6.9158 33.1758 6.46622C32.9759 6.01726 32.8759 5.55334 32.8759 5.07446C32.8759 4.28629 33.1583 3.62221 33.7232 3.08408C34.288 2.54533 35.0159 2.27596 35.9062 2.27596C36.596 2.27596 37.2339 2.45055 37.8194 2.79974C38.4042 3.14955 39.1115 3.87287 39.9418 4.97032L41.7419 3.60786C40.7316 2.23106 39.7744 1.28514 38.869 0.771332C37.9643 0.257526 36.9915 0 35.9518 0C34.9715 0 34.0643 0.226972 33.2289 0.680917C32.3936 1.13549 31.7456 1.75654 31.2864 2.54471C30.8266 3.33288 30.5966 4.20647 30.5966 5.16425C30.5966 6.37206 30.9865 7.49446 31.7669 8.53204C32.2174 9.15123 33.362 10.1539 35.2027 11.5407C37.0327 12.9175 38.293 14.0954 38.9834 15.0731C39.4832 15.7827 39.7331 16.506 39.7331 17.2437C39.7331 17.8928 39.5632 18.5057 39.2233 19.085C38.8834 19.6643 38.3879 20.1251 37.7381 20.4693C37.0883 20.8141 36.3929 20.9856 35.6532 20.9856C33.9225 20.9856 32.3979 19.774 31.0771 17.3484L29.2021 18.4708C30.1205 20.1469 31.1258 21.3423 32.2161 22.0562Z"
                fill="#383838"
              />
              <path
                d="M44.2954 22.5725H46.5004V11.9454H57.7375V22.5725H59.9424V0.553711H57.7375V9.78912H46.5004V0.553711H44.2954V22.5725V22.5725Z"
                fill="#383838"
              />
              <path
                d="M62.541 22.5725H64.7459V0.553711H62.541V22.5725Z"
                fill="#383838"
              />
              <path
                d="M72.103 1.53393C70.3316 2.55718 68.9327 3.97139 67.9074 5.77782C66.8815 7.58362 66.3685 9.54469 66.3685 11.6604C66.3685 14.8336 67.4944 17.5374 69.7462 19.7722C71.998 22.0082 74.7603 23.125 78.033 23.125C81.2657 23.125 84.0055 22.0032 86.2516 19.7578C88.4984 17.5118 89.6225 14.7794 89.6225 11.5556C89.6225 8.30258 88.4972 5.56332 86.2454 3.33787C83.993 1.11304 81.1957 0 77.853 0C75.7912 0 73.8743 0.511312 72.103 1.53393ZM82.669 3.41394C84.1517 4.26259 85.3007 5.39371 86.1173 6.80668C86.9339 8.22027 87.3419 9.80035 87.3419 11.5482C87.3419 13.3053 86.9339 14.9035 86.1173 16.342C85.3007 17.7805 84.1642 18.9142 82.7065 19.7422C81.2488 20.5716 79.6637 20.9856 77.9505 20.9856C75.3863 20.9856 73.1945 20.0846 71.3763 18.2819C69.5581 16.4792 68.649 14.2687 68.649 11.6529C68.649 9.88577 69.0595 8.28262 69.8812 6.84472C70.7028 5.40681 71.8449 4.26322 73.3076 3.41456C74.7703 2.56591 76.3179 2.14127 77.9505 2.14127C79.6131 2.14065 81.1857 2.56529 82.669 3.41394Z"
                fill="#383838"
              />
              <path
                d="M93.8861 22.5725V5.89941L108.453 22.5725H108.948V0.553711H106.773V17.4314L92.0848 0.553711H91.6049V22.5725H93.8861Z"
                fill="#383838"
              />
              <path
                d="M111.845 22.5725H114.051V12.3338H115.626C118.367 12.3338 120.237 12.2147 121.237 11.9746C122.607 11.6454 123.682 11.0044 124.463 10.0522C125.243 9.09945 125.633 7.88914 125.633 6.42254C125.633 4.96593 125.233 3.75624 124.433 2.79286C123.632 1.82947 122.602 1.19407 121.342 0.884166C120.462 0.664677 118.762 0.554932 116.242 0.554932H111.845V22.5725ZM117.952 2.7093C119.442 2.7093 120.515 2.839 121.169 3.09777C121.824 3.35717 122.352 3.79241 122.751 4.40473C123.151 5.01706 123.351 5.69174 123.351 6.42878C123.351 7.18577 123.151 7.87043 122.751 8.48276C122.351 9.09508 121.801 9.53843 121.101 9.81217C120.4 10.0859 119.294 10.2225 117.785 10.2225L114.049 10.1776V2.7093H117.952Z"
                fill="#383838"
              />
              <path
                d="M127.556 22.5725H129.76V11.9454H140.997V22.5725H143.202V0.553711H140.997V9.78912H129.76V0.553711H127.556V22.5725Z"
                fill="#383838"
              />
              <path
                d="M145.8 22.5725H148.005V0.553711H145.8V22.5725Z"
                fill="#383838"
              />
              <path
                d="M150.604 22.5725H161.301V20.4462H152.809V0.553711H150.604V22.5725V22.5725Z"
                fill="#383838"
              />
              <path
                d="M162.353 22.5725H174.911V20.4169H164.559V11.7652H174.911V9.60954H164.559V2.70933H175.001V0.553711H162.354V22.5725H162.353Z"
                fill="#383838"
              />
            </g>
            <defs>
              <clipPath id="clip0_22_434">
                <rect width="175" height="23.125" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-400 rounded-md px-3 py-1 mt-8 w-72"
            onChange={(e) => {
              setSearch(e.target.value);
              // onSearch();
            }}
            value={search}
            onInput={() => onSearch()}
          />
        </div>

        <div
          className={`bg-blue-400 w-fit fixed top-0 left-0 h-full pt-4 z-20 px-8 ${
            sliderPosition ? `translate-x-0` : `-translate-x-full`
          } transition-all ease-out`}
        >
          <div className=" py-7 mx-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute right-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => setSliderPosition(0)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          {user && (
            <div className="py-6">
              <div className="flex justify-center align-middle items-center">
                <Image
                  loader={myLoader}
                  src={user.picture}
                  alt="img"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h2 className="text-center text-sm font-semibold">
                <Link href={"/profile"}>
                  <a>{user.name}</a>
                </Link>
              </h2>
            </div>
          )}
          <ul className="flex flex-col space-y-4 pt-5">
            <li
              className="flex justify-start align-middle items-center px-9"
              onClick={() => router.push("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </li>
            <li
              className="flex px-9 justify-start align-middle items-center"
              onClick={() => router.push("/cart")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Cart
            </li>
            {user && (
              <li className="flex px-9 justify-start align-middle items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                <Link href={"/order"}>
                  <a>Orders</a>
                </Link>
              </li>
            )}
            {user && (
              <li className="flex px-9 justify-start align-middle items-center">
                <IdentificationIcon className="mr-2 h-6 w-6" />
                <Link href={"/profile"}>
                  <a>Profile</a>
                </Link>
              </li>
            )}
            <li className="flex px-9 justify-start align-middle items-center">
              {user ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <Link href={"/api/auth/logout"}>
                    <a>Log out</a>
                  </Link>

                  {/* <li className="flex px-9 justify-start align-middle items-center">
                    <IdentificationIcon className="mr-2 h-6 w-6" />
                    Profile
                  </li> */}
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <Link href={"/api/auth/login"}>
                    <a>Log in</a>
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden sm:block lg:mt-14 xl:mt-20">
        <ul className="flex justify-between align-middle items-center mt-5">
          <li className="cursor-pointer px-2">
            <svg
              width="175"
              height="24"
              viewBox="0 0 175 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => router.push("/")}
            >
              <g clipPath="url(#clip0_22_434)">
                <path
                  d="M0 22.5725H2.20493V11.7652H11.0565V9.60954H2.20493V2.70933H11.0565V0.553711H0V22.5725Z"
                  fill="#383838"
                />
                <path
                  d="M19.6863 0.553711L9.26021 22.5725H11.7207L15.1584 15.3275H24.6654L28.1362 22.5725H30.5179L20.2268 0.553711H19.6863ZM23.7113 13.2018H16.1668L19.9481 5.23221L23.7113 13.2018Z"
                  fill="#383838"
                />
                <path
                  d="M32.2161 22.0562C33.3064 22.7696 34.521 23.1256 35.8612 23.1256C37.6019 23.1256 39.079 22.5376 40.2948 21.3597C41.5101 20.1818 42.1174 18.7957 42.1174 17.1982C42.1174 16.0913 41.7625 14.9889 41.0521 13.8902C40.3417 12.7928 39.0315 11.5401 37.1215 10.1333C35.5107 8.94608 34.561 8.21279 34.2711 7.93344C33.7406 7.40466 33.3758 6.9158 33.1758 6.46622C32.9759 6.01726 32.8759 5.55334 32.8759 5.07446C32.8759 4.28629 33.1583 3.62221 33.7232 3.08408C34.288 2.54533 35.0159 2.27596 35.9062 2.27596C36.596 2.27596 37.2339 2.45055 37.8194 2.79974C38.4042 3.14955 39.1115 3.87287 39.9418 4.97032L41.7419 3.60786C40.7316 2.23106 39.7744 1.28514 38.869 0.771332C37.9643 0.257526 36.9915 0 35.9518 0C34.9715 0 34.0643 0.226972 33.2289 0.680917C32.3936 1.13549 31.7456 1.75654 31.2864 2.54471C30.8266 3.33288 30.5966 4.20647 30.5966 5.16425C30.5966 6.37206 30.9865 7.49446 31.7669 8.53204C32.2174 9.15123 33.362 10.1539 35.2027 11.5407C37.0327 12.9175 38.293 14.0954 38.9834 15.0731C39.4832 15.7827 39.7331 16.506 39.7331 17.2437C39.7331 17.8928 39.5632 18.5057 39.2233 19.085C38.8834 19.6643 38.3879 20.1251 37.7381 20.4693C37.0883 20.8141 36.3929 20.9856 35.6532 20.9856C33.9225 20.9856 32.3979 19.774 31.0771 17.3484L29.2021 18.4708C30.1205 20.1469 31.1258 21.3423 32.2161 22.0562Z"
                  fill="#383838"
                />
                <path
                  d="M44.2954 22.5725H46.5004V11.9454H57.7375V22.5725H59.9424V0.553711H57.7375V9.78912H46.5004V0.553711H44.2954V22.5725V22.5725Z"
                  fill="#383838"
                />
                <path
                  d="M62.541 22.5725H64.7459V0.553711H62.541V22.5725Z"
                  fill="#383838"
                />
                <path
                  d="M72.103 1.53393C70.3316 2.55718 68.9327 3.97139 67.9074 5.77782C66.8815 7.58362 66.3685 9.54469 66.3685 11.6604C66.3685 14.8336 67.4944 17.5374 69.7462 19.7722C71.998 22.0082 74.7603 23.125 78.033 23.125C81.2657 23.125 84.0055 22.0032 86.2516 19.7578C88.4984 17.5118 89.6225 14.7794 89.6225 11.5556C89.6225 8.30258 88.4972 5.56332 86.2454 3.33787C83.993 1.11304 81.1957 0 77.853 0C75.7912 0 73.8743 0.511312 72.103 1.53393ZM82.669 3.41394C84.1517 4.26259 85.3007 5.39371 86.1173 6.80668C86.9339 8.22027 87.3419 9.80035 87.3419 11.5482C87.3419 13.3053 86.9339 14.9035 86.1173 16.342C85.3007 17.7805 84.1642 18.9142 82.7065 19.7422C81.2488 20.5716 79.6637 20.9856 77.9505 20.9856C75.3863 20.9856 73.1945 20.0846 71.3763 18.2819C69.5581 16.4792 68.649 14.2687 68.649 11.6529C68.649 9.88577 69.0595 8.28262 69.8812 6.84472C70.7028 5.40681 71.8449 4.26322 73.3076 3.41456C74.7703 2.56591 76.3179 2.14127 77.9505 2.14127C79.6131 2.14065 81.1857 2.56529 82.669 3.41394Z"
                  fill="#383838"
                />
                <path
                  d="M93.8861 22.5725V5.89941L108.453 22.5725H108.948V0.553711H106.773V17.4314L92.0848 0.553711H91.6049V22.5725H93.8861Z"
                  fill="#383838"
                />
                <path
                  d="M111.845 22.5725H114.051V12.3338H115.626C118.367 12.3338 120.237 12.2147 121.237 11.9746C122.607 11.6454 123.682 11.0044 124.463 10.0522C125.243 9.09945 125.633 7.88914 125.633 6.42254C125.633 4.96593 125.233 3.75624 124.433 2.79286C123.632 1.82947 122.602 1.19407 121.342 0.884166C120.462 0.664677 118.762 0.554932 116.242 0.554932H111.845V22.5725ZM117.952 2.7093C119.442 2.7093 120.515 2.839 121.169 3.09777C121.824 3.35717 122.352 3.79241 122.751 4.40473C123.151 5.01706 123.351 5.69174 123.351 6.42878C123.351 7.18577 123.151 7.87043 122.751 8.48276C122.351 9.09508 121.801 9.53843 121.101 9.81217C120.4 10.0859 119.294 10.2225 117.785 10.2225L114.049 10.1776V2.7093H117.952Z"
                  fill="#383838"
                />
                <path
                  d="M127.556 22.5725H129.76V11.9454H140.997V22.5725H143.202V0.553711H140.997V9.78912H129.76V0.553711H127.556V22.5725Z"
                  fill="#383838"
                />
                <path
                  d="M145.8 22.5725H148.005V0.553711H145.8V22.5725Z"
                  fill="#383838"
                />
                <path
                  d="M150.604 22.5725H161.301V20.4462H152.809V0.553711H150.604V22.5725V22.5725Z"
                  fill="#383838"
                />
                <path
                  d="M162.353 22.5725H174.911V20.4169H164.559V11.7652H174.911V9.60954H164.559V2.70933H175.001V0.553711H162.354V22.5725H162.353Z"
                  fill="#383838"
                />
              </g>
              <defs>
                <clipPath id="clip0_22_434">
                  <rect width="175" height="23.125" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </li>
          <li className="hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-400 rounded-md px-3 py-1 w-96 focus:outline-blue-500 xl:w-[600px]"
              onChange={(e) => {
                setSearch(e.target.value);
                // onSearch();
              }}
              value={search}
              onInput={() => onSearch()}
            />
          </li>
          <li className="flex space-x-8 justify-center items-center align-middle">
            <CartIcon />
            {user ? (
              <Dropdown user={user} />
            ) : (
              <Link href="/api/auth/login">
                <a className="bg-blue-500 px-4 py-1 rounded-md font-semibold text-white hover:bg-blue-600 cursor-pointer">
                  Log in
                </a>
              </Link>
            )}
          </li>
        </ul>

        <div className="flex justify-center align-middle items-center">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-400 rounded-md px-3 py-1 mt-10 w-80 md:w-96 lg:hidden"
            onChange={(e) => {
              setSearch(e.target.value);
              // onSearch();
            }}
            value={search}
            onInput={() => onSearch()}
          />
        </div>

        <div className="pt-10">
          <ul className="flex space-x-9 text-gray-500 justify-center align-middle items-center lg:space-x-15">
            <li
              className="cursor-pointer hover:text-gray-600"
              onClick={() => router.push("/")}
            >
              Home
            </li>
            <li className="cursor-pointer hover:text-gray-600">Man</li>
            <li className="cursor-pointer hover:text-gray-600">Women</li>
            <li className="cursor-pointer hover:text-gray-600">Kids</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
