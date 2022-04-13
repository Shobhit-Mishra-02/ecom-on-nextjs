import "../styles/globals.css";
import Navigation from "../components/Nav";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <div className="mx-[12px] sm:mx-[64px] lg:mx-[128px]">
          <Navigation />
          <Component {...pageProps} />
        </div>
      </UserProvider>
    </>
  );
}

export default MyApp;
