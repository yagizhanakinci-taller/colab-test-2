const path = require('path');
const express = require('express');
const path = require('path');
const UserController = require('./controllers/UserController');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'landing.html'));
});

const userController = new UserController();
app.post('/users', (req, res) => userController.createUser(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});