# 📝 Feedback App

A full-stack feedback collection application built with **React (Vite) for frontend**, **Express.js for backend**, and **PostgreSQL for database**. The app allows users to submit feedback, which is stored in a database and displayed dynamically.

## 🚀 Features

- Collects feedback with **name, email, and message**
- Instantly displays submitted feedback
- Responsive UI with React
- Backend API using Express.js
- Database management with PostgreSQL
- **Fully deployed using Vercel**

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/feedback-app.git
cd feedback-app
```

---

### 2️⃣ Backend Setup

1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add:
   ```
   DATABASE_URL=your_postgresql_connection_url
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```
5. Backend will run on: `http://localhost:5000`

---

### 3️⃣ Frontend Setup

1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Update `API_URL` in `src/App.js` to use your **deployed backend**:
   ```js
   const API_URL = "https://your-backend-url.vercel.app/feedback";
   ```
4. Start the frontend:
   ```sh
   npm run dev
   ```
5. Frontend will run on: `http://localhost:5173`

---

## 🌍 Deployed Links

- Frontend: https://feedback-frontend-ilos491r7-rasheednadaf4-gmailcoms-projects.vercel.app
- Backend: https://feedback-app-backend-bczgvcz3d-rasheednadaf4-gmailcoms-projects.vercel.app

