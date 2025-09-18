# Task-Manager-Assessment

This is a Lightweight MERN Task Manager, with some minimal styling.

Consists of seperate frontend and backend folders - client and server respectively.

Make sure to have the latest version of node installed.

- Step 1
Clone the repo

``
git clone https://github.com/j0ec0de/Task-Manager-Assessment.git
``

- Step 2

Install dependencies

```
cd client
npm install
```

```
cd server
npm install
```

- Step 3

In the server folder , you need an env file which consists of values

PORT

MONGO_URI (get the connection string from mongodb and add your username and password)

NODE_ENV (set to development)

JWT_COOKIE_EXPIRES (7)

JWT_SECRET (of your choice)

- Step 4

run the commands in separate terminals.

```
cd client
npm run dev
```

```
cd server
npm run dev
```

