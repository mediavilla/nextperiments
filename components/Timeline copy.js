import React, { useState, useEffect } from "react";

function Timeline({ rectangles, setRectangles, onSliderChange }) {

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    const [isPlaying, setIsPlaying] = useState(false);

    const [selectedKeyframe, setSelectedKeyframe] = useState(null);

    const [keyframeData, setKeyframeData] = useState([
        { keyframe: 1, rectangles: [...rectangles] },
        { keyframe: 2, rectangles: [...rectangles] },
    ]);


    useEffect(() => {
        setKeyframeData([
            { keyframe: 1, rectangles: [...rectangles] },
            { keyframe: 2, rectangles: [...rectangles] },
        ]);
    }, [rectangles]);

    useEffect(() => {
        if (isPlaying) {
            animate();
        }
    }, [isPlaying]);


    function handleKeyframeClick(keyframe) {
        if (keyframe === 1 || keyframe === 2) {
            // Update the keyframe data with the current rectangle dimensions
            const updatedKeyframeData = keyframeData.map((kf) => {
                if (kf.keyframe === keyframe) {
                    return { ...kf, rectangles: [...rectangles] };
                }
                return kf;
            });

            setKeyframeData(updatedKeyframeData);
        }

        // Update the selected keyframe state
        setSelectedKeyframe(keyframe);

    }

    function playAnimation(duration, keyframeData) {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }


    function animate() {
        const newRectangles = rectangles.map((rect, index) => {
            const newX = rect.x + 1;
            const newY = rect.y + 1;
            return { ...rect, x: newX, y: newY };
        });

        setRectangles(newRectangles);

        if (isPlaying) {
            setTimeout(animate, 100);
        }
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
                        onClick={() => {
                            if (keyframeData[0].rectangles.length > 0 && keyframeData[1].rectangles.length > 0) {
                                playAnimation(1000, keyframeData);
                            }
                        }}
                    >
                        PLAY
                    </a>
                </div>
                <div>
                    <a
                        href="#"
                        role="button"
                        className={`secondary${selectedKeyframe === 1 ? " recording" : ""}`}
                        onClick={() => handleKeyframeClick(1)}
                    >
                        {selectedKeyframe === 1 ? "Recording Keyframe 1" : "Record Keyframe 1"}
                    </a>
                </div>
                <div>
                    <a
                        href="#"
                        role="button"
                        className={`secondary${selectedKeyframe === 2 ? " recording" : ""}`}
                        onClick={() => handleKeyframeClick(2)}
                    >
                        {selectedKeyframe === 2 ? "Recording Keyframe 2" : "Record Keyframe 2"}
                    </a>
                </div>
                <div>
                    <a href="#" role="button" className="secondary outline" onClick={() => handleKeyframeClick(3)}>
                        {selectedKeyframe === 3 ? "End Recording Keyframe 3" : "End Keyframe 3"}
                    </a>

                </div>

            </div>
        </>
    );
}

export default Timeline;
