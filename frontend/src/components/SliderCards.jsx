import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCuenta from "./CardCuenta";
export default function SliderCards() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1558,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mt-5 lg:w-3/4 w-full">
      <Slider {...settings}>
        <div>
          <CardCuenta />
        </div>
        <div>
          <CardCuenta />
        </div>
        <div>
          <CardCuenta />
        </div>
        <div>
          <CardCuenta />
        </div>
        <div>
          <CardCuenta />
        </div>
        <div>
          <CardCuenta />
        </div>
      </Slider>
    </div>
  );
}
