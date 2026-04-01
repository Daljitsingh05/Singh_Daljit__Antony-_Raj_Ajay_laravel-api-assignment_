# Singh_Daljit__laravel-api-assignment_
# Vue AJAX Assignment – Video Games App

## 📌 Project Overview

This project is a simple Vue.js frontend connected to a Laravel backend API. It displays a list of video games and allows users to click on a game to view detailed information.

---

## 🛠️ Technologies Used

* Vue.js (Frontend)
* Laravel (Backend API)
* HTML, CSS, JavaScript
* Fetch API

---

## 🚀 Features

* Fetch and display video games list
* Click on a game to view details
* Loading and error handling
* Clean UI with responsive layout

---

## 📂 Project Structure

* `/frontend` → Vue.js UI
* `/backend` → Laravel API

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup (Laravel)

1. Navigate to backend folder:

```
cd backend
```

2. Install dependencies:

```
composer install
```

3. Create environment file:

```
copy .env.example .env
```

4. Generate application key:

```
php artisan key:generate
```

5. Run server:

```
php artisan serve
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

### 🔹 Frontend Setup (Vue)

1. Open frontend folder in VS Code
2. Run using Live Server OR open index.html

---

## 🔗 API Endpoint

* Get all games:

```
http://127.0.0.1:8000/api/video-games
```

* Get single game:

```
http://127.0.0.1:8000/api/video-games/{id}
```

---

## 🧪 Testing

* Ensure backend is running before opening frontend
* Click on any game to view details

---

## 👨‍💻 Author

Student Project – Vue & Laravel Integration
