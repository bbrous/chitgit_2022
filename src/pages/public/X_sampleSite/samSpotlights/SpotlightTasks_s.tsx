import React from 'react'
// import { grommet, Grommet } from "grommet";

import SortableTree from './taskTree/components/SortableTree'

import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      maxWidth: 600,
      padding: 10,
      margin: "0 auto",
      marginTop: "10%"
    }}
  >
    {children}
  </div>
);
// import SortableTree from './components/SortableTree'



const theme = createMuiTheme(); // allows use of mui theme in styled component


// ==== Begin Styling ==================================================

const TasksWrapper= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginTop: '.5rem',

  backgroundColor: 'white',
  width: '98%',
    height: '600px',

// backgroundColor: 'purple',
overflow: 'auto'

})

const SortableTasks = () => {
  return (
    // <Grommet theme={grommet}>
      <TasksWrapper>  
      <SortableTree collapsible indicator 
      // removable
      />


 </TasksWrapper>
//  </Grommet>
  )
}

export  default SortableTasks
