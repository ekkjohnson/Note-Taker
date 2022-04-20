1. Create a .gitignore file and add node_modules to it.

2. Create a server.js file that will serve up the application
    - Import all your required dependencies
    - Initialize the Express app
    - Set up the port that your server will listen on (NOTE: Heroku will set this up for you when you deploy)
    - Set body parsing, static middleware, route middleware
    - Start the server

3. Organize and create your routes
    - Create a "GET" route for `/notes` that returns the `notes.html` file
    - Create a GET route for `*` that returns `index.html` file
    - Create a GET route for `/api/notes` that returns all saved notes as JSON
    - Create a POST route for `api/notes` that saves a new note to the db.json file
    - Create a DELETE route for `api/notes/:id` that deletes a note from the db.json file (bonus , not required)

4. Create helper functions that manage saving and retrieving notes from the db.json file
    -Create a getNotes() function that returns all the saved notes from the db.json file
    -Create a saveNote() function that saves a new note to the db.json file and returns the new note as JSON
    -Create a deleteNote() function that deletes a note from the db.json file and returns a success message (bonus)

5. Integrate your helper functions into the routes

6. Test the routes the ensure that they're working