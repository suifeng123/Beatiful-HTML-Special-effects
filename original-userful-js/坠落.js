//�Զ����׹�䶯��jsԴ��
//��Ҫ˼·��ͨ������Ԫ�ص�top��λ�ã��Ϳ���ʹԪ����ҳ�������ƶ��Ӷ�ģ��׹��Ĺ��̣�
//���ͬʱ����opacity,ʹԪ�ؿ���������ʧ������һ�ж���ɵ�ʱ�����д���ʾ����ɾ��Ԫ��
$('.animateMe').each(function(){
	$(this)
		.css('position','relative')//��Ԫ�ص�CSS��ʽ����position��ֵ�޸�Ϊrelative
		.animate(
	      {
		      opacity:0;
			  top:$(window).height()- $(this).height()-$(this).position().top
		  },
				  'slow',
				  function(){$(this).hide();});
});