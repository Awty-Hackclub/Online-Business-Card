from flask import Flask, request, jsonify
import mysql.connector

db = mysql.connector.connect(host="root")

print(db)

app = Flask(__name__)


@app.route("/create", methods=["POST"])
def create():
    content = request.json
    print(content)


@app.route("/card", methods=["GET"])
def card():
    ...


if __name__ == "__main__":
    app.run()
