/* Landing_slides - pitch deck
   wrapper for individual slides:
      - each slide consists of 2 parts : narration and picture
      - each slide is formatted to swap from left to right and back again

   children slides:
    {Picture1, Narration1} from '../slides/homeSlides/Description_one'
    import {Picture2, Narration2} from '../slides/homeSlides/Description_two'
    etc. etc
   parent: /src/public/Landing
*/

import React  from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import{setPage} from '../../../app/redux/actions/X_landingActions'


import {Picture1, Narration1} from '../slides/homeSlides/Description_one'
import {Picture2, Narration2} from '../slides/homeSlides/Description_two'
import {Picture3, Narration3} from '../slides/homeSlides/Description_three'

import {Picture4, Narration4} from '../slides/homeSlides/Description_four'
import {Picture5, Narration5} from '../slides/homeSlides/Description_five'
import {Picture6, Narration6} from '../slides/homeSlides/Description_six'
import {Picture7, Narration7} from '../slides/homeSlides/Description_seven'

import {JoinButtonSlides, FeatureButtonSlides} from './Nav_buttons'


import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component




// ==========================================================
 

const Landing_slides = (props) => {

  const handlePageChange = (evt)=>{
    evt.persist()
    console.log('I BE CLICKED in TP :: ', evt.currentTarget.id)
    props.setPage( evt.currentTarget.id) //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
     
  }

  // let page = props.page.public.page

  return (
    <SlideContent>
 
      
      <SlideWrapperReverse>

        <Picture>
          <Picture7 />
        </Picture>

        <Narration>
          <Narration7 />
        </Narration>


      </SlideWrapperReverse>

       <SlideWrapper>

       <Picture>
          <Picture1/>
        </Picture>

       <Narration>
          <Narration1/>
        </Narration>

          
      </SlideWrapper>


      <SlideWrapperReverse>

        <Picture>
          <Picture2/>
        </Picture>

        <Narration>
          <Narration2/>
        </Narration>

        
      
      </SlideWrapperReverse>


      <SlideWrapper>
      
        <Picture>
          <Picture3/>
        </Picture>

        <Narration>
          <Narration3/>
        </Narration>

      </SlideWrapper> 


      <SlideWrapperReverse>

        <Picture>
          <Picture4/>
        </Picture>

        <Narration>
          <Narration4/>
        </Narration>



      </SlideWrapperReverse>


      <SlideWrapperReverse>

        <Picture>
          <Picture5/>
        </Picture>

        <Narration>
          <Narration5/>
        </Narration>

      </SlideWrapperReverse> 

            <SlideWrapper>

        <Picture>
          <Picture6/>
        </Picture>

        <Narration>
          <Narration6/>
        </Narration>



      </SlideWrapper>  

      <ButtonWrapper>

        <StyledLink to="/features" id = 'features' onClick = {handlePageChange}>
          <FeatureButtonSlides />
        </StyledLink>

        <StyledLink to="/join" id = 'join' onClick = {handlePageChange}>
          <JoinButtonSlides />
        </StyledLink>

      </ButtonWrapper>

    </SlideContent>


  )
}

const actions = {
  setPage 
}

const mapState = state => ({
  page: state
});

export default connect(mapState, actions)(Landing_slides)

 
// -----------------------------------------------------------------



const SlideContent= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100vw',
  minHeight: '15rem',
  // marginBottom: '5rem',
  background: 'white',
  borderBottom: '1px solid #E6E7E8',
  


  [theme.breakpoints.down('sm')] : {
  
  },

  [theme.breakpoints.down('sm')] : {
     
  },

  [theme.breakpoints.down('xs')] : {
     
    
  }


})

const SlideWrapper= styled('div')({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100vw',
  minHeight: '15rem',
  // marginBottom: '5rem',
 padding: '2.5rem 0',
  borderBottom: '1px solid #E6E7E8',
  maxWidth: '65rem',
  
  // overflow: 'hidden',

  [theme.breakpoints.down('sm')] : {
    flexDirection: 'column',
    padding: '.5rem 0',
    width: '96vw',
      
  }
// backgroundColor: 'green'

})

const SlideWrapperReverse= styled('div')({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row-reverse',
   
  width: '100vw',
  // height: '60vh',
  minHeight: '15rem',
  overflow: 'hidden',
  backgroundColor: 'white',
  padding: '2.5rem 0',
  borderBottom: '1px solid #E6E7E8',
  maxWidth: '65rem',

  [theme.breakpoints.down('sm')] : {
    flexDirection: 'column',
    
    padding: '.5rem 0',
    width: '96vw',
     
  }
})

const Narration= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  jutifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  height: '100%',
   
  [theme.breakpoints.down('sm')] : {
    width: '100%',
    
  }
})

const Picture= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  jutifyContent: 'center',
  alignItems: 'center',
  width: '50%',

  // height: '100%',
  [theme.breakpoints.down('sm')] : {
    width: '80%',
    jutifyContent: 'flex-start',
  }

})

const ButtonWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  jutifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginBottom: '2rem',


  // height: '100%',
  [theme.breakpoints.down('xs')] : {
    
  }

})


const StyledLink= styled(Link)({

  textDecoration: 'none',

})