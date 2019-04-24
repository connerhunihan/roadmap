from flask import Flask, Response, abort, render_template, jsonify, request, url_for
import pymongo
import json
from werkzeug import secure_filename
from flask_pymongo import PyMongo


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

app.config["MONGO_URI"] = "mongodb://roadmap:Mahmoud11209!@cluster0-shard-00-00-yaepm.mongodb.net:27017,cluster0-shard-00-01-yaepm.mongodb.net:27017,cluster0-shard-00-02-yaepm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
app.config['MONGO_DBNAME'] = 'roadmap'
mongo = PyMongo(app)



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



########################################################################################################
######################## Upload and Download ###########################################################
########################################################################################################


@app.route('/upload')
def upload_file():
    return render_template('upload.html')


@app.route('/uploader', methods=['GET', 'POST'])
def create():
    if 'profile_image' in request.files:
        profile_image = request.files['profile_image']
        mongo.save_file(profile_image.filename, profile_image)
        mongo.db.test.insert({'username': request.form.get('username'), 'profile_image_name': profile_image.filename})

    return 'file uploaded successfully'

@app.route('/file/<filename>')
def file(filename):
    return mongo.send_file(filename)


@app.route('/profile/<username>')
def profile(username):
    user = mongo.db.test.find_one_or_404({'username': username})
    return f'''
    <h1>{username}</h1>
    <a href = "{url_for('file', filename = user['profile_image_name'])}" download> Download </a>

'''



################################################################################################################
################################################################################################################
################################################################################################################




@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response



if __name__ == "__main__":
    app.run()
