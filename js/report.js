$(function(){$(".wrapper").each(function(){var n=$(this),i=n.find(".sb-slider").offset().top+300,o=n.find(".sb-slider").offset().left;n.find(".nav-arrows a").css("top",i),n.find(".nav-arrows a:first-child").css("left",o+795),n.find(".nav-arrows a:nth-child(2)").css("left",o-50);var r=function(){var i=n.find(".nav-arrows").hide(),o=n.find(".shadow").hide(),r=n.find(".sb-slider").slicebox({onReady:function(){i.show(),o.show()},orientation:"r",cuboidsRandom:!0,disperseFactor:30}),t=function(){s()},s=function(){i.children(":first").on("click",function(){return r.next(),!1}),i.children(":last").on("click",function(){return r.previous(),!1}),$(document).keydown(function(n){39==n.which?r.next():37==n.which&&r.previous()})};return{init:t}}();r.init()})});