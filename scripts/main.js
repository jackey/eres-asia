;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}};return j}));

/* HTML5 Placeholder jQuery Plugin - v2.1.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-02-19
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(d);if(d.value==f.attr("placeholder")&&f.hasClass(m.customClass))if(f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c;f.focus()}else d.value="",f.removeClass(m.customClass),d==e()&&d.select()}function d(){var d,e=this,f=a(e),g=this.id;if(""===e.value){if("password"===e.type){if(!f.data("placeholder-textinput")){try{d=f.clone().attr({type:"text"})}catch(h){d=a("<input>").attr(a.extend(b(this),{type:"text"}))}d.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",c),f.data({"placeholder-textinput":d,"placeholder-id":g}).before(d)}f=f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g).show()}f.addClass(m.customClass),f[0].value=f.attr("placeholder")}else f.removeClass(m.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h="[object OperaMini]"==Object.prototype.toString.call(window.operamini),i="placeholder"in document.createElement("input")&&!h,j="placeholder"in document.createElement("textarea")&&!h,k=a.valHooks,l=a.propHooks;if(i&&j)g=a.fn.placeholder=function(){return this},g.input=g.textarea=!0;else{var m={};g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};m=a.extend({},e,b);var f=this;return f.filter((i?"textarea":":input")+"[placeholder]").not("."+m.customClass).bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder"),f},g.input=i,g.textarea=j,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(m.customClass)?"":b.value},set:function(b,f){var g=a(b),h=g.data("placeholder-password");return h?h[0].value=f:g.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):g.hasClass(m.customClass)?c.call(b,!0,f)||(b.value=f):b.value=f,g):b.value=f}},i||(k.input=f,l.value=f),j||(k.textarea=f,l.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+m.customClass,this).each(c);setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){a("."+m.customClass).each(function(){this.value=""})})}});
//# sourceMappingURL=jquery.placeholder.min.js.map


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
		dom.data('href', self.attr('href'));

		dom.click(function () {
			if (dom.data('href')) {
				window.location.href = dom.data('href');
			}
		});

		$('body').append(dom);

		self.data('more_dom', dom);
	}

	$.fn.galleryHideMore = function (options) {
		var self = $(this);
		var dom = self.data('more_dom');

		$('body').find('>.more').remove();
		if (dom) {
			dom.data('href', null);
		}
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

	$.fn.dragmove = function () {
		var self = $(this);
		var items = self.children();
		
		

	};

})(jQuery);

(function ($) {
	
	$(window).load(function () {
		$("#home-slideshow > img").each(function () {
			$(this).removeClass('hideme');
		});

        $("#home-slideshow").cycle({
        	prev: '.home-slideshow .prev',
        	next: '.home-slideshow .next'
        });
	});

    $(function () {
    	var sslistw = $(".ss-list").width();
        $(".ss-list").cycle({
        	fx: 'scrollHorz',
        	pager: '.ss-pager',
        	fit: true,
        	width: $(".ss-list").width()
        });

		$("#web-navs .navs >ul > li").hover(function () {
			var submenu = $(this).find('.submenu');

			if (submenu.size() <=0 ) return;

			var parentTop = $('.navs').offset()['top'];
			var selfTop = $(this).offset()['top'];

			if (!submenu.data('width')) {
				submenu.data('width', submenu.outerWidth());
			}
			submenu.css({
				width: submenu.data("width")
			});
			if (!submenu.data('height')) {
				submenu.data('height', submenu.outerHeight());
			}

			var top = -(selfTop - parentTop + submenu.data('height'));
			submenu.css({
				top: top
			});
			$('.submenu').hide();
			submenu.css({display: 'block'});
		});

        $('body').mousemove(function (event) {
        	var target = $(event.target);

        	if (target.hasClass('navs') || target.parents('.navs').size() > 0) {
        		//console.log('is navs');
        	}
        	else {
        		$('.submenu').hide();
        	}
        });

        $(".calender").datepicker({
            numberOfMonths: 2,
            showButtonPanel: true
        });

        $('.down').click(function () {
        	$.scrollTo("#web-navs", 500);
        });

        $(".gallery-ss a").hover(function () {
        	$(".gallery-ss a").each(function () {
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
        		var sourceCss = el.nextAll('.list-con-res-desktop:eq(0)').data('source_css');
        		el.nextAll('.list-con-res-desktop:eq(0)')
        			.animate(sourceCss, 500 * 1, function () {
        				$(this).removeAttr('style');
        			});
        	}
        	// 打开状态下，需要收起
        	else {
        		el.addClass('clicked');
        		watcher.start();
	        	el.nextAll('.list-con-res-desktop:eq(0)')
	        		.data('source_css', {height: el.nextAll('.list-con-res-desktop:eq(0)').height()})
	        		.animate({
	        		height: 0
	        	}, 500 * 1, function () {
	        		watcher.stop();
	        	});
        	}
        });

        $("select.guest").selectmenu({
        	position: {
        		my: 'left bottom-50',
        	}
        }).selectmenu('menuWidget').addClass('selectbox');

        $(".mobile-menu-tragger").click(function () {
        	var target = $(".shadow-menu"),
        		el = $(this);
        	if (target.hasClass('click')) {
        		target.removeClass('click');
        		el.removeClass('click');
        	}
        	else {
        		target.addClass('click');
        		el.addClass('click');
        	}
        });

        $(".tableCell-2.shadow-1").click(function () {
        	var self = $(this);
        	if (self.data('href')) {
        		window.location.href = self.data('href');
        	}
        });

        $('input[placeholder!=""]').placeholder();

        $('.list-con-res ul').dragmove();

		var mapDom = $("#map");
		mapDom.css({
			height: mapDom.data('height')
		});

		//if (typeof BMap != 'undefined') {
		//	// 百度地图API功能
		//	var map = new BMap.Map("map");    // 创建Map实例
		//	map.centerAndZoom(new BMap.Point(mapDom.data('lat'), mapDom.data('lng')), 16);  // 初始化地图,设置中心点坐标和地图级别
		//	//map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
		//	map.setCurrentCity(mapDom.data('city'));          // 设置地图显示的城市 此项是必须设置的
		//	map.enableScrollWheelZoom(false);     //开启鼠标滚轮缩放
        //
		//	// 设置点
		//	var point = new BMap.Point(mapDom.data('lat'), mapDom.data('lng'));
		//	var icon = new BMap.Icon("http://pic002.cnblogs.com/images/2011/308287/2011091516161618.png", new BMap.Size(80, 100));
		//	var marker = new BMap.Marker(point);
		//	map.addOverlay(marker);
		//}

		if (typeof AMap != 'undefined') {
			var position = new AMap.LngLat(mapDom.data('lat'), mapDom.data('lng'));
			var map = new AMap.Map('map', {
				view: new AMap.View2D({
					center: position,
					zoom: 16,
					rotation: 0
				}),
				lang: 'zh_cn'
			});

			var maker = new AMap.Marker({
				map: map,
				position: position,
				offset: new AMap.Pixel(-10,-34),
				icon: '/misc/marker.png'
			});
		}


		// res-detail 页面滚动
		$(window).scroll(function () {
			var bar = $(".detail-residencies-navs");
			if (bar.size() <= 0) return;
			if (bar.data('top')) {
				var topBar = bar.data('top');
			}
			else {
				var topBar = bar.offset()['top'];
				bar.data('top', topBar);
			}
			var scrollTop = $(window).scrollTop();

			// 恢复位置
			if (bar.hasClass('fixed') && scrollTop < topBar) {
				bar.removeClass('fixed').removeAttr('style');
			}

			// 置顶
			if (!bar.hasClass('fixed') && scrollTop >= topBar) {
				bar.css({
					width: bar.width(),
					'margin-left': -(bar.width()/2)
				}).addClass('fixed');
			}
		});

		// 导航点击
		$(".detail-residencies-navs li").click(function () {
			var scrollToEl = $(this).data('target');
			var el = $(this);

			el.siblings().removeClass('active');
			el.addClass('active');

			if ($(scrollToEl).hasClass('exp')){
				$.scrollTo($(scrollToEl).offset()['top'] - 50, 500);
			}
			// 显示图片
			else if ($(scrollToEl).hasClass('pics')) {
				var resSlideShow = $('.slideshow-pics-res');
				if (resSlideShow.size()) {
					resSlideShow.removeClass('hideme');
					setTimeout(function () {
						resSlideShow.css({opacity: 1});
						if (resSlideShow.data('cycled')) {
							resSlideShow.find('>.slidec').cycle('resume');
						}
						else {
							var total = resSlideShow.find('>.slidec').children().size();
							var totalEl = $('.slideshow-pics-res .counter .total');
							var curEl = $('.slideshow-pics-res .counter .cur');
							totalEl.text(total);
							curEl.text(1);
							function setPageSize(currSildeEl) {
								resSlideShow.find('>.slidec').children().each(function (index) {
									if ($(this).attr('src') == $(currSildeEl).attr('src')) {
										curEl.text(index + 1);
									}
								});
							}
							resSlideShow.find('>.slidec').cycle({
								prev: '.home-slideshow .prev',
								next: '.home-slideshow .next',
								fx: 'scrollLeft',
								fit: true,
								after: function (currSlideElement, nextSlideElement, options) {
									setPageSize(nextSlideElement);
								}
							});
							resSlideShow.data('cycled', true);
						}
					});
				}
			}
			else {
				$.scrollTo(scrollToEl, 500);
			}
		});

		// res detail pic 点击
		$('.slideshow-pics-res .closer').click(function () {
			var resSlideShow = $('.slideshow-pics-res');
			resSlideShow.css({opacity: 0});
			setTimeout(function () {
				resSlideShow.addClass('hideme');
				resSlideShow.removeAttr('style');
				resSlideShow.find('>.slidec').cycle('pause');
			}, 500);
		});


		// 预定房间点击
		$('.btn-book').click(function () {
			var form = $('.book-form');

			var button = $(this);
			var city = $('input[name="name"]', form);
			var email = $('input[name="email"]', form);
			var indate = $('input[name="check-in-date"]', form);
			var outdate = $('input[name="check-out-date"]', form);
			var people = $('select[name="guest"]', form);

			if (city.val().length <= 0) {
				city.focus();
				return;
			}

			if (email.val().length <= 0) {
				email.focus();
				return;
			}

			if (indate.val().length <= 0) {
				indate.focus();
				return;
			}

			if (outdate.val().length <= 0) {
				outdate.focus();
				return;
			}

			$.ajax({
				url: 'http://eresadmin.fumer.cn/mail.php',
				data: {city: city.val(), email: email.val(), in: indate.val(), out: outdate.val(), pc: people.val()},
				dataType: 'jsonp',
				success: function (response) {
					var url = window.location.href;
					if (url.indexOf('en')) {
						button.text('book success');
					}
					else {
						button.text('预定成功');
					}

					setTimeout(function () {
						var url = window.location.href;
						if (url.indexOf('en')) {
							button.text('book');
						}
						else {
							button.text('预定');
						}
					}, 1000);
				}
			});
		});



    });
})(jQuery);