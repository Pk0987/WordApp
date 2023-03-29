from flask import Blueprint, render_template, request, jsonify
from db import db_connect
from uuid import uuid4
from .model import Session_class
from passlib.hash import pbkdf2_sha256
from Prometheus.function import wordapp_user_creation_metric, wordapp_user_login_metric

authentication = Blueprint("authentication", __name__, template_folder = "templates", static_folder = "static")

@authentication.route('/register', methods=['GET','POST'])
def register_user():
    if request.method == 'POST':
        data = request.get_json()
        data.update({'_id': uuid4().hex})
        data.update({'password': pbkdf2_sha256.encrypt(data['password'])})
        table = db_connect()
        if table.find_one({'email':data['email']}):
            return jsonify({'status':300})
        elif(table.insert_one(data)):
            Session_class().session_creation(data)
            wordapp_user_creation_metric.inc()
            return jsonify({'status':200})
        else:
            print("User registration failure")
        # return jsonify({'status': 300})
    return render_template("register.html")


@authentication.route('/login', methods=['GET','POST'])
def login_user():
    if request.method == 'POST':
        data = request.get_json()
        table = db_connect()
        fetched_data = table.find_one({'email':data['email']})
        if (fetched_data and pbkdf2_sha256.verify(data['password'], fetched_data['password'])):
            Session_class().session_creation(fetched_data)
            wordapp_user_login_metric.inc()
            return jsonify({'status':200})
        return jsonify({'status':500})
    return render_template("login.html")
