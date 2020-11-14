from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error
import db
from nanoid import generate

app = Flask(__name__)


@app.route("/create", methods=["POST"])
def create():
    content = request.json
    data = {
        "id": generate("1234567890abcdef", 10),
        "title": content["title"],
        "youtube": content["youtube"],
        "instagram": content["instagram"],
        "twitter": content["twitter"],
        "facebook": content["facebook"],
        "description": content["description"],
    }
    cursor.execute(
        f"INSERT INTO Card VALUES ({data['id']}, {data['title']}, {data['youtube']}, {data['instagram']}, {data['twitter']}, {data['facebook']}, {data['description']})"
    )


@app.route("/card", methods=["GET"])
def card():
    ...


def connect():
    try:
        db = mysql.connector.connect(
            host="localhost", database="BusinessCard", user="root"
        )
        if db.is_connected():
            print("connection achieved!")
    except Error as e:
        print(f"error: {e}")


if __name__ == "__main__":
    app.run()
