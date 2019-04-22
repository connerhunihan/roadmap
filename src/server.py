from flask import Flask, Response, abort
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


@app.route('/tasks/<task_id>', methods=['GET'])
def get_task(task_id):

    if task_id == 'None':

        output = []
        for s in col.find():
            output.append({'ID' : s['_id'], 'Task': s['task']})
    else:
        task_id = int(task_id)
        output = [task for task in col.find() if task['_id'] == task_id]


    return jsonify({'result' : output})



## Still working on this part###########3333
@app.route('/tasks', methods=['POST'])
def add_task():

    lastRecord = col.find().limit(1).sort({'_id': 1})

    if request.headers['Content-Type'] == 'application/json':

        arguments = request.get_json()
        task = arguments.get("task")

        data = {
            "_id": int(lastRecord) + 1,
            "task": str(task)
        }

        document = col.insert_one(data)
        resp = Response(json.dumps(data), mimetype='application/json')

    return resp


@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = [task for task in col.find() if task['_id'] == task_id]

    db_response = col.delete_one(task[0])

    if db_response.deleted_count == 1:
        response = {'ok': True, 'message': 'record deleted'}
    else:
        response = {'ok': True, 'message': 'no record found'}

    return jsonify({'result': response})


## Still working on this part###########3333
@app.route('/v1/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = [task for task in col.find() if task['_id'] == task_id]
    if len(task) == 0:
        abort(404)
    if not request.json:
        abort(400)

    task[0]['title'] = request.json.get('title', task[0]['title'])
    task[0]['is_completed'] = request.json.get('is_completed', task[0]['is_completed'])
    return jsonify({'task': task[0]})


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response



if __name__ == "__main__":
    app.run()
