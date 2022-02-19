

##  File - NoteForm_s.jsx -- Sample Site
<br>
###  -- overview --


The note form handles both create-new and edit-update functions.
<br>
It consists of 4 parts

- wysiwyg - content -  string of html
- catgory - string
- keyword - array of strings
- last edit date - in ISO format

<br>

Both the category and keywords have their own collections.
So both require a consistent input string structure ...
without white space and all lower case.  

Categories have the additional step of capitalizing 
the first workd in the string.


<br><br>

###  -- Form decompositions --
<br>

Logic used to submit the Noteform to the redux store.
Consists of 2 major actions :  
- new form
- submitted form

Handles create and updates for 3 collections
- notes
- categories
- keywords  

---

<img src="elements/test.svg" width="160">
---

      1.  retrieve from Redux store - notes, categories, keywords           X
      2.  create form selector input options                                x
      3. fill the default values in form fields                             x
         based on whether new or edit

###  -- on Submit form --

      4.  retrieve and clean the form data                                  X
          a.  clean the category data                                       x
          b.  clean the keyword data                                        x

      5. Dispatch the note data to Redux store                              x
         a. if new - add to note collection                                 x
         b. if edit - update note in note collection                        x

      6. Update category collection
         
         a. check if category form data submitted is                        x
            different from default

          ... This section only executes if category has changed ...

              ...     ...    ...    ...

              if submitted form category the same as default -
              Do Nothing   
              ...     ...    ...    ...

              if submitted form category different from default category

              ...     ...     ...                                           x

              b. test if the defaultCategory was blank or prefilled         x  

              if it was prefilled - then the default category already       x
              exists in the collection and contains a noteId in the categoryHolder array... so

              the note Id must first be deleted from the default category    x
              so that the form submitted category (which has changed) can
              have the noteId added to it's categoryHolder array.            x

              if default value is === '' then no delete execution             

              if defaultCategory !== '' then -                               x
                  find defaultCategory index and delete noteId form   
                  it's noteHolders array

              ...     ...     ...  

              c. check if category form data exists already or is new        x
              
              d. update category
                 if existant category - add noteId to categoryHolders
                 if new category 
                    - add new category to Category collection
                      with noteId as first noteHolder in noteHolderArray

        

      7. Update keyword collection
          a. check if keyword form data submitted is
            different from default

            if new submitted keyword array the same as default
               do nothing

            if new submitted keyword array different from defualt
               create array of new-different-keywords
               note:  These are the only keywords that have to be
               changed in database or store

              b.  find out which new-differnt-keywords exist or are new
                  next step is done with a map

                  - if new-differnt-keywords does NOT exist
                    c. add new-differnt-keyword  to keyword Collection with
                       noteId as only keywordHolder in Array

                  - if new-differnt-keyword exists 
                    d. uprdate new-differnt-keyword keywordNoteholder
                       with noteId
                
                   
      



