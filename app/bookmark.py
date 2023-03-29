from db import bookmark_db_connect
from flask import session, jsonify
from bson.json_util import dumps, loads
bookmark_table = bookmark_db_connect()

def read_bookmark():
    id = session.get('_id')
    return bookmark_table.find_one({'_id': id})

class Bookmark:
    def __init__(self) -> None:
        self.table = bookmark_table
        self.id = session.get('_id')
        self.clip = {}
        self.clip['_id'] = session.get('_id')
        self.clip['bookmarks'] = []

        
    def add_bookmark(self, append_word):
        bookmark_data = loads(dumps(read_bookmark()))
        if bookmark_data == []:
            bm_list = [append_word]
            self.clip['bookmarks'] = bm_list
            self.table.insert_one(self.clip)
        elif bookmark_data.get('bookmarks') == []:
            self.table.update_one({'_id':self.id}, { "$set" : { "bookmarks" : list([append_word]) }})
        elif bookmark_data.get('bookmarks') is not None:
            data = bookmark_data['bookmarks']
            data.append(append_word)
            self.table.update_one({'_id':self.id}, { "$set" : { "bookmarks" : data }})

    def remove_bookmark(self, removable_word):
        bookmark_data = read_bookmark()
        data = bookmark_data['bookmarks']
        data.remove(removable_word)
        self.table.update_one({'_id':self.id}, { "$set" : { "bookmarks" : data }})

    def check_bookmark(self, check_word):
        temp = read_bookmark()
        if temp is None:
            self.table.insert_one(self.clip)
            return False
        data = temp['bookmarks']
        if check_word in data:
            return True
        return False
    
    
        



