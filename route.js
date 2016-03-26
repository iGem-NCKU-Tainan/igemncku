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
      "title": "Sponsor - iGEM NCKU-Tainan Official Page",
      "url": "",
      "img": "",
      "description": "",
    },
    "partials": './partials.js',
    "layout":  "./view/sponsor/index.hbs",
    "filename": "./public/sponsor/index.html"
  },
  {
    data: {
      "title": "2016 Conference - iGEM NCKU-Tainan Official Page",
      "url": "",
      "img": "",
      "description": "",
    },
    "partials": './partials.js',
    "layout":  "./view/conf/2016.hbs",
    "filename": "./public/2016conf/index.html"
  },
   {
    data: {
      "title": "2016 Conference - iGEM NCKU-Tainan Official Page",
      "url": "",
      "img": "",
      "description": "",
    },
    "partials": './partials.js',
    "layout":  "./view/conf/2016-en.hbs",
    "filename": "./public/2016conf-en/index.html"
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
  },
  {
    data: {
      title: "iGEM NCKU-Tainan Official Page",
      img: "",
      url: "",
      description: ""
    },
    partials: './partials.js',
    layout: "./view/index.en.hbs",
    filename: './public/en/index.html'
  }
];

module.exports = route;
