from flask import Flask, request, session, redirect, jsonify
import os

app = Flask(__name__)

app.secret_key = os.environ.get("SECRET_KEY", "testing-secret")

PASSWORD = os.environ.get("ADMIN_PASSWORD", "250976")

messages = []


@app.route("/")
def login():
    if session.get("admin"):
        return """
        <h1>Admin Panel</h1>

        <form action="/add-message" method="post">
            <button type="submit">Create Hello Website</button>
        </form>

        <a href="/game">Go to game</a>
        """

    return """
    <h1>Admin Login</h1>

    <form action="/login" method="post">
        <input type="password" name="password">
        <button type="submit">Sign in</button>
    </form>
    """


@app.route("/login", methods=["POST"])
def do_login():
    password = request.form.get("password")

    if password == PASSWORD:
        session["admin"] = True
        return redirect("/")

    return "Wrong code", 401


@app.route("/add-message", methods=["POST"])
def add_message():
    if not session.get("admin"):
        return "Not allowed", 403

    messages.append("Hello website")

    return redirect("/")


@app.route("/api/messages")
def get_messages():
    return jsonify(messages)


@app.route("/game")
def game():
    with open("index.html", "r", encoding="utf-8") as file:
        html = file.read()

    return html.replace("{{ message }}", "Hello website")


@app.route("/<path:filename>")
def files(filename):
    if filename in [
        "Logic.js",
        "rules.js",
        "play.js",
        "reset.js",
        "make.js",
        "googlea16597665ce2911c.html"
    ]:
        return open(filename, "r", encoding="utf-8").read()

    return "File not found", 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)