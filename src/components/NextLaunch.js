import React from "react"

export default function NextLaunch(props) {

    const data = props.data
    const rocketName = data ? data.rocket.name : ""
    const rocketWiki = data ? data.rocket.wikiURL : ""
    const mission = data ? data.missions && data.missions.length > 0 ? data.missions[0].name : "" : ""
    const missionDesc = data ? data.missions && data.missions.length > 0 ? data.missions[0].description : "" : ""
    const missionType = data ? data.missions && data.missions.length > 0 ? data.missions[0].typeName : "" : ""
    const launchDate = data ? data.windowstart : ""
    const location1 = data ? data.location.pads[0].name : ""
    const locationWiki = data ? data.location.pads[0].wikiURL : ""
    const location2 = data ? data.location.name : ""
    const agency = data ? data.rocket.agencies && data.rocket.agencies.length > 0 ? data.rocket.agencies[0].name : "" : ""
    const agencyWiki = data ? data.rocket.agencies && data.rocket.agencies.length > 0 ? data.rocket.agencies[0].wikiURL : "" : ""

    return (
        <div id="next-launch">
            <div id="titles">
                
            </div>
            {launchDate && <><span className="launch-detail" id="rocket"><b>LAUNCH DATE</b> <span className="detail">{launchDate}</span></span><br/></>}
            {rocketName && <><span className="launch-detail" id="rocket"><b>ROCKET</b> <span className="detail"><a href={rocketWiki} target="_blank" rel="noopener noreferrer">{rocketName}</a></span></span><br/></>}
            {location1 && <><span className="launch-detail" id="rocket"><b>LAUNCH PAD</b> <span className="detail"><a href={locationWiki} target="_blank" rel="noopener noreferrer">{location1}</a></span></span><br/></>}
            {location2 && <><span className="launch-detail" id="rocket"><b>LOCATION</b> <span className="detail">{location2}</span></span><br/></>}
            {agency && <><span className="launch-detail" id="rocket"><b>AGENCY</b> <span className="detail"><a href={agencyWiki} target="_blank" rel="noopener noreferrer">{agency}</a></span></span></>}
            {mission && <><span className="launch-detail" id="rocket"><b>MISSION</b> <span className="detail">{mission}</span></span><br/></>}
            {missionType && <><span className="launch-detail" id="rocket"><b>MISSION TYPE</b> <span className="detail">{missionType}</span></span><br/></>}
            {missionDesc && <><span className="launch-detail" id="rocket"><b>MISSION DESCRIPTION</b> <span className="detail">{missionDesc}</span></span><br/></>}
        </div>
    )
}