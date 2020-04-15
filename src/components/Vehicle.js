import React, { useState, useEffect } from "react"
import moment from "moment"

export default function Vehicle(props) {

    const [distanceOffset, setDistanceOffset] = useState(0)
    const [clockArray, setClockArray] = useState([])

    function startClocks() {
        let now = new Date().getTime()
        // let launch = new Date('2020-03-09 20:00:00 PST').getTime();
        // let launch = new Date(2020, 3, 9, 22, 20, 0, 0).getTime()
        // var strDateTime = "Fri, 18 Oct 2013 11:38:23 GMT";
        let launch = new Date('Apr 14 2020 11:19:00 GMT-700')
        // let launch = new Date('2020-04-15T00:00:00Z')
        console.log(launch.toLocaleString());

        const timeUntil = launch - now;
        let duration = moment.duration(timeUntil, 'milliseconds');
        
        let interval
        if (duration.days() > 1) { // If greater than 1 day, iterate per day
            interval = 1000*60*60*24
        } else if (duration.hours() > 3) { // If greater than 6 hours, iterate per hours
            interval = 1000*60*60
        } else if (duration.hours() > 1) { // If greater than 1 hour, iterate per minute
            interval = 1000*60
        } else { // If less than 1 hour, iterate per second
            interval = 1000
        }
        

        const clock = setInterval(() => {
            duration = moment.duration(duration - 1000, 'milliseconds');
            console.log(duration.days() + " days " + duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
            // get time remaining between now and launchDate
            setDistanceOffset(duration.seconds() * -1)
            console.log("duration.seconds()", duration.seconds());
        }, [1000]);

        // Add clock to clock array for clearing on component unload
        setClockArray(prev => [...prev, clock])

        return clock
    }
    function stopClocks() {
        clockArray.forEach(clock => {
            clearInterval(clock)
        })
    }
    

    // useEffect(() => {
    //     startClocks()

    //     return (
    //         stopClocks()
    //     )
    // }, [])
    // startClocks()
    // const clockChecker = setInterval(() => {
    //     console.log('clockChecker');
    //     startClocks()
    // }, [5000])

    const cardStyle = {
        minHeight: "200px",
        position: "relative",
        left: distanceOffset,
        backgroundImage: 'url(./media/images/falcon9.jpg)',
        backgroundSize: '100%',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        transition: 'all 1000ms linear'
    }
    
        
        
    return (
        <div className="vehicle card" style={cardStyle}>{props.name}</div>
    )
}