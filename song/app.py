from flask import Flask, render_template, send_file


app = Flask(__name__, template_folder="static")


@app.route('/', methods=["GET"])
def home():
    song = "songs/Ukraine.mp3"
    return render_template("index.html", songs=song)


if __name__ == "__main__":
    app.run(debug=True)

