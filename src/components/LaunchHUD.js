import React, { useEffect, useState } from "react"


export default function LaunchHUD() {

    const [dotRotation, setDotRotation] = useState(90)
    const [clockArray, setClockArray] = useState([])

    const hudContainerStyle = {
        width: "100%",
        height: "300px",
        // overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid blue",
        position: "relative"
    }
    const hudStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px dotted green",
        position: "absolute",
        bottom: "-40vw"
    }

    // const diameter = "70vw"

    // const lineTrackerStyle = {
    //     position: "absolute",
    //     top: "30vw",
    //     width: diameter,
    //     minWidth: diameter,
    //     height: diameter,
    //     minHeight: diameter,
    //     border: "3px solid black",
    //     borderRadius: "50%",
    //     transform: "rotateZ(180deg)"
    // }

    const secondsDiameter = "84vw"
    const test = "80vw"

    const hudDotStyle_seconds = {
        position: "absolute",
        width: secondsDiameter,
        minWidth: secondsDiameter,
        height: secondsDiameter,
        minHeight: secondsDiameter,
        border: "3px solid black",
        borderRadius: "50%",
        transform: `rotateZ(${dotRotation}deg)`,
        transition: "all 1000ms linear",
        zIndex: "-50"
    }
    const now_marker = {
        position: "absolute",
        width: secondsDiameter,
        minWidth: secondsDiameter,
        height: secondsDiameter,
        minHeight: secondsDiameter,
        border: "3px solid black",
        borderRadius: "50%",
        transform: `rotateZ(${dotRotation}deg)`,
        transition: "all 1000ms linear",
        zIndex: "50"
    }

    useEffect(() => {
        // const dot = document.getElementsByClassName("hud-dot")[0]

        setClockArray(setInterval(() => {
            try {
                // setDotRotation(prev => prev + 1)
            }
            catch {}
            // dot.style.setProperty
        }, [1000]))

        return (
            clockArray.forEach(clock => {
                clearInterval(clock)
            })
        )
    }, [])


    return (
        <div id="hud-container" style={hudContainerStyle}>
            <div id="hud" style={hudStyle}>
                {/* <div id="hud-line-tracker" style={lineTrackerStyle}></div> */}
                <div className="hud-dot" id="seconds" style={hudDotStyle_seconds}></div>
                <div id="now-marker" style={now_marker}></div>
            </div>
        </div>
    )
}