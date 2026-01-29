const express = require('express');
const scrapeNews = require('./scraper');
const app = express();
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

  res.json({
    status: 'ok',
    count: news.length,
    data: news
  });
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
