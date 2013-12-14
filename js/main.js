$(function(){
	$('.js-trackStories').bind('click', function(){
		var trackVal = $(this).siblings('.js-trackVal').val();
		var trackID = $(this).parents('form').siblings('.tracker').attr('id');
		getStories(trackVal, trackID);
		$(this).parents('.tracker-wrapper').addClass('active');
		// Save data to the current session's store
		sessionStorage.setItem(trackID, trackVal);
		return false;
	});

	$('.js-trackTweets').bind('click', function(){
		var trackVal = $(this).siblings('.js-trackVal').val();
		var trackID = $(this).parents('form').siblings('.tracker').attr('id');
		getTweets(trackVal, trackID);
		$(this).parents('.tracker-wrapper').addClass('active');
		return false;
	});

	// See if we have a trakr set
	if ((sessionStorage.getItem('tracker1')) || (sessionStorage.getItem('tracker2')) || (sessionStorage.getItem('tracker3'))) {
		// Restore the contents of the trakr field
		for(var i = 0; i < sessionStorage.length; i++) {  // Length gives the # of pairs
		    var trackID = sessionStorage.key(i);             // Get the name of pair i
		    var trackVal = sessionStorage.getItem(trackID);
		    console.log(trackID);
			$('#' + trackID).siblings('form').children('.js-trackVal').val(trackVal);
			$('#' + trackID).parents('.tracker-wrapper').addClass('active');
			getStories(trackVal, trackID);
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
				if ($(this).hasClass('stories')) {
					getStories(trackVal, trackID);
				} else if ($(this).hasClass('tweets')) {
					getTweets(trackVal, trackID);
				}
			}
		});
	}, 1000); // 1200000 =  Every 20 mins.. I think.

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
			var i = 0;
			if ($('#' + trackID).parents('.tracker-wrapper').hasClass('active')) {
				$('#' + trackID).empty();
				$.each(data.responseData.results, function(index) {
					var item = '<p><a href="' + data.responseData.results[index].unescapedUrl + '" target="_blank">' + data.responseData.results[index].title + '</a></p>';
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

function getStoriesReplace(trackVal){
	$.ajax({
		url: 'php/grab.php',
		cache: false,
		data: 'val=' + trackVal,
		dataType: 'json',
		error: function(xhr, textstatus, errorThrown){
			console.log('error');
		},
		success:function(data){
			var i = 0;
			if ($('#' + trackID).parents('.tracker-wrapper').hasClass('active')) {
				$('#' + trackID).empty();
				$.each(data.responseData.results, function(index) {
					var item = '<p><a href="' + data.responseData.results[index].unescapedUrl + '">' + data.responseData.results[index].title + '</a></p>';
					$('#' + trackID).append(item);
				});				
			}
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
			
			// console.log(data.statuses[2].entities.urls);
			$('#' + trackID).empty();
			$.each(data.statuses, function(index) {
				if (index < 4) {
					var item = '<p>' + data.statuses[index].text + '</a></p>';
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





