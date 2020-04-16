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
        setCards(launchData.map(data => <LaunchCard data={data} />))
        
    }, [launchData])

    return (
        <>
            <div id="main-content">
                <Vehicle data={launchData ? launchData[0] : []} />
                <LaunchHUD data={launchData ? launchData[0] : []}/>
            </div>
            <div id="launch-manifest">
                <div className="header">Launch Schedule</div>
                {cards.slice(1,cards.length)}
            </div>
        </>
    );
}

export default App;
