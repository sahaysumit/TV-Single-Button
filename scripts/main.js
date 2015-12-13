$(document).ready(function(){
	$.event.special.tap.emitTapOnTaphold = false;
	$tvStatus = $('.tv-status span');
	var stus = 'TV ON' 
	$menuSelector = $('.menu');
	var numb = 1;
	$menuBdr = $('.menu-border');
	var visible = 'false';
	$('.button button').on('tap',function(){
		
		if($menuSelector.css('visibility')=='hidden'){
			$menuSelector.css('visibility', 'visible');
			visible = 'true';

		}
		else{
			$menuSelector.css('visibility', 'hidden');
			visible = 'false';

		}

	
	}).on('taphold',function(){
	    if($tvStatus.text()=='TV ON'){
			$tvStatus.text('TV OFF');
			$vol.css('visibility', 'hidden');
			$chnl.css('visibility', 'hidden');
			stus = 'TV OFF'
		}
		else{
			$tvStatus.text('TV ON');
			stus = 'TV ON'
		}
	});
	

	// $(document).on("pagecreate",".body",function(){
	var channel = parseInt($('.chn-slider').text());
	var volume = parseInt($('.vol-slider').text());
	$changeSLider = $('.chn-slider');
	$volumeSLider = $('.vol-slider');
	$vol = $('.volume');
	$chnl = $('.channel');

	

		$('.left-button').on('click',  function(event){
			if(stus=='TV ON'){
				if(visible=='true'){
					numb-=1;
					if(numb==0){
						numb = 9;
						$menuBdr.text(numb);
						return
					}
					$menuBdr.text(numb);
					return;
				}
				else{
					$vol.css('visibility', 'visible');
					volume-= 1;	
					if(volume <= 0){	
						$volumeSLider.text('MUTE');
						volume = 0;
						return;
					}
					$volumeSLider.text(volume);
					return;
				}
			}

		});
		$('.right-button').on('click',  function(event){
			if(stus=='TV ON'){
				if(visible=='true'){
					numb+=1;
					if(numb==10){
						numb = 1;
						$menuBdr.text(numb);
						return;
					}
					$menuBdr.text(numb);
					return;
				}
				else{
					$vol.css('visibility', 'visible');
					$vol.show();
					volume+= 1;	
					console.log(volume);
					if(volume > 100){	
						$volumeSLider.text(100);
						volume = 100;
						return;
					}
					$volumeSLider.text(volume);	
					return;
				}
			}

			
		});
		$('.up-button').on('click',  function(){
			if(stus=='TV ON'){
				if(visible=='true'){
					
				}
				else{
					$chnl.css('visibility', 'visible');
					$chnl.show();
					channel+= 1;	
					if(channel > 100){	
						$changeSLider.text(100);
						channel = 100;
						return;
					}
					$changeSLider.text(channel);
					// clearTimeout(hidden);
				}
			}
			
		});
		$('.down-button').on('click',  function(){
			if(stus=='TV ON'){
				if(visible=='true'){

				}
				else{
					$chnl.css('visibility', 'visible');
					channel-= 1;
					if(channel <= 0){
						$changeSLider.text(1);
						channel = 1;
						return;
					}
					$changeSLider.text(channel);
					// clearTimeout(hidden);
				}
			}
			
		});
	
		
		// $('.right-button, .left-button, .down-button, .up-button').off('click', function(){
		// });
		function hidden(){
			// if($vol.css('visibility')=='visible') || $chnl.css('visibility')=='visible')){
				$vol.css('visibility', 'hidden');
				$chnl.css('visibility', 'hidden');
			// }
		};
		setInterval(hidden, 7000);
		
	


	
// });
});