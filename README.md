# womensafetyappbackend
This project is backend part of womensafety app which major functionality is its alert feature.

#index File :- This file is the main file of the project.It contains the server code and mail function,
the same mail function is called whenever there is alert signal from client side.
Also this file contains the code to handle post request related to signup and a get request to handle alert signal.Name of this file is index.js .

#mail function :- This function plays a main role in order to settle the alert signal.
This function takes 4 arguments, they are email address and password of company, helper email address(the guardian of victim) and location of victim(contains google map link).

#db module :- This module contains portion which connects server to the database.
It contains a file named conn.js which contains the code for same.

#model :- This module contains detailed schema of our database.
It contains a file person.js which contains declarartion of schema and collection named person is created here.

#routers :- This module contains code related to majority of get request in project.
It contains file named getinfo.js which handles get requests for defence and  educational content and sends post,videos as response.
