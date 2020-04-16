import React from "react"

export default function Vehicle(props) {

    // name={launchData[0] ? launchData[0].rocket.name : ""} launchDate={launchData[0] ? launchData[0].windowstart : ""}
    const data = props.data
    const rocketName = data ? data.rocket.name : ""
    const rocketImg = data ? data.rocket.imageURL !== "https://launchlibrary1.nyc3.digitaloceanspaces.com/RocketImages/placeholder_1920.png" ? data.rocket.imageURL : `./media/images/${rocketName}.jpg` : ""
    const launchDate = data ? data.windowstart : ""
    console.log("props", props);

    const cardStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "40px"
    }
    const imgStyle = {
        maxHeight: "100%"
    }
    const imgDivStyle = {
        // border: "1px solid cyan",
        height: "100%",
        width: "fit-content"
    }
    const left = {
        position: "absolute",
        color: "#333",
        left: "20px",
        top: "20px",
        fontSize: "3em"
    }
        
        
    return (
        <div className="vehicle card" style={cardStyle}>
            <div id="left" style={left}>
                {rocketName}<br/>
                {launchDate}
            </div>
            <div id="center" style={imgDivStyle}>
                <img src={rocketImg} alt="rocket" style={imgStyle} / >
            </div>
        </div>
    )
}