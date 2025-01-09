from flask import Flask, render_template #this function render template is used to render HTML templates

app = Flask(__name__) #Create Flask instance and name is special variable helps with locating the resources like templates and static files

@app.route("/") #Tells Flask which Url should trigger the function below which in this case is the root which is https://127.0.0.1:5000/
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


if __name__ == "__main__": #__name__ a built-in Python variable holds the name of the current module and this if statement ensure that this part of the code only runs when the script is executed directly and not when it's imported
    app.run(debug = True)  # this if and app.run ensures Flask Development server is only started when running this file and not other files that might import this file