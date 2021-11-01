import React, { Component } from 'react'
import styled from 'styled-components'
import media from '../../styles/MediaQueries'
import Slide from './Slide'

const SlidesWrapper = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: row;
  
  position: relative;

 

  ${media.portrait.tablet`

  display: flex;
  justify-content: center;
  flex-direction: row;
  
  position: relative;
  `}

  ${media.landscape.phone`
  flex-direction: column;

  `}
 
  ${media.portrait.phone`
  flex-direction: column;


  `}
`


export default function Slides(props) {



const {slideInfo, currentSlide} = props.slideData
    // console.log('Current slide in Slides is : ', currentSlide)

  return (
    <SlidesWrapper style = {{'left': `
      -${currentSlide * 100}%
    `}}>
        
         {
          slideInfo.map ((singleSlide) =>
          <Slide 
          key = {singleSlide.slideIndex} 
          slideInfo = {singleSlide}
          
          
          />
         )
         }
        
         
        

      </SlidesWrapper>
  )
}


