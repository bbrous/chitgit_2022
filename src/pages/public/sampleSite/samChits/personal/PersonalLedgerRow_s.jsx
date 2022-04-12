/* function PersonalLedgerRow (props) -------------------
 
 
  parent: ./PersonalLedger
------------------------------------*/

import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'





import { veryLightGrey, lightGrey, chitBlueDull, mediumGrey, chitBurgandy } from '../../../../../styles/colors'

import { updateAccordionDisplay, selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';

import { selectCategories } from '../../../../../app/redux/categoryRedux/sam_categorySlice';
import { choosePersonalCoin, categoryChitFilter } from '../../../../../app/helpers/chitHelpers';


import { ISOtoUTC, UTCtoISO, UTCtoDateTradional , ISOtoTraditional} from '../../../../../app/helpers/dateHelper';


import EditIcon from '../../samComponents/Edit_icon_s'
import DeleteIcon from '../../samComponents/Delete_icon_s'
import TimeLock from '../../samComponents/TimeLock_icon_s';


 import { Paper } from '@mui/material';
 import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 import ExpandLessIcon from '@mui/icons-material/ExpandLess';
 

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component


const Wrapper = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  //   alignItems: 'center',
  backgroundColor: 'white',
  width: '98%',
  padding: '3px 6px',
  margin: '3px 0',
  borderRadius: '5px',
  border: '1px solid #A49AED',

  boxShadow: '1px 2px #CFD0D1'


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

// ---- Top header-------------------

const HeaderWrapper = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '.7rem',
  borderBottom: '1px solid #E6E7E8',
  width: '100%',
  padding: '0 0 4px 0',
  margin: '0 0 4px 0',


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const NameContainer = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.7rem',
  width: '30%',
 
 


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})



const NameWrapper = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.75rem',
  color: chitBurgandy,



  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

 

const DateContainer = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '30%',
color: mediumGrey,

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

// ==- Accordion ------------------------

const AccordionWrapper = styled('div')({
 

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: '.75rem',

 
  width: '100%',




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const AccordionTopWrapper = styled('div')({

  // backgroundColor: 'yellow',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.85rem',
  width: '96%',
  minHeight: '30px',




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const ChitContainer = styled('div')({

  // backgroundColor: 'red',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3.5rem',
  height: '3.5rem'
  


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const ChitTypeWrapper = styled('div')({

  // backgroundColor: 'red',
  fontSize: '.65rem',
  color: mediumGrey
  


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const StyledImage = styled('img')({

 
  display: 'flex',
 
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '2.5rem',
  height: '2.5rem',
   
 




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const RightContainer = styled('div')({

  // backgroundColor: 'pink',
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: 'calc(90% - 1rem)',
  padding: '0 0 0 1rem',
   borderLeft: '1px solid #E6E7E8'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const TopRightContainer = styled('div')({

  // backgroundColor: 'orange',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  fontStyle: 'italic',
  fontSize: '.8rem',
  // fontWeight: 'bold',
  marginBottom: '4px',
  color: mediumGrey,



  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },


  
})
const BottomRightContainer = styled('div')({

  // backgroundColor: 'green',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
   
 




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const AccordionBottomWrapper = styled('div')({
  
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.85rem',
  width: '96%',
  minHeight: '40px',
  margin: 0, 
  
  borderTop: '1px solid grey'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const AccordionDetailWrapper = styled('div')({
 
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.85rem',
  width: '100%',
  minHeight: '40px',
  margin: 0, 
  paddingLeft: '1rem',
  // borderTop: '1px solid grey'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

 


// const AccordionIconWrapper= styled('div')({
//     backgroundColor: 'grey',
//     display: 'flex',
//     position: 'relative',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     fontSize: '.7rem',
//     width: '16px',

//     margin:0, padding: 0,


//   //   [theme.breakpoints.down('sm')] : {
//   //     // width: '100%'
//   //   },

//     })


const IconWrapper= styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-end',
  alignItems: 'center',
 
  marginRight: '6px',

  width: '40%',
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// --- Accordion Detail CSS ---

const LeftDetailWrapper = styled('div')({

 
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3.5rem',
 
  

 
  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})


const MiddleDetailWrapper = styled('div')({
 
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '40%',
  height: '100%',
   
  paddingTop: '8px',
  // padding: '0 0 0 1rem',
  //  borderLeft: '1px solid #E6E7E8'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const RightDetailWrapper = styled('div')({

  // backgroundColor: 'pink',
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '40%',
  height: '100%',
   
  paddingTop: '8px',
  // padding: '0 0 0 1rem',
  //  borderLeft: '1px solid #E6E7E8'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const DetailWrapper = styled('div')({
 
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '100%',



  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const DetailTitle = styled('div')({

 
  display: 'flex',

  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '40%',
  fontStyle: 'italic',
  fontSize: '.75rem',
  color: mediumGrey,
  // padding: '0 0 0 1rem',
  //  borderLeft: '1px solid #E6E7E8'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const Detail = styled('div')({

 
  display: 'flex',

  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '50%',
 
  // padding: '0 0 0 1rem',
  //  borderLeft: '1px solid #E6E7E8'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const SearchWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: veryLightGrey,
  width: '100%',
  
  margin: '5px 0 0 0',
backgroundColor: veryLightGrey,
  fontSize: '.6rem',
  height: '.8rem',
  color: mediumGrey,
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const LeftSearchWrapper = styled('div')({

 
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '4.5rem',
 
  

 
  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const KeyWordWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'grey',
 
  '& em' :{
    marginRight: '1rem'
  },
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const StyledDetail= styled('div')({

 lineHeight: .5,
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


// ==============================================================


const options = {
  replace: (domNode) => {
    if (domNode.attribs && domNode.attribs.class === "remove") {
      return <></>;
    }
  }
};

export default function PersonalLedgerRow(props) {

  const {id, category, chitColor, dateCreated, chitDate, timeLock,  workRelated, detail,  keyWordArray} = props.data

  let dispatch = useDispatch()
  let passedId = id
  let[ passedCategory, setPassedCategory] = useState(category)
  useEffect(()=>{
    setPassedCategory(category)
  }, [category])

  
  let status = useSelector(selectStatus)
  let allCategories = useSelector(selectCategories)
  console.log('[ PersonalLedgerRow ] allCategories ', allCategories);
  
 



  let coinAddress = choosePersonalCoin(chitColor)
  const pathToCoinImages = '../../../'
  const coinDisplayed = pathToCoinImages + coinAddress

    //--- get Name to be displayed  ---
    let categoryName, categoryObject 
    categoryObject = allCategories.find(category => category.id === passedCategory)

    categoryName = categoryObject.category

  // convert Dates for display

  let styledChitDate = ISOtoTraditional(chitDate)
  


  // format keywords
  let styledKeywords = ''

  if (keyWordArray.length > 0) {
    //    keyWordArray.map((keyword) => {
    //   styledKeywords = styledKeywords  + keyword + ' , '

    //   return styledKeywords
    // }
    // ) //end map

  for(let i = 0; i < keyWordArray.length; i++){
    if(i === keyWordArray.length - 1){
      styledKeywords += keyWordArray[i]  
    }else{
    styledKeywords += keyWordArray[i] + ' , '
    }
  }
 

  }//end if keyword.length > 0

  if (keyWordArray.length === 0) {
styledKeywords = 'none'
  }


  return (
    <Wrapper key = {passedId}>
      <HeaderWrapper>


        <DateContainer>{styledChitDate}</DateContainer>

        <NameContainer>
          <NameWrapper>
            {categoryName}
          </NameWrapper>

          <IconWrapper>

            <TimeLock />
            <DeleteIcon />
            <EditIcon />



          </IconWrapper>


        </NameContainer>

      </HeaderWrapper>


      <AccordionWrapper>



<AccordionTopWrapper >

  <ChitContainer>
  <StyledImage src={coinDisplayed} alt="coin" />
  <ChitTypeWrapper> Personal</ChitTypeWrapper>
    
  </ChitContainer>

  <RightContainer>


    <BottomRightContainer>
    <StyledDetail dangerouslySetInnerHTML={{__html: detail}}>
  </StyledDetail>     

    </BottomRightContainer>
  </RightContainer>   



</AccordionTopWrapper>

<SearchWrapper>
              <LeftSearchWrapper />
              <KeyWordWrapper>  <em> keywords:  </em>{styledKeywords}</KeyWordWrapper>

            </SearchWrapper>
</AccordionWrapper>





      
    </Wrapper>
  );
}

