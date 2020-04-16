import React, { useEffect, useState } from "react"
import moment from "moment"


export default function LaunchHUD(props) {

    const [dotRotation, setDotRotation] = useState(-30)
    const [clockArray, setClockArray] = useState([])

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [timeSign, setTimeSign] = useState("-")


    const hudStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "3px dotted green",
        position: "absolute",
        bottom: "-37vw"
    }

    
    useEffect(() => {
        let now = new Date().getTime()
        let launch = new Date(props.data ? props.data.windowstart : 'Apr 15 2020 20:21:20 GMT-700')
        // console.log("props.launchDate", props.launchDate)
        // launch = new Date(props.data.windowstart)
        const timeUntil = launch - now;
        let duration = moment.duration(timeUntil, 'milliseconds');

        // let interval
        // if (duration.days() > 1) { // If greater than 1 day, iterate per day
        //     interval = 1000*60*60*24
        // } else if (duration.hours() > 3) { // If greater than 6 hours, iterate per hours
        //     interval = 1000*60*60
        // } else if (duration.hours() > 1) { // If greater than 1 hour, iterate per minute
        //     interval = 1000*60
        // } else { // If less than 1 hour, iterate per second
        //     interval = 1000
        // }
        

        const clock = setInterval(() => {
            duration = moment.duration(duration - 1000, 'milliseconds');

            // Everything to minutes
            const d = duration.days()*24*60
            const h = Math.abs(duration.hours() + d)
            const m = Math.abs(duration.minutes())
            const s = Math.abs(duration.seconds())
            if (duration.seconds() < 0) {
                setTimeSign("+")
            }

            setHours(h < 10 ? "0"+h : h)
            setMinutes(m < 10 ? "0"+m : m)
            setSeconds(s < 10 ? "0"+s : s)

            // get time remaining between now and launchDate
            setDotRotation(prev => prev + 1)
        }, [1000]);

        // Add clock to clock array for clearing on component unload
        setClockArray(prev => [...prev, clock])



        // setDotRotation(prev => prev + 3.6)
        // setClockArray(setInterval(() => {
        //     try {
        //         setDotRotation(prev => prev + 3.6)
        //     }
        //     catch {}
        // }, [10000]))

        return (
            clockArray.forEach(clock => {
                clearInterval(clock)
            })
        )
    }, [props.data])

    const svgStyle = {
        transform: `rotateZ(${dotRotation}deg)`,
        transition: "transform 10s linear",
        position: "absolute"
    }


    return (
        <div id="hud-container">
            <div id="hud" style={hudStyle}>
                <svg height="84vw" width="84vw" style={{position: "absolute"}}>
                    <circle cx="42vw" cy="42vw" r="40vw" strokeWidth="60px" stroke="black" fill="transparent" strokeOpacity="0.4" id="tracking-line-background" />
                    <circle cx="42vw" cy="42vw" r="38.5vw" strokeWidth="0" stroke="black" fill="#323232" id="timer-background" />
                </svg>
                <svg height="84vw" width="84vw" style={svgStyle}>
                    <circle cx="42vw" cy="42vw" r="40vw" strokeWidth="2" stroke="#ddd" fill="transparent" id="tracking-line" />
                    <circle cx="42vw" cy="2vw" r="4px" strokeWidth="2" stroke="white" fill={timeSign === "-" ? "black" : "white"} id="launch-dot" />
                    <text x="48.4%" y="1.75%" fill="white" style={{fontSize: "1rem"}}>LAUNCH</text>
                </svg>
                <svg height="84vw" width="84vw" style={{position: "absolute"}}>
                    <rect x="calc(42vw - 1px)" y="calc(2vw - 4px)" width="2px" height="8" strokeWidth="0" stroke="white" fill="white" transformOrigin="center" id="now-marker" />
                </svg>
            </div>
            <span id="timer">T{timeSign}{hours}:{minutes}:{seconds}</span>
        </div>
    )
}