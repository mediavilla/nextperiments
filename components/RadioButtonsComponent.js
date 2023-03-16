import React, { useState } from "react";

function RadioButtonsComponent({ rectangles, setSelectedRectangle }) {


    function handleRadioChange(event) {
        const shapeId = event.target.value;
        const newSelectedRectangle = rectangles.find(
            (rectangle) => rectangle.id === shapeId
        );
        setSelectedRectangle(newSelectedRectangle);
        console.log("Selected rectangle: ", newSelectedRectangle);
    }

    return (
        <div>
            {rectangles.map((rectangle) => (
                <div key={rectangle.id}>
                    <input
                        type="radio"
                        id={`radio-${rectangle.id}`}
                        name="shape"
                        value={rectangle.id}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor={`radio-${rectangle.id}`}>{rectangle.id}</label>
                </div>
            ))}
        </div>
    );
}

export default RadioButtonsComponent;
