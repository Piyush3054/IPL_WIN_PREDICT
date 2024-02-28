import React from 'react'
import './mystyles.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

export default function Venue() {
    const [venue, setVanue] = React.useState('');
    const handleChange3 = (event) => {
        setVanue(event.target.value);
    };
  return (
    <div className='main-venue'>
                <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Venue</InputLabel>
                    <Select
                        value={venue}
                        onChange={handleChange3}
                        label="Venue"
                    >
                        <MenuItem value="">

                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>Narendra Modi Stadium, Ahmedabad</MenuItem>
                        <MenuItem value={1}>Eden Gardens, Kolkata</MenuItem>
                        <MenuItem value={2}>Wankhede Stadium, Mumbai</MenuItem>
                        <MenuItem value={3}>Brabourne Stadium, Mumbai</MenuItem>
                        <MenuItem value={4}>Dr DY Patil Sports Academy, Mumbai</MenuItem>
                        <MenuItem value={5}>Maharashtra Cricket Association Stadium, Pune</MenuItem>
                        <MenuItem value={6}>Dubai International Cricket Stadium</MenuItem>
                        <MenuItem value={7}>Sharjah Cricket Stadium</MenuItem>
                        <MenuItem value={8}>Zayed Cricket Stadium, Abu Dhabi</MenuItem>
                        <MenuItem value={9}>Arun Jaitley Stadium, Delhi</MenuItem>
                        <MenuItem value={10}>MA Chidambaram Stadium, Chepauk, Chennai</MenuItem>
                        <MenuItem value={11}>Rajiv Gandhi International Stadium, Uppal</MenuItem>
                        <MenuItem value={12}>Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium</MenuItem>
                        <MenuItem value={13}>Punjab Cricket Association Stadium, Mohali</MenuItem>
                        <MenuItem value={14}>M Chinnaswamy Stadium', 'Sawai Mansingh Stadium</MenuItem>
                        <MenuItem value={15}>Holkar Cricket Stadium</MenuItem>
                        <MenuItem value={16}>Green Park</MenuItem>
                        <MenuItem value={17}>Saurashtra Cricket Association Stadium</MenuItem>
                        <MenuItem value={18}>Shaheed Veer Narayan Singh International Stadium</MenuItem>
                        <MenuItem value={19}>JSCA International Stadium Complex</MenuItem>
                        <MenuItem value={20}>Barabati Stadium</MenuItem>
                        <MenuItem value={21}>Subrata Roy Sahara Stadium</MenuItem>
                        <MenuItem value={22}>Himachal Pradesh Cricket Association Stadium</MenuItem>
                        <MenuItem value={23}>Nehru Stadium</MenuItem>
                        <MenuItem value={24}>Vidarbha Cricket Association Stadium, Jamtha</MenuItem>
                        <MenuItem value={25}>New Wanderers Stadium</MenuItem>
                        <MenuItem value={26}>SuperSport Park</MenuItem>
                        <MenuItem value={27}>Kingsmead</MenuItem>
                        <MenuItem value={28}>OUTsurance Oval</MenuItem>
                        <MenuItem value={29}>St George's Park</MenuItem>
                        <MenuItem value={30}>De Beers Diamond Oval</MenuItem>
                        <MenuItem value={31}>Buffalo Park</MenuItem>
                        <MenuItem value={32}>Newlands</MenuItem>
                    </Select>
                </FormControl>


            </div>
  )
}
