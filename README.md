# Todo API (Node.js + Express + PostgreSQL)

A simple RESTful API for managing todos, built with Node.js, Express, and PostgreSQL.

## Features
- Create, Read, Update, and Delete todos
- RESTful API design
- PostgreSQL for persistent storage
- TypeScript for type safety

## Project Structure
- src/
- controllers/ # Business logic
- routes/ # API routes
- middleware/ # Error handler
- db.ts # Database connection
- index.ts # App entry point

## Installation
```bash
git clone https://github.com/your-username/todo-app.git
cd todo_app
npm install

PGUSER=yourusername
PGHOST=localhost
PGDATABASE=todosdb
PGPASSWORD=yourpassword
PGPORT=5432

# Dev
npm run dev

# Build
npm run build

# Start
npm start