import express from 'express'

// Express App
const app = express();

// Listen to request on port 3000
app.listen(3000);

// Routes
app.get('/', (req, res) => {
  res.send('hello');
});