from flask import Flask, render_template
import os

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/work")
def work():
    return render_template("work.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/play")
def play():
    return render_template("play.html")


if __name__ == "__main__":
    # Get the port from the environment variable (if it's set) or use 5000 as a fallback
    port = int(os.environ.get("PORT", 5000))

    # Run the app with host 0.0.0.0 to make it publicly accessible, and use the dynamic port
    app.run(debug=False, host="0.0.0.0", port=port)
