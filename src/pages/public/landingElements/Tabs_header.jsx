import React, {useState, useEffect} from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom'

const AntTabs = withStyles(theme => ({
  root: {
   color: theme.palette.common.chitOrangeLight,
   width: '100%',
   backgroundColor: theme.palette.common.headerGrey,
 
  },
  indicator: {
    backgroundColor: theme.palette.common.chitOrangeLight,
  }
}))(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    minWidth: 72,

    
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "theme.palette.common.chitOrangeLight,",
      opacity: 1
    },
    "&$selected": {
      color: theme.palette.common.chitOrangeLight,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '1.05rem'

      
       
    },
    "&:focus": {
      color: "theme.palette.common.chitOrangeLight,"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo1: {
    backgroundColor: theme.palette.common.headerGrey,
    position: 'relative',
    display: 'flex',
    top: '15px',
    width: '100%'
  }
}));

export default function Tab_header() {
  const classes = useStyles();
  const [value, setValue] =  useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log('hi', {value})
  };

  useEffect(() =>{
    if(window.location.pathname ==='/'  && value !==0){
      setValue(0)
    } else if (window.location.pathname ==='/features'  && value !==0){
      setValue(1)
    } 
  }, [value]
  )

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="ant example"
       
          
        >
          <AntTab label="Home" component = {Link} to = '/'/>
          <AntTab label="Features" component = {Link} to = '/features' />
          
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
      
    </div>
  );
}
