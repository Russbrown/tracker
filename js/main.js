$(function(){
	$('.js-trackStories').bind('click', function(){
		var trackVal = $(this).siblings('.js-trackVal').val();
		var trackID = $(this).parents('form').siblings('.tracker').attr('id');
		getStories(trackVal, trackID);
		$(this).parents('.tracker-wrapper').addClass('active');
		// Save data to the current local's store
		localStorage.setItem(trackID, trackVal);
		return false;
	});

	$('.js-trackTweets').bind('click', function(){
		var trackVal = $(this).siblings('.js-trackVal').val();
		var trackID = $(this).parents('form').siblings('.tracker').attr('id');
		getTweets(trackVal, trackID);
		$(this).parents('.tracker-wrapper').addClass('active');
		// Save data to the current local's store
		localStorage.setItem(trackID, trackVal);
		return false;
	});

	// See if we have a trakr set
	if ((localStorage.getItem('tracker1')) || (localStorage.getItem('tracker2')) || (localStorage.getItem('tracker3'))) {
		// Restore the contents of the trakr field
		for(var i = 0; i < localStorage.length; i++) {     // Length gives the # of pairs
		    var trackID = localStorage.key(i);             // Get the name of pair i
		    var trackVal = localStorage.getItem(trackID);
			$('#' + trackID).siblings('form').children('.js-trackVal').val(trackVal);
			$('#' + trackID).parents('.tracker-wrapper').addClass('active');
			if ($('#' + trackID).hasClass('stories')) {
				getStories(trackVal, trackID);				
			} else if ($('#' + trackID).hasClass('tweets')) {
				getTweets(trackVal, trackID);
			}

		}
	} else {
		// they are new, so run the intro
		introJs().start();		
	}

	setInterval(function(){
		// iterate through the trackers
		$('.tracker-wrapper').each(function(){
			if ($(this).hasClass('active')) {
				// if its active refresh the stories
				var trackVal = $(this).children('form').children('.js-trackVal').val();
				var trackID = $(this).children('form').siblings('.tracker').attr('id');
				if ($(this).children('.tracker').hasClass('stories')) {
					getStories(trackVal, trackID);
				} else if ($(this).children('.tracker').hasClass('tweets')) {
					getTweets(trackVal, trackID);
				}
			}
		});
	}, 1200000); // 1200000 =  Every 20 mins.. I think.

});		

function getStories(trackVal, trackID){
	$.ajax({
		url: 'php/grab.php',
		cache: false,
		data: 'val=' + trackVal,
		dataType: 'json',
		error: function(xhr, textstatus, errorThrown){
			console.log('error');
		},
		success:function(data){
			console.log(data);
			var i = 0;
			if ($('#' + trackID).parents('.tracker-wrapper').hasClass('active')) {
				$('#' + trackID).empty();
				$.each(data.responseData.results, function(index) {
					var item = '<p><a href="' + data.responseData.results[index].unescapedUrl + '" target="_blank">' + data.responseData.results[index].title + '</a></br><small>' + data.responseData.results[index].publisher + '</small></p>';
					$('#' + trackID).append(item);
				});				
			}
			// and timestamp the update
			var currentdate = new Date(); 
			var datetime = "Last update at " 
			                + currentdate.getHours() + ":"  
			                + currentdate.getMinutes()
			$('#' + trackID).siblings('.timestamp').html(datetime);
		}
	});
}

function getTweets(trackVal, trackID){
	$.ajax({
		url: 'php/grabTweets.php',
		cache: false,
		data: 'val=' + trackVal,
		dataType: 'json',
		error: function(xhr, textstatus, errorThrown){
			console.log('error');
		},
		success:function(data){
			$('#' + trackID).empty();
			$.each(data.statuses, function(index) {
				if (index < 4) {
						var item = 
							'<p><a href="' + 
							data.statuses[index].entities.media[0].url + 
							'" target="_blank">' + 
							data.statuses[index].text + 
							'</p>';
						$('#' + trackID).append(item);			
				}
			});
			// and timestamp the update
			var currentdate = new Date(); 
			var datetime = "Last update at " 
			                + currentdate.getHours() + ":"  
			                + currentdate.getMinutes()
			$('#' + trackID).siblings('.timestamp').html(datetime);
		}
	});
}





