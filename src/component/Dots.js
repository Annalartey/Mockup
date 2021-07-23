import React from 'react'
import sliderImage from "./SliderImage" 

function Dots(props) {
    return (
        <div className="">
            {sliderImage.map((slide, index)=> (
                <span
                    key={index}
                    className={`${
                        props.activeIndex === index ? "dot active-dot": "dot"
                        }`}
                        onClick={(event => props.onclick((event.target.value = index)))}
                    ></span>
            ))}
        </div>
    )
}

export default Dots
