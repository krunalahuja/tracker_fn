Transaction Tracker is a full-stack web application that allows users to manage transactions efficiently. The backend is built using Flask and SQLAlchemy, while the frontend is developed with React. The application provides features such as adding, retrieving, deleting, and canceling transactions.

Features

Add Transactions: Users can add new transactions with details like date, time, amount, product name, price, and quantity.

View Transactions: A paginated list of transactions is displayed in the frontend.

Delete Transactions: Users can remove transactions.

Cancel Transactions: Users can mark a transaction as canceled without deleting it.

RESTful API: The backend exposes API endpoints for managing transactions.

Cross-Origin Resource Sharing (CORS) Enabled: Allows frontend and backend communication.

Technologies Used

Backend:

Python (Flask, Flask-CORS, Flask-SQLAlchemy)

SQLite (Database)

REST API (CRUD operations)

Frontend:

React (Hooks, State Management, Fetch API)

CSS (Basic Styling)

Bootstrap (UI Components)

Tools & Deployment:

Git & GitHub (Version Control)

Postman (API Testing)

Node.js & npm (Package Management)

Virtual Environment (For Flask Dependencies)

Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/transaction-tracker.git
cd transaction-tracker

2. Backend Setup

Install Dependencies

cd backend
python -m venv venv
source venv/bin/activate  # For macOS/Linux
venv\Scripts\activate    # For Windows
pip install -r requirements.txt

Run Flask Server

python app.py

The backend will run on http://127.0.0.1:5000/.

3. Frontend Setup

Install Dependencies

cd frontend
npm install

Run React App
