

#  Sample Site Overview
 
 The sample site exists as a way for prospective new users to experience Chit Git and to see the intended purposes of the various applications.
<p>
It is a mirror to the main web site, but does not require sign up, sign in or communication with the database.
<p>
A hypothetical user's site is depicted during the time period
of January - March 2021.  
<br> Prospective Chit Git users view the site as if they signed in
as the hypothetical user on March 14, 2021.
<p>


##   Sample Site Structure -------------------
<p>
<p>
Sample.jsx
   tells the story of hypothetical user
   has links to the various apps

Main.jsx
   comprised of 2 parts that hold: 
  1.  side navigation 
  2.  AppName main display
<br> sidebar nav in folder - src/pages/navComponents/publicNav/sampleNav/sideBarNav<br>


## (each) App Structure ---------------------


AppNameS.jsx - (plural)
   shows conditional message based on <br>
   whether user has : 
     - ever visited, 
     - previously visited, but not entered info
     - previously visited and created something 

AppNameMain.jsx
    contains all the components to create the <br>
    AppName's page -- such as forms, or details, etc

AppName.jsx -  (singular)
     contains the Apps detail page
  

AppNameSection.jsx or AppNameDetail, etc  
     a repeating portion of the AppName.jsx detail
  

## Forms and Info  ---------------------

Forms and Info pages are routed to the Modal component <br>
src/pages/public/sampleSite/samComponents/Modal

Props are sent to the modal from the originator that determine what is displayed <br>
props = {displayType, params}





 
      



