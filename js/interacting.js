var interactContent = [
	{
		"id":"1" ,
		"link": "./interact/competition",
		"title":"掌蚊人環境比賽活動",
		"content":"雨後清積水，Iphone 任你選！"
	},
	{
		"id":"2" ,
		"link": "./interact/game",
		"title":"掌蚊人遊戲",
		"content":"戰友們！請幫助我一起滅蚊吧！！"
	}
] ;
var interactId = 1 ;
var interactLength = interactContent.length ;

$('.select-right').click(function(){
	$('#interact_'+interactId).toggleClass('active');

	interactId = (interactId+1 > interactLength)? 1 : interactId+1 ;
	changeContent() ;
})

$('.select-left').click(function(){
	$('#interact_'+interactId).toggleClass('active');
	
	interactId = (interactId-1 <= 0)? interactLength : interactId-1 ;
	changeContent() ;
})


function changeContent(){
	$('#interact_'+ interactId).toggleClass('active');

	if(interactId === interactLength){
		$('#box-right')[0].childNodes[0].innerHTML=interactContent[0].title ;
		$('#box-right')[0].childNodes[1].innerHTML=interactContent[0].content ;

		$('#box-left')[0].childNodes[0].innerHTML=interactContent[interactId-2].title ;
		$('#box-left')[0].childNodes[1].innerHTML=interactContent[interactId-2].content ;

	}else if(interactId === 1){
		$('#box-right')[0].childNodes[0].innerHTML=interactContent[interactId].title ;
		$('#box-right')[0].childNodes[1].innerHTML=interactContent[interactId].content ;

		$('#box-left')[0].childNodes[0].innerHTML=interactContent[interactLength-1].title ;
		$('#box-left')[0].childNodes[1].innerHTML=interactContent[interactLength-1].content ;
	}else{
		$('#box-right')[0].childNodes[0].innerHTML=interactContent[interactId].title ;
		$('#box-right')[0].childNodes[1].innerHTML=interactContent[interactId].content ;
		
		$('#box-left')[0].childNodes[0].innerHTML=interactContent[interactId-2].title ;
		$('#box-left')[0].childNodes[1].innerHTML=interactContent[interactId-2].content ;
	}
}


// 圓圈小動畫
$(".circle").mouseover(function(){
  $(".circle").css("fontSize","30px");
  $(".circle").text("GO!");

	$(".intro-text").addClass("stretch");  
});

$(".circle").mouseout(function(){
  $(".circle").css("fontSize","75px");
  $(".circle").text("●");

  $(".intro-text").removeClass("stretch");
});

$('.circle').click(function(){
	window.location.href= interactContent[interactId-1].link;
})

// 左右動畫
$('#t-r').mouseover(function(){
	$('.full').css("zIndex",3);
	$('.slide-bar').css("opacity","0.3");
	$('#slide-bar-r').css("left","50px");

	$('#box-right').addClass("box-open");
})

$('#box-right').mouseout(function(){
	$('.full').css("zIndex",-1);
	$('.slide-bar').css("opacity","1");
	$('#slide-bar-r').css("left","0px");

	$('#box-right').removeClass("box-open");
})

$('#t-l').mouseover(function(){
	$('.full').css("zIndex",3);
	$('.slide-bar').css("opacity","0.3");
	$('#slide-bar-l').css("left","-50px");

	$('#box-left').addClass("box-open");
})

$('#box-left').mouseout(function(){
	$('.full').css("zIndex",-1);
	$('.slide-bar').css("opacity","1");
	$('#slide-bar-l').css("left","0px");

	$('#box-left').removeClass("box-open");
})
