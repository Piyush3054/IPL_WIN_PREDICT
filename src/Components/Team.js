import React, { useState } from "react";
import "../Components/mystyles.css";
import bottom from "../Images/bottom-section-bg.png";
import icon from '../Images/icon.png'
import bg from "../Images/background.png"
import csk from "../Images/CSKoutline.png";
import mi from "../Images/MIoutline.png";
import srh from "../Images/SRHoutline.png";
import rr from "../Images/RRoutline.png";
import gt from "../Images/GToutline.png";
import kkr from "../Images/KKRoutline.png";
import pbk from "../Images/PBKSoutline.png";
import rcb from "../Images/RCBoutline.png";
import lsg from "../Images/LSGoutline.png";
import dc from "../Images/DCoutline.png";
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
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Team() {
    const navigate = useNavigate();
    const teams = [
        { name: "Chennai Super Kings", players: csk_players },
        { name: "Rajasthan Royals", players: rr_players },
        { name: "Mumbai Indians", players: mi_players },
        { name: "Royal Challengers Bangalore", players: rcb_players },
        { name: "Delhi Capitals", players: dc_players },
        { name: "Gujarat Titans", players: gt_players },
        { name: "Kolkata Knight Riders", players: kkr_players },
        { name: "Lucknow Super Giants", players: lsg_players },
        { name: "Sunrisers Hyderabad", players: srh_players },
        { name: "Punjab Kings", players: pk_players },
    ];

    const [selectedTeam, setSelectedTeam] = useState(null);

    const handleTeamClick = (teamName) => {
        setSelectedTeam((prevTeam) => (prevTeam === teamName ? null : teamName));

        if (teamName) {
            switch (teamName) {
                case "Chennai Super Kings":
                    navigate("/csk");
                    break;
                case "Delhi Capitals":
                    navigate("/dc");
                    break;
                case "Gujarat Titans":
                    navigate("/gt");
                    break;
                case "Kolkata Knight Riders":
                    navigate("/kkr");
                    break;
                case "Lucknow Super Giants":
                    navigate("/lsg");
                    break;
                case "Mumbai Indians":
                    navigate("/mi");
                    break;
                case "Punjab Kings":
                    navigate("/pbks");
                    break;
                case "Rajasthan Royals":
                    navigate("/rr");
                    break;
                case "Royal Challengers Bangalore":
                    navigate("/rcb");
                    break;
                case "Sunrisers Hyderabad":
                    navigate("/srh");
                    break;
                default:
                    navigate("/");
                    break;
            }
        }
    };

    return (
        <div className="main-container" style={{
            background: `url(${bottom}) no-repeat`,
            backgroundSize: "100vw",
            backgroundColor:"#f0f2f8",
          }}>
            <Navbar />
            <div className="mainCard-container" style={{
                background: `url(${bottom}) no-repeat`,
                backgroundSize: "100vw",
                backgroundColor:"#f0f2f8",
            }}>
                {teams.map((team, index) => (
                    <div
                        key={index}
                        className={`card-container ${selectedTeam === team.name ? "selected" : ""}`}
                        onClick={() => handleTeamClick(team.name)}
                        style={{ background: getTeamColorBelow(team.name) }}
                    >
                        <div className="background" style={{ background: getTeamColor(team.name), border:getTeamColor(team.name)}}></div>
                        <img src={getTeamImage(team.name)} alt={team.name} />
                        <p>{team.name}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}

function getTeamColorBelow(teamName) {
    switch (teamName) {
        case "Chennai Super Kings":
            return "#171d30";
        case "Delhi Capitals":
            return "#021756";
        case "Gujarat Titans":
            return "#070f26";
        case "Kolkata Knight Riders":
            return "#28204b";
        case "Lucknow Super Giants":
            return "#0248bc";
        case "Mumbai Indians":
            return "#133166";
        case "Punjab Kings":
            return "#283666";
        case "Rajasthan Royals":
            return "#042a5b";
        case "Royal Challengers Bangalore":
            return "#4f1c20";
        case "Sunrisers Hyderabad":
            return "Brown";
        default:
            return "#ffffff";
    }
}

function getTeamImage(teamName) {
    switch (teamName) {
        case "Chennai Super Kings":
            return csk;
        case "Delhi Capitals":
            return dc;
        case "Gujarat Titans":
            return gt;
        case "Kolkata Knight Riders":
            return kkr;
        case "Lucknow Super Giants":
            return lsg;
        case "Mumbai Indians":
            return mi;
        case "Punjab Kings":
            return pbk;
        case "Rajasthan Royals":
            return rr;
        case "Royal Challengers Bangalore":
            return rcb;
        case "Sunrisers Hyderabad":
            return srh;
        default:
            return "";
    }
}

function getTeamColor(teamName) {
    switch (teamName) {
        case "Chennai Super Kings":
            return "#ffcb05";
        case "Delhi Capitals":
            return "#b9251c";
        case "Gujarat Titans":
            return "#77c7f2";
        case "Kolkata Knight Riders":
            return "#ecc542";
        case "Lucknow Super Giants":
            return "#ffffff";
        case "Mumbai Indians":
            return "#2d6ab1";
        case "Punjab Kings":
            return "#d71920";
        case "Rajasthan Royals":
            return "#eb83b5";
        case "Royal Challengers Bangalore":
            return "#2b2a29";
        case "Sunrisers Hyderabad":
            return "orange";
        default:
            return "#ffffff";
    }
}
