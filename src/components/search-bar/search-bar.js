import React, {useState} from 'react';
import {Paper, IconButton} from "@mui/material";
import {colors} from "../constanta";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {useNavigate} from "react-router";

const SearchBar = () => {

    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const searchHandler = e => {
        e.preventDefault()
        if (value) {
            navigate(`search/${value}`)
            setValue('')
        }
    }

    return (
        <Paper
            component={'form'}
            onSubmit={searchHandler}
            sx={{
                border: `1px solid ${colors.bgColor}`,
                pl: 2
            }}
        >
            <input type='text'
                   placeholder='Search movie...'
                   className='search-bar'
                   onChange={e => setValue(e.target.value)}
            />
            <IconButton type='submit' sx={{p: '10px', color: 'rgba(87, 199, 133, 1)'}}>
                <SearchOutlinedIcon/>
            </IconButton>

        </Paper>
    );
}

export default SearchBar;