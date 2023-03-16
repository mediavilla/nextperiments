import React, { useState } from "react";

function RadioButtonsComponent({ width, height, selectedOption }) {

    const [selectedRectangle, setSelectedRectangle] = useState(null);

    function handleRadioChange(event) {
        const shapeId = event.target.value;
        const newselectedRectangle = rectangles.find((rectangle) => rectangle.id === shapeId);
        setSelectedRectangle(newselectedRectangle);
    }

    return (
        <input
            type="radio"
            id="radioLightOrange"
            name="shape"
            value="rect2" // The value should match the corresponding shape's id
            onChange={handleRadioChange}
        />

    );

}

export default RadioButtonsComponent;
