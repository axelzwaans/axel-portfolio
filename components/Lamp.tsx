"use client";
import { useRef } from "react";

const Lamp = () => {
  const sliderRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = () => {
    if (sliderRef.current) {
      document.body.setAttribute("data-light", sliderRef.current.value);
    }
  };

  return (
    <div>
      <div className="lamp-wrapper-main">
        <div className="lamp-rope"></div>
        <div className="lamp-inner">
          <div className="lamp-main top-wrapper">
            <div className="lamp-main top-left-wrapper"></div>
            <div className="lamp-main top-right-wrapper right-wrapper"></div>
          </div>
          <div className="lamp-main lamp-center-left"></div>
          <div className="lamp-main lamp-center-right"></div>
          <div className="lamp-main lamp-bottom"></div>
          <div className="lamp-blub"></div>
        </div>
        <div className="lamp-lamp-shadow"></div>
      </div>

      <form onInput={handleInputChange} className="lamp-input flex flex-col">
        <p className="text-black">Swipe me (gently...)</p>
        <div className="icon-sun">
          <i className="fa fa-sun-o" aria-hidden="true"></i>
        </div>
        <input
          type="range"
          id="slider"
          defaultValue="0"
          min="0"
          max="10"
          ref={sliderRef}
        />
      </form>
    </div>
  );
};

export default Lamp;
