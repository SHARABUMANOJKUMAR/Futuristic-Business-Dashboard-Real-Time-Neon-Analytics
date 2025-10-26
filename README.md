# 🌈 Futuristic Business Dashboard — Real-Time Neon Analytics

An **AI-inspired, real-time business analytics dashboard** designed to *wow*.  
It features **vibrant neon gradients**, **glassmorphism panels**, and **smooth animations** — built to look like a **futuristic control room** while displaying **live KPIs** from Google Sheets.

---

## 🚀 Project Overview

This dashboard automatically pulls live data from a **Google Sheets CSV** link and updates itself in **real time** whenever the sheet changes.  
It visualizes key business metrics with interactive, glowing charts — perfect for executives, analysts, or anyone who loves visually stunning dashboards.

### **Data Fields**
- **Client**
- **Amount Paid** → Treated as **Revenue (₹ INR)**
- **Industry**
- **Gmail**

---

## 🎯 Key Visuals

| Section | Visualization Type | Description |
|----------|-------------------|--------------|
| 💰 Revenue Trends | Line/Area Chart | Displays revenue growth over time |
| 👑 Top Clients | Bar / Leaderboard | Highlights highest-paying clients |
| 🏭 Industry Insights | Donut / Pie Chart | Shows distribution by industry |
| 📧 Engagement | Timeline / Activity | Tracks user or client activity |
| 🔄 Conversion Funnel | Funnel Chart | Displays conversion stages |
| ⚡ KPIs | Cards / Gauges | Animated performance indicators |

---

## 🎨 Design & Aesthetics

- Neon gradients: **purple → blue → pink → green → orange → gold**
- **Glassmorphism**: blur, transparency, and soft reflections  
- **Glowing accents** and **holographic hover effects**  
- **Smooth transitions** via Framer Motion  
- **Responsive grid layout** with drag-and-drop widgets  
- Real-time updates (polling or push)  
- Built to impress — futuristic, colorful, immersive  

---

## 🧠 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React + Vite + TailwindCSS + Framer-Motion |
| **Charts** | Recharts / Chart.js / Visx |
| **Realtime** | Node.js (SSE / WebSockets) or polling |
| **Automation** | Google Apps Script / n8n Webhooks |
| **Data Source** | Google Sheets CSV |
| **Deployment** | Vercel (frontend) + Render / AWS / GCP (backend) |

---

## 🔗 Live Data Source :
https://docs.google.com/spreadsheets/d/1gdHD6ThLrdqqh4qzGEKus_atnlUfziFN9gNXWrAb3LA/edit?gid=0#gid=0
> All `Amount Paid` values are treated as **Revenue** and displayed in **₹ (Indian Rupees)**.

---

## ⚙️ How It Works

1. **Fetches live CSV data** from Google Sheets using a fetch utility.  
2. **Parses and converts** “Amount Paid” to numeric revenue (INR).  
3. **Auto-updates charts** on every sheet change (polling or push).  
4. **Displays animated visuals** with real-time KPI transitions.  
5. **Allows customization** — drag, resize, and rearrange widgets.  

---

## 🧩 Folder Structure

futuristic-dashboard/
│
├─ frontend/
│ ├─ src/
│ │ ├─ components/ # Chart widgets & panels
│ │ ├─ pages/ # Main dashboard page
│ │ ├─ utils/ # CSV fetcher & data parser
│ │ ├─ styles/ # Tailwind & neon CSS
│ │ └─ App.jsx
│ ├─ package.json
│ └─ vite.config.js
│
├─ backend/
│ ├─ server.js # Optional SSE / webhook server
│ ├─ package.json
│ └─ .env
│
├─ apps-script/ # Optional Google Apps Script webhook
│
└─ README.md

---
## Deployed :
https://chroma-sync-panel.lovable.app
## 💻 Installation

### 1️⃣ Clone Repository
```bash
git clone https://github.com/SHARABUMANOJKUMAR/Futuristic-Business-Dashboard-Real-Time-Neon-Analytics
cd Futuristic-Business-Dashboard-Real-Time-Neon-Analytics
cd frontend
npm install
cd ../backend
npm install



Your Google Sheets CSV Link:  
