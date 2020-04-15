import React, { useEffect, useState } from 'react';
import './css/App.css';
import Vehicle from './components/Vehicle';
import LaunchCard from './components/LaunchCard';
import LaunchHUD from './components/LaunchHUD';

function App() {

    const [launchData, setLaunchData] = useState([])
    const [cards, setCards] = useState([])


    useEffect(() => {
        // Get Launch Data
        fetch(`https://launchlibrary.net/1.4/launch/next/5`)
        .then(res => res.text())
        .then(text => JSON.parse(text))
        .then(data => {
            setLaunchData([...data["launches"]])
            console.log(data["launches"]);
            // setLoading(false)

            
            
        })
    }, [])
    useEffect(() => {
        setCards(launchData.map(launch => <LaunchCard data={{name: launch.name}} />))
        console.log("launchData", launchData);
    }, [launchData])

    return (
        <>
            <div id="main-content">
                <Vehicle name="Falcon 9" launchDate="2020-04-10" />
                <LaunchHUD />
            </div>
            <div id="launch-manifest">
                {cards}
            </div>
        </>
    );
}

export default App;
