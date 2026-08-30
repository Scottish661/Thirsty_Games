from flask import Flask, request, session, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)

# Flask session security
app.secret_key = os.environ.get(
    "SECRET_KEY",
    "change-this-secret-key"
)

# Allow the existing GitHub Pages website to communicate
# with this backend.
CORS(
    app,
    supports_credentials=True,
    origins=[
        "https://scottish661.github.io"
    ]
)

# Admin password
PASSWORD = os.environ.get(
    "ADMIN_PASSWORD",
    "250976"
)

# Temporary message storage
messages = []


# --------------------------------------------------
# BACKEND HEALTH CHECK
# --------------------------------------------------

@app.route("/", methods=["GET"])
def health():
    return jsonify({
        "status": "online",
        "service": "Thirsty Games backend"
    })


# --------------------------------------------------
# ADMIN LOGIN
# --------------------------------------------------

@app.route("/login", methods=["POST"])
def do_login():
    data = request.get_json(silent=True) or request.form
    password = data.get("password", "")

    if password == PASSWORD:
        session["admin"] = True

        return jsonify({
            "success": True,
            "message": "Logged in"
        })

    return jsonify({
        "success": False,
        "message": "Wrong password"
    }), 401


# --------------------------------------------------
# ADMIN LOGOUT
# --------------------------------------------------

@app.route("/logout", methods=["POST"])
def logout():
    session.clear()

    return jsonify({
        "success": True,
        "message": "Logged out"
    })


# --------------------------------------------------
# ADD MESSAGE
# --------------------------------------------------

@app.route("/add-message", methods=["POST"])
def add_message():
    if not session.get("admin"):
        return jsonify({
            "success": False,
            "message": "Not allowed"
        }), 403

    data = request.get_json(silent=True) or request.form
    message = data.get("message", "").strip()

    if not message:
        return jsonify({
            "success": False,
            "message": "Message is required"
        }), 400

    messages.append(message)

    return jsonify({
        "success": True,
        "message": "Message added"
    })


# --------------------------------------------------
# GET MESSAGES
# --------------------------------------------------

@app.route("/api/messages", methods=["GET"])
def get_messages():
    return jsonify(messages)


# --------------------------------------------------
# CHECK LOGIN STATUS
# --------------------------------------------------

@app.route("/api/login-status", methods=["GET"])
def login_status():
    return jsonify({
        "logged_in": bool(session.get("admin"))
    })


# --------------------------------------------------
# START SERVER
# --------------------------------------------------

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))

    app.run(
        host="0.0.0.0",
        port=port
    )