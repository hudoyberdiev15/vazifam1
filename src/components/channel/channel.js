import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {ApiServes} from "../apiServes/apiServes";
import ChannelCard from "../channel-card/channel-card";
import {Container} from "@mui/material";
import Videos from "../video/video";
import Box from "@mui/material/Box";


function Channel() {
 const [channelDetail,setChannelDetail] = useState()
 const [videos,setvideo] = useState([])
    const{id} =useParams()

    useEffect(()=>{
        const getData = async () => {
            try{
                const dataChannelDetail = await  ApiServes.fetching(`channels?part=snippet&id=${id}`)
                setChannelDetail(dataChannelDetail.items[0])

                const dataVideo =await ApiServes.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
                setvideo(dataVideo?.items)
            }catch(error){
                console.log(error)
            }
        }
        getData()
    },[id])

    return (
           <Box minHeight={'95vh'} mt={'1vh'}>
              <Box>
                  <Box
                   width={'100%'}
                   height={'200px'}
                   zIndex={10}
                   sx={{
                       backgroundImage:
                       `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                       backgroundPosition:'center',
                       backgroundSize:'cover',
                       objectFit:'cover',
                       backgroundRepeat:'no-repeat',
                   }}
                  >
                      <ChannelCard video={channelDetail} marginTop={'-100px'} marginAuto={'0 auto'}/>
                  </Box>
                  <Container maxWidth={'90%'} sx={{marginTop:'30px'}}>
                      <Videos videos={videos}/>
                  </Container>
              </Box>
           </Box>
    );
}

export default Channel;