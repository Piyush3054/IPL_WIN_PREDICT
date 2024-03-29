import React, { useState } from 'react';
import Navbar from './Navbar';
import bottom from "../Images/bottom-section-bg.png";
import './mystyles.css'

import venue0 from '../Images/No.of Matches.png';
import venue1 from '../Images/Winning at Venue.png';
import team2 from '../Images/Team Winning.png';
import toss1 from '../Images/Toss Decision.png';
import toss2 from '../Images/Toss Winning.png';
import type1 from '../Images/Match Type.png';
import team3 from '../Images/Winning Percentage.png';
import player1 from '../Images/Most Matches.png';
import player2 from '../Images/Most Runs.png';
import player3 from '../Images/Best Batting Avg.png';
import player4 from '../Images/Best Batting Strike Rate.png';
import player5 from '../Images/Most Wickets.png';
import player6 from '../Images/Best Bowling Avg.png';
import player7 from '../Images/Best Bowling Economy.png';
import venue2 from '../Images/Venue Batting.png';
import venue3 from '../Images/Venue Bowling.png';
import venue4 from '../Images/Home Ground.png';
import head from '../Images/Head to Head.png';


const Stats = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
      <div className="main-container" style={{
        background: `url(${bottom}) no-repeat`,
        backgroundColor: "#f0f2f8",
        backgroundSize: "100vw"
      }}>
        <Navbar />
        <center>
        <div className="inner-state-container" style={{
                background: `url(${bottom}) no-repeat`,
                backgroundSize: "100vw",
                backgroundColor:"#f0f2f8",
            }}>
          <select value={selectedOption} onChange={handleSelectChange} style={{width:"200px",alignSelf:"center",padding:"10px"}}>
            <option value="">Select Stats Type</option>
            <option value="option1">Venue Base Analysis</option>
            <option value="option2">Toss Based Analysis</option>
            <option value="option3">Team Based Analysis</option>
            <option value="option4">Player Based Analysis</option>
            <option value="option5">Head To Head Analysis</option>
            <option value="option6">Match Type Based Analysis</option>
          </select>

          <div style={{ marginTop: '20px' }}>
            {selectedOption === 'option1' && (
              <>
                <div className='title'>Matches Played at each Venue</div>
                <img src={venue0} alt="Option1_1" style={{ width: "700px" }} />
                <div className='title'>Winning Percentage of each Team at Venue</div>
                <img src={venue1} alt="Option1_2" style={{ width: "700px" }} />
                <div className='title'>Batting First Win Percentage at Venue</div>
                <img src={venue2} alt="Option1_3" style={{ width: "1200px" }} />
                <div className='title'>Bowling First Win Percentage at Venue</div>
                <img src={venue3} alt="Option1_4" style={{ width: "1200px" }} />
                <div className='title'>Home Ground Winning</div>
                <img src={venue4} alt="Option1_5" style={{ width: "700px" }} />
              </>
            )}
            {selectedOption === 'option2' && (
              <>
                <div className='title'>Toss Decision Across Matches</div>
                <img src={toss1} alt="Option2_1" />
                <div className='title'>Toss Winner is Winning Team</div>
                <img src={toss2} alt="Option2_2" />
              </>
            )}
            {selectedOption === 'option3' && (
              <>
                <div className='title'>Teams Toss Winning Percentage</div>
                <img src={team2} alt="Option3_1" />
                <div className='title'>Teams Overall Winning Percentage</div>
                <img src={team3} alt="Option3_2" />
              </>
            )}
            {selectedOption === 'option4' && (
              <>
                <div className='title'>Most Matches Played</div>
                <img src={player1} alt="Option4_1" />
                <div className='title'>Most Runs Scored</div>
                <img src={player2} alt="Option4_2" />
                <div className='title'>Best Batting Average</div>
                <img src={player3} alt="Option4_3" />
                <div className='title'>Best Strike Rate</div>
                <img src={player4} alt="Option4_4" />
                <div className='title'>Most Wickets Taken</div>
                <img src={player5} alt="Option4_5" />
                <div className='title'>Best Bowling Average</div>
                <img src={player6} alt="Option4_6" />
                <div className='title'>Best Economy Rate</div>
                <img src={player7} alt="Option4_7" />
              </>
            )}
            {selectedOption === 'option5' && (
              <>
                <div className='title'>Head to Head Comparision</div>
                <img src={head} alt="Option5_1" />
              </>
            )}
            {selectedOption === 'option6' && (
              <>
                <div className='title'>Match Type based Comparision</div>
                <img src={type1} alt="Option6_1" />
              </>
            )}
          </div>
        </div>
        </center>
      </div>
  );
};

export default Stats;
