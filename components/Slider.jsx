import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
// import "@splidejs/react-splide/css/skyblue";

const Slider = () => {
  return (
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <div className="w-full h-[500px] bg-gray-400 flex justify-center align-middle items-center text-3xl font-semibold">
          Slider 1
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="w-full h-[500px] bg-gray-400 flex justify-center align-middle items-center text-3xl font-semibold">
          Slider 2
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
