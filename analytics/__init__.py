import logging

# Configure logging for the analytics module
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
logger.info("Analytics module initialized")

# Import specific functionality from other module(s)
from .data_aggregation import total_rent_per_month

# Module metadata
"""
Analytics Module

This module provides tools for data aggregation and analysis
for the Shi Shi Kokoro property management application.
"""
__version__ = "1.0.0"
__author__ = "Shi Shi Kokoro Team"

