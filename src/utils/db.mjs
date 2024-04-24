import Database from 'better-sqlite3';
const db = new Database(process.env.NODE_ENV === "production" ? "/static/database.db" : "./static/database.db");
db.prepare('CREATE TABLE IF NOT EXISTS channels (channelid TEXT NOT NULL PRIMARY KEY, disocrdchannel TEXT NOT NULL, lastvid TEXT, channelname TEXT) WITHOUT ROWID').run()
