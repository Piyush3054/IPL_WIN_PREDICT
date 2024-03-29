import React, { useEffect, useState } from "react";
import bottom from "../Images/bottom-section-bg.png";
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
  csk_players_fullName,
  mi_players_fullName,
  rcb_players_fullName,
  kkr_players_fullName,
  gt_players_fullName,
  rr_players_fullName,
  lsg_players_fullName,
  srh_players_fullName,
  dc_players_fullName,
  pk_players_fullName,
} from "./Players";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Result from "./Result";
import Navbar from "./Navbar";

let percentage1, percentage2;
export default function Predict() {
  const [team1, setTeam1] = React.useState("");
  const [team2, setTeam2] = React.useState("");
  const [tossWinner, setTossWinner] = React.useState("");
  const [restrict, setRestrict] = React.useState("");
  const [selectedT1Players, setSelectedT1Players] = React.useState([]);
  const [showComponent, setShowComponent] = React.useState("");
  const [venue, setVanue] = React.useState("");
  const [tossDecision, setTossDecision] = React.useState("");
  const [selectedT2Players, setSelectedT2Players] = React.useState([]);
  const [matchNumber, setMatchNumber] = useState("");

  useEffect(() => {
    if (
      team1 &&
      team2 &&
      team1 !== team2 &&
      tossWinner &&
      venue &&
      tossDecision &&
      selectedT1Players.length === 11 &&
      selectedT2Players.length === 11 &&
      matchNumber
    ) {
      fetchData();
    }
  }, [
    team1,
    team2,
    tossWinner,
    tossDecision,
    venue,
    selectedT1Players,
    selectedT2Players,
    matchNumber,
  ]);

  const handleChange1 = async (event) => {
    setTeam1(event.target.value);
    setRestrict(event.target.value);
  };

  const handleChange2 = (event) => {
    if (event.target.value === team1) {
      setTeam2("");
      setShowComponent(2);
    } else {
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
      team1 !== team2 &&
      tossWinner &&
      venue &&
      tossDecision &&
      selectedT1Players.length === 11 &&
      selectedT2Players.length === 11 &&
      matchNumber
    ) {
      setShowComponent("1");
    } else {
      if (
        !team1 &&
        !team2 &&
        !tossWinner &&
        !venue &&
        !tossDecision &&
        !matchNumber
      ) {
        setShowComponent("4");
      }
      else{
        if(selectedT1Players.length !== 11 &&
          selectedT2Players.length !== 11){
            setShowComponent("3");
          }
      }
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
      const response = await fetch("http://localhost:5000/api/endpoint", {
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
          matchNumber,
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
    <div
      className="main-container"
      style={{
        background: `url(${bottom}) no-repeat`,
        backgroundSize: "100vw",
        backgroundColor: "#f0f2f8",
      }}
    >
      <Navbar />
      <div className="main-selector" style={{ marginTop: "7vh" }}>
        <div className="selector">
          <FormControl sx={{ minWidth: 150, maxWidth: 340 }}>
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
          <FormControl sx={{ minWidth: 150, maxWidth: 340 }}>
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
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel id="demo-multiple-label">Team-1 Squad</InputLabel>
          <Select
            multiple
            value={selectedT1Players}
            onChange={handleChange6}
            label="Team-1 Squad"
            style={{ minWidth: 100, maxWidth: 200 }}
          >
            {team1 === "Chennai Super Kings"
              ? csk_players.map((name, index) => (
                <MenuItem key={name} value={name}>
                  {csk_players_fullName[index]}
                </MenuItem>
              ))
              : team1 === "Mumbai Indians"
                ? mi_players.map((name, index) => (
                  <MenuItem key={name} value={name}>
                    {mi_players_fullName[index]}
                  </MenuItem>
                ))
                : team1 === "Royal Challengers Bangalore"
                  ? rcb_players.map((name, index) => (
                    <MenuItem key={name} value={name}>
                      {rcb_players_fullName[index]}
                    </MenuItem>
                  ))
                  : team1 === "Kolkata Knight Riders"
                    ? kkr_players.map((name, index) => (
                      <MenuItem key={name} value={name}>
                        {kkr_players_fullName[index]}
                      </MenuItem>
                    ))
                    : team1 === "Rajasthan Royals"
                      ? rr_players.map((name, index) => (
                        <MenuItem key={name} value={name}>
                          {rr_players_fullName[index]}
                        </MenuItem>
                      ))
                      : team1 === "Gujarat Titans"
                        ? gt_players.map((name, index) => (
                          <MenuItem key={name} value={name}>
                            {gt_players_fullName[index]}
                          </MenuItem>
                        ))
                        : team1 === "Lucknow Super Giants"
                          ? lsg_players.map((name, index) => (
                            <MenuItem key={name} value={name}>
                              {lsg_players_fullName[index]}
                            </MenuItem>
                          ))
                          : team1 === "Sunrisers Hyderabad"
                            ? srh_players.map((name, index) => (
                              <MenuItem key={name} value={name}>
                                {srh_players_fullName[index]}
                              </MenuItem>
                            ))
                            : team1 === "Delhi Capitals"
                              ? dc_players.map((name, index) => (
                                <MenuItem key={name} value={name}>
                                  {dc_players_fullName[index]}
                                </MenuItem>
                              ))
                              : team1 === "Punjab Kings"
                                ? pk_players.map((name, index) => (
                                  <MenuItem key={name} value={name}>
                                    {pk_players_fullName[index]}
                                  </MenuItem>
                                ))
                                : null}
          </Select>
        </FormControl>
      </div>
      <div className="main-venue">
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel id="demo-multiple-name-label">Team-2 Squad</InputLabel>
          <Select
            multiple
            value={selectedT2Players}
            onChange={handleChange7}
            label="Team-2 Squad"
            style={{ minWidth: 100, maxWidth: 200 }}
          >
            {team2 === "Chennai Super Kings"
              ? csk_players.map((name, index) => (
                <MenuItem key={name} value={name}>
                  {csk_players_fullName[index]}
                </MenuItem>
              ))
              : team2 === "Mumbai Indians"
                ? mi_players.map((name, index) => (
                  <MenuItem key={name} value={name}>
                    {mi_players_fullName[index]}
                  </MenuItem>
                ))
                : team2 === "Royal Challengers Bangalore"
                  ? rcb_players.map((name, index) => (
                    <MenuItem key={name} value={name}>
                      {rcb_players_fullName[index]}
                    </MenuItem>
                  ))
                  : team2 === "Kolkata Knight Riders"
                    ? kkr_players.map((name, index) => (
                      <MenuItem key={name} value={name}>
                        {kkr_players_fullName[index]}
                      </MenuItem>
                    ))
                    : team2 === "Rajasthan Royals"
                      ? rr_players.map((name, index) => (
                        <MenuItem key={name} value={name}>
                          {rr_players_fullName[index]}
                        </MenuItem>
                      ))
                      : team2 === "Gujarat Titans"
                        ? gt_players.map((name, index) => (
                          <MenuItem key={name} value={name}>
                            {gt_players_fullName[index]}
                          </MenuItem>
                        ))
                        : team2 === "Lucknow Super Giants"
                          ? lsg_players.map((name, index) => (
                            <MenuItem key={name} value={name}>
                              {lsg_players_fullName[index]}
                            </MenuItem>
                          ))
                          : team2 === "Sunrisers Hyderabad"
                            ? srh_players.map((name, index) => (
                              <MenuItem key={name} value={name}>
                                {srh_players_fullName[index]}
                              </MenuItem>
                            ))
                            : team2 === "Delhi Capitals"
                              ? dc_players.map((name, index) => (
                                <MenuItem key={name} value={name}>
                                  {dc_players_fullName[index]}
                                </MenuItem>
                              ))
                              : team2 === "Punjab Kings"
                                ? pk_players.map((name, index) => (
                                  <MenuItem key={name} value={name}>
                                    {pk_players_fullName[index]}
                                  </MenuItem>
                                ))
                                : null}
          </Select>
        </FormControl>
      </div>
      <div className="main-selctor">
        <div className="selector">
          <FormControl sx={{ minWidth: 100, maxWidth: 200 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              City
            </InputLabel>
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
      </div>

      <div className="main-selector">
        <div className="selector">
          <FormControl sx={{ minWidth: 150, maxWidth: 340 }}>
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
          <FormControl sx={{ minWidth: 150, maxWidth: 340 }}>
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
      <div className="selector">
        <FormControl sx={{ minWidth: 100, maxWidth: 200 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Match Type
          </InputLabel>
          <Select
            value={matchNumber}
            onChange={(e) => {
              setMatchNumber(e.target.value);
            }}
            label="MatchType"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="0">Third Place</MenuItem>
            <MenuItem value="1">Eliminator</MenuItem>
            <MenuItem value="2">Final</MenuItem>
            <MenuItem value="3">League match</MenuItem>
            <MenuItem value="4">Qulifier</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="main-action">
        <button onClick={handleClick} style={{ marginBottom: "5vh" }}>
          Predict
        </button>
        {showComponent == 1 && team1 && team2 && (
          <Result
            team1={team1}
            team2={team2}
            percentage1={percentage1}
            percentage2={percentage2}
          />
        )}
        {showComponent == 2 && (
          <div className="alert-box">
            <span className="alert-message">
              Team 1 and Team 2 cannot be Same
            </span>
            <span className="close-btn" onClick={() => setShowComponent("")}>
              &times;
            </span>
          </div>
        )}
        {showComponent == 3 && (
          <div className="alert-box">
            <span className="alert-message">Select exact 11 Players</span>
            <span className="close-btn" onClick={() => setShowComponent("")}>
              &times;
            </span>
          </div>
        )}
        {showComponent == 4 && (
          <div className="alert-box">
            <span className="alert-message">Fill all the Values</span>
            <span className="close-btn" onClick={() => setShowComponent("")}>
              &times;
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
