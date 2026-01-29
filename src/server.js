const express = require('express');
const scrapeNews = require('./scraper');
const app = express();
const likes = {};
const PORT = process.env.PORT || 3000;
// Root API
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Gaza News Backend is running'
  });
});

app.get('/news', async (req, res) => {
  const news = await scrapeNews();

const newsWithLikes = news.map(item => ({
  ...item,
  likes: likes[item.id] || 0
}));

res.json({
  status: 'ok',
  count: newsWithLikes.length,
  data: newsWithLikes
});

  app.post('/news/:id/like', (req, res) => {
  const id = req.params.id;

  if (!likes[id]) {
    likes[id] = 0;
  }

  likes[id]++;

  res.json({
    status: 'ok',
    message: 'Like added',
    likes: likes[id]
  });
});
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
