var pl = JSON.parse(member);
var disappear = true;
	$.each(pl, function(key,value){
		$("#member").append('<div class="img-div" id="'+key+'"></div>');
		$("#"+key).append("<img src='/images/members/iGEMSquareProfile"+(key+1)+".png' />");
	});
$(".img-div")
	.on('mouseenter',function(){
		if(disappear){
			getInfo($(this));
			$("#intro").slideDown();
			$("#line").slideDown();
		}
	})
	.on('mouseleave',function(){
		if(disappear){
			$("#intro").remove();
			$("#line").remove();
		}
	})
	.on('click',function(){
		if(disappear){
			disappear = false;
		} else {
			$("#intro").remove();
			$("#line").remove();
			getInfo($(this));
			$("#intro").slideDown();
			$("#line").slideDown();
		}
});

function leave(){
	disappear = true;
	$("#intro").remove();
	$("#line").remove();
}

function getInfo(obj){
		var id = $(obj).attr("id");
		var person = pl[id];
		var posH = $(obj).offset().top + 180;
		var posL = $(obj).offset().left + 90;
		var name = "<div class='area'><div class='title-2'>Name</div>"+person['Member']+"</div>";
		var dept = "<div class='area'><div class='title-2'>Department</div>"+person['Department']+"</div>";
		var prof = "<div class='area'><div class='title-2'>Profession</div>"+person['Profession']+"</div>";
		var experience = "";
		$.each(person['Experience'],function(key,value){ 
			experience += value + '<br/>'; 
		});
		var exp  = "<div class='area'><div class='title-2'>Experience</div>"+experience+"</div>";
		var about= "<div class='area'><div class='title-2'>About</div><div style='text-align:justify'>"+person['About']+"</div></div>";
		var div1 = "<div class='col-md-2'>"+name+dept+prof+"</div>";
		var div2 = "<div class='col-md-5'>"+exp+"</div>";
		var div3 = "<div class='col-md-5'>"+about+"</div>";
		var exit = "<i class='glyphicon glyphicon-remove' onClick='leave();'></i>";
		$(obj).after('<div id="line" style="top:'+posH+'px;left:'+posL+'px;"></div><div id="intro"><div id="inner" class="row"></div></div>');
		$("#inner").html(div1+div2+div3+exit);
}


