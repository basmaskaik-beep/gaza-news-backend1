const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://www.motqdmon.com/search/label/%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A7%D8%AA';

async function scrapeNews() {
  try {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);

    const news = [];

    $('.post-title').each((i, element) => {
      if (i < 10) {
        const title = $(element).text().trim();
        const link = $(element).find('a').attr('href');

        news.push({
          title,
          link
        });
      }
    });

    return news;
  } catch (error) {
    console.error('Scraping error:', error.message);
    return [];
  }
}

module.exports = scrapeNews;
