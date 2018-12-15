from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps

app = Flask(__name__)
api = Api(app)


class Main(Resource):
    def get(self):
        return { "name":"John", "age":30, "city":"New York" } # Fetches first column that is Employee ID



api.add_resource(Main, '/')

if __name__ == '__main__':
    app.run(debug=True)
    app.run(port='5002')