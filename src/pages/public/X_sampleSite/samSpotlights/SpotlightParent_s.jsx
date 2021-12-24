import React, {useState, useEffect}  from 'react'
import {useHistory, useRouteMatch, match, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import{ selectSpotlights, 
  makeSelectSpotlights,
  selectTasks,
  makeGetSpotlight,
  selectSpotlightTaskArray
  
} from '../../../../app/redux/spotlightRedux/X_sam_selectors_Spotlights'

import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, mediumGrey, mediumLightGrey,  veryLightGrey, chitOrangeVeryLight} from '../../../../styles/colors'

// MaterialUi icons -------------
import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
import ForwardIcon from '@material-ui/icons/Forward';
const theme = createMuiTheme(); // allows use of mui theme in styled component




// -------------------------------
const ParentContainer = styled(Paper)({
  display: 'block',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  color: 'grey',
  width: '98%',

  minHeight: '1rem',
 
  
  marginTop: '6px',
   padding: '0 .5rem',

  //  '&:hover' : {backgroundColor: chitOrangeVeryLight},


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})

const ParentDetail= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100%',
  width: '100%',

  color: chitBlueDull,
  fontSize: '.8rem',

// backgroundColor: 'aqua',

'& .parentTitle' : {
  color: 'red',
  marginRight: '4px'

},

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const ParentLinkWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  margin: '4px .5rem 4px 0',
  border: '1px solid orange',
  borderRadius: '200px',

  // color: mediumLightGrey,
  
  cursor: 'pointer',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const ParentLink= styled(ForwardIcon)({
  display: 'inline-block',
  width: '1.1rem',
  height: '1.1rem',
   
  transform:'rotate(-90deg)',
    
  color: chitOrange,

  '&:hover' : {
     
    color: chitOrangeLight
  },

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const SpotlightParent = (props) => {

  let history = useHistory()
 
    const parentId = props.parentId

   // if a parentId is passed, get the detail of the parent spotlight 
    let parentSpotlight, title

//  console.log('[SpotlightParent] - parentIdis' , parentId)


    if (parentId) {
      parentSpotlight = props.spotlight.spotlight
      title = parentSpotlight.title
     
 
    }


  const handleChangeSpotlight= (evt)=>{
      
      history.push(`/sample/spotlights/${evt.currentTarget.id}`)

      }

  return (
    <>
      <ParentContainer>

        {parentId  &&
          <ParentDetail>

            <ParentLinkWrapper 
            id = {parentId}
             onClick = {(evt)=>{
              handleChangeSpotlight(evt)
            }}  >
              <ParentLink />

            </ParentLinkWrapper>

            <div className='parentTitle' > Parent :  </div>
            <div>   {title} </div>
          </ParentDetail>
        }
      </ParentContainer>
    </>
  )
}


const makeMapStateToProps = () => {
  const getSpotlight = makeGetSpotlight()

 
  return (state, ownProps) => 
     {
      const matchid = ownProps.parentId
       return {

         spotlight: getSpotlight(state, matchid),

     
     }}
 
  
 };
 
// ------------------------------------------


export default withRouter(connect(makeMapStateToProps)(SpotlightParent))
