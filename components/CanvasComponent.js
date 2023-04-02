import React, { useRef, useEffect } from "react";

function CanvasComponent({ rectangles, img }) {
    const canvasRef = useRef();

    // useEffect block for drawing the rectangles
    useEffect(() => {
        // console.log("Rectangles updated:", rectangles);
        // Get the canvas element
        const canvas = canvasRef.current;

        // Get the 2D context of the canvas
        const ctx = canvas.getContext("2d");

        // Drawing code goes here

        function drawImageWithAspectRatio(img, desiredWidth, x, y, ctx) {
            const aspectRatio = img.width / img.height;
            const newWidth = desiredWidth;
            const newHeight = desiredWidth / aspectRatio;

            ctx.drawImage(img, x, y, newWidth, newHeight);
        }

        function drawAllRectangles() {
            if (!ctx || !img) return;
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (img) {
                drawImageWithAspectRatio(img, 600, 70, -50, ctx);
            }

            // Draw the base rectangle (doesn't change)
            const rectBase = { id: 'Base', color: '#9F2B17', x: 347, y: 187, width: 69, height: 18, zIndex: 1 } // DONE
            ctx.fillStyle = rectBase.color;
            ctx.fillRect(rectBase.x, rectBase.y, rectBase.width, rectBase.height);

            // Set the blend mode to multiply for rectangles with zIndex > 0
            ctx.globalCompositeOperation = 'multiply';
            // ctx.globalCompositeOperation = 'source-over';

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


    }, [rectangles, img, ...rectangles.map((r) => [r.width, r.height]).flat()]); // Re-run the effect when the rectangles state changes


    return (
        <canvas id="myCanvas" ref={canvasRef} width="750" height="400" />
    );
}

export default CanvasComponent;


