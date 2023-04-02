import React, { useState, useRef } from "react";

function Timeline({ rectangles, keyframeData, saveKeyframeData, playAnimation }) {

    // GSAP ANIM?


    // console.log("keyframeData", keyframeData);
    // console.log("RECTANGLES LIGHT ORANGE KF 0: ", keyframeData[0].rectangles[0]);
    // console.log("RECTANGLES LIGHT ORANGE KF 2: ", keyframeData[1].rectangles[0]);


    return (
        <>
            <progress value="3" max="100"></progress>
            <div className="grid">
                <div>
                    <a
                        href="#"
                        role="button"
                        className="primary"
                        onClick={playAnimation}
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
