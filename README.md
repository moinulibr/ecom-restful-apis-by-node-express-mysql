# E-Commerce RESTful APIs

A robust and scalable RESTful API backend for an E-commerce platform built using **Node.js**, **Express.js**, and **MySQL**. This project follows industry-standard best practices for API design, database architecture, and folder structuring.

---

## 🚀 Features
- **User Authentication:** Secure registration and login (JWT based).
- **Product Management:** Full CRUD operations for products, categories, and brands.
- **Cart & Order System:** Add to cart, checkout logic, and order history tracking.
- **Database Optimization:** Efficient MySQL queries, indexing, and relational schemas.
- **Secure & Clean:** Input validation, clean error handling, and environment-based configurations.

---

## 🛠️ Tech Stack
- **Backend Framework:** Node.js, Express.js
- **Database:** MySQL
- **ORM / Query Builder:** Native MySQL2 / Sequelize (Choose your one)
- **Authentication:** JSON Web Tokens (JWT), bcrypt for password hashing
- **Environment Management:** dotenv

---

## ⚙️ Installation & Setup

Follow these steps to run this project locally on your machine:

### 1. Clone the Repository
```bash
git clone git@github.com:moinulibr/ecom-restful-apis-by-node-express-mysql.git
cd ecom-restful-apis-by-node-express-mysql
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables Setup
Create a .env file in the root directory and add your configurations (refer to .env.example if available):
```bash
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ecom_db
JWT_SECRET=your_super_secret_key
```

### 4. Database Setup
Open your MySQL client (like phpMyAdmin, TablePlus, or MySQL Workbench).
Create a new database named ecom_db.
Import the database schema (if you have a .sql file in the project).

### 4. Run the Application
```bash
npm run dev
```

For production mode:
```bash
npm start
```


### 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.


### 📝 License
This project is licensed under the MIT License.