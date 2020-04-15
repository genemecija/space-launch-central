import React from "react"

export default function LaunchCard(props) {

    const {imageURL, name, wikiURL, isostart} = props.data

    const style = {
        border: "1px solid purple",
        width: "95%",
        minWidth: "600px",
        height: "200px",
        
        // backgroundImage: `url(${imageURL})`,
        backgroundSize: '100%',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        transition: 'all 1000ms linear'
    }

    return (
        <div className="launch-card" style={style}>
            {name}
            <p>
                This is the launch card.
            </p>
        </div>
    )
}