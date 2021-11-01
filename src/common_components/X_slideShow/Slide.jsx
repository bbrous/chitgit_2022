import React, { Component } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser';
import media from '../../styles/MediaQueries'

const SlideWrapper = styled.div`
 
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  
  width:40rem;

  ${media.landscape.tablet`
   


  `}

  ${media.portrait.tablet`
 
 
  width: 50vw;
 
  justify-content:center;
  padding: 0;
  margin: 0 0 6vw 0;
  `}

  ${media.landscape.phone`
 
 
  width: 100%;
 
  justify-content:center;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
background-color: #F7F7F7;
  `}

  ${media.portrait.phone`
 
  width: 100vw;
 
  justify-content:center;
  padding: 0;
  margin: 0;
  
  `}

`

const Picture = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80%;

  padding-top: 2.5%;
  img{
    height: auto;
    width:80%;
 
    ${media.landscape.tablet`
    

    `}

    ${media.portrait.tablet`
       
      max-height: 200px;
    `}

    ${media.landscape.phone`
       
    max-height: 200px;
  `}

  ${media.portrait.phone`
       
      max-height: 200px;
    `}

`

const CaptionWrapper = styled.div`

display: flex;
justify-content:center;

width: 88%;
min-height: 15%;
 
padding: 1% 6% 1% 6%;
font-size: 1.2rem; 

${media.landscape.tablet`
margin-top: 3%;
width: 70%;

`}

${media.portrait.tablet`
background-color: white;
margin-top: .5rem;
width: 78%;
font-size: 1rem;
`}
 
${media.landscape.phone`
background-color: white;
margin-top: .5rem;
width: 88%;
color:#606062 ;
`}

${media.portrait.phone`
background-color: white;
margin-top: .5rem;
width: 78%;
`}

`
const Caption = styled.div`

display: flex;
width: 100%;
text-align: justify;
justify-content: center;
align-items: center;
  
  color:#606062 ;
    


`

export default function Slide(props) {

  
  const {slideIndex, picture, slideCaption} = props.slideInfo
  const parsedSlideCaption = parse(slideCaption)
  return (
    <SlideWrapper >
        <CaptionWrapper>
          <Caption> {parsedSlideCaption} </Caption>
        </CaptionWrapper>
        <Picture>    
          <img src= {picture} alt="slide"/>
        </Picture>
      </SlideWrapper>
  )
}
