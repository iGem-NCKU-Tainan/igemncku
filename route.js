var path = require('path');
var url = require('url');

route = [
  {
    data: {
      "title": "iGem NCKU",
      "url": "",
      "img": "",
      "description": "",
    },
    "partials": './partials.js',
    "layout":  "./view/index.hbs",
    "filename": "./public/index.html"
  },
  {
    data: {
      "title": "iGem NCKU About",
      "url": "",
      "img": "",
      "description": "",
    },
    "partials": './partials.js',
    "layout":  "./view/about/index.hbs",
    "filename": "./public/about/index.html"
  },
  {
    data: {
      "title": "iGem NCKU Team",
      "url": "",
      "img": "",
      "description": "",
    },
    "partials": './partials.js',
    "layout":  "./view/team/index.hbs",
    "filename": "./public/team/index.html"
  },
  {
    data: {
      "title": "iGem NCKU BLOG",
      "url": "",
      "img": "",
      "description": ""
    },
    "partials": './partials.js',
    "layout":  "./view/blog/index.hbs",
    "filename": "./public/blog/index.html"
  },
  {
    data: {
      "title": "iGem NCKU Report",
      "url": "",
      "img": "",
      "description": ""
    },
    "partials": './partials.js',
    "layout":  "./view/report/index.hbs",
    "filename": "./public/report/index.html"
  }
];

module.exports = route;
