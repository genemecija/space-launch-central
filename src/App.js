import React, { useEffect, useState } from 'react';
import './css/App.css';
import Vehicle from './components/Vehicle';
import LaunchDetail from './components/LaunchDetail';
import LaunchCard from './components/LaunchCard';
import LaunchHUD from './components/LaunchHUD';
import Header from './components/Header';

function App() {

    const [launchData, setLaunchData] = useState([])
    const [cards, setCards] = useState([])
    const [postCount, setPostCount] = useState(5)

    useEffect(() => {
        console.log("postCount", postCount)

        // Get Launch Data
        fetch(`https://launchlibrary.net/1.4/launch/next/${postCount}`)
        .then(res => res.text())
        .then(text => JSON.parse(text))
        .then(data => {
            setLaunchData([...data["launches"]])
            console.log(data["launches"]);
            // setLoading(false)

            
            
        })
    }, [postCount])
    useEffect(() => {
        setCards(launchData.map(data => <LaunchCard data={data} />))
        
    }, [launchData])

    useEffect(() => {
        window.onscroll = function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + ((document.documentElement && document.documentElement.scrollTop) || 0)

            if (windowHeight === Math.ceil(scrollPosition)) {
                setPostCount(prev => prev + 5)
            }
        };
    }, [])

    const data = launchData[0]
    const rocketName = data ? data.rocket.name : ""
    const rocketWiki = data ? data.rocket.wikiURL : ""
    const rocketImg = data ? data.rocket.imageURL : ""
    const mission = data ? data.missions[0].name : ""
    const missionDesc = data ? data.missions[0].description : ""
    const missionType = data ? data.missions[0].typeName : ""
    const launchDate = data ? data.windowstart : ""
    const location1 = data ? data.location.pads[0].name : ""
    const locationWiki = data ? data.location.pads[0].wikiURL : ""
    const location2 = data ? data.location.name : ""
    const agency = data ? data.rocket.agencies && data.rocket.agencies.length > 0 ? data.rocket.agencies[0].name : "" : ""
    const agencyWiki = data ? data.rocket.agencies && data.rocket.agencies.length > 0 ? data.rocket.agencies[0].wikiURL : "" : ""

    return (
        <>
            <Header />
            <div id="main-content">
                <Vehicle data={launchData ? launchData[0] : []} />
                <LaunchHUD data={launchData ? launchData[0] : []}/>
            </div>
            <div id="launch-manifest">
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
                <div className="header">Launch Schedule</div>
                {cards.slice(1,cards.length)}
            </div>
        </>
    );
}

export default App;
