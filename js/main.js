$(function(){
	$('.js-trackStories').bind('click', function(){
		var trackVal = $(this).siblings('.js-trackVal').val();
		var trackID = $(this).parents('form').siblings('.tracker').attr('id');
		getStories(trackVal, trackID);
		$(this).parents('.tracker-wrapper').addClass('active');
		return false;
	});

	$('.js-trackTweets').bind('click', function(){
		var trackVal = $(this).siblings('.js-trackVal').val();
		var trackID = $(this).parents('form').siblings('.tracker').attr('id');
		getTweets(trackVal, trackID);
		$(this).parents('.tracker-wrapper').addClass('active');
		return false;
	});

	setInterval(function(){
		// iterate through the trackers
		$('.tracker-wrapper').each(function(){
			if ($(this).hasClass('active')) {
				// if its active refresh the stories
				var trackVal = $(this).children('form').children('.js-trackVal').val();
				var trackID = $(this).children('form').siblings('.tracker').attr('id');
				getStories(trackVal, trackID);
				// and timestamp the update
				var currentdate = new Date(); 
				var datetime = "Last update: " + currentdate.getDate() + "/"
				                + (currentdate.getMonth()+1)  + "/" 
				                + currentdate.getFullYear() + " @ "  
				                + currentdate.getHours() + ":"  
				                + currentdate.getMinutes() + ":" 
				                + currentdate.getSeconds();
				$('#' + trackID).siblings('.timestamp').html(datetime);
			}
		});
	}, 10000); // 1200000 =  Every 20 mins.. I think.

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
					var item = '<p><a href="' + data.responseData.results[index].unescapedUrl + '">' + data.responseData.results[index].title + '</a></p>';
					$('#' + trackID).append(item);
				});				
			}

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
			$.each(data.statuses, function(index) {
				if (index < 4) {
					var item = '<p>' + data.statuses[index].text + '</a></p>';
					$('#' + trackID).append(item);					
				}
			});
		}
	});
}





