import React from "react"

export default function LaunchCard(props) {

    const data = props.data
    const name = data ? data.name : ""
    const rocketName = data ? data.rocket.name : ""
    const rocketWiki = data ? data.rocket.wikiURL : ""
    const rocketImg = data ? data.rocket.imageURL : ""
    const mission = data ? data.missions && data.missions.length > 0 ? data.missions[0].name : "" : ""
    const missionDesc = data ? data.missions && data.missions.length > 0 ? data.missions[0].description : "" : ""
    const missionType = data ? data.missions && data.missions.length > 0 ? data.missions[0].typeName : "" : ""
    const launchDate = data ? data.windowstart : ""
    const location1 = data ? data.location.pads[0].name : ""
    const locationWiki = data ? data.location.pads[0].wikiURL : ""
    const location2 = data ? data.location.name : ""
    const agency = data ? data.rocket.agencies && data.rocket.agencies.length > 0 ? data.rocket.agencies[0].name : "" : ""
    const agencyWiki = data ? data.rocket.agencies && data.rocket.agencies.length > 0 ? data.rocket.agencies[0].wikiURL : "" : ""


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
                <h1>{name}</h1>
                <p>
                    {launchDate}<br/>
                </p>
                &nbsp;<br/>
                <p>
                    {rocketName && <><span className="launch-detail" id="rocket"><b>ROCKET</b> <a href={rocketWiki} target="_blank" rel="noopener noreferrer">{rocketName}</a></span><br/></>}
                    {location1 && <><span className="launch-detail" id="rocket"><b>LAUNCH PAD</b> <a href={locationWiki} target="_blank" rel="noopener noreferrer">{location1}</a></span><br/></>}
                    {location2 && <><span className="launch-detail" id="rocket"><b>LOCATION</b> {location2}</span><br/></>}
                    {agency && <span className="launch-detail" id="rocket"><b>AGENCY</b> <a href={agencyWiki} target="_blank" rel="noopener noreferrer">{agency}</a></span>}
                    {mission && <><span className="launch-detail" id="rocket"><b>MISSION</b> {mission}</span><br/></>}
                    {missionType && <><span className="launch-detail" id="rocket"><b>MISSION TYPE</b> {missionType}</span><br/></>}
                    {missionDesc && <><span className="launch-detail" id="rocket"><b>MISSION DESCRIPTION</b> {missionDesc}</span><br/></>}
                </p>
            </div>
        </div>
    )
}