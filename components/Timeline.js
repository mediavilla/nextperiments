import React, { useState } from "react";

function Timeline(rectangles) {

    const [selectedKeyframe, setSelectedKeyframe] = useState(null);

    const [keyframeData, setKeyframeData] = useState([
        { keyframe: 1, rectangles: [] },
        { keyframe: 2, rectangles: [] },
    ]);


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


    console.log("Timeline Loaded");


    return (
        <>
            <progress value="3" max="100"></progress>
            <div className="grid">
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
