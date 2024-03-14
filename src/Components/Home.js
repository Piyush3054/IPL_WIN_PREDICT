import React from 'react';
import Navbar from './Navbar';
import bottom from "../Images/bottom-section-bg.png";

function Home() {
    return (
        <div className='main-container' style={{
            background: `url(${bottom}) no-repeat`,
            backgroundSize: "100vw",
            backgroundColor:"#f0f2f8",
          }}>
            <Navbar />
            <div className="home">
                <div className="content">
                    <h2>Welcome to IPL Win Predictor</h2>
                    <p>
                        Predict the outcome of IPL matches based on historical data and machine learning algorithms.
                    </p>
                    <p>
                        Explore team information, match details, and make predictions with our advanced prediction model.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
