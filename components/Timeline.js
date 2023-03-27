import React, { useState, useRef } from "react";

function Timeline() {

    // GSAP ANIM?
    console.log("Timeline loading");

    function handlePlayClick() {
        const firstKeyframe = keyframeData[0]; // Get the first keyframe
        const firstRectangle = firstKeyframe.rectangles[0]; // Get the first rectangle from the first keyframe
        const elementId = firstRectangle.id; // Assign ID of the first rectangle to a variable
        const width = firstRectangle.width; // Assign width of the first rectangle to a variable
        const height = firstRectangle.height; // Assign height of the first rectangle to a variable

        Animation(elementId, width, height);

    }


    function saveKeyframeData(keyframeIndex) {
        setKeyframeData((prevKeyframeData) => {
            const updatedKeyframeData = [...prevKeyframeData];
            updatedKeyframeData[keyframeIndex - 1] = {
                keyframe: keyframeIndex,
                rectangles: [...rectangles],
            };

            return updatedKeyframeData;
        });
    }


    return (
        <>
            <progress value="3" max="100"></progress>
            <div className="grid">
                <div>
                    <a
                        href="#"
                        role="button"
                        className="primary"
                        onClick={handlePlayClick}
                    >
                        Play
                    </a>

                </div>
                <div>
                    <a
                        href="#"
                        role="button"
                        className="secondary"
                        onClick={() => saveKeyframeData(1)}
                    >
                        Record Keyframe 1
                    </a>
                </div>
                <div>
                    <a
                        href="#"
                        role="button"
                        className="secondary"
                        onClick={() => saveKeyframeData(2)}
                    >
                        Record Keyframe 2
                    </a>
                </div>
                <div>
                    <a href="#" role="button" className="secondary outline" >
                        End Keyframe 3"
                    </a>

                </div>

            </div>
        </>
    );
}

export default Timeline;
