import React  from 'react'
import{chitRedDark} from '../../../../styles/colors'


import ManBox from '../../../../images/slides/description/manBox.jpg'


import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const NarWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '70%',
  
  [theme.breakpoints.down('sm')] : {
    width: '100%',
    // fontSize: '1.2rem',
 
  }

})

 

const NarDetail= styled('div')({


    display: 'flex',
    flexDirection: 'column',
    // padding: '0 auto 0 auto',
    color: 'black',
     marginTop: '1rem',
    fontSize: '.8rem',
    textAlign: 'left'  ,
    width: '80%',

    '& div': {
      padding: '0',
      margin: '3px'
    },

    '& span': {
      fontWeight:'bold'
    },

    '& em': {
      color: chitRedDark,
      fontStyle: 'normal',
      fontWeight: 'bold'
    },
  [theme.breakpoints.down('sm')] : {
    
    textAlign: 'left'  ,
    width: '80%',
  },
  [theme.breakpoints.down('xs')] : {
    width: '80%',
    
  }

})



// ----Slide 1 ------------------



const PictureStyle= styled('div')({

  display: 'flex',
  jutifyContent: 'center',
  alignItems: 'center',
  
  width: '60%',


  marginBottom: '1rem',

  [theme.breakpoints.down('sm')] : {
    width: '80%',
    jutifyContent: 'flex-start',
     
    marginBottom: '1rem'
  }
})








const PhonePortraitStyle= styled('img')({
  display: 'block',
  margin: 'auto',
  width: '18rem',
   
})



export const Picture6= () => {
  return (
    <PictureStyle>
      <PhonePortraitStyle src= {ManBox}   alt="Fired Man" /> 
      {/* <PhonePortraitStyle src= {ManComputer}   alt="Man on Computer" />  */}
  </PictureStyle>
  )
}


export const Narration6= () => {
  return (
    <NarWrapper>

      
      <NarDetail>
        <div>
          Chits travel with you over time and distance.  
          They follow with you throughout your
          career.
        </div>

        <div>
          When looking for a new job or  contract
          works or partnership, use chits to reconnect 
          with people from your past who you assisted.
        </div>
      </NarDetail>

    </NarWrapper>
  )
}