import React, { useRef, useEffect } from "react";
import styles from '@/styles/Canvas.module.css'

function Canvas({ width, height, selectedOption }) {

    // Create rectangles and assign them to objects in the canvas element so they can be targeted

    // 💡 When selecting the first rectangle, you can change the color and the others will use that color scheme as well
    // 💡 Add option to remove background color and have just the outlines

    // Create an object representing the base rectangle Brown - #9F2B17
    const rectangleBase = {
        id: 'rect1',
        color: '#9F2B17',
        x: 50,
        y: 70,
        width: 156,
        height: 39,
        zIndex: 0
    };

    const rectangleLightOrange = {
        id: 'rect2',
        color: '#E2A04B',
        x: 206,
        y: 109,
        width: 155,
        height: 271,
        zIndex: 0
    };

    const rectangleOrange = {
        id: 'rect3',
        // color: '#D57835'
        color: `rgba(213, 120, 53, 50%`,
        x: 206,
        y: 109,
        width: 187,
        height: 241,
        zIndex: 1
    };

    const rectangleYellow = {
        id: 'rect4',
        color: '#EBC04B',
        x: 206,
        y: 109,
        width: 266,
        height: 193,
        zIndex: 2
    };

    const rectanglePink = {
        id: 'rect5',
        color: '#D770A0',
        x: 206,
        y: 109,
        width: 306,
        height: 77,
        zIndex: 3
    };

    const rectangleBrown = {
        id: 'rect6',
        // color: '#9F2B17',
        color: `rgba(159, 43, 23, 50%)`,
        x: 206,
        y: 109,
        width: 98,
        height: 116,
        zIndex: 4
    };

    // Create an array to hold all the rectangles
    const rectangles = [rectangleBase, rectangleLightOrange, rectangleOrange, rectangleYellow, rectanglePink, rectangleBrown];



    // Get the canvas element
    const canvas = document.getElementById('myCanvas');

    // Get the 2D context of the canvas
    const ctx = canvas.getContext('2d');

    // Set the origin to the top left corner of the canvas
    ctx.translate(0, canvas.height);

    // Flip the y-axis
    ctx.scale(1, -1);

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
    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
        />
    );
}





export default Canvas;

