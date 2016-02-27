var path = require('path');
var url = require('url');

route = [
  {
    data: {
      "title": "iGEM NCKU-Tainan Official Page",
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
      "title": "About - iGEM NCKU-Tainan Official Page",
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
      "title": "Team - iGEM NCKU-Tainan Official Page",
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
      "title": "BLOG - iGEM NCKU-Tainan Official Page",
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
      "title": "Report - iGEM NCKU-Tainan Official Page",
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
