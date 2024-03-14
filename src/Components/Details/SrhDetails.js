import React from "react";
import Navbar from "../Navbar";
import sqbg from "../../Images/squad-bg.svg";
import SRH from "../../Images/SRHoutline.png";
import trophy from "../../Images/trophy.png";
import bottom from "../../Images/bottom-section-bg.png";
import cap from "../../Images/teams-captain-icon.svg"
import washington from "../../Images/SRH/2.png"
import makram from "../../Images/SRH/10.png"
import anmol from "../../Images/SRH/5.png"
import markande from "../../Images/SRH/4.png"
import abdul from "../../Images/SRH/11.png"
import natrajan from "../../Images/SRH/9.png"
import rahul from "../../Images/SRH/6.png"
import heinrich from "../../Images/SRH/7.png"
import abhishek from "../../Images/SRH/8.png"
import glenn from "../../Images/SRH/13.png"
import mayank from "../../Images/SRH/3.png"
import marco from "../../Images/SRH/12.png"
import umran from "../../Images/SRH/14.png"
import fazal from "../../Images/SRH/15.png"
import upendra from "../../Images/SRH/16.png"
import sanvir from "../../Images/SRH/17.png"
import nitish from "../../Images/SRH/18.png"
import bhuv from "../../Images/SRH/1.png"
import wk from "../../Images/teams-wicket-keeper-icon.svg"
import fore from "../../Images/teams-foreign-player-icon.svg"
import bowl from "../../Images/teams-bowler-icon.svg"
import bats from "../../Images/teams-batsman-icon.svg"
import no from "../../Images/null.png"
import def from "../../Images/default-headshot.png"
import both from "../../Images/teams-all-rounder-icon.svg"

export default function SrhDetails() {
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
            src={SRH}
            alt="SRH"
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
              }}
            >
              SUNRISERS HYDERABAD
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={trophy} alt="Trophy"></img>
              <div
                style={{
                  color: "white",
                  backgroundColor: "#1d3058",
                  padding: "10px",
                  paddingRight: "50px",
                  borderRadius: "5px 50px 50px 5px",
                  border: "1px solid #35476a",
                  width:"150px"
                }}
              >
                2016
              </div>
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
                SUN TV NETWORK
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
                DANIEL VETTORI
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
                RAJIV GANDHI INTL. CRICKET STADIUM
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
                PAT CUMMINS
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
                <img src={no}></img>
                <img src={abdul} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ABDUL SAMAD</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb" }}>
                <img src={fore}></img>
                <img src={makram} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>AIDEN MARKRAM</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={rahul} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>RAHUL TRIPATHI</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={glenn} style={{ width: "180px", height: "190px" }}></img>
                <img src={wk}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>GLENN PHILLIPS</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={mayank} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>MAYANK AGARWAL</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={heinrich} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>HEINRICH KLASEN</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={anmol} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ANMOLPREET SINGH</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={upendra} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>UPNDRA SINGH YADAV</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={nitish} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>NITISH KUMAR REDDY</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>TRAVIS HEAD</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
          </div>



          <div style={{ paddingLeft: "10vh", marginTop: "10vh", fontSize: "30px", fontStyle: "italic", fontWeight: "600" }}>All Rounders</div>
          <div style={{ justifyContent: "center", padding: "5vh", display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={abhishek} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ABHISHEK SHARMA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={marco} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>MARCO JANSEN</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={washington} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>WASHINGTON SUNDAR</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={sanvir} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SANVIR SINGH</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>WANINDU HASARANGA</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>JHATHAVEDH SUBRAMANYAN</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>AKASH SINGH</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SHAHBAZ AHAMAD</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={bhuv} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>BHUVNESHWAR KUMAR</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={fazal} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>FAZALHAQ FAROOQI</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>JAYDEV UNADKAT</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={natrajan} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>T NATARAJAN</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={umran} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>UMRAN MALIK</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={markande} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>MAYANK MARKANDE</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={cap}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>PAT CUMMINS</div>
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
