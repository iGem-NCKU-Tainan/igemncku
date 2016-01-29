var ins = JSON.parse(instructor);
var pl = JSON.parse(member);
var disappear = true;

$.each(ins, function(key,value){
	$("#instructor").append('<div class="img-div instructor" id="ins'+key+'"></div>');
	$("#ins"+key).append("<img src='/images/instructors/instructor"+(key+1)+".jpg' alt='"+value['Name']+"' />");
});

$.each(pl, function(key,value){
	$("#member").append('<div class="img-div member" id="mem'+key+'"></div>');
	$("#mem"+key).append("<img src='/images/members/iGEMSquareProfile"+(key+1)+".png' alt='"+value['Name']+"' />");
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
		var num = id.substring(3);
		var group = id.substring(0,3);
		var posH = $(obj).offset().top + 180;
		var posL = $(obj).offset().left + 90;
		if(group=="mem"){
			var person = pl[num];
			var name = "<div class='area'><div class='title-2'>Name</div>"+person['Name']+"</div>";
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
			$("#inner").html(exit+div1+div2+div3);
		} else {
			var person = ins[num];
			var name = "<div class='area'><div class='title-2'>Name</div>"+person['Name']+"</div>";
			var title = "<div class='area'><div class='title-2'>Title</div>"+person['Title']+"</div>";
			var exp = "<div class='area'><div class='title-2'>Experience</div>"+person['Experience']+"</div>";
			var div = "<div class='col-md-8'>"+name+title+exp+"</div>";
			var exit = "<i class='glyphicon glyphicon-remove' onClick='leave();'></i>";
			$(obj).after('<div id="line" style="top:'+posH+'px;left:'+posL+'px;"></div><div id="intro"><div id="inner" class="row"></div></div>');
			$("#inner").html(exit+div);

			$("#intro").css({"left":"25%","width":"50%"});
		}
}


