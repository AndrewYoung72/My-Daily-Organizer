# My-Daily-Organizer
Link to Heroku deployed page: https://my-daily-organizer-awy.herokuapp.com/

https://user-images.githubusercontent.com/97897877/167727278-be5f8a74-2d9e-44b1-9da5-33b6fbb284b0.mp4


## Purpose
We were provided with starter code for this project and our task was to create four routes that would complete the project. Using Express.js, the application should save notes with unique identifiers, from the html page to the db.json file when the save button is clicked. When saved the notes should then display in a list to the left of the webpage. And when completed the application is to be deployed to Heroku. 
## Description
My project meets all of the acceptance criteria but lacks fully functional delete buttons. I added a server.js file and a routes folder. Inside the routes folder is an apiRoutes file which contains the api get and api post routes, and the html route file which holds my public routes for the html. Upon entering a note title and text, a save icon is presented for the user to save the note. Upon clicking the save button the note is saved with a unique identifier, stored to the db.json file, and displayed to the left with a delete icon. When the user clicks on a stored note that note is displayed in the text area. As of yet the delete icons are not fully funtional but I did get a functioning delete route constructed.
## Lessons
The lessons were plenty in this project. Although were provided with a substantial amount of starter code figuring out a good pratice file structure was difficult. Understanding the correct syntax to call the needed file was frustrating at times. Originally I consrtructed all of the routes in my server.js file and wasn't sure what I was supposed to do with the routes folder. After some time with my tutor it was explained that it wasn't good practicd to put all of the routes in the server.js file but instead put the corresponding routes in route files within the routes folder. The sweetest lesson for me on this project was finally getting the notes to display when clicked. This has been an achilles heel for me on projects and I finally figured it out on this project. Yes, it's small, but it's a long fought victory for me. 
