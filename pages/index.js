import React, { useState } from "react";
import CanvasComponent from "../components/CanvasComponent"
import RadioButtonsComponent from "../components/RadioButtonsComponent";
import SliderComponent from "../components/SliderComponent";

export default function AnimationApp() {
  // Initialize rectangles state in the parent component
  const [rectangles, setRectangles] = useState([

    // Rctangles data
    // Create rectangles and assign them to objects in the canvas element so they can be targeted

    // 💡 When selecting the first rectangle, you can change the color and the others will use that color scheme as well
    // 💡 Add option to remove background color and have just the outlines
    // 💡 Add option to add the PwC woodmark or not

    { id: 'rectangleBase', color: '#9F2B17', x: 50, y: 491, width: 156, height: 39, zIndex: 0 },
    { id: 'rectangleLightOrange', color: '#E2A04B', x: 206, y: 220, width: 155, height: 271, zIndex: 0 },
    // color: '#D57835'
    { id: 'rectangleOrange', color: `rgba(213, 120, 53, 50%`, x: 206, y: 250, width: 187, height: 241, zIndex: 1 },
    { id: 'rectangleYellow', color: '#EBC04B', x: 206, y: 298, width: 266, height: 193, zIndex: 2 },
    { id: 'rectanglePink', color: '#D770A0', x: 206, y: 414, width: 306, height: 77, zIndex: 3 },
    // color: '#9F2B17',
    { id: 'rectangleBrown', color: `rgba(159, 43, 23, 50%)`, x: 206, y: 375, width: 98, height: 116, zIndex: 4 }
  ]);

  const [selectedRectangle, setSelectedRectangle] = useState(rectangles[0]);


  return (
    <div>
      <CanvasComponent rectangles={rectangles} setRectangles={setRectangles} />
      <RadioButtonsComponent rectangles={rectangles} setSelectedRectangle={setSelectedRectangle} />
      {selectedRectangle && (
        <SliderComponent
          selectedRectangle={selectedRectangle}
          setSelectedRectangle={setSelectedRectangle}
          rectangles={rectangles}
          setRectangles={setRectangles}
        />

      )}

    </div>
  );
}
