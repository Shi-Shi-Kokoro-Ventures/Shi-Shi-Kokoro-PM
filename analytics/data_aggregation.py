import sqlite3
from datetime import datetime
from collections import defaultdict

def get_rent_payments():
    """
    Fetch rent payment data from the SQLite database.

    Returns:
        List[Dict]: A list of dictionaries containing payment dates and amounts.
    """
    conn = sqlite3.connect("database.db")  # Ensure the database file is in the same directory
    cursor = conn.cursor()

    # Query the rent_payments table
    cursor.execute("SELECT date, amount FROM rent_payments")
    
    # Format the data into a list of dictionaries
    payments = [
        {"date": datetime.strptime(row[0], '%Y-%m-%d'), "amount": row[1]}
        for row in cursor.fetchall()
    ]
    
    conn.close()
    return payments

def total_rent_per_month():
    payments = get_rent_payments()
    rent_per_month = defaultdict(float)
    
    for payment in payments:
        # Format date as 'YYYY-MM'
        month = payment["date"].strftime('%Y-%m')
        rent_per_month[month] += payment["amount"]
    
    return dict(rent_per_month)
