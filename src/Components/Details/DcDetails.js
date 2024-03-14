import React from "react";
import Navbar from "../Navbar";
import sqbg from "../../Images/squad-bg.svg";
import DC from "../../Images/DCoutline.png";
import trophy from "../../Images/trophy.png";
import bottom from "../../Images/bottom-section-bg.png";
import cap from "../../Images/teams-captain-icon.svg"
import kuldeep from "../../Images/DC/2.png"
import lalit from "../../Images/DC/10.png"
import prithvi from "../../Images/DC/5.png"
import ishant from "../../Images/DC/4.png"
import pravin from "../../Images/DC/11.png"
import warner from "../../Images/DC/9.png"
import lungi from "../../Images/DC/6.png"
import akshar from "../../Images/DC/7.png"
import anrich from "../../Images/DC/8.png"
import vicky from "../../Images/DC/13.png"
import marsh from "../../Images/DC/3.png"
import yash from "../../Images/DC/12.png"
import mukesh from "../../Images/DC/14.png"
import abhisek from "../../Images/DC/15.png"
import khaleel from "../../Images/DC/1.png"
import wk from "../../Images/teams-wicket-keeper-icon.svg"
import fore from "../../Images/teams-foreign-player-icon.svg"
import bowl from "../../Images/teams-bowler-icon.svg"
import bats from "../../Images/teams-batsman-icon.svg"
import no from "../../Images/null.png"
import def from "../../Images/default-headshot.png"
import both from "../../Images/teams-all-rounder-icon.svg"

export default function DcDetails() {
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
            src={DC}
            alt="DC"
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
                width:"220px"
              }}
            >
              DELHI CAPITALS
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
                GMR SPORTS PVT. LTD & JSW SPORTS PVT LTD
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
                RICKY PONTING
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
                ARUN JAITLEY STADIUM
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
                DAVID WARNER
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
                <img src={def} style={{ width: "180px", height: "190px" }}></img>
                <img src={wk}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>RISHABH PANT</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>WK Keeper - Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb" }}>
                <img src={cap}></img>
                <img src={warner} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>DAVID WARNER</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={prithvi} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>PRITHVI SHAW</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={yash} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>YASH DHULL</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SHAI HOPE</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SWASTIK CHHIKARA</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={abhisek} style={{ width: "180px", height: "190px" }}></img>
                <img src={bats}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ABISHEK POREL</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>HARRY BROOK</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>RICKY BHUL</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>KUMAR KUSHAGRA</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>TRISTAN STUBBS</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Batter</div>
              </div>
            </div>
          </div>



          <div style={{ paddingLeft: "10vh", marginTop: "10vh", fontSize: "30px", fontStyle: "italic", fontWeight: "600" }}>All Rounders</div>
          <div style={{ justifyContent: "center", padding: "5vh", display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={akshar} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>AXAR PATEL</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={lalit} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>LALIT YADAV</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={marsh} style={{ width: "180px", height: "190px" }}></img>
                <img src={both}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>MITCHELL MARSH</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>SUMiT KUMAR</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>All-Rounder</div>
              </div>
            </div>
          </div>



          <div style={{ paddingLeft: "10vh", marginTop: "10vh", fontSize: "30px", fontStyle: "italic", fontWeight: "600" }}>Bowlers</div>
          <div style={{ justifyContent: "center", padding: "5vh", display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={pravin} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>PRAVIN DUBEY</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={vicky} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>VICKY OSTWAL</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={anrich} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ANRICH NORTJE</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>KULDEEP YADAV</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={fore}></img>
                <img src={lungi} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>LINGI NGIDI</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={khaleel} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>KHALEEL AHMED</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={ishant} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>ISHANT SHARMA</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>JHYE RICHARDSON</div>
                <div style={{ color: "#585a60", fontSize: "12px" }}>Bowler</div>
              </div>
            </div>
            <div style={{ marginTop: "25px", width: "fit-content", border: "1px solid #b8b9bb", padding: "10px", backgroundColor: "white", borderRadius: "5px", marginRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "start", borderBottom: "2px solid #b8b9bb", justifyContent: "center" }}>
                <img src={no}></img>
                <img src={mukesh} style={{ width: "180px", height: "190px" }}></img>
                <img src={bowl}></img>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>MUKESH KUMAR</div>
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
                <div style={{ fontWeight: "700", fontSize: "16px" }}>RASIKH DAR</div>
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
