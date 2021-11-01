import React, {Fragment} from 'react'


 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles'
import Logo from '../../../images/logo_header.svg'
import TabsHeader from './Tabs_header'
 

 






const useStyles = makeStyles(theme =>
  {
    // get common colors from them palette
    const {common} = theme.palette 

    const {testRed,testYellow, testGreen, testBlue, testAqua, testPurple, testPink, testLavendar} = theme.palette.common 
     

    return  ({

      toolbarMargin: {
        // ...theme.mixins.toolbar
        height: '5rem'
      },
      appBarStyle: {
        
        background: common.headerGrey
        
      },
      logoStyle: {
        height: '5rem',
        marginBottom: '0px'
   
      },
      
      logoBox: {
         
        width: '34vw',
        marginBottom: '0px',
display: 'flex',
background: common.headerGrey
      },
      navBox: {
         
        width: '33vw',
        marginBottom: '0px'

      },
      formBox: {
        background: common.chitOrangeLight,
        width: '33vw',
        marginBottom: '0px'

      }    

    })
  }
)


 const Header_Landing = () => {
   
   const classes = useStyles()
   const {toolbarMargin, appBarStyle, logoStyle, formBox, logoBox, navBox} = classes

  return (

     <Fragment>
  
      <AppBar position="fixed" 
              className = {appBarStyle} 
              >
      
         
                  
        <Toolbar disableGutters >
           <div className = {logoBox}>
        <img src= {Logo}  alt="Chit Git Logo"
          className = {logoStyle}
        />
        </div>

        <div className = {navBox}>
         <TabsHeader/>
         </div>

         <div className = {formBox}  > form here </div>

        </Toolbar >
      
      </AppBar>
      
  
 <div className = {toolbarMargin}>hello</div>

 </Fragment>
  )
}

export default Header_Landing
