$(function() {
	$(".wrapper").each(function(){
		var obj = $(this);
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

