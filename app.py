from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///transactions.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define the Transaction model
class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.String(10), nullable=False)
    product_name = db.Column(db.String(100), nullable=False)
    product_price = db.Column(db.Float, nullable=False)
    total_products = db.Column(db.Integer, nullable=False)
    total_amount = db.Column(db.Float, nullable=False)

# Initialize the database
with app.app_context():
    db.create_all()

# Route to add a transaction
@app.route('/add_transaction', methods=['POST'])
def add_transaction():
    data = request.json
    transaction = Transaction(
        date=datetime.strptime(data['date'], '%Y-%m-%d').date(),
        time=data['time'],
        product_name=data['product_name'],
        product_price=data['product_price'],
        total_products=data['total_products'],
        total_amount=data['total_products'] * data['product_price']
    )
    db.session.add(transaction)
    db.session.commit()
    return jsonify({"message": "Transaction added successfully"}), 201

# Route to get all transactions
@app.route('/transactions', methods=['GET'])
def get_transactions():
    transactions = Transaction.query.all()
    return jsonify([{
        "id": t.id,
        "date": t.date.strftime('%Y-%m-%d'),
        "time": t.time,
        "product_name": t.product_name,
        "product_price": t.product_price,
        "total_products": t.total_products,
        "total_amount": t.total_amount
    } for t in transactions])

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)




