import React from "react"

export default function LaunchCard(props) {

    const d = props.data
    const rocketName = d.rocket.name
    const rocketImg = d.rocket.imageURL
    const launchTime = d.windowstart


    const style = {
        backgroundImage: `url(${rocketImg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <div className="launch-card">
            <div id="pic" style={style}>
            </div>
            <div id="info">
                {rocketName}<br/>
                {launchTime}<br/>
            </div>
        </div>
    )
}