#!/usr/bin/env bun

// Read More about Bun.Js: https://bun.sh/

/*
    In this web application we not create a real application in here we only
    see some case where the bun can help, and how the bun can execute javascript
    faster as compre to Node.Js or any other JS runtime.

    Tach Stack I choose for this application:
    - TypeScript: Becasue i love to write code in ts, and bun support typescript out of the box.
    - For Backend TypeScript runtime, you alrady know thi is an bun.js based project.
*/

/* 
    This is an simple application generate unique token with the help of sole-token, 
    but the package want an run time to execute the code beinde token generation so be 
    choose bunjs over nodejs because the can execute code faster or the user can generate 
    code as par request so it is essentail to execute the code as faster as we can.
    And be use database for manage uniqeness of token, to not nesseory but for demostartion
    Redis with bun i tink this is an grate example here to deal with json data in redis cloud.
*/
import { resolve } from "node:path/posix";
import token from "./api/token";
const PORT: number = 3000 || parseInt(process.env.PORT, 10);

export default Bun.serve({
    fetch(req: Request) {
        if(req.url.includes('/token')) {
            return token;
        }else if(req.url.includes('/') || req.url.includes('')) {
            return new Response(Bun.file('src/index.html'));
        }
    },
    port: PORT
});
