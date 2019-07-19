var express = require('express');
var router = express.Router();
var se_scraper = require('se-scraper');

router.get('/', function(req, res, err) {
  (async () => {
    let scrape_job = {
        search_engine: 'google',
        keywords: [req.query.search],
        num_pages: 1,
        google_settings: {
          gl: 'cn',
          num: 100,
        }
    };

    var searchRes = await se_scraper.scrape({}, scrape_job);
    res.send(searchRes['results'][req.query.search]['1']);
  })();
});

module.exports = router;