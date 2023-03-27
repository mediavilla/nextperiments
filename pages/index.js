import React, { useState, useEffect } from "react";
import CanvasComponent from "../components/CanvasComponent"
import RadioButtonsComponent from "../components/RadioButtonsComponent";
import SliderComponent from "../components/SliderComponent";
import Timeline from "../components/Timeline";


export default function AnimationApp() {

  // Initialize rectangles state in the parent component
  const [rectangles, setRectangles] = useState([

    // Rectangles data
    // Create rectangles and assign them to objects in the canvas element so they can be targeted

    // 💡 When selecting the first rectangle, you can change the color and the others will use that color scheme as well
    // 💡 Add option to remove background color and have just the outlines
    // 💡 Add option to add the PwC woodmark or not
    // 💡 Take the first rectangle out of the array to avoid having it as a radio button option


    { id: 'LightOrange', color: '#E2A04B', x: 416, y: 52, width: 76, height: 135, zIndex: 2 },
    // color: '#D57835'
    { id: 'Orange', color: `rgba(213, 120, 53, 50%`, x: 416, y: 68, width: 91, height: 119, zIndex: 3 },
    { id: 'Yellow', color: '#EBC04B', x: 416, y: 91, width: 128, height: 96, zIndex: 4 },
    { id: 'Pink', color: '#D770A0', x: 416, y: 148, width: 148, height: 39, zIndex: 5 },
    // color: '#9F2B17',
    { id: 'Brown', color: `rgba(159, 43, 23, 50%)`, x: 416, y: 128, width: 47, height: 59, zIndex: 6 }
  ]);

  //  const [selectedRectangle, setSelectedRectangle] = useState(rectangles[0]?.id || null);

  const [selectedRectangle, setSelectedRectangle] = useState(rectangles[0] || null);

  const [img, setImg] = useState(null);


  // Load the image and set it as a state variable
  useEffect(() => {
    const img = new Image();
    img.src = './PwC_Outline_Logo_Black_RGB.svg';
    img.onload = () => {
      setImg(img);
    };
    img.onerror = (error) => {
      if (error.target.src !== "") {
        console.error("Error loading image:", error);
      }
    };
  }, []);



  const [keyframeData, setKeyframeData] = useState([
    { keyframe: 1, rectangles: [...rectangles] },
    { keyframe: 2, rectangles: [...rectangles] },
    { keyframe: 3, rectangles: [...rectangles] },
  ]);



  {/*
  const [keyframeData, setKeyframeData] = useState([
    {
      keyframe: 1,
      rectangles: [
        { id: 'LightOrange', color: '#E2A04B', x: 416, y: 52, width: 76, height: 135, zIndex: 2 },
        // color: '#D57835'
        { id: 'Orange', color: `rgba(213, 120, 53, 50%`, x: 416, y: 68, width: 91, height: 119, zIndex: 3 },
        { id: 'Yellow', color: '#EBC04B', x: 416, y: 91, width: 128, height: 96, zIndex: 4 },
        { id: 'Pink', color: '#D770A0', x: 416, y: 148, width: 10, height: 39, zIndex: 5 },
        // color: '#9F2B17',
        { id: 'Brown', color: `rgba(159, 43, 23, 50%)`, x: 416, y: 128, width: 10, height: 10, zIndex: 6 }
      ],
    },
    {
      keyframe: 2,
      rectangles: [
        { id: 'LightOrange', color: '#E2A04B', x: 416, y: 52, width: 76, height: 135, zIndex: 2 },
        // color: '#D57835'
        { id: 'Orange', color: `rgba(213, 120, 53, 50%`, x: 416, y: 68, width: 91, height: 119, zIndex: 3 },
        { id: 'Yellow', color: '#EBC04B', x: 416, y: 91, width: 128, height: 96, zIndex: 4 },
        { id: 'Pink', color: '#D770A0', x: 416, y: 148, width: 50, height: 39, zIndex: 5 },
        // color: '#9F2B17',
        { id: 'Brown', color: `rgba(159, 43, 23, 50%)`, x: 416, y: 128, width: 20, height: 20, zIndex: 6 }
      ],
    },
    { keyframe: 3, rectangles: [...rectangles] },
  ]);

  */}

  const [animationProgress, setAnimationProgress] = useState(0);

  return (
    <main className="container">
      <CanvasComponent
        img={img}
        rectangles={rectangles}
        setRectangles={setRectangles}
        animationProgress={animationProgress}
        setAnimationProgress={setAnimationProgress}
      />
      <section>
        <Timeline
          rectangles={rectangles}
          setRectangles={setRectangles}
          keyframeData={keyframeData}
          setKeyframeData={setKeyframeData}
        />

      </section>
      <section>
        <RadioButtonsComponent rectangles={rectangles} setSelectedRectangle={setSelectedRectangle} selectedRectangle={selectedRectangle} />
      </section>
      <section>
        {selectedRectangle && (
          <SliderComponent
            selectedRectangle={selectedRectangle}
            setSelectedRectangle={setSelectedRectangle}
            rectangles={rectangles}
            setRectangles={setRectangles}
          />
        )}
      </section>
    </main>
  );
}
