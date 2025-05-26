import React from 'react';
import {Box,  CardContent, CardMedia, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";

function ChannelCard({video,marginAuto,marginTop}) {
    return (
        <Box sx={{
            boxShadow:'none',
            borderRadius:'5px',
            display:'flex',
            justifyContent:'center',
            margin:marginAuto,
            marginTop:marginTop,
            alignItems:'center',
            width:{xs:'356px',md:'310px'},
            height:'260px',
            background:'linear-gradient(90deg, rgba(87, 199, 133, 1) 26%, rgba(42, 123, 155, 1) 80%);',
        }}>
            <CardContent
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    textAlign:'center',
                    color:'white'
                }}>
                <CardMedia image={video?.snippet?.thumbnails.high?.url}
                           alt={video?.snippet?.title}
                           sx={{
                               width: '100px',
                               height: '100px',
                               borderRadius: '30%',
                               margin: '0 auto'

                           }}>
                    <Typography variant={'h6'} sx={{marginTop:'100px'}}>
                        {video?.snippet?.title}{''}
                        <CheckCircle sx={{fontSize:'14px',color:'white',ml:'5px'}} />
                    </Typography>
                    {video?.statistics?.subscriberCount && (
                        <Typography sx={{fontSize:'15px',fontWeight:'bold',color:'white'}}>
                            {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-Us')} Subscribers
                        </Typography>
                    )}

                </CardMedia>

            </CardContent>

        </Box>
    );
}

export default ChannelCard;