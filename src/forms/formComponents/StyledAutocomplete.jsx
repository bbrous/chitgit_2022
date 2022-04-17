import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';


import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { optionDescendSorter } from "../../app/helpers/commonHelpers";
import { styled, createTheme} from "@mui/material/styles"
import {makeStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component


const StyledWrapper= styled(Autocomplete)({
  
 display: 'flex',

  // border: 'none',
  padding: 0,
  marginBottom: '1rem',
  // width: '80%', 
 textAlign: 'left',
  width: '100%',
backgroundColor: '#F6F7F8',
  
  // marginRight: '8px',
  boxShadow: 0,

'& .MuiSelect-select' : {
  color:'#333333',
  fontSize: '.85rem',
  
},
'& .MuiOutlinedInput-notchedOutline': {
  border: 'none',
 

},



'& .MuiSelect-icon' : {
  color:'#727376',
  fontSize: '1.5rem'
}

})

const StyledTextBox= styled(TextField)({
  // border: '1px solid orange',
  color: '#333333',
  // borderBottom: "4px solid red",


'& input' : {
  height: '50%',
  fontSize: '.85rem',
  padding: '0',
  border: '1px solid white',
  '&:hover' : {
    color:'#333333',
    backgroundColor: '#FEEDE2'
  },
},

'&:focus' : {
  color:'white',
  backgroundColor: '#606062',

  '&:hover' : {
    color:'white',
    backgroundColor: '#606062'
  },

},
})

const StyledChip= styled(Chip)({
  // border: '1px solid orange',
  color: '#333333',
  border: 'none',
  borderBottom: "2px solid #E6E7E8",
  borderRadius: '3px',
  backgroundColor: 'white',
  fontSize: '.75rem',
  
  '& .MuiChip-deleteIcon' : {
    color: 'red',
    fontSize: '.75rem'
  }
 
 
})

// const optionCreator = (optionsArray) => {

//    const optionsDisplay = optionsArray.map((option, index) => {
//      let optionValue  = option.value
//      let optionLabel = option.label
 
//   return (
//     // <StyledMenu value={value} >{label}</StyledMenu>
//     <StyledMenu key = {optionValue} value= {optionValue} >{optionLabel} </StyledMenu>
//   )
//   }
//   ) //end optionCreator
//   return optionsDisplay

// }
const useStyles = makeStyles({
  paper: {
    backgroundColor: '#F6F7F8',
    fontSize: '.85rem',
    // border: '1px solid #CFD0D1',
  }
});

// -----------------------------------------------------------------
export const StyledAutocomplete = ({ name, control, label, type, defaultValue, options } ) => {
  const classes = useStyles();
  return (
    <Controller
      name={name}
      control={control}
      
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <Controller
        
          render={({ field }) => (
            
            
             


          <StyledWrapper
          autoSelect
          filterSelectedOptions
          classes={{ paper: classes.paper }}
          fullWidth
          size="small"
          multiple
          id="tags-filled"
          options={optionDescendSorter(options)}
          value = {value}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <StyledChip variant="outlined" label={option} {...getTagProps({ index })} 
 
              
              />
            ))
          }
          renderInput={(params) => (
            <StyledTextBox
              {...params}
              variant="standard"
              // label="freeSolo"
              placeholder="select or type keyword(s)"

              InputProps={{...params.InputProps, disableUnderline: true}}
            />
          )}
          onChange={(_, data) => field.onChange(data)}
        />
          





          )}
          name={name}
          control={control}
           
        />
      )}
    />
  );
};



// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];
 