import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {ApiServes} from "../apiServes/apiServes";
import {Box, Container, Typography} from "@mui/material";
import Videos from "../video/video";
import {colors} from "../constanta";

const Search =() => {
    const [video,setvideo] = useState([])
    const {id} = useParams()
    console.log(video)

    useEffect(() => {
        ApiServes.fetching(`search?part=snippet&q=${id}`).then(data => setvideo(data.items))
    }, [id])


    return (
       <Box p={2} mt={'50px'} sx={{height:'120vh'}}>
           <Container maxWidth={'90%'}>
               <Typography variant={'h4'} sx={{fontWeight:'bold'}}>
                   Search for result <span style={{color:colors.fontColor}}>{id}</span>
               </Typography>
               <Videos videos={video}/>
           </Container>
       </Box>
    );
}

export default Search;