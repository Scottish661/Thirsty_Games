from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow your existing GitHub Pages website to talk to this backend
CORS(
    app,
    origins=["https://scottish661.github.io"]
)


@app.route("/", methods=["GET"])
def health():
    return jsonify({
        "status": "online",
        "service": "Thirsty Games backend"
    })


@app.route("/hello-world", methods=["GET"])
def hello_world():
    return jsonify({
        "message": "Halo World"
    })


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=10000
    )