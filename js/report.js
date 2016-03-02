$(function() {
	$.getJSON("/js/report_data.json", function(data) {
		$.each(data, function(key, val){
			var title = '<div class="title">'+val["title"]+'<div class="underline"></div></div>';
			var link = val["link"];
			var wrapper = '<div class="wrapper" id="wrap'+key+'" style="visibility: visible;">';
			var other = '<div class="shadow"></div><div class="nav-arrows"><a href="#">Next</a><a href="#">Previous</a></div>';
			var items = [];
			$.each(val["pages"], function(key, val){
				var item = val["img"];
				var subtitle = "";
				if(val["subtitle"])
					subtitle += '<div class="sb-description"><h3>'+val["subtitle"]+'</h3></div>';
				var content = '<a href="'+link+'" target="_blank"><img src="'+item+'" /></a>';
				items.push("<li>"+content+subtitle+"</li>");
			});
			$("#main").append(title+wrapper);
      var obj = $("#wrap"+key);
			$("<ul/>", {
				"class": "sb-slider",
				html: items.join("")
			}).appendTo(obj);
			obj.append(other);
			// add slicebox effect
      var navTop = obj.find(".sb-slider").offset().top + 300;
      var arrowLeft = obj.find(".sb-slider").offset().left;
      obj.find(".nav-arrows a").css("top",navTop);
      obj.find('.nav-arrows a:first-child').css("left",arrowLeft + 795);
      obj.find('.nav-arrows a:nth-child(2)').css("left",arrowLeft - 50);
      var Page = (function() {
          var $navArrows = obj.find( '.nav-arrows' ).hide(),
              $shadow = obj.find( '.shadow' ).hide(),
              slicebox = obj.find( '.sb-slider' ).slicebox( {
                  onReady : function() {
                      $navArrows.show();
                      $shadow.show();
                  },
                  orientation : 'r',
                  cuboidsRandom : true,
                  disperseFactor : 30
              } ),
              
              init = function() {
                  initEvents();
                  
              },
              initEvents = function() {
                  // add navigation events
                  $navArrows.children( ':first' ).on( 'click', function() {
                      slicebox.next();
                      return false;
                  } );
                  $navArrows.children( ':last' ).on( 'click', function() {
                      
                      slicebox.previous();
                      return false;
                  } );
                  $(document).keydown(function(event){
                      if(event.which == 39) slicebox.next();
                      else if(event.which == 37) slicebox.previous();
                  });
              };
              return { init : init };
      })();
      Page.init();
		});
	});
});