

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

<p>
Conceptually there are 2 "structural groups" based on how the user interacts with them.  These are:
  1.  chronicles
  2.  non-chronicles
  <br>
The chronicles group is comprised of "logs", "topicals" and "journal"
The non-chronicles group consists of "spotlights", "twoPartyChits" and "personalChits"
<p>
The key differentiator for chronicles and non-chronicles is how users interface with new and existent forms.  
<br>
Non-chronicles group use a common component modal.  Page type and id is sent to the modal and the modal determines which form to display.
<br>  
The chronicle forms fro the chronicles group are integrated into the display.

## Main Navigatoion  ---------------------


Sample.jsx - is the gateway to the sample site.
<br>
It displays the story of Bob and the buttons for the user to navigate to their first app.
<br> Main.jsx holds the conditional display of each page's filter in the sidebar section ... and detail in the display section.  The URL is used as the conditional for determining what is displayed.
<br>  The URL gets it's inital display from the Redux store - status/view/appName.



## (each) Individual App Structure ---------------------


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
  

## Intial display and Sample redux store ---------------------

There are 3 navigators to get to all apps.
  - 




## Forms and Info  for non chronicles ---------------------

Structurally - forms are displayed in 2 ways for 2 different over-groups.. chronicles and non-chronicles.
<p>

Forms and Info pages are routed to the Modal component <br>
src/pages/public/sampleSite/samComponents/Modal

Props are sent to the modal from the originator that determine what is displayed <br>
props = {displayType, params}





 
      



