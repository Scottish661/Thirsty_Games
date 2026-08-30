 from flask import Flask, request, session, redirect, jsonify
import os
app = Flask(__name__)
# Secret key used for the admin session
app.secret_key = os.environ.get("SECRET_KEY", "change-this-secret-key")
# Admin password
PASSWORD = os.environ.get("ADMIN_PASSWORD", "250976")
# Temporary storage
messages = []
# --------------------------------------------------
# HEALTH CHECK
# --------------------------------------------------
@app.route("/", methods=["GET"])
def health():
    return jsonify({
        "status": "online",
        "service": "Thirsty Games backend"
    })
# --------------------------------------------------
# LOGIN
# --------------------------------------------------
@app.route("/login", methods=["POST"])
def do_login():
    password = request.form.get("password", "")
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
# LOGOUT
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
    message = request.form.get("message", "Hello website")
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
