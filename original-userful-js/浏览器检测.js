//标准的浏览器检测的js的书写方式
if(isIE){  //此处isIE的条件视情况而定
	//do something
	element.attachEvent('onclick',someHandler);
}
else if(isFirefox || isSafari){ //此处isFirefox 和 isSafari视情况而定
        element.addEventListener('Click',someHandler);
   }else{
	   throw new Error('event handing not supported');
   }

   //上述代码当遇到不知名的浏览器的时候，这段代码将抛出错误
   