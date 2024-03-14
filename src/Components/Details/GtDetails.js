import React from "react";
import Navbar from "../Navbar";
import sqbg from "../../Images/squad-bg.svg";
import GT from "../../Images/GToutline.png";
import trophy from "../../Images/trophy.png";
import bottom from "../../Images/bottom-section-bg.png";
import cap from "../../Images/teams-captain-icon.svg"
import vijay from "../../Images/GT/2.png"
import rashid from "../../Images/GT/10.png"
import mohit from "../../Images/GT/5.png"
import william from "../../Images/GT/4.png"
import wridhiman from "../../Images/GT/11.png"
import jayant from "../../Images/GT/9.png"
import tewtiya from "../../Images/GT/6.png"
import darshan from "../../Images/GT/7.png"
import miller from "../../Images/GT/8.png"
import matthew from "../../Images/GT/13.png"
import gill from "../../Images/GT/3.png"
import sai from "../../Images/GT/12.png"
import joshua from "../../Images/GT/14.png"
import abhinav from "../../Images/GT/15.png"
import noor from "../../Images/GT/16.png"
import sudarshan from "../../Images/GT/17.png"
import sami from "../../Images/GT/1.png"
import wk from "../../Images/teams-wicket-keeper-icon.svg"
import fore from "../../Images/teams-foreign-player-icon.svg"
import bowl from "../../Images/teams-bowler-icon.svg"
import bats from "../../Images/teams-batsman-icon.svg"
import no from "../../Images/null.png"
import def from "../../Images/default-headshot.png"
import both from "../../Images/teams-all-rounder-icon.svg"

export default function GtDetails() {
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
            src={GT}
            alt="GT"
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
              GUJARAT TITANS
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
                  width:"120px"
                }}
              >
                2022
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
                CVC CAPITALS PARTNERS
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
                ASHISH NEHRA
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
                NARENDRA MODI STADIUM
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
                SHUBMAN GILL
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
                <img src={fore}></img>
                <img src={miller} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>DAVID MILLER</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb" }}>
                <img src={cap}></img>
                <img src={gill} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SHUBMAN GILL</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={matthew} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>MATTHEW WADE</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={wridhiman} style={{ width: "180px", height: "190px" }}></img>
                <img src={wk}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>WRIDDHIMAN SAHA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>WK Keeper - Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ROBIN MINZ</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={william} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>KANE WILLIAMSON</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
          </div>



          <div style={{ paddingLeft: "10vh", marginTop: "10vh", fontSize: "30px", fontStyle: "italic", fontWeight: "600" }}>All Rounders</div>
          <div style={{ justifyContent: "center", padding: "5vh", display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={abhinav} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ABHINAV MANOHAR</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={sudarshan} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>B. SAI SUDARSHAN</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={darshan} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>DARSHAN NALKANDE</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={vijay} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>VIJAY SHANKAR</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>AZMATULLAH OMARZAI</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SHAHRUKH KHAN</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            
          </div>



          <div style={{ paddingLeft: "10vh", marginTop: "10vh", fontSize: "30px", fontStyle: "italic", fontWeight: "600" }}>Bowlers</div>
          <div style={{ justifyContent: "center", padding: "5vh", display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={jayant} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>JAYANT YADAV</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={tewtiya} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>RAHUL TEWATIA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={sami} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>MOHAMMAD SHAMI</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>KARTIK TYAGI</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SUSHANT MISHRA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SPENCER JHONSON</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={noor} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>NOOR AHMAD</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={sai} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SAI KISHORE</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>UMESH YADAV</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={rashid} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>RASHID KHAN</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={joshua} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>JOSHUA LITTLE</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={mohit} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>MOHIT SHARMA</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>MANAV SUTHAR</div>
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
