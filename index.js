const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { connectDB } = require('./db');
const cors = require('cors');

dotenv.config();
const port = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use(cors());

const users = [];

//route for user to signup
app.post('/signup', (req,res) => {
    const { firstname, lastname, username, email, password } = req.body;

    //checking if a user already exists
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
        return res.status(409).json({ error: 'User already exists' });
    }

    //Creating a new user
    const newUser = {id: users.length + 1, firstname, lastname, username, email, password};
    users.push(newUser);

    return res.status(201).json({ message: 'User created successfully', user: newUser});
});

//Route for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    //find username and password in the database
    const user = users.find((user) => user.username === username && user.password === password);

    if(!user) {
        return res.status(401).json({ error: 'Invalid login details'});
    }

    return res.status(200).json({message: 'Login successful'});
})


app.get('/', (req,res) => {
    res.send('Backend up and running');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});