# Job Postings Backend

This repository contains the backend implementation for a job postings platform. The backend is built with Node.js, Express.js, and TypeScript, and it connects to a MySQL database for data persistence.

## Features

- Job Management: Create, read, update, and delete (CRUD) operations for job postings.
- Database Integration: Uses MySQL for storing job and related data.
- TypeScript Support: Provides type safety and better development experience.
- Environment Configuration: Configuration is managed using `.env` files for better security and flexibility.

## Technologies Used

- Node.js: Backend runtime.
- Express.js: Framework for building RESTful APIs.
- TypeScript: Adds type safety to JavaScript.
-MySQL: Relational database for storing data.
- dotenv: For managing environment variables.

## Setup Instructions

### Prerequisites

- Node.js (v14 or above)
- npm (Node Package Manager)
- MySQL Server

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/supravasahoo26/Job-Postings.git
   cd Job-Postings
   ```

2. Install dependencies:
   ```bash
   npm i
   ```

3. Create a `.env` file in the root directory and configure your database credentials:
   ```env
   DB_HOST=localhost
   DB_USER=****
   DB_PASSWORD=****
   DB_NAME=doctor_appointments
   ```

4. Start the MySQL server and create the database:
   ```sql
   CREATE DATABASE doctor_appointments;
   ```
5. Start the server:
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000` by default.

### Building the Project

To compile the TypeScript code to JavaScript, run:
```bash
npm run build
```

### Running in Production

To start the application in production mode:
```bash
npm start
```

## Project Structure

```
Job-Postings/
├── src/
│   ├── controllers/       # Request handlers
│   ├── routes/            # API routes
│   ├── models/            # Database models (if using ORM)
│   ├── db.ts              # Database connection
│   └── app.ts             # Express app setup
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## API Endpoints

### Jobs Endpoints

- `GET /jobs`: Fetch all job postings.
- `GET /jobs/:id`: Fetch a job posting by ID.
- `POST /jobs`: Create a new job posting.
- `PUT /jobs/:id`: Update an existing job posting.
- `DELETE /jobs/:id`: Delete a job posting.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch and create a pull request.
