import './App.css';
import React from "react";
import Navbar from "../navbar/navbar";
import Main from "../main/main";
import {Box} from "@mui/material";
import Videos from "../video/video";
import Search from "../search/search";
import {Routes, Route} from "react-router";
import VideoDetail from "../video-detail/video-detail";
import Channel from "../channel/channel";

const App = () => {
    return (
        <Box sx={{fontWeight: 'bold'}}>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/videos/:id' element={<Videos/>}/>
                <Route path='/channel/:id' element={<Channel/>}/>
                <Route path='/video/:id' element={<VideoDetail/>}/>
                <Route path='/search/:id' element={<Search/>}/>
            </Routes>
        </Box>
    );
}

export default App;


