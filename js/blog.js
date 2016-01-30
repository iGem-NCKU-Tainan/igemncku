  $(function() {
      $('.grid').append('<div class="grid-sizer"></div>');

      for(var i = 0; i < instagram_embed.length; i++)
        $('.grid').append('<div class="grid-item">' + instagram_embed[i] +  '</div>');

      // init Masonry
      var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
      });

      // layout Isotope after each image loads
      $grid.imagesLoaded().progress( function() {
        $grid.masonry();
      });  
  });


  function checkIsLoaded()
  {
    if(!$('.resizable').height())
    {
      setTimeout(checkIsLoaded, 50);
    }
    else
    {
      $('#loader').hide();
      $('.resizable').show();
    }
  } 
  setTimeout(checkIsLoaded, 50); 
