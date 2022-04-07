

#  Chit App Overview
 
 The Chit app ties all the other apps together.  A segment of any of  other Chit Git app (Journal, Spotlight, etc) can be converted into to a chit.
<p>
There are 2 chit types:
 - Two Party Chits
 - Personal Chits
<p>
Each chit type can be identified as a "work" chit.  



##   Chit App Structure -------------------
<p>
<p>


Main.jsx
   is the gateway to all the apps.  It contains:
  1.  side navigation 
  2.  AppName main display (ChitMain)
<br> sidebar nav in folder - src/pages/navComponents/privateNav/sideBarNav<br>

<p>
ChitMain.jsx
   is the gateway to the 2 main chit pages (personal and twoParty).  It contains:
  1.  ChitPageView - navigation to 2 party and Personal chit pages
  2.  Chits.jsx - holder of both pages

<br>
ChitPageView from 'src/pages/navComponents/privateNav/Chit_Page_nav'
ChitMain from 'src/pages/private/samChits/ChitMain'

