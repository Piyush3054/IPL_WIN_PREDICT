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
  const [tossWinner, setTossWinner] = React.useState("");
  const [restrict, setRestrict] = React.useState("");
  const [selectedT1Players, setSelectedT1Players] = React.useState([]);
  const [showComponent, setShowComponent] = React.useState("");
  const [venue, setVanue] = React.useState("");
  const [tossDecision, setTossDecision] = React.useState("");
  const [selectedT2Players, setSelectedT2Players] = React.useState([]);
  const [currentScore, setCurrentScore] = useState("");
  const [ballLeft, setBallLeft] = useState("");
  const [wicket, setWicket] = useState("");
  const [currentRunRate, setCurrentRunRate] = useState("");

  useEffect(() => {
    if (
      team1 &&
      team2 &&
      tossWinner &&
      venue &&
      tossDecision &&
      selectedT1Players.length >= 11 &&
      selectedT1Players.length <= 11 &&
      selectedT2Players.length >= 11 &&
      selectedT2Players.length <= 11 &&
      currentScore &&
      ballLeft &&
      wicket &&
      currentRunRate
    ) {
      fetchData();
      console.log("aasd");
    }
  }, [
    team1,
    team2,
    tossWinner,
    tossDecision,
    venue,
    selectedT1Players,
    selectedT2Players,
    currentScore,
    ballLeft,
    wicket,
    currentRunRate
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
  const handleChange4 = (event) => {
    setTossWinner(event.target.value);
  };

  const handleClick = () => {
    if (
      team1 &&
      team2 &&
      tossWinner &&
      venue &&
      tossDecision &&
      selectedT1Players.length === 11 &&
      selectedT2Players.length === 11 &&
      currentScore &&
      ballLeft &&
      wicket &&
      currentRunRate
    ) {
      // Render the Result component
      setShowComponent("1");
    } else {
      // Render the ErrorResult component
      setShowComponent("2");
      console.log("Select all values");
    }
  };

  const handleChange3 = (event) => {
    setVanue(event.target.value);
  };

  const handleChange6 = (event) => {
    setSelectedT1Players(event.target.value);
  };

  const handleChange7 = (event) => {
    setSelectedT2Players(event.target.value);
  };

  const handleChange5 = (event) => {
    setTossDecision(event.target.value);
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
          tossWinner,
          tossDecision,
          selectedT1Players,
          selectedT2Players,
          currentScore,
          ballLeft,
          wicket,
          currentRunRate,
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
    <div className="main-selector" style={{ marginTop: "7vh" }}>
      <div className="selector">
        <FormControl sx={{ minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Team-1
          </InputLabel>
          <Select
            value={team1}
            onChange={handleChange1}
            label="Team1"
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
            Team-2
          </InputLabel>
          <Select
            value={team2}
            onChange={handleChange2}
            label="Team2"
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
    <div className="main-venue">
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="demo-multiple-label">Team-1 Squad</InputLabel>
        <Select
          multiple
          value={selectedT1Players}
          onChange={handleChange6}
          label="Team-1 Squad"
        >
          {team1 === "Chennai Super Kings"
            ? csk_players.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))
            : team1 === "Mumbai Indians"
              ? mi_players.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))
              : team1 === "Royal Challengers Bangalore"
                ? rcb_players.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))
                : team1 === "Kolkata Knight Riders"
                  ? kkr_players.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))
                  : team1 === "Rajasthan Royals"
                    ? rr_players.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))
                    : team1 === "Gujarat Titans"
                      ? gt_players.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))
                      : team1 === "Lucknow Super Giants"
                        ? lsg_players.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))
                        : team1 === "Sunrisers Hyderabad"
                          ? srh_players.map((name) => (
                            <MenuItem key={name} value={name}>
                              {name}
                            </MenuItem>
                          ))
                          : team1 === "Delhi Capitals"
                            ? dc_players.map((name) => (
                              <MenuItem key={name} value={name}>
                                {name}
                              </MenuItem>
                            ))
                            : team1 === "Punjab Kings"
                              ? pk_players.map((name) => (
                                <MenuItem key={name} value={name}>
                                  {name}
                                </MenuItem>
                              ))
                              : null}
        </Select>
      </FormControl>
    </div>
    <div className="main-venue">
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="demo-multiple-name-label">Team-2 Squad</InputLabel>
        <Select
          label="Team-2 Squad"
          multiple
          value={selectedT2Players}
          onChange={handleChange7}
        >
          {team2 === "Chennai Super Kings"
            ? csk_players.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))
            : team2 === "Mumbai Indians"
              ? mi_players.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))
              : team2 === "Royal Challengers Bangalore"
                ? rcb_players.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))
                : team2 === "Kolkata Knight Riders"
                  ? kkr_players.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))
                  : team2 === "Rajasthan Royals"
                    ? rr_players.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))
                    : team2 === "Gujarat Titans"
                      ? gt_players.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))
                      : team2 === "Lucknow Super Giants"
                        ? lsg_players.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))
                        : team2 === "Sunrisers Hyderabad"
                          ? srh_players.map((name) => (
                            <MenuItem key={name} value={name}>
                              {name}
                            </MenuItem>
                          ))
                          : team2 === "Delhi Capitals"
                            ? dc_players.map((name) => (
                              <MenuItem key={name} value={name}>
                                {name}
                              </MenuItem>
                            ))
                            : team2 === "Punjab Kings"
                              ? pk_players.map((name) => (
                                <MenuItem key={name} value={name}>
                                  {name}
                                </MenuItem>
                              ))
                              : null}
        </Select>
      </FormControl>
    </div>
    <div className="main-venue">
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
        <Select value={venue} onChange={handleChange3} label="City">
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

    <div className="main-selector">
      <div className="selector">
        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Toss Winner
          </InputLabel>
          <Select
            value={tossWinner}
            onChange={handleChange4}
            label="TossWinner"
            name="tossWinner"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={team1}>{team1}</MenuItem>
            <MenuItem value={team2}>{team2}</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="selector">
        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Toss Decision
          </InputLabel>
          <Select
            value={tossDecision}
            onChange={handleChange5}
            label="TossDecision"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Batting">Batting</MenuItem>
            <MenuItem value="Bowling">Bowling</MenuItem>
          </Select>
        </FormControl>
      </div>

    </div>
    <div style={{ marginLeft: "9.8vw", marginTop: "5px" }}>
      <TextField id="outlined-basic" label="Current Score" value={currentScore} onChange={(e) => { setCurrentScore(e.target.value) }} variant="outlined" style={{ marginRight: "5vw" }} />
      <TextField id="outlined-basic" label="Ball Left" variant="outlined" value={ballLeft} onChange={(e) => { setBallLeft(e.target.value) }} style={{ marginRight: "5vw" }} />
      <TextField id="outlined-basic" label="Wickets" variant="outlined" value={wicket} onChange={(e) => { setWicket(e.target.value) }} style={{ marginRight: "5vw" }} />
      <TextField id="outlined-basic" label="Current RunRate" variant="outlined" value={currentRunRate} onChange={(e) => { setCurrentRunRate(e.target.value) }} style={{ marginRight: "5vw" }} />
    </div>

    <div className="main-action">
      <button onClick={handleClick}>Predict</button>
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
