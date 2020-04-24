import React, { useEffect, useState } from 'react';
import './css/App.css';
import Vehicle from './components/Vehicle';
import LaunchCard from './components/LaunchCard';
import LaunchHUD from './components/LaunchHUD';
import Header from './components/Header';
import NextLaunch from './components/NextLaunch';

function App() {

    const [launchData, setLaunchData] = useState([])
    const [cards, setCards] = useState([])
    const [postCount, setPostCount] = useState(5)


    useEffect(() => {
        // Get Launch Data
        fetch(`https://launchlibrary.net/1.4/launch/next/${postCount}`)
        .then(res => res.text())
        .then(text => JSON.parse(text))
        .then(data => {
            setLaunchData([...data["launches"]])
        })
    }, [postCount])

    // Create launch cards on launchData population
    useEffect(() => {
        setCards(launchData.map(data => <LaunchCard data={data} />))    
    }, [launchData])

    // Load additional 5 launches when scroll hits bottom of page
    useEffect(() => {
        window.onscroll = function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + ((document.documentElement && document.documentElement.scrollTop) || 0)

            if (windowHeight === Math.ceil(scrollPosition)) {
                setPostCount(prev => prev + 5)
            }
        };
    }, [])

    return (
        <>
            <Header />
            <div id="main-content">
                <Vehicle data={launchData ? launchData[0] : []} />
                <LaunchHUD data={launchData ? launchData[0] : []}/>
            </div>
            <div id="launch-manifest">
                <NextLaunch data={launchData ? launchData[0] : []}/>
                <div className="header">Launch Schedule</div>
                {cards.slice(1,cards.length)}
            </div>
        </>
    );
}

export default App;
