const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const apiService = require('./service');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(dashboardRoutes);


app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await apiService.login(username, password);
        if (token == 1) {
            console.log(token);
            res.json(null);    
        }
        else {
            res.json({ token });
        }
    } catch (error) {
        res.status(401).send(error.message);
    }
});

app.get('/home', apiService.authenticateJWT, (req, res) => {
    res.send('This is the protected home page');
});

app.listen(3000, () => {
    console.log('\nNode Server running on port 3000...\n');
});
