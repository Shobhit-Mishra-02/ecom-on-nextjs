import "../styles/globals.css";
import Navigation from "../components/Nav";
import { UserProvider } from "@auth0/nextjs-auth0";
import cartStatus from "../components/context";
import { userProfileStatus } from "../components/context";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id":
    "Ae7gW6bxlSol11hTHM70BsJnnTffk0TgmFJwmWofgdOyXh55dbMOWSaJriuDSHEn7eAvrD5GjC-a7FVV",
  currency: "USD",
  intent: "capture",
};

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(0);
  const [profileStatus, setProfileStatus] = useState(0);

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <userProfileStatus.Provider value={[profileStatus, setProfileStatus]}>
          <cartStatus.Provider value={[state, setState]}>
            <UserProvider>
              <div className="mx-[12px] sm:mx-[64px] lg:mx-[128px]">
                <Navigation />
                <Component {...pageProps} />
                <Footer />
              </div>
            </UserProvider>
          </cartStatus.Provider>
        </userProfileStatus.Provider>
      </PayPalScriptProvider>
    </>
  );
}

export default MyApp;
