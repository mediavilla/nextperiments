import React from "react";

function RadioButtonsComponent({ rectangles, setSelectedRectangle, selectedRectangle }) {


    function handleRadioChange(event) {
        console.log("EVENT: ", event);
        const shapeId = event.target.value;
        const newSelectedRectangle = rectangles.find(
            (rectangle) => rectangle.id === shapeId
        );
        setSelectedRectangle(newSelectedRectangle);
        console.log("Selected rectangle: ", newSelectedRectangle);
    }

    return (
        <div className="grid">
            {rectangles.map((rectangle) => (
                <div key={rectangle.id}>

                    <input
                        type="radio"
                        id={rectangle.id}
                        name=""
                        value={rectangle.id}
                        checked={selectedRectangle.id === rectangle.id}
                        onChange={(e) => handleRadioChange(e)}
                    />
                    <label htmlFor={`radio-${rectangle.id}`}>{rectangle.id}</label>
                </div>
            ))}
        </div>
    );
}

export default RadioButtonsComponent;
