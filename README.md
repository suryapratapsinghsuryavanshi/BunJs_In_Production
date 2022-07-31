# BunJs In Production
A Bun.js and bun:sqlite based is a demo Production application you can deploy anywhere you want.

This is a simple application that generates a unique token with the help of a sole-token, but the package wants a run time to execute the code behind token generation so as to be choose bunjs over nodejs because they can execute code faster or the user can generate code as par request so it is essential to execute the code as faster as we can. And be use database to manage the uniqueness of token, this is not nessory but for demonstration be use Sqlite SqliteDB with bun I think this is a great example here to deal with JSON data in the SQLite Database.

Read More About Bun.js: [Bun.sh](https://bun.sh/)<br>
Read More About TypeScript: [TypeScript](https://www.typescriptlang.org/)<br>
Read More About SQLite: [bun:sqlite](https://github.com/oven-sh/bun#bunsqlite-sqlite3-module), [SQLite](https://www.sqlite.org/index.html)<br>
Read More About Process-Manager-2: [PM2](https://pm2.keymetrics.io/)

In this web application we do not create a real application here we only see some cases where the bun can help, and how the bun can execute javascript faster as compared to Node.Js or any other JS runtime.

    Tech Stack, I choose for this application:
    - TypeScript: Because I love to write code in ts, and bun support typescript out of the box.
    - For Backend TypeScript runtime, you already know we are using Bun.Js as runtime.
    - Database: Bun supports in-built SQLite so I used it because other databases like Redis or MongoDB consume a lot of bandwidth and are not currently compatible with Bun.
    - Server side processing: Process Manager 2

Objectively, I can say that currently, BunJs cannot replace NodeJs, but if most of the bugs that occur in the development phase as well as the deployment phase can be fixed, then it can be a good competitor of NodeJs.

## For Development
> `bun create` Start a new project with bun. <br>
> `bun run <file | script>` Run JavaScript with bun, a package.json script, or a bin. <br>
> `bun add <dependency>` Add a dependency to package.json. <br>
> `bun remove <dependency>` Remove a dependency to package.json. <br>
> `bun instal <dependency>` Install dependencies for a package.json.

## For Deployment
Add those scripts of your pacakge.json file
```js 
"scripts": {
    "start": "bun ./src/index.ts",
    "build": "bun bun ./src/index.ts ./src/index.html ./src/db.ts && ./node_modules.bun > node_modules.js",
    "deploy": "npm install -g pm2 && pm2 start bun --name \"bun_in_production\" -- start"
}
```

> `bun <file | script>` file_name.[ts, js, tsx, jsx]: for running a file. <br>
> `bun bun <files>` is a default bundler for external dependencies. <br>
> `pm2` for server side processing of bun.js. <br>
> `pm2 start bun --name \"bun_in_production\" -- start` start bun script wiht pm2.