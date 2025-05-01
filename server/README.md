# 🧠 Delivery App – Server

Backend for the **Delivery App**, built with [NestJS](https://nestjs.com/) and powered by PostgreSQL via Prisma ORM. This service handles authentication, user management, payments, mailing, and API logic for the delivery platform.

---

## 🧰 Tech Stack

- **Framework:** NestJS (TypeScript)
- **ORM:** Prisma + PostgreSQL
- **Authentication:** JWT (via `@nestjs/jwt`, `passport-jwt`)
- **Password Hashing:** Argon2
- **Validation:** class-validator / class-transformer
- **Mailing:** Nodemailer
- **Payments:** Stripe API
- **Env Management:** @nestjs/config

---

## 🚀 Getting Started

Follow these steps to install and run the backend locally:

### 1. Clone the repository

```bash
git clone https://github.com/KDF25/expo-delivery-app.git
cd server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root of the server directory:

```dotenv
DATABASE_URL= 

JWT_SECRET= 

STRIPE_SECRET_KEY= 

MAIL_NAME=
MAIL_HOST=
MAIL_USER=
MAIL_PASS=
```

### 4. Run Prisma migrations

```bash
npx prisma migrate dev --name init
```

### 5. Push schema (optional)

```bash
npx prisma db push
```

### 6. Seed the database

```bash
npm run seed
```

### 7. Start the development server

```bash
npm run start:dev
```

## 📦 Available Scripts

```bash
# Development
npm run start:dev

# Build for production
npm run build

# Start production server
npm run start:prod

# Format code
npm run format

# Lint code
npm run lint

# Seed the database
npm run seed
```

## 📁 Environment Variables

| Variable          | Description                          |
|-------------------|--------------------------------------|
| `DATABASE_URL`    | Prisma connection string (PostgreSQL)|
| `JWT_SECRET`      | Secret key for signing JWT tokens    |
| `STRIPE_SECRET_KEY` | Stripe API secret key              |
| `MAIL_NAME`       | From name for emails                 |
| `MAIL_HOST`       | SMTP server host                     |
| `MAIL_USER`       | SMTP login                           |
| `MAIL_PASS`       | SMTP password                        |

---

© 2025 Delivery-App. All rights reserved.