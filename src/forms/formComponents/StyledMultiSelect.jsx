import React, { useCallback, useState } from 'react';

import CreatableSelect from 'react-select/creatable';


export const StyledMultiSelect  = ({ options, value: propValue, onChange, name }) => {

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: '1px solid orange',
     
      fontSize: '.9rem',
      textAlign:'left',
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "grey" : '#F58634',
        boxShadow: state.isFocused ? "none"  :"inset 1px 1px grey" 
      }
    }),
    
    container: (base, state) =>({
      ...base,
      flex: 1
    }),

    option: (base, state)=>({
      ...base,
      textAlign: 'left',
      background: 'disabled',
      backgroundColor: state.isFocused ? '#E6E7E8' : null,
      color: "charcoal",
      fontSize: '.9rem',
 
     }),
     multiValue: (base, { data }) => {
      const color = 'white';
      return {
        ...base,
     
        '& div' :{
      backgroundColor: 'white'},
        '& button' :{ color: 'charcoal' , border: 'none', backgroundColor: 'white',
        paddingBottom: '4px'
      }
      };
    },
    multiValueLabel: (base, { data }) => ({
      ...base,
      color: 'charcoal',
      backgroundColor: 'pink',
      border: '3px solid red'
    }),
    multiValueRemove: (base, { data }) => ({
      ...base,
      color: 'grey',
      ':hover': {
        backgroundColor: 'pink',
        color: 'white',
      },
    }),
  };
  


  const [editingValue, setEditingValue] = useState();

  const handleChange = useCallback(
    (newValue) => {
      onChange(newValue);
    },
    [onChange],
  );

  const handleEditChange = useCallback(
    (inputValue, data) => {
      const idx = propValue.findIndex((v) => v.value === data.value);
      const newValue = [...propValue];

      if (inputValue.length === 0) {
        newValue.splice(idx, 1);
      } else {
        newValue[idx] = {
          label: inputValue,
          value: inputValue,
        };
      }

      onChange(newValue);

      setEditingValue(undefined);
    },
    [propValue, onChange],
  );

  const MultiValueLabel = useCallback(
    ({ data }) => {
      if (editingValue && editingValue === data.value) {
        return (
          <input
            type="text"
            defaultValue={data.value}
            onKeyDown={(ev) => {
              ev.stopPropagation();
              if (ev.key === 'Enter') {
                handleEditChange(ev.currentTarget.value, data);
              }
            }}
            onBlur={(ev) => {
              handleEditChange(ev.currentTarget.value, data);
            }}
            autoFocus
          />
        );
      }
      return (
        <button
          onClick={() => {
            setEditingValue(data.value);
          }}>
          {data.value}
        </button>
      );
    },
    [handleEditChange, editingValue],
  );

  return (
    <CreatableSelect
      name = {name}
      isMulti
      value={propValue}
      onChange={handleChange}
      options={options}
      components={{
        MultiValueLabel,
      }}
      styles={customStyles} 
    />
  );
};

 