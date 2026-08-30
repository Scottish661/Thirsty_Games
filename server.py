from flask import Flask, request, session, redirect, jsonify, send_from_directory
import os

# Use the folder containing this server.py as the main website folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__)

# Secret key for Flask sessions
app.secret_key = os.environ.get("SECRET_KEY", "testing-secret")

# Admin password
PASSWORD = os.environ.get("ADMIN_PASSWORD", "250976")

# Temporary messages
messages = []


# --------------------------------------------------
# MAIN THIRSTY GAMES WEBSITE
# --------------------------------------------------

@app.route("/")
def home():
    return send_from_directory(BASE_DIR, "index.html")


# --------------------------------------------------
# ADMIN LOGIN
# --------------------------------------------------

@app.route("/login", methods=["POST"])
def do_login():
    password = request.form.get("password", "")

    if password == PASSWORD:
        session["admin"] = True
        return redirect("/")

    return "Wrong password", 401


# --------------------------------------------------
# ADD MESSAGE
# --------------------------------------------------

@app.route("/add-message", methods=["POST"])
def add_message():
    if not session.get("admin"):
        return "Not allowed", 403

    messages.append("Hello website")

    return redirect("/")


# --------------------------------------------------
# MESSAGES API
# --------------------------------------------------

@app.route("/api/messages")
def get_messages():
    return jsonify(messages)


# --------------------------------------------------
# SERVE ROOT WEBSITE FILES
# --------------------------------------------------

@app.route("/<path:filename>")
def files(filename):
    # Only allow files that are actually in the main
    # Thirsty Games folder.
    allowed_files = {
        "Logic.js",
        "make.js",
        "play.js",
        "reset.js",
        "rules.js",
        "googlea16597665ce2911c.html"
    }

    if filename in allowed_files:
        return send_from_directory(BASE_DIR, filename)

    return "File not found", 404


# --------------------------------------------------
# START SERVER
# --------------------------------------------------

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))

    app.run(
        host="0.0.0.0",
        port=port
    )