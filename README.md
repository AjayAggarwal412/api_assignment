# Greeting App

A simple full-stack application built with **Node.js (Express) for the backend** and **React for the frontend**. Users can enter their name to receive a personalized greeting message.

## Features
- Input field for entering a name.
- Button to fetch a personalized greeting from the backend.
- Displays greeting message or error response.

---

## Backend (Node.js & Express)

### Setup & Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/greeting-api.git
   cd greeting-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node server.js
   ```
4. API will be available at:
   ```sh
   http://localhost:5000/api/greet?name=YourName
   ```

### API Endpoints
| Method | Endpoint           | Query Params | Response |
|--------|-------------------|-------------|-----------|
| GET    | `/api/greet`      | `name` (string) | `{ message: "Hello, YourName! Welcome to Younglabs." }` |
|        |                   | *(missing name)* | `{ error: "Name is required." }` |


---

## Frontend (React)

### Setup & Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/greeting-app.git
   cd greeting-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
4. Open in browser:
   ```sh
   http://localhost:3000
   ```

---

## Tech Stack
- **Backend:** Node.js, Express.js, CORS
- **Frontend:** React.js, Fetch API



