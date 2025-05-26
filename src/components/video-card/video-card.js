import React from 'react';
import {Card, CardMedia, CardContent, Typography, Avatar, Stack} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import moment from "moment"
import {Link} from "react-router";


const VideoCard = ({video}) => {
    return (
        <Card
            sx={{width: '310px', boxShadow: 'none', borderRadius: '5px'}}
        >
           <Link to={`/video/${video.id.videoId}`}>
               <CardMedia
                   image={video?.snippet?.thumbnails?.high?.url}
                   alt={video?.snippet?.title}
                   sx={{width: '310px', height: '180px'}}
               />
           </Link>
            <CardContent
                sx={{
                    background: 'linear-gradient(90deg, rgba(87, 199, 133, 1) 26%, rgba(42, 123, 155, 1) 80%);',
                    height: '200px',
                    position: 'relative',
                }}>
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography my={'5px'} sx={{opacity: '.4'}}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant='subtitle1' fontWeight={'bold'}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography variant='subtitle2' sx={{opacity: '.6'}}>
                        {video?.snippet?.description.slice(0, 70)}
                    </Typography>
                </Link>

                <Stack
                    direction={'row'}
                    position={'absolute'}
                    bottom={'10px'}
                    alignItems={'center'}
                    gap={'5px'}
                >

                    <Link to={`/channel/${video.id.channelId}`}>
                        <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
                    </Link>

                    <Link to={`/channel/${video.id.channelId}`}>
                        <Typography variant={'subtitle2'} color={'gray'}>
                            {video?.snippet?.channelTitle}
                            <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                        </Typography>
                    </Link>



                </Stack>
            </CardContent>

        </Card>
    );
}

export default VideoCard;