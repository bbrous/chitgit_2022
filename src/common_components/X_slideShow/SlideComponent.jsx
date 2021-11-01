/*
  Important Note:  For responsive:  

  The WebSite slide container must be set to vw size
  Then all components of slide show must also be 
  set to same vw size as WebSite slide Container  ...


*/


import React, { Component } from 'react'
import styled from 'styled-components'

import SlideNav from './SlideNav'
import Slides from './Slides'
import SlideData from './SlideData'
import media from '../../styles/MediaQueries'

const ComponentWrapper = styled.div`
 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;


  ${media.landscape.tablet`
 
   

  `}

  ${media.portrait.tablet`
  justify-content: space-around;
 
  `}

  ${media.portrait.phone`
  
  margin:0;
  padding: 0;
  
  `}


`

const SlideWindow = styled.div`
 

  display: flex;
  overflow: hidden;
  width: 40rem;
  height: 100%;

  ${media.landscape.tablet`
   

  `}

  ${media.portrait.tablet`

  display: flex;
  overflow: hidden;
  width: 50vw;
  height: 50vw;
 


  `}
  ${media.landscape.phone`

  grid-row: 1 / 2;
  grid-column: 2/ 3;
  width: 70vw;
  display: flex;
  flex-direction: column;
  overflow: auto;


  `}

  ${media.portrait.phone`

  grid-row: 1 / 2;
  grid-column: 2/ 3;
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  

  `}

 
`


export default class SlideComponent extends Component {

  state = SlideData
  
  moveToPrevious =() => {
    // console.log('Previous was clicked... and the current slide is: ', this.state.currentSlide)

    let previousSlide 
    previousSlide = parseInt(this.state.currentSlide) === 0 ? this.state.currentSlide: parseInt(this.state.currentSlide) -1

    this.setState({

      currentSlide: previousSlide

    })
    // console.log('Changed State - Previous Slide is const: ', this.state.currentSlide)

  }

  moveToNext =() => {

    let nextSlide 
    nextSlide = parseInt(this.state.currentSlide) === this.state.slideInfo.length -1 ? this.state.currentSlide: parseInt(this.state.currentSlide) + 1
    
    this.setState({

      currentSlide: nextSlide

    })
    // console.log('Changed State - next Slide is const: ', this.state.currentSlide)


  }

  render() {

      // console.log('Changed State - state Slide is const: ', this.state.currentSlide)

    return (
      <ComponentWrapper>

        <SlideNav
         previous = {this.moveToPrevious} 
         next = {this.moveToNext}
         slideData = {this.state}
        />

        <SlideWindow>
          <Slides  slideData = {this.state}   />
        </SlideWindow>
        
      </ComponentWrapper>
    )
  }
}
