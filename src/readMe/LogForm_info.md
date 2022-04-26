

##  File - LogForm_s.jsx -- Sample Site
<br>
###  -- overview --

The log form handles adding new  entries for 3 distinct collections.
  - logHolders
  - people
  - groups



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