# 🐾 PawFund – Donation & Adoption Platform

PawFund is a full-stack web platform designed to support stray animals through online donations and adoption awareness. It includes a secure payment system and a full-featured admin dashboard.

## 🚀 Features
- 💳 Razorpay donation integration
- 🐕 Live donor display
- 🔐 Admin login & authentication
- ✅ Approve / reject donations
- 🗑️ Delete donations
- 📊 Admin dashboard with total amount & stats
- 🔒 Protected admin routes using middleware

## 🛠️ Tech Stack
- Next.js 14 (App Router)
- MongoDB + Mongoose
- Tailwind CSS
- Razorpay
- JavaScript

## 📂 Installation

```bash
git clone https://github.com/solehasiddique/pawfund.git
cd pawfund
npm install

## 🔐 Environment Variables

Create a `.env` file in the root and add:

```env
MONGO_URI=your_mongo_db_uri
NEXT_PUBLIC_RAZORPAY_KEY=your_public_key
RAZORPAY_SECRET=your_secret_key
ADMIN_EMAIL=admin@email.com
ADMIN_PASSWORD=your_password


---

## ▶️ Run the Project

```bash
npm run dev
