var fs = require("fs");

module.exports= function (hbs) {
  // register partials
  hbs.registerPartial('head', getPartials('head'));
  hbs.registerPartial('header', getPartials('header'));
  hbs.registerPartial('footer', getPartials('footer'));
  // conference layout
  hbs.registerPartial('header-conf', getPartials('header-conf'));
};

function getPartials(filename) {
  var template = fs.readFileSync('./layout/'+filename+'.html', 'utf8');
  template = template.replace(/[\t\n]/g, '');
  return template;
}
