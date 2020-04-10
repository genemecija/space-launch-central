import React from 'react';
import './css/App.css';
import Vehicle from './components/Vehicle';

function App() {
    return (
        <>
            <div id="main-content">
                <Vehicle name="Falcon 9" launchDate="2020-04-10" />
            </div>
            <div id="sidebar">

            </div>
        </>
    );
}

export default App;
