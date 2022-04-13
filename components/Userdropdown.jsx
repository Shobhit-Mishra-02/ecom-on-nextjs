import {
  ChevronDownIcon,
  LogoutIcon,
  ClipboardListIcon,
  IdentificationIcon,
} from "@heroicons/react/outline";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const Dropdown = ({ user }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex space-x-2 justify-center align-middle items-center text-sm font-semibold text-gray-500">
        <Image
          loader={myLoader}
          src={user.picture}
          alt="img"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="pl-2">{user.name}</p>{" "}
        <ChevronDownIcon className="w-6 h-6" />
      </Menu.Button>

      <Menu.Items className="absolute z-20 bg-gray-300 w-40 text-gray-700 rounded-md flex flex-col top-14 left-6 space-y-2">
        <Menu.Item>
          <a
            href="#"
            className="hover:bg-gray-700 hover:text-white pl-2 py-1 rounded-t-md flex align-middle items-center"
          >
            <IdentificationIcon className="w-6 h-6 mr-2" />
            Profile
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            href="#"
            className="hover:bg-gray-700 hover:text-white pl-2 flex  align-middle items-center "
          >
            <ClipboardListIcon className="w-6 h-6 mr-2" /> Orders
          </a>
        </Menu.Item>
        <Menu.Item>
          <Link href="/api/auth/logout">
            <a className="hover:bg-gray-700 hover:text-white pl-2 rounded-b-md flex  align-middle items-center">
              <LogoutIcon className="w-6 h-6 mr-2" /> Log out
            </a>
          </Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
