from flask import Flask, request, session, redirect, jsonify, render_template

app = Flask(__name__, template_folder=".")

app.secret_key = "testing-secret"

PASSWORD = "250976"

messages = []


@app.route("/")
def login():
    if session.get("admin"):
        return """
        <h1>Admin Panel</h1>

        <form action="/add-message" method="post">
            <button type="submit">Create Hello Website</button>
        </form>
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

    return "Wrong code"


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
    return render_template(
        "index.html",
        message="Hello website"
    )


@app.route("/<path:filename>")
def files(filename):
    return app.send_static_file(filename)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)