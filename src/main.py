import flask
import frontend.views

app = flask.Flask('Meth')
app.register_blueprint(frontend.views.views)

app.run('127.0.0.1', port = 69420)