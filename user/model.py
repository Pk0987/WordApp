from flask import session
from Prometheus.function import wordapp_session_logged_in_total, wordapp_session_logged_out_total

class Session_class:
    def __init__(self):
        pass
    def session_creation(self, user):
        wordapp_session_logged_in_total.inc()
        session['logged_in'] = True
        session['name'] = user['name']
        session['_id'] = user['_id']
    def session_deletion(self):
        wordapp_session_logged_out_total.inc()
        del session['logged_in']
        del session['name']
        del session['_id']
