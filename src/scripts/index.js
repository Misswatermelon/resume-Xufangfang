var $ = require('./common/libs/zepto-modules/zepto');
var $ = require('./common/libs/zepto-modules/touch.js');
var $ = require('./common/libs/zepto-modules/_custom.js');
require('./common/libs/zepto-modules/event');
require('./common/libs/zepto-modules/ajax');

var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');

$(".swiper-container").show();
$("#mainContainer").hide();

var isPlay = false;
$('.music').find('img').on('click', function() {

	if(isPlay) {
		vdo.play();

		isPlay = false;
		$('.music').find('img').css(
			'animation', 'circle 3s linear infinite'
		)

	} else {
		vdo.pause();
		isPlay = true;
		$('.music').find('img').css(
			'animation-play-state', 'paused'
		)

	}
})

$('#footer').find('.skills').tap(function() {

	var num = $(this).index();
	
	
	$('.ful').eq(num).css('display', 'block').siblings('.ful').css('display', 'none');
})
var swiper = new Swiper('.swiper-container', {
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
		swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAni.swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	}
});

var swiper1 = new Swiper('.swiper-container1', {

	paginationClickable: true,
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: 2500,
	autoplayDisableOnInteraction: false
});
$('#header').find('.line1').click(function() {
	$(".swiper-container").show();
	$("#mainContainer").hide();
})
var myScroll;
$(".enter").tap(function() {
	$(".swiper-container").hide();
	$("#mainContainer").show();

	/*$.post('http://localhost:8000/skill', function(data) {
		
		
		myScroll = new IScroll('#wrapper', {
			mouseWheel: true
		});
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
	})*/

})

var intro = {
	ajaxData: function() {
		$.post('http://localhost:8000/skill', function(data) {
			var skillData = data.skills;
			var str = '';
			for(var i = 0; i < skillData.length; i++) {
				$('.fix').find('.ii1').eq(i).html(skillData[i].category)
				$('.fix').find('.ii2').eq(i).html(skillData[i].name)
				$('.fix').find('.p2').eq(i).html('时间：' + skillData[i].time)
				$('.fix').find('.p3').eq(i).html('程度：' + skillData[i].level)
				$('.swiper-slide').find('.h5imgs').eq(i).html(skillData[i].category)
				$('.swiper-slide').find('.h5text').eq(i).html(skillData[i].name)

			}
			$('.fix').append(str)
		})
	}
}
intro.ajaxData();