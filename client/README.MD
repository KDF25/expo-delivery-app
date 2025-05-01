# 📱 Delivery App – Client

This is the client-side application for the **Delivery App**, built with React Native and Expo. The application follows the Feature-Sliced Design (FSD) architecture to ensure scalability and maintainability.

---

## 🧰 Tech Stack

- **Framework:** React Native (Expo)
- **State Management:** Redux Toolkit
- **Networking:** Axios
- **Forms:** React Hook Form
- **Styling:** Tailwind CSS (via NativeWind)
- **Payments:** Stripe React Native
- **Data Fetching:** Tanstack Query
- **Environment Management:** Babel Plugin Inline Dotenv

---

## 🏗️ Architecture

The project is structured following the Feature-Sliced Design (FSD) methodology, which organizes the codebase into distinct layers:

- **🗂️ App:** Application-level configurations and initializations.
- **🧩 Features:** Independent features of the application, each encapsulating its own logic and UI.
- **🔧 Widgets:** Reusable UI components that can be used across different features.
- **🖥️ Screens:** Pages or views that represent different states of the application.
- **🏷️ Entities:** Business entities and their logic.
- **🔗 Shared:** Common utilities, hooks, and components shared across the application.

---

## 🚀 Getting Started

Follow these steps to install and run the client application locally:

### 1. Clone the repository

```bash
git clone https://github.com/KDF25/expo-delivery-app.git
cd client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root of the client directory:

```dotenv
SERVER_API_URL=

STRIPE_PUBLIC_KEY= 
```

### 4. Start the development server

```bash
npm run start
```

## 📦 Available Scripts

```bash
# Start the development server
npm run start

# Start on Android
npm run android

# Start on iOS
npm run ios

# Start on Web
npm run web

# Format code
npm run format
```

## 📁 Environment Variables

| Variable          | Description                          |
|-------------------|--------------------------------------|
| `SERVER_API_URL`         | Base URL for the API               |
| `STRIPE_PUBLISHABLE_KEY` | Stripe API public key              |

---

© 2025 Delivery-App. All rights reserved.