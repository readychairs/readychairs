PROJECT TITLE: EXPRESS REST API WITH CONTROLLERS, ROUTES & GLOBAL ERROR HANDLING



📝 PROJECT DESCRIPTION

This project is a simple and modular Node.js + Express REST API demonstrating:

1.Route handling using Express Router

2.Separation of concerns using Controllers

3.Global error handling middleware

4.404 Not Found handling

5.Serving user data from a JSON file

6.Clean and scalable project structure

7.The API exposes three main endpoints:

a) / – Home route

b) /about – Returns About Page message

c) /users – Returns list of users from users.json





🔧 HOW TO INSTALL

Clone or download the project folder.

Open a terminal inside the project directory.

Install dependencies:

npm install


Install nodemon (for auto-restart during development):

npm install --save-dev nodemon





▶️ HOW TO RUN THE PROJECT
Start development server (recommended):
npm run dev

Start production server:
npm start

Server will run at:
http://localhost:4000





📡 API ENDPOINTS
1️. GET /

Purpose: Check if the server is running




2️. GET /about

Purpose: Returns a simple JSON message for the About page



3️. GET /users

Purpose: Read and return the list of users from data/users.json





4️⃣ ANY UNDEFINED ROUTE

1.Purpose: Return a 404 error
Response:



PROJECT FOLDER STRUCTURE



Harsh/
│── server.js
│── package.json
│── package-lock.json
│── /routes
│      ├── index.js
│      ├── about.js
│      └── users.js
│── /controllers
│      ├── aboutController.js
│      └── usersController.js
│── /node_modules
│── /middleware
│      └── errorHandler.js
└── /data
       └── users.json


