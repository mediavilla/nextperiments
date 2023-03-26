import React, { useState, useRef } from "react";

function Timeline() {

    // GSAP ANIM?
    console.log("Timeline loading");


    return (
        <>
            <progress value="3" max="100"></progress>
            <div className="grid">
                <div>
                    <a
                        href="#"
                        role="button"
                        className="primary"
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
