from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps

app = Flask(__name__)


@app.route('/visualiser', methods=['POST'])
def Visualiser():
    print(request.json)
    return "json.dumps(request.json)"



if __name__ == '__main__':
    app.run(debug=True)
    app.run(port='5002')
