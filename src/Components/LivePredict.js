import "./mystyles.css";
import React, { useEffect, useState } from "react";
import logo from "../Images/IPL.png";
import {
  csk_players,
  rr_players,
  mi_players,
  rcb_players,
  dc_players,
  gt_players,
  kkr_players,
  lsg_players,
  srh_players,
  pk_players,
} from "./Players";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Result from "./Result";
import ErrorResult from "./ErrorResult";
import Navbar from "./Navbar";


let percentage1, percentage2;
export default function LivePredict() {
  const [team1, setTeam1] = React.useState("");
  const [team2, setTeam2] = React.useState("");
  const [restrict, setRestrict] = React.useState("");
  const [showComponent, setShowComponent] = React.useState("");
  const [venue, setVanue] = React.useState("");
  const [currentScore, setCurrentScore] = useState("");
  const [ballBowled, setBallBowled] = useState("");
  const [wicket, setWicket] = useState("");
  const [target, setTarget] = useState("");

  useEffect(() => {
    if (
      team1 &&
      team2 &&
      venue &&
      currentScore &&
      ballBowled &&
      wicket &&
      target
    ) {
      fetchData();
      console.log("aasd");
    }
  }, [
    team1,
    team2,
    venue,
    currentScore,
    ballBowled,
    wicket,
    target
  ]);

  const handleChange1 = async (event) => {
    setTeam1(event.target.value);
    setRestrict(event.target.value);
  };
  const handleChange2 = (event) => {
    if (!(event.target.value == restrict)) {
      setTeam2(event.target.value);
    }
  };

  const handleClick = () => {
    if (
      team1 &&
      team2 &&
      venue &&
      currentScore &&
      ballBowled &&
      wicket &&
      target
    ) {
      setShowComponent("1");
    } else {
      setShowComponent("2");
      console.log("Select all values");
    }
  };

  const handleChange3 = (event) => {
    setVanue(event.target.value);
  };
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/livePredict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team1,
          team2,
          venue,
          currentScore,
          ballBowled,
          wicket,
          target,
        }),
    });

    const data = await response.json();
    percentage1 = data.team1Result;
    percentage2 = data.team2Result;
  } catch (error) {
    console.error("Error:", error);
  }
};

return (
  <div className="main-container">
    {/* <Navbar /> */}
    <div className="main-selector" style={{ marginTop: "7vh",marginBottom:"5vh" }}>
      <div className="selector">
        <FormControl sx={{ minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
          Batting Team
          </InputLabel>
          <Select
            value={team1}
            onChange={handleChange1}
            label="Batting Team"
            name="team1"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Chennai Super Kings">
              Chennai Super Kings
            </MenuItem>
            <MenuItem value="Mumbai Indians">Mumbai Indians</MenuItem>
            <MenuItem value="Royal Challengers Bangalore">
              Royal Challengers Bangalore
            </MenuItem>
            <MenuItem value="Kolkata Knight Riders">
              Kolkata Knight Riders
            </MenuItem>
            <MenuItem value="Rajasthan Royals">Rajasthan Royals</MenuItem>
            <MenuItem value="Gujarat Titans">Gujarat Titans</MenuItem>
            <MenuItem value="Lucknow Super Giants">
              Lucknow Super Giants
            </MenuItem>
            <MenuItem value="Sunrisers Hyderabad">
              Sunrisers Hyderabad
            </MenuItem>
            <MenuItem value="Delhi Capitals">Delhi Capitals</MenuItem>
            <MenuItem value="Punjab Kings">Punjab Kings</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="selector">
        <FormControl sx={{ minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Bowling Team
          </InputLabel>
          <Select
            value={team2}
            onChange={handleChange2}
            label="Bowling Team"
            name="team2"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Chennai Super Kings">
              Chennai Super Kings
            </MenuItem>
            <MenuItem value="Mumbai Indians">Mumbai Indians</MenuItem>
            <MenuItem value="Royal Challengers Bangalore">
              Royal Challengers Bangalore
            </MenuItem>
            <MenuItem value="Kolkata Knight Riders">
              Kolkata Knight Riders
            </MenuItem>
            <MenuItem value="Rajasthan Royals">Rajasthan Royals</MenuItem>
            <MenuItem value="Gujarat Titans">Gujarat Titans</MenuItem>
            <MenuItem value="Lucknow Super Giants">
              Lucknow Super Giants
            </MenuItem>
            <MenuItem value="Sunrisers Hyderabad">
              Sunrisers Hyderabad
            </MenuItem>
            <MenuItem value="Delhi Capitals">Delhi Capitals</MenuItem>
            <MenuItem value="Punjab Kings">Punjab Kings</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
    <div className="main-venue" style={{marginBottom:"5vh"}}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
        <Select value={venue} onChange={handleChange3} label="City" style={{width:"25vw"}}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
          <MenuItem value="Kolkata">Kolkata</MenuItem>
          <MenuItem value="Mumbai">Mumbai</MenuItem>
          <MenuItem value="Pune">Pune</MenuItem>
          <MenuItem value="Dubai">Dubai</MenuItem>
          <MenuItem value="Sharjah">Sharjah</MenuItem>
          <MenuItem value="Abu Dhabi">Abu Dhabi</MenuItem>
          <MenuItem value="Delhi">Delhi</MenuItem>
          <MenuItem value="Chennai">Chennai</MenuItem>
          <MenuItem value="Hydrabad">Hydrabad</MenuItem>
          <MenuItem value="Visakhapatnam">Visakhapatnam</MenuItem>
          <MenuItem value="Chandigarh">Chandigarh</MenuItem>
          <MenuItem value="Banglore">Banglore</MenuItem>
          <MenuItem value="Jaipur">Jaipur</MenuItem>
          <MenuItem value="Centurion">Centurion</MenuItem>
          <MenuItem value="Durban">Durban</MenuItem>
          <MenuItem value="Others">Others</MenuItem>
        </Select>
      </FormControl>
    </div>

    <div style={{ marginLeft: "9.8vw", marginTop: "5px" }}>
      <TextField id="outlined-basic" type="number" label="Target" variant="outlined" value={target} onChange={(e) => { setTarget(e.target.value) }} style={{ marginRight: "5vw",marginBottom:"5vh" ,width:"25vw"}} />
      <div>
      <TextField id="outlined-basic" type="number" label="Wickets" variant="outlined" value={wicket} onChange={(e) => { setWicket(e.target.value) }} style={{ marginRight: "5vw",width:"24vw" }} />
      <TextField id="outlined-basic" type="number" label="Current Score" value={currentScore} onChange={(e) => { setCurrentScore(e.target.value) }} variant="outlined" style={{ marginRight: "5vw" ,width:"24vw"}} />
      <TextField id="outlined-basic" type="number" label="Ball Bowled" variant="outlined" value={ballBowled} onChange={(e) => { setBallBowled(e.target.value) }} style={{ width:"24vw"}} />
      </div>
    </div>

    <div className="main-action">
      <button onClick={handleClick} style={{marginTop:"5vh",marginBottom:"5vh"}}>Predict</button>
      {showComponent == 1 && team1 && team2 && (
        <Result
          team1={team1}
          team2={team2}
          percentage1={percentage1}
          percentage2={percentage2}
        />
      )}
      {showComponent == 2 && <ErrorResult />}
    </div>
  </div>
);
}
