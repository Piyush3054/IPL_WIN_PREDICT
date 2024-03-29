import React from 'react'
import './mystyles.css'
import ProgressBar from './ProgressBar'
import lsg from '../Images/lsg.png'
import csk from '../Images/csk.png'
import rcb from '../Images/rcb.png'
import mi from '../Images/mi.png'
import kkr from '../Images/kkr.png'
import dc from '../Images/dc.png'
import gt from '../Images/gt.png'
import pk from '../Images/pk.png'
import rr from '../Images/rr.png'
import srh from '../Images/srh.png'
import vs from '../Images/versus-final.png'

export default function Result(props) {
    let perc1 = Math.round(props.percentage1.toFixed(2) * 100);
    let perc2 = Math.round(props.percentage2.toFixed(2) * 100);

    return (
        <div className='main-result'>
            <div className='result-img'>
                {props.team1 === 'Chennai Super Kings' ?
                    <img src={csk} alt="csk" />
                    : props.team1 === 'Mumbai Indians' ?
                        <img src={mi} alt="mi" />
                        : props.team1 === 'Royal Challengers Bangalore' ?
                            <img src={rcb} alt="rcb" />
                            : props.team1 === 'Kolkata Knight Riders' ?
                                <img src={kkr} alt="kkr" />
                                : props.team1 === 'Rajasthan Royals' ?
                                    <img src={rr} alt="rr" />
                                    : props.team1 === 'Gujarat Titans' ?
                                        <img src={gt} alt="gt" />
                                        : props.team1 === 'Lucknow Super Giants' ?
                                            <img src={lsg} alt="lsg" />
                                            : props.team1 === 'Sunrisers Hyderabad' ?
                                                <img src={srh} alt="srh" />
                                                : props.team1 === 'Delhi Capitals' ?
                                                    <img src={dc} alt="dc" />
                                                    : props.team1 === 'Punjab Kings' ?
                                                        <img src={pk} alt="pk" />
                                                        : null


                }
            </div>
            <div className='result'>
                <div className='result-bar'>
                    <ProgressBar completed={perc1} />
                </div>
                <div className='result-percentege'>
                    {perc1}%
                </div>
            </div>
            <div className='result-vs'>
                <img src={vs}/>
            </div>
            <div className='result'>
                <div className='result-bar'>
                    <ProgressBar completed={perc2} />
                </div>
                <div className='result-percentege'>
                    {perc2}%
                </div>
            </div>
            <div className='result-img'>
                {props.team2 === 'Chennai Super Kings' ?
                    <img src={csk} alt="csk" />
                    : props.team2 === 'Mumbai Indians' ?
                        <img src={mi} alt="mi" />
                        : props.team2 === 'Royal Challengers Bangalore' ?
                            <img src={rcb} alt="rcb" />
                            : props.team2 === 'Kolkata Knight Riders' ?
                                <img src={kkr} alt="kkr" />
                                : props.team2 === 'Rajasthan Royals' ?
                                    <img src={rr} alt="rr" />
                                    : props.team2 === 'Gujarat Titans' ?
                                        <img src={gt} alt="gt" />
                                        : props.team2 === 'Lucknow Super Giants' ?
                                            <img src={lsg} alt="lsg" />
                                            : props.team2 === 'Sunrisers Hyderabad' ?
                                                <img src={srh} alt="srh" />
                                                : props.team2 === 'Delhi Capitals' ?
                                                    <img src={dc} alt="dc" />
                                                    : props.team2 === 'Punjab Kings' ?
                                                        <img src={pk} alt="pk" />
                                                        : null


                }
            </div>
        </div>
    )
}
