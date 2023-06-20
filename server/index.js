const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

app.post('/api/login', async (req,res) => {
    const { username, password } = req.body;
    if(username === 'admin' && password === 'admin'){
        res.send({ message: 'Login Successful', username: username, loggedIn: true });
    }else{
        res.send({ message: 'Login Failed' });
    }
});