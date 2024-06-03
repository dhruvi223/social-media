//react imports
import React from 'react'

//mui imorts

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

//mui icons
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import thread from '../assets/thread.svg'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MenuIcon from '@mui/icons-material/Menu';

function ProfilPage() {
  return (
      <React.Fragment>
      <CssBaseline />
      <Container fixed >
        <Box sx={{height: '100vh', padding: '40px' }} >
        <Box sx = {{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Box sx = {{display:'flex', flexDirection: 'row'}}>
                <LockOutlinedIcon fontSize='large'/>
                <Typography fontSize={'23px'} sx = {{paddingLeft: '10px', paddingTop: '2px', fontWeight: 'bold'}}>user_name</Typography> 
                <KeyboardArrowDownOutlinedIcon fontSize='medium' sx = {{ marginTop: '8px', paddingLeft: '2px'}}/>  
            </Box>

            <Box>
              <img src = {thread} style={{width: '25px'}}></img>
              <AddOutlinedIcon fontSize='medium' sx = {{border: 2, borderRadius: 1.5, marginLeft: '25px'}}/>
              <MenuIcon sx = {{marginLeft: '25px', fontSize: '33px', paddingTop: '5px'}}/>
            </Box>
        </Box>

        <Box sx = {{display: 'flex', justifyContent: 'space-between'}}>

        </Box>





        </Box>
      </Container>
    </React.Fragment>
  )
}

export default ProfilPage
