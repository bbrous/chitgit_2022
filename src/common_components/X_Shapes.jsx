import React from 'react'
import styled from 'styled-components'
import media from '../styles/MediaQueries'


const CircleWrapper  = styled.div`
display: flex;
width: 1.5rem;
height:1.5rem;
margin: 0 .2vw;

color: white;

`


const PosChit  = styled.div`

width: 1.5rem;
height:1.5rem;
background-color: green;
color: white;
border-radius: 200px;

${media.landscape.tablet`
  
width: 1.25rem;
height:1.25rem;
`}

${media.portrait.tablet`
  
width: 1.25rem;
height:1.25rem;
`}

`

const NegChit  = styled.div`

width: 1.5rem;
height:1.5rem;
background-color: red;
color: white;
border-radius: 200px;

justify-self: flex-end;

${media.landscape.tablet`
  
width: 1.25rem;
height:1.25rem;
`}

${media.portrait.tablet`
  
width: 1.25rem;
height:1.25rem;
`}

`


const SquareWrapper  = styled.div`
display: flex;
width: 1rem;
height:1rem;
margin: 0 0
 

`

const SquareBlue  = styled.div`
display: flex;
width: 100%;
height:100%;


background-color:  #8293B8;

`

const SquareOrange  = styled.div`
display: flex;
width: 100%;
height:100%;


background-color:  #F9A971;

`

//================================


export const RedCircle = ()=> {
  return(
          <CircleWrapper>
            <NegChit></NegChit>
          </CircleWrapper>
  )
}

export const GreenCircle = ()=> {
  return(
          <CircleWrapper>
            <PosChit></PosChit>
          </CircleWrapper>
  )
}


export const BlueSquare = ()=> {
  return(
          <SquareWrapper>
            <SquareBlue></SquareBlue>
          </SquareWrapper>
  )
}

export const OrangeSquare = ()=> {
  return(
          <SquareWrapper>
            <SquareOrange></SquareOrange>
          </SquareWrapper>
  )
}