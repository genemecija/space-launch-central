import React from "react"

export default function Vehicle(props) {

    // name={launchData[0] ? launchData[0].rocket.name : ""} launchDate={launchData[0] ? launchData[0].windowstart : ""}
    const data = props.data
    const rocketName = data ? data.rocket.name : ""
    const rocketImg = data ? data.rocket.imageURL : ""
    const launchDate = data ? data.windowstart : ""
    console.log("props", props);

    const cardStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        // paddingBottom: "40px"
    }
    const imgStyle = {
        maxHeight: "100%"
    }
    const imgDivStyle = {
        // border: "1px solid cyan",
        height: "100%",
        minWidth: "500px",
        backgroundImage: `url(${rocketImg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    const left = {
        position: "absolute",
        color: "#333",
        left: "20px",
        top: "20px",
        fontSize: "3em"
    }
        
        
    return (
        <div className="vehicle" style={cardStyle}>
            <div id="left" style={left}>
                {rocketName}<br/>
                {launchDate}
            </div>
            <div id="center" style={imgDivStyle}>
            </div>
        </div>
    )
}