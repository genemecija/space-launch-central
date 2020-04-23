import React, { useEffect, useState } from "react"
import moment from "moment"


export default function LaunchHUD(props) {

    
    const [clockArray, setClockArray] = useState([])

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [timeSign, setTimeSign] = useState("-")
    const [mission, setMission] = useState("")
    const [dotsVisible, setDotsVisible] = useState(false)
    const [rotations, setRotations] = useState({
        engine_chill: 0,
        strongback_retract: 0,
        startup: 0,
        liftoff: 0
    })

    const [dotStyles, setDotStyles] = useState({
        engine_chill: {
            transform: `rotateZ(${rotations.engine_chill}deg)`,
            transition: "transform 1100ms linear",
            position: "absolute"
        },
        strongback_retract: {
            transform: `rotateZ(${rotations.strongback_retract}deg)`,
            transition: "transform 1100ms linear",
            position: "absolute"
        },
        startup: {
            transform: `rotateZ(${rotations.startup}deg)`,
            transition: "transform 1100ms linear",
            position: "absolute"
        },
        liftoff: {
            transform: `rotateZ(${rotations.liftoff}deg)`,
            transition: "transform 1100ms linear",
            position: "absolute"
        }
    })

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
        let launch = new Date(props.data ? props.data.windowstart : 'Apr 20 2020 15:39:20 GMT-700')
        // let launch = new Date('Apr 22 2020 15:18:30 GMT-700') // test launch time
        
        let timeUntil = launch - now;
        let duration = moment.duration(timeUntil, 'milliseconds');

        const clock = setInterval(() => {
            now = new Date().getTime()
            timeUntil = launch - now;
            // duration = moment.duration(duration, 'milliseconds');
            duration = moment.duration(timeUntil, 'milliseconds');

            // Everything to minutes
            const d = duration.days()*24
            const h = Math.abs(duration.hours() + d)
            const m = Math.abs(duration.minutes())
            const s = Math.abs(duration.seconds())
            if (duration.seconds() < 0) {
                setTimeSign("+")
            }

            setHours(h < 10 ? "0"+h : h)
            setMinutes(m < 10 ? "0"+m : m)
            setSeconds(s < 10 ? "0"+s : s)

            // Rotation is the number of minutes left * 10
            const rotation = -(((duration.hours() + d)*60)+(duration.minutes())+(duration.seconds()/60))
            setRotations(prev => (
                prev = {
                    engine_chill: (rotation+7) * 10,
                    strongback_retract: (rotation+4.5) * 10,
                    startup: (rotation+1) * 10,
                    liftoff: rotation * 10
                }
            ))

            if (rotation*10 > -180 && rotation*10 < 180) {
                console.log("rotation*10", rotation*10)
                setDotsVisible(true)
            } else {
                setDotsVisible(false)
            }

        }, [1000]);

        // Add clock to clock array for clearing on component unload
        setClockArray(prev => [...prev, clock])

        // Set Mission Title underneath Timer
        setMission(props.data ? props.data.missions[0].name : "")

        return (
            clockArray.forEach(clock => {
                clearInterval(clock)
            })
        )
    }, [props.data])

    useEffect(() => {
        if (dotsVisible) {
            const dots = document.querySelectorAll('.hidden')
            dots.forEach(dot => dot.classList.remove('hidden'))
        } else {
            const dots = document.querySelectorAll('.dot')
            dots.forEach(dot => dot.classList.add('hidden'))
        }
    }, [dotsVisible])

    useEffect(() => {
        setDotStyles(prev => prev = {
            engine_chill: {
                transform: `rotateZ(${rotations.engine_chill}deg)`,
                transition: "transform 1100ms linear",
                position: "absolute"
            },
            strongback_retract: {
                transform: `rotateZ(${rotations.strongback_retract}deg)`,
                transition: "transform 1100ms linear",
                position: "absolute"
            },
            startup: {
                transform: `rotateZ(${rotations.startup}deg)`,
                transition: "transform 1100ms linear",
                position: "absolute"
            },
            liftoff: {
                transform: `rotateZ(${rotations.liftoff}deg)`,
                transition: "transform 1100ms linear",
                position: "absolute"
            }
        })
    }, [rotations])

    // const svgStyle = {
    //     transform: `rotateZ(${dotStyles}deg)`,
    //     transition: "transform 1100ms linear",
    //     position: "absolute"
    // }


    return (
        <div id="hud-container">
            <div id="hud" style={hudStyle}>
                <svg height="84vw" width="84vw" style={{position: "absolute"}}>
                    <circle cx="42vw" cy="42vw" r="40vw" strokeWidth="60px" stroke="black" fill="transparent" strokeOpacity="0.4" id="tracking-line-background" />
                    <circle cx="42vw" cy="42vw" r="38.5vw" strokeWidth="0" stroke="black" fill="#323232" id="timer-background" />
                </svg>
                <svg height="84vw" width="84vw" style={dotStyles.liftoff} id="liftoff-dot">
                    <circle cx="42vw" cy="42vw" r="40vw" strokeWidth="2" stroke="#ddd" fill="transparent" id="tracking-line" />
                    <circle cx="42vw" cy="2vw" r="4px" strokeWidth="2" stroke="white" fill={rotations.liftoff < 0 ? "black" : "white"} id="launch-dot" className="dot hidden" />
                    <text x="50%" y="1.75%" fill="white" style={{fontSize: "0.8rem"}} className="dot hidden" textAnchor='middle'>LIFTOFF</text>
                </svg>
                <svg height="84vw" width="84vw" style={dotStyles.startup} id="startup-dot">
                    <circle cx="42vw" cy="2vw" r="4px" strokeWidth="2" stroke="white" fill={rotations.startup < 0 ? "black" : "white"} id="launch-dot" className="dot hidden" />
                    <text x="50%" y="1.75%" fill="white" style={{fontSize: "0.8rem"}} className="dot hidden" textAnchor='middle'>STARTUP</text>
                </svg>
                <svg height="84vw" width="84vw" style={dotStyles.strongback_retract} id="strongback-retract-dot">
                    <circle cx="42vw" cy="2vw" r="4px" strokeWidth="2" stroke="white" fill={rotations.strongback_retract < 0  ? "black" : "white"} id="launch-dot" className="dot hidden" />
                    <text x="50%" y="1.75%" fill="white" style={{fontSize: "0.8rem"}} className="dot hidden" textAnchor='middle'>STRONGBACK RETRACT</text>
                </svg>
                <svg height="84vw" width="84vw" style={dotStyles.engine_chill} id="engine-chill-dot">
                    <circle cx="42vw" cy="2vw" r="4px" strokeWidth="2" stroke="white" fill={rotations.engine_chill < 0 ? "black" : "white"} id="launch-dot" className="dot hidden" />
                    <text x="50%" y="1.75%" fill="white" style={{fontSize: "0.8rem"}} className="dot hidden" textAnchor='middle'>ENGINE CHILL</text>
                </svg>
                <svg height="84vw" width="84vw" style={{position: "absolute"}}>
                    <rect x="calc(42vw - 1px)" y="calc(2vw - 4px)" width="2px" height="8" strokeWidth="0" stroke="white" fill="white" transformOrigin="center" id="now-marker" />
                </svg>
            </div>
            <span id="timer">T{timeSign}{hours}:{minutes}:{seconds}</span><br/>
            <span id="mission">{mission}</span>
        </div>
    )
}