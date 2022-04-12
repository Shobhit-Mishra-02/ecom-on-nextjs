import "../styles/globals.css";
import Navigation from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="mx-[12px]">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
