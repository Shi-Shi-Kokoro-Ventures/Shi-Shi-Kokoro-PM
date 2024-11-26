from flask import Flask, jsonify, request
from flask_restful import Api, Resource
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
api = Api(app)
CORS(app)  # Enable CORS for all routes

# Database utility function
def query_db(query, args=(), one=False):
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute(query, args)
    result = cursor.fetchall()
    conn.close()
    return (result[0] if result else None) if one else result

# API Resource for Rent Analytics
class RentAnalytics(Resource):
    def get(self):
        # Query to calculate total rent per month
        query = """
        SELECT 
            strftime('%Y-%m', date) AS month, 
            SUM(amount) AS total_rent
        FROM rent_payments
        GROUP BY month
        ORDER BY month;
        """
        result = query_db(query)
        data = {row[0]: row[1] for row in result}
        return jsonify(data)

# Add resources to the API
api.add_resource(RentAnalytics, '/api/analytics/rent-per-month')

if __name__ == "__main__":
    app.run(debug=True)
