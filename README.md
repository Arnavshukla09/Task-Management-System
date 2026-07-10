# Task Management System

A modern, responsive Task Management System built with **Next.js**, **SQLite**, and **Vanilla CSS**. This application features a Manager-Employee workflow where a manager can assign predefined tasks to employees and track their completion status in real-time.

## Features

- **Secure Manager Dashboard**: Hardcoded secure login system using Next.js Proxy/Middleware to protect routes.
- **Relational Database**: Powered by SQLite (`better-sqlite3`), featuring relational `Task_Titles` and `Task_Management` tables.
- **Dynamic Task Assignment**: Assign tasks to employees using a dropdown menu populated directly from the database.
- **Real-Time Status Tracking**: Managers can toggle task status (Pending / Completed) with immediate database synchronization via Next.js Server Actions.
- **Premium UI/UX**: Designed using pure CSS, featuring glassmorphism, vibrant gradients, and micro-animations for a highly polished experience.

## Tech Stack

- **Frontend**: Next.js (App Router), React, Vanilla CSS
- **Backend**: Next.js Server Actions, Next.js Proxy
- **Database**: SQLite (`better-sqlite3`)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Arnavshukla09/Task-Management-System.git
   cd Task-Management-System
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Authentication
To access the Manager Dashboard, use the following default credentials:
- **Username**: `admin`
- **Password**: `password123`

## Submission Details

- **Author**: Arnav Shukla
- **Registration Number**: 23BCE10173

---
*Developed for academic evaluation / project submission.*
