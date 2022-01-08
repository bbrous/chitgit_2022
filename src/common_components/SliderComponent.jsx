import React from "react";
 

 


import { purple } from "@mui/material/colors";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import {darkGrey} from '../styles/colors'


import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 56,
    height: 13,
    padding: 0,
    display: "flex",
    
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(40px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: 'lightGrey',
        borderColor: 'lightGrey',
      }
    }
  },
  thumb: {
    width: 8,
    height: 8,
    boxShadow: "none"
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(Switch);

const StyledGrid= styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'pink',
  fontSize: '.8rem',

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})

const Label= styled('div')({
    color: darkGrey,
    margin: ' 0 5px', 

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})


// ===================================

function SliderComponent(props) {

  let handleSwitchState = props.handleSwitchState
  let leftLabel = props.leftLabel
  let rightLabel = props.rightLabel

  const [state, setState] = React.useState({

    switchName: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    handleSwitchState(state.switchName)
    console.log(state.switchName);
  };

  return (
    <FormGroup>
      <Typography component="div">
        <StyledGrid component="label" container = {true} spacing={1}>
          <Label>{rightLabel}</Label>
          <div>
            <AntSwitch
              checked={state.switchName}
              onChange={handleChange}
              name="switchName"
            />
          </div>
          <Label>{leftLabel}</Label>
        </StyledGrid>
      </Typography>
    </FormGroup>
  )
}

export default SliderComponent
