//自定义的坠落动画js源码
//主要思路：通过调整元素的top的位置，就可以使元素在页面上下移动从而模拟坠落的过程，
//与此同时调整opacity,使元素看起来逐渐消失，当这一切都完成的时候，组中从显示器上删除元素
$('.animateMe').each(function(){
	$(this)
		.css('position','relative')//将元素的CSS样式属性position的值修改为relative
		.animate(
	      {
		      opacity:0;
			  top:$(window).height()- $(this).height()-$(this).position().top
		  },
				  'slow',
				  function(){$(this).hide();});
});