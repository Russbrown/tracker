
$(function(){
	$('.js-trackSubmit').bind('click', function(){
		var trackVal = $(this).siblings('.js-trackVal').val();
		var trackID = $(this).parents('form').siblings('.tracker').attr('id');
		getStories(trackVal, trackID);
		$(this).parents('.tracker-wrapper').addClass('active');
		return false;
	});

	setInterval(function(){
		if ($('.tracker-wrapper').hasClass('active')) {
			var trackVal = $('.js-trackVal').val();
			getStoriesReplace(trackVal);
		}
	}, 1200000); // Every 20 mins.. I think.
});		

function getStories(trackVal, trackID){
	$.ajax({
		url: 'grab.php',
		cache: false,
		data: 'val=' + trackVal,
		dataType: 'json',
		error: function(xhr, textstatus, errorThrown){
			console.log('error');
		},
		success:function(data){
			var i = 0;
			$.each(data.responseData.results, function(index) {
				var item = '<p><a href="' + data.responseData.results[index].unescapedUrl + '">' + data.responseData.results[index].title + '</a></p>';
				$('#' + trackID).append(item);
			});
		}
	});
}

function getStoriesReplace(trackVal){
	$.ajax({
		url: 'grab.php',
		cache: false,
		data: 'val=' + trackVal,
		dataType: 'json',
		error: function(xhr, textstatus, errorThrown){
			console.log('error');
		},
		success:function(data){
			var i = 0;
			$('#tracker1').empty();
			$.each(data.responseData.results, function(index) {
				var item = '<p><a href="' + data.responseData.results[index].unescapedUrl + '">' + data.responseData.results[index].title + '</a></p>';
				$('#tracker1').append(item);
			});
		}
	});
}





