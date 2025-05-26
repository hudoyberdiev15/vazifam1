import React, {useEffect, useState} from 'react';
import {Stack, Box, Container, Typography, Button} from "@mui/material";
import Category from "../categorys/categorys";
import {colors} from "../constanta";
import {ApiServes} from "../apiServes/apiServes";
import Videos from "../video/video";

const Main = () => {
    const [selectCategory, setSelectCategory] = useState('New')
    const [videos, setVideos] = useState([])
    const selectedCategory = category => {
        setSelectCategory(category)
    }


    useEffect(() => {
        ApiServes.fetching(`search?part=snippet&q=${selectCategory}`).then(data => setVideos(data.items))
    }, [selectCategory])

    return (
        <Stack>
            <Category selectCategory={selectCategory} selectedCategory={selectedCategory}/>
            <Box p='2' sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant='h4' style={{fontWeight: 'bold', marginTop: '15px'}}>
                        {selectCategory} <span style={{color: colors.fontColor}}>videos</span>
                    </Typography>

                        <Videos videos={videos}/>

                </Container>
            </Box>
        </Stack>
    );
}

export default Main;