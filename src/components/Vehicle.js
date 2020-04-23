import React from "react"
import cosha from "cosha"

export default function Vehicle(props) {

    // // name={launchData[0] ? launchData[0].rocket.name : ""} launchDate={launchData[0] ? launchData[0].windowstart : ""}
    const data = props.data
    // const rocketName = data ? data.rocket.name : ""
    // const rocketWiki = data ? data.rocket.wikiURL : ""
    const rocketImg = data ? data.rocket.imageURL : ""
    // const mission = data ? data.missions[0].name : ""
    // const missionDesc = data ? data.missions[0].description : ""
    // const missionType = data ? data.missions[0].typeName : ""
    // const launchDate = data ? data.windowstart : ""
    // const location1 = data ? data.location.pads[0].name : ""
    // const locationWiki = data ? data.location.pads[0].wikiURL : ""
    // const location2 = data ? data.location.name : ""
    // const agency = data ? data.rocket.agencies && data.rocket.agencies.length > 0 ? data.rocket.agencies[0].name : "" : ""
    // const agencyWiki = data ? data.rocket.agencies && data.rocket.agencies.length > 0 ? data.rocket.agencies[0].wikiURL : "" : ""
    

    const cardStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#7281a2"
        // paddingBottom: "40px"
    }
    const imgStyle = {
        maxHeight: "100%"
        // boxShadow: "inset 5px 0 5px #7281a2"
        
    }
    const imgDivStyle = {
        // border: "1px solid cyan",
        height: "100%",
        minWidth: "500px",
        boxShadow: "inset 0 0 5px red"
        // backgroundImage: `url(${rocketImg})`,
        // backgroundPosition: "center center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover"
    }
    const left = {
        position: "absolute",
        color: "#333",
        left: "20px",
        top: "20px",
        fontSize: "1em",
        width: "30%",
    }
        

    // cosha({
    //     className: 'colorful-shadow',
    //     blur: '50px',
    //     brightness: '125%',
    //     saturation: '110%',
    //     x: '0',
    //     y: '0'
    // });
        
    return (
        <div className="vehicle" style={cardStyle}>
            {/* <div id="left" style={left}>
                Rocket: <a href={rocketWiki} target="_blank" rel="noopener noreferrer">{rocketName}</a><br/>
                Launch Date: {launchDate}<br/>
                Launch Pad: <a href={locationWiki} target="_blank" rel="noopener noreferrer">{location1}</a><br/>
                Location: {location2}<br/>
                Mission: {mission}<br/>
                Mission Description: {missionDesc}<br/>
                Mission Type: {missionType}<br/>
                Agency: <a href={agencyWiki} target="_blank" rel="noopener noreferrer">{agency}</a><br/>

            </div> */}
            <div id="center" style={imgDivStyle}>
                <img src={rocketImg} alt="vehicle" className="colorful-shadow"/>
            </div>
        </div>
    )
}