import React from 'react'

import styled from 'styled-components'


import SlideComponent from './SlideComponent'


const Wrapper = styled.div`
  
  height: 400px;
  width: 60vw;
  border: 1px solid grey;
  border-radius: 25px;
  overflow: hidden;
 
  
`

export default function DummySlideComponent() {
  return (
    <Wrapper>
      < SlideComponent />
    </Wrapper>
  )
}
