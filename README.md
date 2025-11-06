# 🌐 ConnectSphere

**ConnectSphere** is a full-stack social media platform developed using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It enables users to connect, collaborate, and engage with like-minded individuals through posts, likes, comments, and real-time messaging — all within a responsive and interactive interface.

---

## 📖 Overview

ConnectSphere is designed to simplify digital networking and collaboration.  
It provides users with an engaging space to share ideas, interact with others, and grow their professional network.

### Key Highlights
- Intuitive and user-friendly interface  
- Dynamic feed with real-time updates  
- User authentication and profile management  
- Interactive chat and comment features  
- Optimized for both desktop and mobile devices  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Other Tools** | Git, GitHub, Postman, Render / Vercel |

---

## ⚙️ Project Setup

Follow the steps below to run ConnectSphere locally 👇  

```bash
# 1️⃣ Clone the Repository
git clone https://github.com/<vamshikrishnavelpula>/ConnectSphere.git
cd ConnectSphere

# 2️⃣ Install All Dependencies
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install

# Return to project root
cd ..

# 3️⃣ Configure Environment Variables
# Create a .env file in the root directory and add the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

# 4️⃣ Run the Application
# Start backend server
npm start

# Start frontend (in a new terminal)
cd client
npm start
