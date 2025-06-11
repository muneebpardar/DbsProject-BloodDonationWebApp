# 🩸 Wat'een - Blood Donation Management System

A full-stack web application connecting donors, recipients, and hospitals for efficient blood supply management.

## ✨ Features

| Feature                | Description |
|------------------------|-------------|
| 🔐 Role-Based Access   | User, Donor & Admin dashboards with secure authentication (JWT) |
| 🏥 Hospital & Blood Search | Filter hospitals by location and blood type availability |
| 🩺 Blood Request System | Patients/hospitals can request specific blood types |
| 📊 Real-Time Inventory | Admins track blood stock across hospitals via interactive charts |
| 🔔 Smart Donor Matching | Auto-match donors based on blood type and proximity |
| 📱 Responsive UI       | Mobile-friendly design with Tailwind CSS |

## 🛠 Tech Stack

| Layer       | Technology |
|-------------|------------|
| Frontend    | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) |
| Backend     | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) |
| Database    | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white) (Hosted on Neon) |
| Auth        | ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=JSON%2520web%2520tokens) |

## 📜 License
This project is licensed under the MIT License - see LICENSE for details.

## 👨‍💻 Developer
Muhammad Muneeb - mirmuneebpardar@gmail.com

## 🚀 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/blood-donation-app.git
cd blood-donation-app
Install dependencies

bash
npm install
Set up environment variables
Create a .env file:

env
DB_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server

bash
node app.js
Open the frontend
Launch index.html in your browser.

