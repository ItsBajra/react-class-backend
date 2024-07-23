// const math = require('./math.js')
// const file = require('./file.js')

// console.log(math.add(2,3));
// console.log(math.subtract(2,1));
// console.log(math.multiply(3,4));
// console.log(math.divide(12,3));

// const http = require('http');
// http.createServer(
//     (req, res) => {
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('Hello World!');
//         res.end();
//     }
// ).listen(8000)

// const http = require('http');
// const server=http.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('Hello World!');
//     res.end();
// })

// server.listen(8000, ()=> {
//     console.log('Server is running on port 8000')
// })

// const express = require('express');
// const app=express();

// app.use(express.json());
// app.get('/', (req, res) => {
//     res.send("Hello World!");
// });

// const users = [{
//     id: 1,
//     name: 'John'
// },
// {
//     id: 2,
//     name: 'Doe'
// }
// ];

// app.get('/users', (req, res) => {
//     // res.send('Hello Users!');
//     res.json(users);
// });

// app.get("/users/:id", (req, res) => {
//     const user_id=req.params.id;
//     console.log(typeof user_id);
//     console.log(user_id);
//     const user = users.find((user) => user.id === parseInt(user_id));
//     if (!user) {
//         res.status(404).send("User not found!");
//     }
//     res.send(user);
// }
// );

// app.post("/post-users", (req, res) => {
//     res.send(users);
// })

// app.post("/post-user", (req, res) => {
//     const name = req.body.name;
//     res.send(name);
// })

const express = require('express');
const app = express();
const connectDB = require("./src/Config/db");
app.use(express.json());
const port = 3000;


connectDB();


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'));

app.listen(3000 ,()=> {
    console.log(`Server is running on ${port}`);
});