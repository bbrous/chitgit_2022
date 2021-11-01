import React from 'react'
import styled from 'styled-components'
import media from '../../styles/MediaQueries'


const SlideNavWrapper = styled.div`

  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  width: 91%;
  padding-right: 5%;
  margin: 2.2% 2% 0 2%;
  line-height: 1.8;

  background-color: #F0F0F0;

  ${media.landscape.tablet`
 
 

  `}

  ${media.portrait.tablet`
 
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  width: 91%;
  padding-right: 5%;
  margin: .2% 2% 0 2%;
  line-height: 1.8;

  background-color: #F0F0F0;
  `}

  ${media.landscape.phone`
 
  display: none;
  `}

  
  ${media.portrait.phone`
 
  display: none;
  `}


`

const ButtonBack = styled.div`
  border-color: transparent black;
  border-style: solid;
  border-width: .8rem .8rem .8rem 0;
  height: 0px;
  width: 0px;
  cursor: pointer;

    :hover{
      border-color: transparent #FF6600 ;
    }

`

const ButtonNext = styled.div`
  
  border-color: transparent black;
	border-style: solid;
	border-width: .8rem  0  .8rem .8rem;
	height: 0px;
  width: 0px;
  cursor: pointer;

  :hover{
    border-color: transparent #FF6600 ;
  }
`
const NavNumber = styled.div`
  
  font-size: 1.4rem;
  margin: 0 .8vw 0 .8vw;
`

export default function SlideNav(props) {
  const previousSlide = props.previous
  const nextSlide = props.next
      // console.log('current Slide is in Nav : ', props.slideData.currentSlide)
      // console.log('total Slides in Nav : ', props.slideData.slideInfo.length)

  let currentSlide = parseInt(props.slideData.currentSlide) + 1 
  let totalSlides = parseInt(props.slideData.slideInfo.length) 

  return (
    <SlideNavWrapper>
      <ButtonBack onClick = {previousSlide}> </ButtonBack>
      <NavNumber> {currentSlide} of {totalSlides} </NavNumber>
      <ButtonNext onClick = {nextSlide}> </ButtonNext>
      
    </SlideNavWrapper>
  )
}
