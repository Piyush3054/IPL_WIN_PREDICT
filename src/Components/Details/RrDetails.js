import React from "react";
import Navbar from "../Navbar";
import sqbg from "../../Images/squad-bg.svg";
import RR from "../../Images/RRoutline.png";
import trophy from "../../Images/trophy.png";
import bottom from "../../Images/bottom-section-bg.png";
import cap from "../../Images/teams-captain-icon.svg"
import adam from "../../Images/RR/2.png"
import sanju from "../../Images/RR/7.png"
import butler from "../../Images/RR/5.png"
import bolt from "../../Images/RR/4.png"
import yashsvi from "../../Images/RR/11.png"
import sandeep from "../../Images/RR/10.png"
import riyan from "../../Images/RR/6.png"
import navdip from "../../Images/RR/8.png"
import hetmayar from "../../Images/RR/9.png"
import kuldeep from "../../Images/RR/13.png"
import aswin from "../../Images/RR/3.png"
import dhruv from "../../Images/RR/12.png"
import kunal from "../../Images/RR/14.png"
import donovan from "../../Images/RR/15.png"
import chahal from "../../Images/RR/1.png"
import wk from "../../Images/teams-wicket-keeper-icon.svg"
import fore from "../../Images/teams-foreign-player-icon.svg"
import bowl from "../../Images/teams-bowler-icon.svg"
import bats from "../../Images/teams-batsman-icon.svg"
import no from "../../Images/null.png"
import def from "../../Images/default-headshot.png"
import both from "../../Images/teams-all-rounder-icon.svg"

export default function RrDetails() {
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
            src={RR}
            alt="RR"
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
                width:"250px"
              }}
            >
              RAJASTHAN ROYALS
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
                2008
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
                THE ROYALS SPORTS GROUP
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
                KUMAR SANGAKKARA
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
                SAWAI MANSINGH STADIUM
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
                SANJU SAMSON
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
                <img src={sanju} style={{ width: "180px", height: "190px" }}></img>
                <img src={wk}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SANJU SAMSON</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>WK Keeper - Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb" }}>
                <img src={fore}></img>
                <img src={butler} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>JOS BUTTLER</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={hetmayar} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SHIMRON HETMYER</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={yashsvi} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>YASHASVI JAISWAL</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={dhruv} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>DHRUV JUREL</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={riyan} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>RIYAN PARAG</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={kunal} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>KUNAL RATHORE</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={donovan} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>DONOVAN FERREIRA</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ROVMAN POWELL</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SHUBHAM DUBEY</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>TOM KOHLER-CADMORE</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
          </div>



          <div style={{ paddingLeft: "10vh", marginTop: "10vh", fontSize: "30px", fontStyle: "italic", fontWeight: "600" }}>All Rounders</div>
          <div style={{ justifyContent: "center", padding: "5vh", display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={aswin} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>RAVICHADRAN ASHWIN</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ABID MUSHTAQ</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>AVESH KHAN</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={kuldeep} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>KULDEEP SEN</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={navdip} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>NAVDEEP SAINI</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>PRASIDH KRISHNA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={sandeep} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SANDEEP SHARMA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={bolt} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>TRENT BOULT</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={chahal} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>YUZVENDRA CHAHAL</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={adam} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ADAM ZAMPA</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>NANDRE BURGER</div>
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
