import React, { useRef, useEffect } from "react";

function CanvasComponent({ rectangles }) {
    const canvasRef = useRef();

    // useEffect block for drawing the rectangles
    useEffect(() => {
        // Get the canvas element
        const canvas = canvasRef.current;

        // Get the 2D context of the canvas
        const ctx = canvas.getContext("2d");



        // Drawing code goes here

        function drawAllRectangles() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Set the blend mode to multiply for rectangles with zIndex > 0
            ctx.globalCompositeOperation = 'multiply';

            // Sort the rectangles array based on zIndex
            rectangles.sort((a, b) => a.zIndex - b.zIndex);

            // Redraw all rectangles in the new order
            rectangles.forEach((rectangle) => {
                ctx.fillStyle = rectangle.color;
                ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
            });
        }
        // Call the drawAllRectangles function to draw the rectangles on the canvas
        drawAllRectangles();
    }, [rectangles]); // Re-run the effect when the rectangles state changes


    return (
        <canvas id="myCanvas" ref={canvasRef} width="500" height="600" />
    );
}

export default CanvasComponent;


