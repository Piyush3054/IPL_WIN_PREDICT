import React from "react";
import Navbar from "../Navbar";
import sqbg from "../../Images/squad-bg.svg";
import PBKS from "../../Images/PBKSoutline.png";
import trophy from "../../Images/trophy.png";
import bottom from "../../Images/bottom-section-bg.png";
import cap from "../../Images/teams-captain-icon.svg"
import rabada from "../../Images/PBKS/2.png"
import nathan from "../../Images/PBKS/10.png"
import prabhsimran from "../../Images/PBKS/5.png"
import harpreet from "../../Images/PBKS/4.png"
import sikandar from "../../Images/PBKS/11.png"
import bairstow from "../../Images/PBKS/9.png"
import sam from "../../Images/PBKS/6.png"
import chahar from "../../Images/PBKS/7.png"
import living from "../../Images/PBKS/8.png"
import jitesh from "../../Images/PBKS/13.png"
import arshdeep from "../../Images/PBKS/3.png"
import rishi from "../../Images/PBKS/12.png"
import atharva from "../../Images/PBKS/14.png"
import vidwath from "../../Images/PBKS/15.png"
import bhatia from "../../Images/PBKS/16.png"
import shivam from "../../Images/PBKS/17.png"
import dhawan from "../../Images/PBKS/1.png"
import wk from "../../Images/teams-wicket-keeper-icon.svg"
import fore from "../../Images/teams-foreign-player-icon.svg"
import bowl from "../../Images/teams-bowler-icon.svg"
import bats from "../../Images/teams-batsman-icon.svg"
import no from "../../Images/null.png"
import def from "../../Images/default-headshot.png"
import both from "../../Images/teams-all-rounder-icon.svg"

export default function PbksDetails() {
  return (
    <div className="main-container">
      <Navbar />
      <div
        style={{
          background: `url(${sqbg}) no-repeat`,
          backgroundSize: "cover",
          height: "fit-content",
          width: "100%",
          paddingBottom: "10vh",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingTop: "10vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={PBKS}
            alt="PBKS"
            style={{ width: "7vw", height: "15vh", marginRight: "20px" }}
          ></img>
          <div
            style={{
              borderLeft: "0.5px solid white",
              height: "fit-content",
              paddingLeft: "20px",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "40px",
                fontFamily: "fantasy",
                fontWeight: "100",
                marginBottom: "10px",
                width:"210px"
              }}
            >
              PUNJAB KINGS
            </div>
          </div>
          <div style={{ marginLeft: "10vw" }}>
            <div
              style={{
                display: "flex",
                backgroundColor: "#112a5c",
                padding: "15px",
                borderRadius: "10px 10px 0px 0px ",
                marginBottom: "2px",
              }}
            >
              <div
                style={{
                  color: "#ffc52f",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                OWNER
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                -
              </div>
              <div
                style={{ color: "white", fontSize: "18px", fontWeight: "700" }}
              >
                KPH DREAM CRICKET PRIVATE LIMITED
              </div>
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "#112a5c",
                padding: "15px",
                marginBottom: "2px",
              }}
            >
              <div
                style={{
                  color: "#ffc52f",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                COACH
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                -
              </div>
              <div
                style={{ color: "white", fontSize: "18px", fontWeight: "700" }}
              >
                TREVOR BAYLISS
              </div>
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "#112a5c",
                padding: "15px",
                marginBottom: "2px",
              }}
            >
              <div
                style={{
                  color: "#ffc52f",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                VENUE
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                -
              </div>
              <div
                style={{ color: "white", fontSize: "18px", fontWeight: "700" }}
              >
                PCA NEW STASIUM,MULLANPUR
              </div>
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "#112a5c",
                padding: "15px",
                borderRadius: "0px 0px 10px 10px ",
                marginBottom: "2px",
              }}
            >
              <div
                style={{
                  color: "#ffc52f",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                CAPTAIN
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                -
              </div>
              <div
                style={{ color: "white", fontSize: "18px", fontWeight: "700" }}
              >
                SHIKHAR DHAWAN
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: `url(${bottom}) no-repeat`,
          backgroundSize: "100vw",
          backgroundColor:"#f0f2f8",
          height: "fit-content",
        }}
      >
        <div>
          <div style={{ paddingLeft: "10vh", marginTop: "10vh", fontSize: "30px", fontStyle: "italic", fontWeight: "600" }}>Batters</div>
          <div style={{ justifyContent: "center", padding: "5vh", display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb" }}>
                <img src={cap}></img>
                <img src={dhawan} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SHIKHAR DHAWAN</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb" }}>
                <img src={no}></img>
                <img src={jitesh} style={{ width: "180px", height: "190px" }}></img>
                <img src={wk}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>JITESH SHARMA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>WK Keeper - Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={bairstow} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>JONNY BAIRSTOW</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={prabhsimran} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>PRABHSIMRAN SINGH</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={living} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>LIAM LIVINGSTONE</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={bhatia} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>HARPREET BHATIA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>RILEE ROSSOUW</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SHASHANK SINGH</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
          </div>



          <div style={{ paddingLeft: "10vh", marginTop: "10vh", fontSize: "30px", fontStyle: "italic", fontWeight: "600" }}>All Rounders</div>
          <div style={{ justifyContent: "center", padding: "5vh", display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>CHRIS WOAKES</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>VISHWANATH SINGH</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ASHUTOSH SHARMA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ATHARVA TAIDE</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={rishi} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>RISHI DHAWAN</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={sam} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SAM CURRAN</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={sikandar} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SIKANDAR RAZA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={shivam} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SHIVAM SINGH</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
          </div>



          <div style={{ paddingLeft: "10vh", marginTop: "10vh", fontSize: "30px", fontStyle: "italic", fontWeight: "600" }}>Bowlers</div>
          <div style={{ justifyContent: "center", padding: "5vh", display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>PRINCE CHOUDHARY</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>HARPREET BRAR</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={arshdeep} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ARSHDEEP SINGH</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={rabada} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>KAGISO RABADA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={nathan} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>NATHAN ELLIS</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={chahar} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>RAHUL CHAHAR</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={vidwath} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>VIDWATH KAVERAPPA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>HARSHAL PATEL</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div style={{backgroundColor:"black",color:"white",padding:"10px",fontSize:"12px",display:"flex",justifyContent:"center",fontWeight:"600"}}>
      Copyright © IPL 2024 All Rights Reserved.
      </div>
    </div>
  );
}