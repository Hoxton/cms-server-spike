var level = require('level');
var db = level('./cmsdb');

function cms () {};
cms.createPage = function (page, callback) {
  db.put(page.url, page, callback);
}

cms.publishPage = function (pageUrl, callback) {
  db.get(pageUrl, function (err, page) {
    if (err) throw err;

    console.log('Publishing Page', page);

    page.published = true;
    db.put(pageUrl, page, function (err) {
      callback();
    });
  });
}

module.exports = cms;
