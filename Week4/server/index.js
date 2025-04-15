import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory users array
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Welcome route
app.get('/welcome', (req, res) => {
  res.json({ message: 'Welcome to Express!' });
});

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex(user => user.id === parseInt(id));
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[userIndex] = { ...users[userIndex], name, email };
  res.json(users[userIndex]);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(user => user.id === parseInt(id));
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users = users.filter(user => user.id !== parseInt(id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});