import { createTheme  } from "@mui/material/styles"

/*  colors
grey : background           - '#4B4B4D'

orange:  gradient           - '#FAD3B6'   '#FFFFFF'
orange:  basic              - '#F58634' 
orange:  light              - '#FADAC1'

*/




// ========================================

const testRed = '#ED3237'
const testYellow = '#FFF212'
const testGreen = '#00A859'
const testBlue = '#576AA7'
const testAqua = '#3EA9C9'
const testPurple = '#7D3EC9'
const testPink = '#F2BFCD'
const testLavendar = '#F2BFF1'



const chitOrange = '#F58634'
const chitOrangeLight = '#FADAC1'

const headerGrey = '#4B4B4D'




export default createTheme({
  palette: {
    common: {
      testRed: `${testRed}`,
      testYellow: `${testYellow}`,
      testGreen: `${testGreen}`,
      testBlue: `${testBlue}`,
      testAqua: `${testAqua}`,
      testPurple: `${testPurple}`,
      testPink: `${testPink}`,
      testLavendar: `${testLavendar}`,


      chitOrange: `${chitOrange}`,
      chitOrangeLight:   `${chitOrangeLight}`,
      headerGrey : `${headerGrey}`
       
    },

typography: {
    fontFamily: [
      'Lato',
      'sans-serif',

    ].join(','),
  },

    

    primary: {
      main: `${chitOrange}`
    },
    secondary: {
      main: `${chitOrangeLight}`
    }
  }
})

