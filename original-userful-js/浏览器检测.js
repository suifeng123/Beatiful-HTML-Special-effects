//��׼�����������js����д��ʽ
if(isIE){  //�˴�isIE���������������
	//do something
	element.attachEvent('onclick',someHandler);
}
else if(isFirefox || isSafari){ //�˴�isFirefox �� isSafari���������
        element.addEventListener('Click',someHandler);
   }else{
	   throw new Error('event handing not supported');
   }

   //�������뵱������֪�����������ʱ����δ��뽫�׳�����
   