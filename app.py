from flask import Flask, jsonify
from analytics.data_aggregation import total_rent_per_month

app = Flask(__name__)

@app.route('/api/analytics/rent-per-month', methods=['GET'])
def rent_per_month():
    """
    API endpoint to get aggregated rent data per month.
    """
    data = total_rent_per_month()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)