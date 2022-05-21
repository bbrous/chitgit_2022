

##  File - SharedChit.jsx -- 

--------------
<br>

##  -- Shared Chit overview --

Sharing chits is a key function of ChitGit.  Not only is it important to the user, but also to the site's marketing.  Being able to send and receive chits <em> is </em> the built in viral mechanism for the site.

Shared chits are primarily a feature of 2 party chits... but the user can also share a personal chit.   The reason to share a 2 party chit is pretty evident.  Reasoning for sharing a personal chit is a little more obscure.   But a user might want to share a milestone - like reaching a target weight - with her family or friends.

Structurally, sharing chits involves 3 (or 4) database collections...
   - the sending user's twoParyChit or personalChit collections
   - the site's sharedChit Collection
   - and the receiver's chit collections (should they choose to add the chit to their repo)

---------
## -- Creating the shared chit link - How to share ---

(1) new chit form -- 

&nbsp; &nbsp; When a user creates a two party chit, there is a radio buton pair that allows her to choose to share the new chit (or not).  Yes share - unveils a hidden form section prefilled with the 'title' and 'detail' data  in 2 new fields - summary and shared message. 
<br>

(2) Upon submit --

&nbsp; &nbsp; the data from the hidden part of the new chit form  are used to create a new document in the sharedChit collection. A sharedChit Id is returned
<br>

(3) The id from the new sharedChit document and used to create a link --
  <br> &nbsp; &nbsp; &nbsp; &nbsp; - www.ChitGit.com/sharedChit/:{id} <br>
This link is then displayed in the form of a popup after the database document is created so that the user can copy and paste it into an email or IM.
The link can also be found and copied from a popup in the chit displayed in the ledger by clicking on the share icon.

 <br> 
(4) Received chit link from email or IM --
<br>
&nbsp; &nbsp; When the recipient receives the email, she can click the link which takes her to 
the received page   www.ChitGit.com/sharedChit/:{id} <br>
<br> &nbsp; &nbsp; In the URL from the link is the shared chit Id.
That is used to retrieve the shared chit data from the database.  That creates the SharedChit.jsx component.

 <br> 
(5) Add received chit to receivers repository --
<br> &nbsp; &nbsp; When the recipient logs in, or joins - the sharedChit Id is used to populate a new chit in their chit collection.




-----------
##  -- Using shared chit link --


<br>



<br><br>

###  -- SharedChit page --
<br>

The Chit preview page retrieves all it's data from the sharedChit collection 
in the database based on a "shared chit id" sent via email or text message 
to the chit recipient.

---

                
                   
      



