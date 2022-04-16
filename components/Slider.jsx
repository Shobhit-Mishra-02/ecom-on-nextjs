/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
// import "@splidejs/react-splide/css/skyblue";

const Slider = () => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <img
          src="/slider/sale-1.jpg"
          alt="image"
          className="w-full h-[500px] bg-gray-400 flex justify-center align-middle items-center text-3xl font-semibold"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/slider/sale-2.jpg"
          alt="image"
          className="w-full h-[500px] bg-gray-400 flex justify-center align-middle items-center text-3xl font-semibold"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/slider/sale-3.jpg"
          alt="image"
          className="w-full h-[500px] bg-gray-400 flex justify-center align-middle items-center text-3xl font-semibold"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
