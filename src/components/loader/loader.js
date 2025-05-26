import React from 'react';
import {Box, Stack} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
    return (
       <Box minHeight={'90vh'}>
           <Stack style={{marginTop:'25px'}} alignItems={'center'} height={'80vh'}>
               <CircularProgress/>
           </Stack>
       </Box>
    );
}

export default Loader;