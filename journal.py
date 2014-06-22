# -*- coding: utf-8 -*-
import os
import psycopg2
from flask import Flask
from contextlib import closing


# creates a single db table called entries with 4 columns
DB_SCHEMA = """
DROP TABLE IF EXISTS entries;
CREATE TABLE entries (
    id serial PRIMARY KEY,
    title VARCHAR (127) NOT NULL,
    text TEXT NOT NULL,
    created TIMESTAMP NOT NULL
)
"""

app = Flask(__name__)


@app.route('/')
def hello():
    return u'Hello world!'


# letting application know about how to connect db
app.config['DATABASE'] = os.environ.get(
    'DATABASE_URL', 'dbname=learning_journal user=muazzezmira'
)


def connect_db():
    # Opens a connection and returns it
    """Return a connection to the configured database"""
    return psycopg2.connect(app.config['DATABASE'])


def init_db():
    """Initialize the database using DB_SCHEMA
    WARNING: executing this function will drop existing tables.
    """
    with closing(connect_db()) as db:
        db.cursor().execute(DB_SCHEMA)
        db.commit()


if __name__ == '__main__':
    app.run(debug=True)
