# Task Manager App

A simple task manager app that allows users to create, delete, and update tasks. The frontend is built using HTML, CSS, and vanilla JavaScript, while the backend is built using Node.js and MongoDB.

## Features

- Create, read, update, and delete tasks

## Technologies Used

- Frontend:
  - HTML
  - CSS
  - JavaScript

- Backend:
  - Node.js
  - Express.js (for routing and middleware)
  - MongoDB (as the database)
  - Mongoose (for MongoDB object modeling)

## Folder Structure

- `/public`: Contains static files such as HTML files, CSS stylesheets and client-side JavaScript files.
- `/routes`: Contains Express.js route handlers for different routes.
- `/controllers`: Contains the business logic for handling different requests and interacting with the database.
- `/models`: Contains the MongoDB models/schema definitions.
- `/middleware`: Contains custom middleware functions for error handlings, asynchronizing functions and not-found error.
- `/db`: Contains the MongoDB connection logic.
- `/errors`: Contains a class that initialises an error with a status and message.

## API Endpoints
- GET `/api/v1/tasks`: Retrieve all tasks.
- GET `/api/v1/tasks/:id`: Retrieve a specific task by ID.
- POST `/api/v1/tasks`: Create a new task.
- PUT `/api/v1/tasks/:id`: Update a specific task by ID.
- DELETE `/api/v1/tasks/:id`: Delete a specific task by ID.


