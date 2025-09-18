# Task-Manager-Assessment

This is a Lightweight MERN Task Manager, with some minimal styling.

Consists of seperate frontend and backend folders - client and server respectively.

Make sure to have the latest version of node installed.

- Step 1
Clone the repo

```
git clone https://github.com/j0ec0de/Task-Manager-Assessment.git

cd Task-Manager-Assessment
```

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

In the server folder , you need an .env file which consists of values

```
# .env.example
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key
JWT_COOKIE_EXPIRES=7
```

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

