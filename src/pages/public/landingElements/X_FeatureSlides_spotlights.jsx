/* FeatureSlides_spotlights .jsx
   
   
    parent: Features- src/pages/public/Features.jsx

*/

import {NarrationOne, PicOne} from '../slides/featureSlides/spotlightSlides/Spot_slide_one'
import {NarrationTwo, PicTwo} from '../slides/featureSlides/spotlightSlides/Spot_slide_two'
import {NarrationThree, PicThree} from '../slides/featureSlides/spotlightSlides/Spot_slide_three'


import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------



const SlideContent= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
  marginTop: '12rem',
  width: '100%',
  minHeight: '15rem',
  // marginBottom: '5rem',

  borderBottom: '1px solid #E6E7E8',
  


  [theme.breakpoints.down('md')] : {
    // backgroundColor: 'orange'
  },

  [theme.breakpoints.down('sm')] : {
     
  },

  [theme.breakpoints.down('xs')] : {
     
    
  }


})



const SlideWrapper= styled('div')({
position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row-reverse',
   
  width: '100%',
  // height: '60vh',
  minHeight: '15rem',
  overflow: 'hidden',
  backgroundColor: 'white',
  padding: '.5rem 0',
  borderBottom: '1px solid #E6E7E8',
  maxWidth: '65rem',

  [theme.breakpoints.down('xs')] : {
    flexDirection: 'column',
    padding: '.5rem 0',
  }
})

const Narration= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  jutifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  height: '100%',
   
  [theme.breakpoints.down('xs')] : {
    width: '100%'
  }
})

const Picture= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  jutifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  height: '100%',
  backgroundColor: 'purple',

  // height: '100%',
  [theme.breakpoints.down('xs')] : {
    width: '80%',
    jutifyContent: 'flex-start',
  }

})



function FeatureSlides_spotlights() {
  return (
    <SlideContent>

      <SlideWrapper>

        <Picture>
          <PicOne />
        </Picture>

        <Narration>
          <NarrationOne />
        </Narration>


      </SlideWrapper>

  {/* --------------------------------------- */}
      <SlideWrapper>

        <Picture>
          <PicTwo />
        </Picture>

        <Narration>
          <NarrationTwo />
        </Narration>


      </SlideWrapper>

  {/* --------------------------------------- */}
      <SlideWrapper>

        <Picture>
          <PicThree />
        </Picture>

        <Narration>
          <NarrationThree />
        </Narration>


      </SlideWrapper>

  {/* --------------------------------------- */}
    </SlideContent>
  )
}

export default FeatureSlides_spotlights



 
