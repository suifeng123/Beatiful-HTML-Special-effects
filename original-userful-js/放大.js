
//一个自定义的放大动画，此处写出一些自定义的js
$('.animateMe).each(function(){
    $(this).animate(
    {
        width: $(this).width()*2,
	height: $(this).height()*2
	},2000
	);
     });