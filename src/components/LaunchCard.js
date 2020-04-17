import React from "react"

export default function LaunchCard(props) {

    const data = props.data
    const rocketName = data ? data.rocket.name : ""
    const rocketWiki = data ? data.rocket.wikiURL : ""
    const rocketImg = data ? data.rocket.imageURL : ""
    const mission = data ? data.missions[0].name : ""
    const missionDesc = data ? data.missions[0].description : ""
    const missionType = data ? data.missions[0].typeName : ""
    const launchDate = data ? data.windowstart : ""
    const location1 = data ? data.location.pads[0].name : ""
    const locationWiki = data ? data.location.pads[0].wikiURL : ""
    const location2 = data ? data.location.name : ""
    const agency = data ? data.rocket.agencies[0] ? data.rocket.agencies[0].name : "" : ""
    const agencyWiki = data ? data.rocket.agencies[0] ? data.rocket.agencies[0].wikiURL : "" : ""


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
                Rocket: <a href={rocketWiki} target="_blank" rel="noopener noreferrer">{rocketName}</a><br/>
                Launch Date: {launchDate}<br/>
                Launch Pad: <a href={locationWiki} target="_blank" rel="noopener noreferrer">{location1}</a><br/>
                Location: {location2}<br/>
                Mission: {mission}<br/>
                Mission Description: {missionDesc}<br/>
                Mission Type: {missionType}<br/>
                Agency: <a href={agencyWiki} target="_blank" rel="noopener noreferrer">{agency}</a><br/>
            </div>
        </div>
    )
}