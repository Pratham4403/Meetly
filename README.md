# 🎥 Meetly

**Meetly** is a full-stack **video calling platform** that allows users to create/join video chat rooms directly from their browser, leveraging **WebRTC** and **WebSocket signalling**.

🔗 **Live Demo:** [Meetly Live](https://meetly-frontend-z8ki.onrender.com/)

---

## 🚀 Features

✅ **Real-time Video Calls** – Peer-to-peer audio/video streaming  
🔗 **Room Creation & Joining** – Instantly create or join rooms  
📱 **Responsive UI** – Works across desktop and mobile  
🖥️ **Admin Dashboard** – View analytics and connected users *(if implemented)*  
⚡ **Fast & Secure** – Lightweight backend for signalling  

---

## 🗂️ Project Structure

```

Meetly/
│
├── backend/       # Node.js + WebSocket server
├── frontend/      # React / HTML, CSS, JS client for video calls
└── README.md

````

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React, HTML, CSS, JavaScript |
| **Backend** | Node.js, Express, WebSocket |
| **Real-time Communication** | WebRTC (getUserMedia, RTCPeerConnection) |
| **Database** | MongoDb |
| **Deployment** | Render / Vercel |

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Pratham4403/Meetly.git
cd Meetly
````

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file (if needed):

```env
PORT=5000
WS_PATH=/ws
```

Run the backend server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start   # or npm run dev if using Vite
```

Update `.env`:

```env
REACT_APP_API_URL=http://localhost:5000
```

---

## 📊 Deployment

* **Frontend:** Deployed on Render → [Live Link](https://meetly-frontend-z8ki.onrender.com)
* **Backend:** Can be deployed on Render or other cloud platforms.
* Make sure API/WS URLs are updated in `.env` before deploying.

---

## 🛣️ Roadmap

* [ ] Add chat/messaging feature
* [ ] Record video sessions
* [ ] Improve UI/UX for mobile devices
* [ ] Add authentication & persistent rooms
* [ ] Unit & integration testing

---

## 🤝 Contributing

1. Fork the repo
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit: `git commit -m "Added new feature"`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.


