$(document).ready(function(){
	var key=0;
	startUl= $(".slider:first").attr("stt");
	endUl= $(".slider:last").attr("stt");
	
	// duyet qua tat ca cac anh
	$(".slider").each(function(){
		// kiem tra
		if($(this).is(':visible')){
			// gan stt bang  thuoc tinh stt cua ul
			key= $(this).attr("stt");
		}
	});
	// previous
		$("#click-privious").click(function(){
			prev = key--;
			if(prev == startUl){
				key = endUl; 
			}
			// an tat ca slider di
			$(".slider").fadeOut();
			// hien thi slider co so thu tu next+1
			alert(prev);
			// show ra vi tri la next 
			$(".slider").eq(prev).fadeIn();
		});
	// next
		$("#click-next").click(function(){
			next= ++key;
			if(next==endUl){
				key=startUl;
			}
			// an tat ca slider di
			$(".slider").fadeOut();
			// hien thi slider co so thu tu next+1
			alert(next);
			// show ra vi tri la next 
			$(".slider").eq(next).fadeIn();
		});
});