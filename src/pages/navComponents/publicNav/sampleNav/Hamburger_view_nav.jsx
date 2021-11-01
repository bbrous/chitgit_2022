import React  from 'react'

import{chitOrange, mediumGrey, lightGrey} from '../../../../styles/colors'







import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';

import PageNavVertical from './Page_nav_Vertical_s'

// Dialog Box imports
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';


 


import { styled, createTheme, useTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
const MenuItemStyled = styled(MenuItem)({
  color: 'black',
  fontSize: '.8rem'

  
})

const Wrapper= styled('div')({
  
zIndex: '99',
 
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Hamburger= styled(MenuIcon)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '1.2rem',
  margin: '0 .5rem',
 cursor: 'pointer',
   

 '&:hover': {
  color: mediumGrey
},
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StyledDisplay= styled(Paper)({
backgroundColor: lightGrey,
border: '1px solid grey'
})

const HamburgerViewNav = (props) => {


 // ----- Popup Menu actions  -------------------------
 
 const [open, setOpen] = React.useState(false);
 const anchorRef = React.useRef(null);

 const handleToggle = () => {
   setOpen((prevOpen) => !prevOpen);
 };

 const handleClose = (event) => {
  //  console.log('[HamburgerViewNav handleClose was clicked')
   if (anchorRef.current && anchorRef.current.contains(event.target)) {
     return;
   }

   setOpen(false);
 };
 function handleListKeyDown(event) {
   if (event.key === 'Tab') {
     event.preventDefault();
     setOpen(false);
   }
 }
   // return focus to the button when we transitioned from !open -> open
   const prevOpen = React.useRef(open);
   React.useEffect(() => {
     if (prevOpen.current === true && open === false) {
       anchorRef.current.focus();
     }
 
     prevOpen.current = open;
   }, [open]);

  return(

    <Wrapper>
      <Hamburger
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}



      />


      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{placement :'left-end'}}
          >
            <StyledDisplay>
              <ClickAwayListener onClickAway={handleClose}>
                
                <div><PageNavVertical handleClose = {handleClose}/></div>

                
              </ClickAwayListener>
            </StyledDisplay>

          </Grow>
        )}
      </Popper> 
    </Wrapper>
  )


}// end HamburgerViewNav

export default HamburgerViewNav