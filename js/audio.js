
$(function() {

$(function() {

  var $aud = $("#audio"),
      $pp  = $('#playpauseBtn'),
      $vol = $('#volume'),
      $bar = $("#progressbar"),
      AUDIO= $aud[0],
      $aud2 = $("#audio2"),
      $pp2  = $('#playpauseBtn2'),
      $vol2 = $('#volume2'),
      $bar2 = $("#progressbar2"),
      AUDIO2 = $aud2[0],
            $aud3 = $("#audio3"),
      $pp3  = $('#playpauseBtn3'),
      $vol3 = $('#volume3'),
      $bar3 = $("#progressbar3"),
      AUDIO3 = $aud3[0],
            $aud4 = $("#audio4"),
      $pp4  = $('#playpauseBtn4'),
      $vol4 = $('#volume4'),
      $bar4 = $("#progressbar4"),
      AUDIO4 = $aud4[0],
      $aud5 = $("#audio5"),
      $pp5  = $('#playpauseBtn5'),
      $vol5 = $('#volume5'),
      $bar5 = $("#progressbar5"),
      AUDIO5 = $aud5[0],
      $aud6 = $("#audio6"),
      $pp6  = $('#playpauseBtn6'),
      $vol6 = $('#volume6'),
      $bar6 = $("#progressbar6"),
      AUDIO6 = $aud6[0];
  
  AUDIO.volume = 0.75;
  AUDIO.addEventListener("timeupdate", progress, false);
  AUDIO2.volume = 0.75;
  AUDIO2.addEventListener("timeupdate", progress2, false);
    AUDIO3.volume = 0.75;
  AUDIO3.addEventListener("timeupdate", progress3, false);
    AUDIO4.volume = 0.75;
  AUDIO4.addEventListener("timeupdate", progress4, false);
    AUDIO5.volume = 0.75;
  AUDIO5.addEventListener("timeupdate", progress5, false);
    AUDIO6.volume = 0.75;
  AUDIO6.addEventListener("timeupdate", progress6, false);
  
  function getTime(t) {
    var m=~~(t/60), s=~~(t % 60);
    return (m<10?"0"+m:m)+':'+(s<10?"0"+s:s);
  }
  
  function progress() {
    $bar.slider('value', ~~(100/AUDIO.duration*AUDIO.currentTime));
  }
    function progress2() {
    $bar2.slider('value', ~~(100/AUDIO2.duration*AUDIO2.currentTime));
  }
      function progress3() {
    $bar3.slider('value', ~~(100/AUDIO3.duration*AUDIO3.currentTime));
  }
      function progress4() {
    $bar4.slider('value', ~~(100/AUDIO4.duration*AUDIO4.currentTime));
  }
      function progress5() {
    $bar5.slider('value', ~~(100/AUDIO5.duration*AUDIO5.currentTime));
  }
      function progress6() {
    $bar6.slider('value', ~~(100/AUDIO6.duration*AUDIO6.currentTime));
  }


   
  $bar.slider( {
    value : AUDIO.currentTime,
    slide : function(ev, ui) {
      AUDIO.currentTime = AUDIO.duration/100*ui.value;
    }
  });
  
    $bar2.slider( {
    value : AUDIO2.currentTime,
    slide : function(ev, ui) {
      AUDIO2.currentTime = AUDIO2.duration/100*ui.value;
    }
  });
      $bar3.slider( {
    value : AUDIO3.currentTime,
    slide : function(ev, ui) {
      AUDIO3.currentTime = AUDIO3.duration/100*ui.value;
    }
  });
      $bar4.slider( {
    value : AUDIO4.currentTime,
    slide : function(ev, ui) {
      AUDIO4.currentTime = AUDIO4.duration/100*ui.value;
    }
  });
      $bar5.slider( {
    value : AUDIO5.currentTime,
    slide : function(ev, ui) {
      AUDIO5.currentTime = AUDIO5.duration/100*ui.value;
    }
  });
      $bar6.slider( {
    value : AUDIO6.currentTime,
    slide : function(ev, ui) {
      AUDIO6.currentTime = AUDIO6.duration/100*ui.value;
    }
  });
  
  $pp.click(function() {
	
	if($(this).hasClass('expanded'))
        {
            $(this).addClass('collapsed').removeClass('expanded');
        }
        else
        {
            $(this).addClass('expanded').removeClass('collapsed');
        }
		
    return AUDIO[AUDIO.paused?'play':'pause']();
			
	});
				
				
				
				
				
				
   $pp2.click(function() {
	   	if($(this).hasClass('expanded'))
        {
            $(this).addClass('collapsed').removeClass('expanded');
        }
        else
        {
            $(this).addClass('expanded').removeClass('collapsed');
        }
		
    return AUDIO2[AUDIO2.paused?'play':'pause']();
  });
     $pp3.click(function() {
		 	if($(this).hasClass('expanded'))
        {
            $(this).addClass('collapsed').removeClass('expanded');
        }
        else
        {
            $(this).addClass('expanded').removeClass('collapsed');
        }
		
    return AUDIO3[AUDIO3.paused?'play':'pause']();
  });
     $pp4.click(function() {
		 	if($(this).hasClass('expanded'))
        {
            $(this).addClass('collapsed').removeClass('expanded');
        }
        else
        {
            $(this).addClass('expanded').removeClass('collapsed');
        }
		
    return AUDIO4[AUDIO4.paused?'play':'pause']();
  });
     $pp5.click(function() {
		 	if($(this).hasClass('expanded'))
        {
            $(this).addClass('collapsed').removeClass('expanded');
        }
        else
        {
            $(this).addClass('expanded').removeClass('collapsed');
        }
		
    return AUDIO5[AUDIO5.paused?'play':'pause']();
  });
     $pp6.click(function() {
		 	if($(this).hasClass('expanded'))
        {
            $(this).addClass('collapsed').removeClass('expanded');
        }
        else
        {
            $(this).addClass('expanded').removeClass('collapsed');
        }
		
    return AUDIO6[AUDIO6.paused?'play':'pause']();
  });
  
});
  
});
