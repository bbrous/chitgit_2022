const submitForm = async (data) => {

  const {chitType, newExisting,  person, newPerson, 
                        group, newGroup, groupType} = data

  console.log('[LogSectionForm]...data ', data)
  console.log('[LogSectionForm]...chitType ', chitType)

  try {

    // --- start the loading spinner ---
    dispatch(changeLoadingStatus(true))



    
    // --- create new logHolder ------------

      let newLogHolderData = {}
      let newlogId
      // --- 1.  is chitType a person -----

      if (chitType === 'person') {

        // --- 1a.  does the person exist already ---

        if (newExisting === 'existing') {

          /* 1. clean the form input - strip whitespace
             2. find the person in the peopleArray
             3. create the object to add to logHolders collection
             4. dispatch to store 
          */
          let newPerson = stripWhiteSpace(data.person)
          
          let newPersonObject= allPeople.find( ( searchPerson ) => searchPerson.name === newPerson )

          newLogHolderData = {id: newPersonObject.id, collection: 'people'}
          newlogId = newPersonObject.id
          dispatch(addLogHolderToStore(newLogHolderData))

        } // end person and existing

        // --- 1b  is it a new person ------------------

        if (newExisting === 'new') {

            /* 1. clean the form input - strip whitespace
             2. create new person Id in sample
                x - add newPerson to people collection in database
                x- get new person's Id back
             3. create the object to add to logHolders collection
             4. dispatch to store 
          */


          let newPersonId = cuid()
          let cleanedNewPerson = stripWhiteSpace(data.newPerson)
          let newPersonObject  = {
            id: newPersonId,
            type: 'person',
            name: cleanedNewPerson,
            meta: '',
            peopleHolders: [
              {
                id: newPersonId,
                dbCollection: 'logHolders'}
            ]
          }


          newlogId = newPersonId
          dispatch(addPersonToStore(newPersonObject))

          newLogHolderData = {id: newPersonId, collection: 'people'}
          dispatch(addLogHolderToStore(newLogHolderData))


        } // person && new



      } // chitType = person


     
      if (chitType === 'group') {

        // --- 1a.  does the group exist already 
        if (newExisting === 'existing') {

          /* 1. clean the form input - strip whitespace
             2. find the group in the groupsArray
             3. create the object to add to logHolders collection
             4. dispatch to store 
          */
             let newGroup = stripWhiteSpace(data.group)
          
             let newGroupObject= allGroups.find( ( searchGroup ) => searchGroup.name === newGroup )
 
             newLogHolderData = {id: newGroupObject.id, collection: 'groups'}
 
             dispatch(addLogHolderToStore(newLogHolderData))
             newlogId = newGroupObject.id

        }// end group and existing

        // --- 1b  is it a new group 
        if (newExisting === 'new') {



    console.log('[ Log FORM ] newExisting  group is new', newExisting);


            /* 1. clean the form input - strip whitespace
             2. create new person Id in sample
                x - add newPerson to people collection in database
                x- get new person's Id back
             3. create the object to add to logHolders collection
             4. dispatch to store 
          */


             let newGroupId = cuid()
             let cleanedNewGroup = stripWhiteSpace(data.newGroup)
             let newGroupObject  = {
               id: newGroupId,
               type: 'data.groupType',
               name: cleanedNewGroup,
               meta: data.meta,
               groupHolders: [
                 {
                   id: newGroupId,
                   dbCollection: 'logHolders'}
               ]
             }
 
 
             newlogId = newGroupId
             dispatch(addGroupToStore(newGroupObject))
 
             newLogHolderData = {id: newGroupId, collection: 'groups'}
             dispatch(addLogHolderToStore(newLogHolderData))







        } // end group && new



      } // end chitType = group



      dispatch(changeLoadingStatus(false))
      reset()

      dispatch(closeLogSectionForm())
      reset(defaultValues)

      navigate(`/sample/logs/${newlogId}`)


  } catch (error) {
    alert(error.message)
    dispatch(changeLoadingStatus(false))

    reset(defaultValues)

  } // end catch
} // end async submit
