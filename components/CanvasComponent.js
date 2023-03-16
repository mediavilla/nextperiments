import React, { useState, useRef, useEffect } from "react";

function CanvasComponent({ width, height, selectedOption }) {
    const canvasRef = useRef();

    // Initialize rectangles state
    const [rectangles, setRectangles] = useState([
        // Create rectangles and assign them to objects in the canvas element so they can be targeted

        // 💡 When selecting the first rectangle, you can change the color and the others will use that color scheme as well
        // 💡 Add option to remove background color and have just the outlines

        // Create an object representing the base rectangle Brown - #9F2B17
        //rectangleBase
        {
            id: 'rectangleBase',
            color: '#9F2B17',
            x: 50,
            y: 491,
            width: 156,
            height: 39,
            zIndex: 0
        },

        {
            id: 'rectangleLightOrange',
            color: '#E2A04B',
            x: 206,
            y: 220,
            width: 155,
            height: 271,
            zIndex: 0
        },

        {
            id: 'rectangleOrange',
            // color: '#D57835'
            color: `rgba(213, 120, 53, 50%`,
            x: 206,
            y: 250,
            width: 187,
            height: 241,
            zIndex: 1
        },

        {
            id: 'rectangleYellow',
            color: '#EBC04B',
            x: 206,
            y: 298,
            width: 266,
            height: 193,
            zIndex: 2
        },

        {
            id: 'rectanglePink',
            color: '#D770A0',
            x: 206,
            y: 414,
            width: 306,
            height: 77,
            zIndex: 3
        },

        {
            id: 'rectangleBrown',
            // color: '#9F2B17',
            color: `rgba(159, 43, 23, 50%)`,
            x: 206,
            y: 375,
            width: 98,
            height: 116,
            zIndex: 4
        }

    ]);

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


