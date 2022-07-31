// The bun have support sqlite as built-in. : https://github.com/oven-sh/bun#bunsqlite-sqlite3-module
import { Database } from 'bun:sqlite';

// Create a database file localy.
const db = new Database(process.env.DB_NAME);

// Create a table.
db.run(
    "CREATE TABLE IF NOT EXISTS tokens(id INTEGER PRIMARY KEY AUTOINCREMENT, token TEXT)"
);

// createa a method for wokr with sqlite.
const dbInsert = (token: string) => {
    db.run(
        "INSERT INTO tokens (token) VALUES (?)", token
    );
}

// create a method for geting all resluts.
const dbAll = () => {
    return db.query("SELECT * FROM tokens").all();
}

// create a method for search the token are uniqe of not.
const dbSearch = (token: string) => {
    return db.query(
        "SELECT * FROM tokens WHERE token = $token"
    ).get({
        $token: token
    });
}

export {
    dbInsert,
    dbAll,
    dbSearch
}