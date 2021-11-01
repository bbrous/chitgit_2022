import React, {Fragment, useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'



import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styled, createMuiTheme, makeStyles } from "@material-ui/core/styles"
const theme = createMuiTheme(); // allows use of mui theme in styled component

const LoadWrapper= styled('div')({
  color: 'blue',
  fontSize: '24px'


})  


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
 
  },
}));

 
const LoadingIndicator = () => {

  
  const loading  = useSelector(state => state.async.loading)
  const [open, setOpen] = useState(false);

  useEffect(() => {  

    setOpen(loading)
    
  }, [loading]);


  // loading indicator setup ------------
  const classes = useStyles();



  return (
    <Fragment>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
        <LoadWrapper>loading...</LoadWrapper>
      </Backdrop>
    </Fragment>
  )
}

export default LoadingIndicator
