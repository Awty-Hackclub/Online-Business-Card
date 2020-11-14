from flask import Flask, request, jsonify
import mysql.connector
import db
from nanoid import generate

db.connect()
cursor = db.db.cursor()

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
        f"INSERT INTO Card VALUES ({data["id"]}, {data["title"]}, {data["youtube"]}, {data["instagram"]}, {data["twitter"]}, {data["facebook"]}, {data["description"]}"
    )


@app.route("/card", methods=["GET"])
def card():
    ...


if __name__ == "__main__":
    app.run()
