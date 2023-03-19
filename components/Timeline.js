import React, { useState, useRef } from "react";

function Timeline({
    rectangles,
    setRectangles,
    keyframeData,
    setKeyframeData,
}) {

    let currentRect = { ...initialRect };
    let animationProgress = 0;
    const animationDuration = 2000; // Animation duration in milliseconds

    function animate() {
        if (animationProgress <= animationDuration) {
            const t = animationProgress / animationDuration;
            currentRect.width = initialRect.width + (finalRect.width - initialRect.width) * t;
            currentRect.height = initialRect.height + (finalRect.height - initialRect.height) * t;

            ctx.fillStyle = currentRect.color;
            ctx.fillRect(currentRect.x, currentRect.y - currentRect.height, currentRect.width, currentRect.height);

            animationProgress += 16.67; // 16.67 ms for 60fps
            requestAnimationFrame(animate);
        }
    }

    animate();

    function startAnimation() {
        startTimestamp.current = null;
        requestAnimationFrame(animate);
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
                        onClick={(e) => {
                            e.preventDefault();
                            if (keyframeData[0].rectangles.length > 0 && keyframeData[1].rectangles.length > 0 && keyframeData[2].rectangles.length > 0) {
                                requestAnimationFrame(animate);
                            }
                        }}
                    >
                        Play
                    </a>

                </div>
                <div>
                    <a
                        href="#"
                        role="button"
                        className="secondary"
                    >
                        Record Keyframe 1
                    </a>
                </div>
                <div>
                    <a
                        href="#"
                        role="button"
                        className="secondary"

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
