var UScroll = function ( wrapId ){
	
	var U = this;
	U.wrap = $(wrapId);
	U.container = U.wrap.find('.u_wrap');
	U.wrap.append('<div class="usbarbox"><i></i></div>');
	U.barWrap = U.wrap.find('.usbarbox');
	U.bar = U.barWrap.find('i');
	
	U.barWrap.css({
		'position': 'absolute',
		'right':'4px',
		'top':'5%',
		'width': '10px',
		'height': '90%',
		'border-radius':'6px',
		'background-color':'rgba(0,0,0,0.3)',
		'opacity':'0',
		'transition':'all 0.4s linear'
		
	});
	U.bar.css({
		'display':'block',
		'position': 'absolute',
		'left':'0',
		'top':'0',
		'width': '100%',
		'height':'40px',
		'border-radius':'6px',
		'background-color':'rgba(0,0,0,0.7)',
	});
	
	U.posY = 0;
	
	U.wrap.hover(function (){
		U.barWrap.css('opacity','1')
	},function (){
		U.barWrap.css('opacity','0')
	})
	
	U.scrollPage = function (diret){ // -1 上， 1 下；
        console.log(diret);
        U.posY -= diret * 8;
        U.container.css({
        	'transform': 'translate3d(0,' + U.posY + 'px,0)',
        	'-webkit-transform': 'translate3d(0,' + U.posY + 'px,0)'
        })
        
        
        
        
    };
	
	U.initScroll = function (){
		U.container_height = U.container.height() - U.wrap.height();
		U.bar_height = U.barWrap.height() - U.bar.height();
		U.rate = U.b_height / U.c_height;
		
		U.wrap.on('mousewheel' , U.getMouseWheel)
		U.wrap.on('DOMMouseScroll' , U.getMouseWheel)
	}
	U.getMouseWheel = function (e){
		var e = e || event;  
        if (e.originalEvent.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件  
            if (e.originalEvent.wheelDelta > 0) { //当滑轮向上滚动时  alert("滑轮向上滚动");  
            }  
            else { //当滑轮向下滚动时  alert("滑轮向下滚动");  
            }  
            U.scrollPage(-e.originalEvent.wheelDelta/150);
        } else if (e.originalEvent.detail) {  //Firefox滑轮事件  
            if (e.originalEvent.detail> 0) { //当滑轮向上滚动时  alert("滑轮向上滚动");  
//              console.log('down')
            } else { //当滑轮向下滚动时  alert("滑轮向下滚动");  
//          	console.log('up')
            }
            U.scrollPage(e.originalEvent.detail/3);
        }  
	}
}

var scroll_1 = new UScroll('#scroll_1');
scroll_1.initScroll();
