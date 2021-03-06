/* test/youtube-player script */


var youtube = {};
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onPlayerStateChange() {
	//console.log("onPlayerStateChange");
}

var player = {
	playVideo: function(container, videoId, idx) {
		if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
			window.onYouTubePlayerAPIReady = function() {
				player.loadPlayer(container, videoId, idx);
				$.getScript('//www.youtube.com/player_api');
			}
		} else {
			player.loadPlayer(container, videoId, idx);
		}
	},
	loadPlayer: function(container, videoId, idx) {
		youtube["player" + idx] = new YT.Player(container, {
			playerVars: {
				modestbranding: 1,
				rel: 0
				//showinfo: 0,
				//autoplay: 1
			},
			videoId: videoId
			//events: {
			//	'onStateChange': onPlayerStateChange
			//}
		});
	}
};

/* 컨트롤러 */
var youtubeControl = {
	playVideo : function( e, callidx ) {
		var $this = $(this);
		var $controlbox = $this.closest('div');
		var $videoWrap = $controlbox.siblings('.youtube-wrapper'); 
		var $sumnail = $videoWrap.find('.youtube-sumnail');
		var idx = ( callidx == undefined ) ? $controlbox.data('playIdx') : callidx;
		
		if( $videoWrap.data('sumnail') ) {
			$sumnail.css('display','none');
		}
		
		youtube['player' + idx].playVideo();
	},
	stopVideo : function( e, callidx ) {
		var $this = $(this);
		var $controlbox = $this.closest('div');
		var $videoWrap = $controlbox.siblings('.youtube-wrapper');
		var $sumnail = $videoWrap.find('.youtube-sumnail');
		var idx = ( callidx == undefined ) ? $controlbox.data('playIdx') : callidx;

		if( $videoWrap.data('sumnail') ) {
			$sumnail.css('display','block');
		}

		youtube['player' + idx].seekTo(0, true);
		youtube['player' + idx].stopVideo();
	},
	pauseVideo : function( e, callidx ) {
		var $this = $(this);
		var idx = ( callidx == undefined ) ? $this.closest('div').data('playIdx') : callidx;
		youtube['player' + idx].pauseVideo();
	}
};

(function($){

	function youtubeInit(){
		var $playerContainer = $('.youtube-container');
		var $playBtn = $playerContainer.find('.youtube-play');
		var $stopBtn = $playerContainer.find('.youtube-stop');
		var $pauseBtn = $playerContainer.find('.youtube-pause');
		var $sumnail = $playerContainer.find('.youtube-sumnail');
		var $win = $(window);
		var $playerWrap;
		var $playerDiv;
		var $controlBox;

		function resizeSet(e) {
			sumnailSize();
		}
		
		function addEvent(){
			$playBtn.on('click', youtubeControl.playVideo);
			$stopBtn.on('click', youtubeControl.stopVideo);
			$pauseBtn.on('click', youtubeControl.pauseVideo);
		}

		function resizeAddEvent() {
			$win.on('resize',resizeSet)
		}
		
		function sumnailSize(){
			var playerId = $playerContainer.find('iframe').attr('id');
			playerId = playerId.replace('player', '');
			var height = $('#player'+playerId).height();
			$sumnail.css({
				'height' : height
			});
			$sumnail.find('img').css({
				'marginTop' : -$sumnail.find('img').height()/2
			})
		}

		function attrAddId( callback ) {
			if( $playerContainer.find('.youtube-control').length ) {
				addEvent();
			}
			$playerContainer.each(function(idx){
				var $this = $(this);
				$playerWrap = $this.find('.youtube-wrapper');
				$playerDiv = $this.find('.youtube-player');
				$controlBox = $this.find('.youtube-control');
				$playerDiv.attr('id','player' + idx);
				$controlBox.data( {
					'playIdx': idx,
					'sumnail' : $playerWrap.data('sumnail')
				} );
				player.playVideo( $playerDiv.attr('id'), $playerWrap.data('videoId'), idx );
				if( $playerWrap.data('sumnail') ) {
					//sumnailSize(idx)
				}
			});

			$(window).on('load', sumnailSize);
			callback();
		}

		function setAttr(){
			var $iframe = $playerContainer.find('iframe');
			$iframe.each(function(){
				var $this = $(this);
				$this.attr('title', $this.closest('div').data('videoTitle') + " Youtube 영상보기" )
			})
		}
		
		function init() {
			attrAddId( setAttr );
		}
		
		window.onYouTubePlayerAPIReady = function() {
			init();
			resizeAddEvent();
		};
	}

	$(document).on('ready', youtubeInit);


})(jQuery);