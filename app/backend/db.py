import mysql.connector
from mysql.connector import Error


def connect():
    try:
        db = mysql.connector.connect(
            host="localhost", database="BusinessCard", user="root"
        )
        if db.is_connected():
            print("connection achieved!")
    except Error as e:
        print(f"error: {e}")
    finally:
        if db is not None and db.is_connected():
            db.close()
