import flask
from flask import request, jsonify
import MySQLdb;


app = flask.Flask(__name__)
app.config["DEBUG"] = True

def connection():
    conn = MySQLdb.connect(
    host = "localhost",
    user = "root",
    passwd = "",
    db = "myApp"
    )
    c = conn.cursor()
    return c, conn

c, con = connection()

# Create some test data for our catalog in the form of a list of dictionaries.
books = [
    {'id': 0,
     'title': 'A Fire Upon the Deep',
     'author': 'Vernor Vinge',
     'first_sentence': 'The coldsleep itself was dreamless.',
     'year_published': '1992'},
    {'id': 1,
     'title': 'The Ones Who Walk Away From Omelas',
     'author': 'Ursula K. Le Guin',
     'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
     'published': '1973'},
    {'id': 2,
     'title': 'Dhalgren',
     'author': 'Samuel R. Delany',
     'first_sentence': 'to wound the autumnal city.',
     'published': '1975'}
]


@app.route('/', methods=['GET'])
def home():
    return "Donata"


# A route to return all of the available entries in our catalog.
@app.route('/api/v1/resources/books/all', methods=['GET'])
def api_all():
    return jsonify(books)

@app.route('/api/users', methods=['GET'])
def api_users():
    c.execute("SELECT * FROM Persons")
    data = c.fetchall()
    print("DONATA")
    return jsonify(data)

app.run()
