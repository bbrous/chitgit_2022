const formSchema = object({

  person: object().shape({
    label: string().required("Is required"), 
    id: string().required("Is required")
  }).when(["logType", "newExisting"], {
    is: (logType, newExisting) => logType === 'person' && newExisting === 'existing',
    then: object().shape({
      label: string().required("Is required"), 
      id: string().required("Is required")
    }).required('You must choose a person')
    .nullable()
  })
  .nullable(),
  
  
  group: object().shape({
    label: string().required("Is required"), 
    id: string().required("Is required")
  }).when(["logType", "newExisting"], {
    is: (logType, newExisting) => logType === 'group' && newExisting === 'existing',
    then: object().shape({
      label: string().required("Is required"), 
      id: string().required("Is required")
    }).required('You must choose a group')
    .nullable()
  }).nullable(),
  
  
  
  
  
  
  
  
    newPerson: string().when(["logType", "newExisting"], {
      is: (logType, newExisting) => logType === 'person' && newExisting === 'new',
      then: string().required('You must enter a new person')
  })
  .test('test-name', 'Person exists - create new name - or - check existing box above', 
  doesPersonExist
  ) ,
  
  newGroup: string().when(["logType", "newExisting"], {
    is: (logType, newExisting) => logType === 'group' && newExisting === 'new',
    then: string().required('You must enter a new group')
  })
  .test('test-name', 'Group exists - create new name - or - check existing box above', 
  doesGroupExist
  ) ,
  
  //############  .TEST here  ###############
  
  // group: string().when(["logType", "newExisting"], {
  //   is: (logType, newExisting) => logType === 'group' && newExisting === 'existing',
  //   then: string().required('You must choose a group')
  // }),
  
  // newPerson: string()
  // .required('new person is required')
  // // .test("email-include-domain", "Email Must include domain", (value) => companyName.some((val) => value.includes(val))
  // .test('test-name', 'oops i did it again', 
  // (score) => score !== 'Joe'
    
  //   )
  //############  .TEST here  ###############
  
  });







//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@ Group here @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


<ChronicleSelectMui
  name={'group'}
  control={control}
  options={groupOptionsArray}
  // defaultValue = {{ value: 'ge423', label: 'home'}}
  defaultValue={defaultValues.categories}
  placeholder='select a group'

/>

{errors.group && <ErrorMessage>{ errors.group.message}</ErrorMessage>}



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&  ChronicleSelectMui 

export const ChronicleSelectMui =({ name, control, label, type, defaultValue, options, placeholder } ) => {
  // console.log('[ XXXXXXXXXXXXX   Select Createable = options ] options ', options);
    const [value, setValue] = React.useState(null);
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
   selectOnFocus
   value = {value}
   autoSelect
   
          // freeSolo
          id="mui_autocomplete_creatable"
          disableClearable
          options={options.map((option) => option)}
          renderInput={(params) => (
            <StyledTextBox
              {...params}
              onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
              placeholder= {placeholder}
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
        )}
            onChange={(_, data) => field.onChange(data)}
          />
            
  
  
  
  
  
            )}
            name={name}
            control={control}
            defaultValue = {defaultValue}
          />
        )}
      />
    );
  
  };



  // @@@@@@@@@@@@@   create Options @@@@@@@@@@@@@@@@@@@@@@@@@@@@@

 // @@@@@@@@@@@@@   create Options @@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// -- create Options for  people select ----- 
let peopleObjectArray = []
let peopleOptionsArray = []

// -- get rid of "unknown" from all people
let filteredPeople = allPeople.filter(item => item.id !== 'unknown')

let sortedFilteredPeople = descendSorter(filteredPeople, 'name')

sortedFilteredPeople.map((person, index) => {
  peopleObjectArray.push(person.name)


  return peopleObjectArray
}
) //end map

peopleObjectArray.map((person, index) => {

  let personExists = logsIdArray.includes(person.id)
  let personObject = person.name
  if (personExists) {
    // console.log('[ LOG SECTION FORM  ] Yes INCLUDED', personObject);




  }
  if (!personExists) {
    // console.log('[ LOG SECTION FORM  ] NO NO NO - Not INCLUDED', personObject);
    peopleOptionsArray.push(personObject)

  }

  return peopleOptionsArray
}
) //end map