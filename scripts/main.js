;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}};return j}));


(function ($) {
	$.fn.galleryShowMore = function (options) {
		var self = $(this);

		if (self.data('more_dom')) {
			return;
		}

		var txt = 'more';

		var html = "<div class='more more-gallery'>"+txt+"</div>";
		var dom = $(html);
		dom.css({
			position: 'absolute',
			left: self.offset()['left'],
			top: self.offset()['top'],
			'background-color': 'rgba(f,f,f,.3)',
			width: self.outerWidth(),
			height: self.outerHeight(),
			'line-height': self.outerHeight() + 'px'
		});

		$('body').append(dom);

		self.data('more_dom', dom);
	}

	$.fn.galleryHideMore = function (options) {
		var self = $(this);
		var dom = self.data('more_dom');

		$('body').find('>.more').remove();
		self.data('more_dom', null);
	}

	$.fn.animateWatcher = function () {
		var el = $(this),
			cls = 'animate-start';

		return {
			start: function () {
				el.addClass(cls);
			},
			isRunning: function () {
				return el.hasClass(cls);
			},
			stop: function () {
				el.removeClass(cls);
			}
		};
	}
})(jQuery);

(function ($) {
    $(function () {
        $(".calender").datepicker({
            numberOfMonths: 2,
            showButtonPanel: true
        });

        $("#home-slideshow").cycle({
        	prev: '.home-slideshow .prev',
        	next: '.home-slideshow .next'
        });

        $('.down').click(function () {
        	$.scrollTo("#web-navs", 500);
        });

        $(".gallery-ss img").hover(function () {
        	$(".gallery-ss img").each(function () {
        		$(this).galleryHideMore();
        	});
        	$(this).galleryShowMore();
        });

        $("#residences .table").click(function () {
        	var cls = 'clicked',
        		el = $(this),
        		watcher = el.animateWatcher();

        	// 动画已经运行了
        	if (watcher.isRunning()) {
        		return;
        	}

        	// 已经收起状态下， 需要打开
        	if (el.hasClass(cls)) {
        		el.removeClass(cls);
        		el.next('.list-con-res').removeAttr('style');
        	}
        	// 打开状态下，需要收起
        	else {
        		el.addClass('clicked');
        		watcher.start();
	        	el.next('.list-con-res').animate({
	        		height: 0
	        	}, 500, function () {
	        		watcher.stop();
	        	});
        	}
        });


    });
})(jQuery);