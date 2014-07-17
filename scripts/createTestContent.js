var cms = require('../cms');

cms.createPage({
  url: '/index.html',
  title: 'Welcome'
}, function () {
  cms.publishPage('/index.html', function () {
    console.log('Page Published');
  });
});

cms.createPage({
  url: '/aboutus.html',
  title: 'About Us'
}, function () {
  console.log('Page Created');
});
