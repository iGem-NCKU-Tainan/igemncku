(function() {

  
   var path = window.location.pathname.split('/')[1];

   switch(path) {
   
    case 'about':
     $('.navbar-nav li:nth-child(2) a').addClass('active');
     break;

    case 'team':
     $('.navbar-nav li:nth-child(3) a').addClass('active');
     break;

    case 'project':
     $('.navbar-nav li:nth-child(4) a').addClass('active');
     break;

    case 'report':
     $('.navbar-nav li:nth-child(5) a').addClass('active');
     break;

    case 'blog':
     $('.navbar-nav li:nth-child(6) a').addClass('active');
     break;

    default:
     $('.navbar-nav li:nth-child(1) a').addClass('active');
     break;
   
   }


})();
