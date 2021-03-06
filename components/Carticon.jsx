import { useRouter } from "next/router";
import { useContext } from "react";
import cartStatus from "./context";

const CartIcon = () => {
  const [state, setState] = useContext(cartStatus);

  const router = useRouter();

  return (
    <div className="w-fit p-1 relative cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={() => router.push("/cart")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>

      <span className="bg-blue-500 absolute rounded-full px-2 text-white text-sm font-semibold top-0 right-0">
        {state}
      </span>
    </div>
  );
};

export default CartIcon;
