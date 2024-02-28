import React from 'react'
import './mystyles.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function Selector() {
    const [tossDecision, setTossDecision] = React.useState('');
    const handleChange5 = (event) => {
        setTossDecision(event.target.value);
    };
    return (
        <div className='selector'>
            <FormControl sx={{ minWidth: 140 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Toss Decision</InputLabel>
                <Select
                    value={tossDecision}
                    onChange={handleChange5}
                    label="TossDecision"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='Batting'>Batting</MenuItem>
                    <MenuItem value='Bowling'>Bowling</MenuItem>

                </Select>
            </FormControl>
        </div>
    )
}
