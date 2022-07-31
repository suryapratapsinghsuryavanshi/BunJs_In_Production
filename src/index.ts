#!/usr/bin/env bun

// Read More about Bun.Js: https://bun.sh/
// Read More about Sqlite: https://github.com/oven-sh/bun#bunsqlite-sqlite3-module

/*
    In this web application we do not create a real application here we only
    see some cases where the bun can help, and how the bun can execute javascript
    faster as compared to Node.Js or any other JS runtime.

    Tech Stack, I chose for this application:
    - TypeScript: Because I love to write code in ts, and bun support typescript out of the box.
    - For Backend TypeScript runtime, you already know we using Bun.Js as runtime.
*/

/* 
    This is a simple application that generates a unique token with the help of a sole-token, 
    but the package wants a run time to execute the code behind token generation so as to be 
    choose bunjs over nodejs because they can execute code faster or the user can generate 
    code as par request so it is essential to execute the code as faster as we can.
    And be use database to manage the uniqueness of token, this is not nessory but for demonstration be use Sqlite
    SqliteDB with bun I think this is a great example here to deal with JSON data in the Sqlite cloud.
*/

// Import the soluToken package for getting a unique token.
import { soleToken } from "sole-token";

// Bun support .env file by default.
const PORT: number = 3000 || parseInt(process.env.PORT, 10);

// Import databse methods.
import { dbInsert, dbAll, dbSearch } from './db'; 

// Here we create a Bun.server object and export it as an object. `bun` detects this, and provides response to requests in the form of HTTP protocol.
export default {
    // The fetch get and request argument and return response, response must we in BlobPart or BlobPart[].
    // Request object conainen only two keys one are url and second one are method of request.
    fetch(req: Request) {
        if (req.url.endsWith('/token')) {
            let Token = soleToken({}); // Create a token with the help of sole-token and pass as an response of /token request.
            
            // store the token value into database, but before store we want to check uniqueness.
            while(dbSearch(Token) !== null) {
                Token = soleToken({});
            }
            dbInsert(Token);

            return new Response(JSON.stringify({
                path: '/token',
                token: Token !== undefined || Token !== null ? Token : "Not Generated!"
            }), { status: 200 });
        } else if (req.url.endsWith('/') || req.url.endsWith('') || req.url.endsWith('favicon.ico')) {
            return new Response(Bun.file('src/index.html'), { status: 200 });
        }
    },
    port: PORT // second arguments of run.serve is port of the host.
};
