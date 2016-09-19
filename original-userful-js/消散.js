//自定义的消散动画,
//实现思路：在使元素放大的过程中我们想让元素的中心保持在
//相同位置上，因此除了调整元素的大小以外，作为动画的一部分还必须调整元素的位置
$('.animateMe').each(function(){
	var position = $(this).position();
	$(this)
		.css({position:'absolute',
		      top:position.top,
		      left:position.left})
		.animate(
	      {
		     opacity :'hide',
		     width: $(this).width()*5,
			 height:$(this).height()*5,
		     top:position.top()-($(this).height()*5/2),
			left:position.left-($(this).width()*5/2)
		  },
			'normal');
});