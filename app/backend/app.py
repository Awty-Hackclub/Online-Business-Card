from flask import Flask, request, json
import mysql.connector
from mysql.connector import Error
from nanoid import generate

app = Flask(__name__)

try:
    db = mysql.connector.connect(host="localhost", database="BusinessCard", user="root")
    if db.is_connected():
        print("connection achieved!")
    cursor = db.cursor()
except Error as e:
    print(f"error: {e}")


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
    id = request.args.get("id")
    cursor.execute(f"SELECT * FROM Card WHERE id={id}")
    row_headers = [x[0] for x in cursor.description]
    result = cursor.fetchall()
    json_data = []
    for r in result:
        json_data.append(dict(zip(row_headers, r)))
    return json.dumps(json_data)


if __name__ == "__main__":
    app.run()
