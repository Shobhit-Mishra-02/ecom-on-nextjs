import "../styles/globals.css";
import Navigation from "../components/Nav";
import { UserProvider } from "@auth0/nextjs-auth0";
import cartStatus from "../components/context";
import { userProfileStatus } from "../components/context";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(0);
  const [profileStatus, setProfileStatus] = useState(0);

  return (
    <>
      <userProfileStatus.Provider value={[profileStatus, setProfileStatus]}>
        <cartStatus.Provider value={[state, setState]}>
          <UserProvider>
            <div className="mx-[12px] sm:mx-[64px] lg:mx-[128px]">
              <Navigation />
              <Component {...pageProps} />
            </div>
          </UserProvider>
        </cartStatus.Provider>
      </userProfileStatus.Provider>
    </>
  );
}

export default MyApp;
