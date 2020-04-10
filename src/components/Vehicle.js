import React from "react"
import moment from "moment"

export default function Vehicle(props) {

    // const time = moment(props.launchDate).subtract("now")
    // console.log(time);

    const clock = setInterval(() => {
        var today = new Date();
        var time = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate() + ":" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(time);
        // get time remaining between now and launchDate
    }, [1000]);
    

    return (
        <div className="vehicle card" style={{position: "relative", left: "-100px"}}>{props.name}</div>
    )
}