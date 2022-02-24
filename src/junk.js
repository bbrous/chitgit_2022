<FilterWrapper>
<FilterHeader>Filters</FilterHeader>

          <CategoryWrapper>
            
            <FilterLabel>Category :  </FilterLabel>
            <Filter>Work</Filter>
          </CategoryWrapper>

          <KeywordWrapper>
            <FilterLabel>Keywords :  </FilterLabel>
            <Filter>deck, projectsdeck, projectsdeck, projectsdeck, projectsdeck, projectsdeck, projects</Filter>
          </KeywordWrapper>
          
        </FilterWrapper>





// =====================================


const FilterWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '2rem',
  color: darkGrey,
  fontSize: '.8rem',
// backgroundColor: 'green',
 marginBottom: '1rem',
  // height: '3rem',
  marginTop: '6px',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})
const FilterHeader = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '1%',
  width: '10%',
  height: '100%',
  color: chitAquaBlue,
  fontWeight: 'bold',
  fontSize: '.85rem',
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})



const CategoryWrapper = styled('div')({
  display: 'flex',

  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginRight: '1.5rem',
  // backgroundColor: 'orange',
 
width: '20%',
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})

const KeywordWrapper = styled('div')({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginRight: '1.5rem',
  // backgroundColor: 'pink',
 
  // width: '33%',
  overflow: 'hidden',

 
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})

const FilterLabel = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '1%',
  color: headerGrey,
fontWeight: 'bold',
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})

const Filter = styled('div')({

/* 
only works with Display: block not flex
*/


  display: 'block',
  overflow: 'hidden',
      
  minWidth: 0,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})