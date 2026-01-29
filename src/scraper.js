const axios = require('axios');
const cheerio = require('cheerio');

const URL =
  'https://www.motqdmon.com/search/label/%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A7%D8%AA';

async function scrapeNews() {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        ’User-Agent’:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const $ = cheerio.load(data);
    const news = [];

    $('.post-title').each((index, element) => {
      if (index < 10) {
        const title = $(element).text().trim();
        const link = $(element).find('a').attr('href');

        news.push({
          id: index + 1,
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
