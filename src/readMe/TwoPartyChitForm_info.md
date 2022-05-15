

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

  The decision of create or update is based on whether a value exists in the "twoPartyChitId" field.  This id (if exists) is passed from 
    
  The twoPartyChitForm_who will take the id if exists and eliminate the input fields for the who form.  It will then automatically upload the "name", "collection" , and "id" to the Redux store.

---  Add existent person to new chit --------------------------

<br>

  - clean person string
  - check if person exists in people collection
    - if yes 
        - get id of person
        - add new two party chit - return twoPartyChit id

        - update personId.personHolders with new twoPartyChitId

    - if no - person does not exist yet in people collection
        - create person - return new personId
        - add new two party chit - return twoPartyChit id

        - update personId.personHolders with new twoPartyChitId


<br>