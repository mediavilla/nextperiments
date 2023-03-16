import React, { useState } from 'react';
import CanvasComponent from '../components/CanvasComponent';
import RadioButtonsComponent from '../components/RadioButtonsComponent';


export default function AnimationApp() {
  const [selectedRectangle, setSelectedRectangle] = useState(null);
  // const [rectangleDimensions, setRectangleDimensions] = useState({ width: 0, height: 0 });
  // const [selectedKeyframe, setSelectedKeyframe] = useState(null);
  // const [recordedPositions, setRecordedPositions] = useState({}); // e.g., { rectangle1: { keyframe1: { x: 0, y: 0 }, keyframe2: { x: 50, y: 50 } } }

  // Add appropriate handlers for updating state and any other logic

  return (
    <>
      <CanvasComponent />
      <RadioButtonsComponent setSelectedRectangle={setSelectedRectangle} />


    </>
  );
}


//      <SelectionComponent setSelectedRectangle={setSelectedRectangle} />
//      <DimensionControlComponent setRectangleDimensions={setRectangleDimensions} />
//      <TimelineComponent setSelectedKeyframe={setSelectedKeyframe} />
//      <RecordButtonComponent /* add required props and handlers */ />
//      <PlayButtonComponent /* add required props and handlers */ />