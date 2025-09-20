# 🚗 Vehicle Validation

Vehicle Validation is a full-stack web application for validating and managing vehicle details such as registration numbers. It helps ensure the correctness of vehicle data before storing, processing, or integrating it with other systems.

## 🌳 Project Structure

```
Vehicle-Validation/
│
├── .vscode/
│
├── backend/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── controllers/
│   │   └── VehiclesController.js
│   ├── models/
│   │   └── AddVehicleModel.js
│   └── routes/
│       └── VehiclesRoute.js
│
├── frontend/
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── vite.config.js
│   ├── public/
│   │   └── vv.png
│   └── src/
│       ├── App.jsx
│       ├── Layout.jsx
│       ├── main.jsx
│       ├── components/
│       │   ├── BASE_URL.jsx
│       │   ├── Footer.jsx
│       │   └── Header.jsx
│       ├── Css/
│       │   └── Style.css
│       ├── DB/
│       │   └── db.json
│       └── pages/
│           ├── AddVehicle.jsx
│           ├── Display.jsx
│           ├── Home.jsx
│           └── Update.jsx
│
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd Vehicle-Validation
```

### 2. Setup the Backend

```bash
cd backend
npm install
# Create a .env file with your MongoDB connection string:
# DBCONN=<your-mongodb-uri>
# PORT=8000 (optional)
npm start
```

The backend server will run on `http://localhost:8000` by default.

### 3. Setup the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` by default.

## 🛣️ Main Features

- Add, display, update, and validate vehicle details
- RESTful API with MongoDB database
- Modern React UI with routing

## 📂 Key Files & Folders

- `backend/index.js` - Express server entry point
- `backend/controllers/` - Business logic for vehicle operations
- `backend/models/` - Mongoose schemas/models
- `backend/routes/` - API endpoints
- `frontend/src/pages/` - Main React pages (Home, AddVehicle, Display, Update)
- `frontend/src/components/` - Reusable UI components

## 🌐 Live Demo

[View deployed app](https://vehicle-validation-hdwus8nxd-rammaheshwari2003s-projects.vercel.app)

---

Feel free to contribute or raise issues!
