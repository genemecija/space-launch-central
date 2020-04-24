import React from "react"

export default function Vehicle(props) {
    
    // // name={launchData[0] ? launchData[0].rocket.name : ""} launchDate={launchData[0] ? launchData[0].windowstart : ""}
    // const rocketName = data ? data.rocket.name : ""
    // const rocketWiki = data ? data.rocket.wikiURL : ""
    // const mission = data ? data.missions[0].name : ""
    // const missionDesc = data ? data.missions[0].description : ""
    // const missionType = data ? data.missions[0].typeName : ""
    // const launchDate = data ? data.windowstart : ""
    // const location1 = data ? data.location.pads[0].name : ""
    // const locationWiki = data ? data.location.pads[0].wikiURL : ""
    // const location2 = data ? data.location.name : ""
    // const agency = data ? data.rocket.agencies && data.rocket.agencies.length > 0 ? data.rocket.agencies[0].name : "" : ""
    // const agencyWiki = data ? data.rocket.agencies && data.rocket.agencies.length > 0 ? data.rocket.agencies[0].wikiURL : "" : ""
    
    const data = props.data
    const rocketImg = data ? data.rocket.imageURL : ""

    const cardStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#7281a2"
    }
    const imgDivStyle = {
        height: "100%",
        minWidth: "500px",
        display: "flex",
        justifyContent: "center"
    }
        
    return (
        <div className="vehicle" style={cardStyle}>
            <div id="rocketImg" style={imgDivStyle}>
                <img src={rocketImg} alt="vehicle"/>
            </div>
        </div>
    )
}