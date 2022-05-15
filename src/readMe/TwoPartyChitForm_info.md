

##  File - TwoPartyChitForm.jsx -- Sample Site
<br>
###  -- overview --

The TwoPartyChitForm is a multiForm wizard.

It handles adding new  entries for 3 distinct collections.
  - twoPartyChits
  - people
  - groups

The form wizard contains 5 parts:
  - who
  - when
  - details
  - chit
  - preview - which is also Form submit
  <br>

  All entries from the individual wizard forms are held in a tempory folder in the Redux store -  status.view.forms.twoPartysection.

  The preview page shows all the individual entries from the individual pages.  On submit of the preview page ... either a new chit is created or an exisiting chit is updated.

  The decision of create or update is based on whether a value exists in the "otherPartyId" field.  This id (if exists) is passed from 
     - the edit icon on the existing chit - to -
     - TwoPartyChitForm - to -
     - TwoPartyChitForm_who 
    
  The twoPartyChitForm_who will take the id if exists and eliminate the input fields for the who form.  It will then automatically upload the "name", "collection" , and "id" to the Redux store.

---  Add new logHolder logic --------------------------

<br>


    let newLogObject = {}

      1. if logType === 'person' {
          1.a if newExisting === 'existing'{
            - take 'data.person' find id in people collection
            - newLogObject = {id:  person.id, collection: 'people'}

          }


          1.b if newExisting === 'new'

            1.b -1  add new person to people collection
            1.b -2  retrieve new id of new person
            1.b. -3 add newLogObject = {id:  new person id, collection: 'people'}


        }

      2. if logType === 'group' {

          2.a if newExisting === 'existing' {
            - take 'data.group' find id in groups collection
            - newLogObject = {id:  group.id, collection: 'groups'}

          }

          2.b if newExisting === 'new'

            2.b -1  add new group to people collection
            2.b -2  retrieve new id of new group
            2.b. -3 add newLogObject = {id:  new group id, collection: 'groups'}


        }


        }

      3. dispatch newLogObject to logHolders collection

      4. navigate(`/sample/logs/${id}`)

      5. dispatch(updateStatusView) 


<br>