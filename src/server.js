const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
// Root API
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Gaza News Backend is running'
  });
});

// News API
app.get('/news', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Gaza update',
      source: 'Example source',
      date: '2026-01-29'
    }
  ]);
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
