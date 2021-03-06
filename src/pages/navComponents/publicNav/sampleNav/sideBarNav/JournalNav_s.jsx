/*---- File - JournalNav_s.jsx 
   Creates options to filter Journal


   
*/



import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {veryDarkBlue,lightGrey,  chitOrange,veryLightGrey, chitRedDark, chitOrangeLight,chitBlueDull,darkGrey, chitAquaBlue, chitGold, mediumGrey, chitBurgandy} from '../../../../../styles/colors'

 
import Paper from '@mui/material/Paper'
 

import { selectJournals } from '../../../../../app/redux/journalRedux/sam_journalSlice';

import { selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice'

import { updateJournalView } from '../../../../../app/redux/statusRedux/sam_statusSlice'

import { descendSorter } from '../../../../../app/helpers/commonHelpers';


import { makeStyles  } from "@mui/styles"
import { styled, createTheme  } from "@mui/material/styles"

import { monthArray } from '../../../../../app/helpers/dateHelper';

const theme = createTheme(); // allows use of mui theme in styled component






 


// =========================================

function JournalNav() {
  let dispatch = useDispatch()
  
  let initialStatus = useSelector(selectStatus)
 
  let yearView = initialStatus.view.journal.year
  let monthView = initialStatus.view.journal.monthId

  const [displayYear, setDisplayYear] = useState(yearView)
  const [displayMonth, setDisplayMonth] = useState(monthView)

  useEffect(() => {
    setDisplayYear(yearView)
    setDisplayMonth(monthView)

  }, [yearView, monthView])


 // map months for display in side panel

  const displayMonthOptions =  monthArray.map((month, index) => {

  
      if(month !== displayMonth) {
        return(

          <MonthWrapper id= {month} key= {month}
          onClick={(evt) => handleChangeMonth(evt)}
        >{month}</MonthWrapper>

        )

      }

      if(month === displayMonth) {
        return(

          <MonthWrapperSelected id= {month} key= {month}
          onClick={(evt) => handleChangeMonth(evt)}
        >{month}</MonthWrapperSelected>

        )

      }



  

  })




  const handleChangeYear = (evt) => {
    let newYear = evt.currentTarget.value
    console.log('[ Journal Nav ] newYear ', newYear);
 
    dispatch(updateJournalView({
      year: newYear,
      monthId: 'all'
     }))
  }

  const handleChangeMonth = (evt) => {
    let newMonth = evt.currentTarget.id
 
    console.log('[ Journal Nav ] newMonth ', newMonth);
    dispatch(updateJournalView({
      monthId: newMonth,
     }))
  }
 

  return (
    <Wrapper>


      <YearWrapper elevation={1}>
        <FilterTitle> Filter</FilterTitle>

        <StyledSelectField name="yearFilter" id="yearFilter"
        onChange={(value) => handleChangeYear(value)}
        >

          <option value="2021">current year</option>
          <option value="2020">2020</option>

        </StyledSelectField>

      </YearWrapper>
      <MonthContainer>

        {displayMonth !== 'all' && 

        <AllContainer id='all' key='all'
          onClick={(evt) => handleChangeMonth(evt)}
        >All Sections </AllContainer>

}

{displayMonth === 'all' && 

<AllContainerSelected id='all' key='all'
  onClick={(evt) => handleChangeMonth(evt)}
>All Sections </AllContainerSelected>

}





{displayMonthOptions}

        {/* <MonthWrapper id='Mar' key='Mar'
          onClick={(evt) => handleChangeMonth(evt)}
        >March</MonthWrapper>
        <MonthWrapper id='Feb' key='Feb'
          onClick={(evt) => handleChangeMonth(evt)}
        >February</MonthWrapper>
        <MonthWrapper id='Jan' key='Jan'
          onClick={(evt) => handleChangeMonth(evt)}
        >January</MonthWrapper> */}

      </MonthContainer>

    </Wrapper>
  )
}

export default JournalNav
// -------------------------------

const Wrapper= styled('div')({

  display: 'block',
  width: '100%',
  position: 'relative',
  backgroundColor: 'white',
  // backgroundColor: 'orange',

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})


const YearWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  color: 'black',
  
  
  cursor: 'pointer',
  width: '100%',
  height: '6rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
 
  borderRadius: '0',
  border: '1px solid #F6F7F8', 
 
    '&:hover' : {
      // backgroundColor: 'white',
        color: chitOrange,
    },


})


const FilterTitle= styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '100%',
  height: '1.7rem' ,
  fontSize: '1.1rem',
  color: chitBurgandy,
  marginBottom: '1rem',
  })

const MonthContainer= styled('div')({

  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: 'white',
  // backgroundColor: 'orange',

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})

const MonthWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '100%',
  height: '1.7rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 8px',

  cursor: 'pointer',
  borderRadius: '0',
    '&:hover' : {
      // backgroundColor: veryLightGrey,
      color: chitOrange,
    },
  })

  const AllContainer= styled(Paper)({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    width: '100%',
    height: '1.7rem' ,
    fontSize: '.85rem',
    marginTop: '.2rem',
    padding: '0 8px',
  
    cursor: 'pointer',
    borderRadius: '0',
      '&:hover' : {
        // backgroundColor: veryLightGrey,
        color: chitOrange,
      },
    })

    const AllContainerSelected= styled(Paper)({

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      
      width: '100%',
      height: '1.7rem' ,
      fontSize: '.85rem',
      marginTop: '.2rem',
      padding: '0 .5rem',
      borderRadius: '0',
      color: 'white',
      backgroundColor: mediumGrey
    
    
    
    })
  
const MonthWrapperSelected= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '100%',
  height: '1.7rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',
  color: 'white',
  backgroundColor: mediumGrey



})




// const useStyles = makeStyles({
//   root: {
//     height: 240,
//     flexGrow: 1,
//     maxWidth: 400,
//   },
// });



const StyledSelectField= styled('select')({
  border: '1px solid grey',
  borderRadius: '5px',
  width: '80%', 
  textAlign: 'center',
  fontSize: '.85rem',
  // width: '16rem',
  padding: '4px',
  backgroundColor: 'white',
  color: darkGrey,


})