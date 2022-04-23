from flask import Flask, render_template


app = Flask(__name__, template_folder='template')


@app.route('/', methods=["GET"])
def view():
    return render_template('base.html')


@app.route('/about', methods=["GET", "POST"])
def language():
    return render_template('about.html')


@app.route('/images', methods=["GET"])
def image():
    return render_template('images.html')


@app.route('/images/info', methods=["GET"])
def images_info():
    return render_template('beach_info.html')


@app.route('/maps', methods=["GET"])
def maps():
    return render_template('navigation.html')


@app.route('/contacts', methods=["GET", "POST"])
def contacts():
    return render_template('contacts.html')


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=9090)
