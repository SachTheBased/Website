import flask

views = flask.Blueprint('views', __name__, template_folder='templates')

@views.route('/')
def index():
    return flask.render_template('index.html')

@views.route('/house')
def meth():
    return flask.render_template('house.html')