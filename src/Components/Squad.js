import React, { useEffect } from 'react'
import { csk_players, rr_players, mi_players, rcb_players, dc_players, gt_players, kkr_players, lsg_players, pw_players, ktk_players, srh_players, pk_players } from './Players';
import './mystyles.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export let T1Players;
export let T2Players;
export default function Squad(props) {
    
    const [selectedT1Players, setSelectedT1Players] = React.useState([]);

    const handleChange6 = (event) => {
        setSelectedT1Players(event.target.value);
    };
    const [selectedT2Players, setSelectedT2Players] = React.useState([]);

    const handleChange7 = (event) => {
        setSelectedT2Players(event.target.value);
    };
    return (
        <div>
        <div className='main-venue'>
                <FormControl sx={{ minWidth: 150 }}> 
                    <InputLabel id="demo-multiple-label">Team-1 Squad</InputLabel>
                    <Select
                        multiple
                        value={selectedT1Players}
                        onChange={handleChange6}
                        label="Team-1 Squad"
                    >
                        {props.team1 === 'Chennai Super Kings' ?
                            csk_players.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))
                            : props.team1 === 'Mumbai Indians' ?
                                mi_players.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        {name}
                                    </MenuItem>
                                ))
                                : props.team1 === 'Royal Challengers Bangalore' ?
                                    rcb_players.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            {name}
                                        </MenuItem>
                                    ))
                                    : props.team1 === 'Kolkata Knight Riders' ?
                                        kkr_players.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                {name}
                                            </MenuItem>
                                        ))
                                        : props.team1 === 'Rajasthan Royals' ?
                                            rr_players.map((name) => (
                                                <MenuItem key={name} value={name}>
                                                    {name}
                                                </MenuItem>
                                            ))
                                            : props.team1 === 'Gujarat Titans' ?
                                                gt_players.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                        {name}
                                                    </MenuItem>
                                                ))
                                                : props.team1 === 'Lucknow Super Giants' ?
                                                    lsg_players.map((name) => (
                                                        <MenuItem key={name} value={name}>
                                                            {name}
                                                        </MenuItem>
                                                    ))
                                                    : props.team1 === 'Pune Warriors' ?
                                                        pw_players.map((name) => (
                                                            <MenuItem key={name} value={name}>
                                                                {name}
                                                            </MenuItem>
                                                        ))
                                                        : props.team1 === 'Kochi Tuskers Kerala' ?
                                                            ktk_players.map((name) => (
                                                                <MenuItem key={name} value={name}>
                                                                    {name}
                                                                </MenuItem>
                                                            ))
                                                            : props.team1 === 'Sunrisers Hyderabad' ?
                                                                srh_players.map((name) => (
                                                                    <MenuItem key={name} value={name}>
                                                                        {name}
                                                                    </MenuItem>
                                                                ))
                                                                : props.team1 === 'Delhi Capitals' ?
                                                                    dc_players.map((name) => (
                                                                        <MenuItem key={name} value={name}>
                                                                            {name}
                                                                        </MenuItem>
                                                                    ))
                                                                    : props.team1 === 'Punjab Kings' ?
                                                                        pk_players.map((name) => (
                                                                            <MenuItem key={name} value={name}>
                                                                                {name}
                                                                            </MenuItem>
                                                                        ))
                                                                        : null


                        }

                    </Select>
                </FormControl>

            </div>
            <div className='main-venue'>
                <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel id="demo-multiple-name-label">Team-2 Squad</InputLabel>
                    <Select
                        label="Team-2 Squad"
                        multiple
                        value={selectedT2Players}
                        onChange={handleChange7}
                    >
                        {props.team2 === 'Chennai Super Kings' ?
                            csk_players.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))
                            : props.team2 === 'Mumbai Indians' ?
                                mi_players.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        {name}
                                    </MenuItem>
                                ))
                                : props.team2 === 'Royal Challengers Bangalore' ?
                                    rcb_players.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            {name}
                                        </MenuItem>
                                    ))
                                    : props.team2 === 'Kolkata Knight Riders' ?
                                        kkr_players.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                {name}
                                            </MenuItem>
                                        ))
                                        : props.team2 === 'Rajasthan Royals' ?
                                            rr_players.map((name) => (
                                                <MenuItem key={name} value={name}>
                                                    {name}
                                                </MenuItem>
                                            ))
                                            : props.team2 === 'Gujarat Titans' ?
                                                gt_players.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                        {name}
                                                    </MenuItem>
                                                ))
                                                : props.team2 === 'Lucknow Super Giants' ?
                                                    lsg_players.map((name) => (
                                                        <MenuItem key={name} value={name}>
                                                            {name}
                                                        </MenuItem>
                                                    ))
                                                    : props.team2 === 'Pune Warriors' ?
                                                        pw_players.map((name) => (
                                                            <MenuItem key={name} value={name}>
                                                                {name}
                                                            </MenuItem>
                                                        ))
                                                        : props.team2 === 'Kochi Tuskers Kerala' ?
                                                            ktk_players.map((name) => (
                                                                <MenuItem key={name} value={name}>
                                                                    {name}
                                                                </MenuItem>
                                                            ))
                                                            : props.team2 === 'Sunrisers Hyderabad' ?
                                                                srh_players.map((name) => (
                                                                    <MenuItem key={name} value={name}>
                                                                        {name}
                                                                    </MenuItem>
                                                                ))
                                                                : props.team2 === 'Delhi Capitals' ?
                                                                    dc_players.map((name) => (
                                                                        <MenuItem key={name} value={name}>
                                                                            {name}
                                                                        </MenuItem>
                                                                    ))
                                                                    : props.team2 === 'Punjab Kings' ?
                                                                        pk_players.map((name) => (
                                                                            <MenuItem key={name} value={name}>
                                                                                {name}
                                                                            </MenuItem>
                                                                        ))
                                                                        : null


                        }

                    </Select>
                </FormControl>

            </div></div>
    )
}