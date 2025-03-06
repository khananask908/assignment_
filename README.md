Full Stack Greeting App (TypeScript)

This project is a simple full-stack web application built using Node.js (Express) with TypeScript for the backend and React with TypeScript for the frontend.

Features

Backend API that returns a greeting message.

Frontend page with an input field and button to fetch greetings.

Fully typed using TypeScript.

Deployed on Render (backend) and Vercel (frontend).

🛠 Backend (Express + TypeScript)

1. Setup & Install

# Clone the repository
git clone (https://github.com/khananask908/assignment_.git)


# Install dependencies
npm install

2. Run the Development Server

# Start the server in development mode
tsc --watch & nodemon dist/server.js

3. Run the Production Build

# Build the project
tsc

# Start the server
node dist/server.js

4. API Endpoint

Method

Endpoint

Description

GET

/api/greet?name=YourName

Returns a greeting message

🚀 Frontend (React + TypeScript)

1. Setup & Install

# Clone the repository
git clone https://github.com/your-username/fullstack-greet-frontend.git
cd fullstack-greet-frontend

# Install dependencies
npm install

2. Run the Development Server

npm start

3. Build for Production

npm run build

🎯 Deployment

Backend Deployment (Render)

Push the backend code to GitHub.

Go to Render and create a new Web Service.

Connect your repository and deploy.

Update frontend/src/config.ts with the deployed API URL.

Frontend Deployment (Vercel)

Push the frontend code to GitHub.

Go to Vercel and create a new project.

Connect your repository and deploy.

📌 Technologies Used

Backend

Node.js & Express (API Server)

TypeScript (Static Typing)

CORS (Cross-Origin Requests)

Frontend

React (UI Library)

TypeScript (Static Typing)

Axios (API Requests)

Tailwind CSS (Styling)




