# College Event Participation & QR Attendance Management System

A complete Express.js and SQLite web application for managing college events, student records, QR-based check-ins, live attendance counts, and Excel/PDF attendance reports.

## Features

- Secure admin login with bcrypt password hashing and server-side sessions.
- Student management with unique student number and email validation at the database layer.
- Event management with active/closed status, schedule, venue, and unique QR token.
- QR code generation for every event.
- Camera QR scanner for administrator-operated check-in.
- Public QR landing page for student self check-in by student number.
- Live attendance dashboard with participant counter that refreshes every 5 seconds.
- Excel `.xlsx` and PDF report downloads per event.
- Responsive UI for desktop, tablet, and mobile browsers.
- SQLite schema included in `docs/schema.sql`.

## Requirements

- Node.js 18 or newer
- npm

## Installation

```bash
npm install
npm run seed
npm start
```

Open `http://localhost:3000`.

Default admin account created by the seed command:

- Email: `admin@college.edu`
- Password: `Admin@12345`

Set `SESSION_SECRET` in production:

```bash
SESSION_SECRET="replace-with-a-long-random-secret" npm start
```

## Usage Guide

1. Sign in as an administrator.
2. Add students from **Students**.
3. Create events from **Events**.
4. Open an event QR page, print or display the QR code.
5. Use **Scanner** to scan event QR codes with a camera and enter student numbers, or let students open the QR landing page and enter their student number.
6. Monitor **Live** for participant counts and recent check-ins.
7. Download Excel or PDF reports from the event actions.

## Project Structure

```text
src/server.js       Express routes, reports, QR generation, live API
src/db.js           SQLite connection, schema initialization, promise helpers
src/auth.js         Authentication middleware
src/seed.js         Default admin, demo students, and demo event
src/views/          EJS pages
public/css/         Responsive styles
public/js/          Scanner and live dashboard scripts
docs/schema.sql     Database schema reference
data/               Runtime SQLite database files
```

## Security Notes

- Passwords are hashed with bcrypt.
- Session cookies are HTTP-only and use `secure` automatically when `NODE_ENV=production`.
- Helmet is enabled for common HTTP security headers.
- Database tables enforce unique identities and attendance idempotency.
- For production, serve the app over HTTPS so camera access and secure cookies work reliably.
