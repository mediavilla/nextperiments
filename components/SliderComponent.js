import React from "react";

function SliderComponent({ selectedRectangle, setSelectedRectangle, rectangles, setRectangles }) {

    function handleWidthChange(event) {
        const newWidth = Number(event.target.value);

        const updatedRectangles = rectangles.map((rectangle) => {
            if (rectangle.id === selectedRectangle.id) {
                return { ...rectangle, width: newWidth };
            }
            return rectangle;
        });

        setRectangles(updatedRectangles);

        // Update the selectedRectangle with the new width
        setSelectedRectangle({ ...selectedRectangle, width: newWidth });
    }

    function handleHeightChange(event) {
        const newHeight = Number(event.target.value);

        // Calculate the change in height
        const deltaHeight = newHeight - selectedRectangle.height;

        // Update the y position of the rectangle to keep the bottom edge in the same position
        const newY = selectedRectangle.y - deltaHeight;

        const updatedRectangles = rectangles.map((rectangle) => {
            if (rectangle.id === selectedRectangle.id) {
                return { ...rectangle, height: newHeight, y: newY };
            }
            return rectangle;
        });

        setRectangles(updatedRectangles);

        // Update the selectedRectangle with the new height and y position
        setSelectedRectangle({ ...selectedRectangle, height: newHeight, y: newY });
    }



    return (
        <div>
            <label htmlFor="widthSlider">Width:</label>
            <input
                type="range"
                id="widthSlider"
                min="0"
                max="306"
                step="1"
                value={selectedRectangle.width}
                onChange={handleWidthChange}
            />
            <label htmlFor="heightSlider">Height:</label>
            <input
                type="range"
                id="heightSlider"
                min="0"
                max="271"
                step="1"
                value={selectedRectangle.height}
                onChange={handleHeightChange}
            />
        </div>
    );
}

export default SliderComponent;
