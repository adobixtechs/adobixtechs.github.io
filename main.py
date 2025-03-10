from flask import Flask, render_template

application = Flask(__name__)


@application.route("/")
def get_root_page():
    return render_template('main.html')


@application.route("/privacy-policy")
def get_privacy_policy_page():
    return render_template("privacy_policy.html")


@application.route("/contact-us")
def get_contact_page():
    return render_template("contact_us.html")


if __name__ == "__main__":
    application.run(host="0.0.0.0")
