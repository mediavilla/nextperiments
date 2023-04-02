import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';
import CanvasComponent from "../components/CanvasComponent"
import RadioButtonsComponent from "../components/RadioButtonsComponent";
import SliderComponent from "../components/SliderComponent";
import Timeline from "../components/Timeline";
import { cloneDeep } from 'lodash';


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

  const saveKeyframeData = (keyframeNumber) => {
    // Update the keyframeData state.
    setKeyframeData((prevState) =>
      // Use the map function to iterate over each keyframe object in the prevState array.
      prevState.map((keyframeObj) => {
        // Check if the current keyframeObj has the same keyframe number as the one we want to update.
        if (keyframeObj.keyframe === keyframeNumber) {
          // If it's the same keyframe number, we return a new object with the same properties
          // as the current keyframeObj, but with an updated rectangles property.
          return {
            ...keyframeObj,
            rectangles: [...rectangles], // We create a new array with the current rectangles state.
          };
        }
        // If the current keyframeObj has a different keyframe number, we return it unchanged.
        return keyframeObj;
      })
    );
  };

  const [keyframeData, setKeyframeData] = useState([
    { keyframe: 1, rectangles: [...rectangles] },
    { keyframe: 2, rectangles: [...rectangles] },
    { keyframe: 3, rectangles: [...rectangles] },
  ]);


  const [animationProgress, setAnimationProgress] = useState(0);

  const [previousTimeline, setPreviousTimeline] = useState(null);

  function playAnimation() {
    // If there's a previous timeline, kill it before creating a new one.
    if (previousTimeline) {
      previousTimeline.kill();
    }

    // Create a new timeline.
    const animationTimeline = gsap.timeline();

    // Create a deep copy of the keyframeData array to avoid modifying the original array during the animation.
    const copiedKeyframeData = cloneDeep(keyframeData);

    // Loop through the copiedKeyframeData array, excluding the last keyframe.
    for (let i = 0; i < copiedKeyframeData.length - 1; i++) {
      const fromKeyframe = copiedKeyframeData[i];
      const toKeyframe = copiedKeyframeData[i + 1];

      fromKeyframe.rectangles.forEach((fromRectangle, index) => {
        const toRectangle = toKeyframe.rectangles[index];

        // Calculate the change in height
        const deltaHeight = toRectangle.height - fromRectangle.height;
        // Update the y position of the rectangle to keep the bottom edge in the same position
        const newY = fromRectangle.y - deltaHeight;

        // Add the tween to the animationTimeline
        animationTimeline.to(
          fromRectangle,
          {
            duration: 2,
            width: toRectangle.width,
            height: toRectangle.height,
            y: newY,
            ease: "none",
            onUpdate: () => {
              // Update the rectangles state with the tweened values.
              setRectangles((rectangles) => {
                const updatedRectangles = [...rectangles];
                updatedRectangles[index] = { ...fromRectangle };
                return updatedRectangles;
              });
            },
          },
          // Make sure all tweens for the current keyframe start at the same time.
          `keyframe-${i}`
        );
      });
    }

    // Update the previousTimeline state with the newly created timeline.
    setPreviousTimeline(animationTimeline);
  }






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
          saveKeyframeData={saveKeyframeData}
          playAnimation={playAnimation}
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
