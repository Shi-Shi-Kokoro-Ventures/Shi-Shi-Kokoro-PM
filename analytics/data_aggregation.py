from datetime import datetime
from collections import defaultdict

# Simulated function to retrieve rent payments (replace with your database call)
def get_rent_payments():
    # Example data structure; replace with actual DB query
    return [
        {"date": datetime(2024, 1, 5), "amount": 1000},
        {"date": datetime(2024, 1, 15), "amount": 1200},
        {"date": datetime(2024, 2, 10), "amount": 900},
        {"date": datetime(2024, 2, 20), "amount": 1100},
    ]

def total_rent_per_month():
    payments = get_rent_payments()
    rent_per_month = defaultdict(float)
    
    for payment in payments:
        # Format date as 'YYYY-MM'
        month = payment["date"].strftime('%Y-%m')
        rent_per_month[month] += payment["amount"]
    
    return dict(rent_per_month)
