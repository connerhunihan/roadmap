from flask import Flask, Response
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
import pymongo
import json

app = Flask(__name__)


client = pymongo.MongoClient("mongodb://roadmap:Mahmoud11209!@cluster0-shard-00-00-yaepm.mongodb.net:27017,cluster0-shard-00-01-yaepm.mongodb.net:27017,cluster0-shard-00-02-yaepm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true")

try:
    print("MongoDB version is %s" %
            client.server_info()['version'])
except pymongo.errors.OperationFailure as error:
    print(error)
    quit(1)

db = pymongo.database.Database(client, 'roadmap')
col = pymongo.collection.Collection(db, 'test')


@app.route('/star', methods=['GET'])
def get_all_stars():

    output = []
    for s in col.find().limit(5):
        output.append({'ID' : s['_id'], 'Task': s['task']})

    return jsonify({'result' : output})


@app.route('/add', methods=['POST'])
def add_star():
    if request.headers['Content-Type'] == 'application/json':

        arguments = request.get_json()

        id = arguments.get("id")
        task = arguments.get("task")

        data = {
            "_id": int(id) ,
            "task": str(task)
        }

        document = col.insert_one(data)
        resp = Response(json.dumps(data), mimetype='application/json')

    return resp


if __name__ == "__main__":
    app.run()
