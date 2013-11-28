


$(function(){
	$('.js-trackSubmit').bind('click', function(){
		var trackVal = $('.js-trackVal').val();
		trackCallout(trackVal);
		$(this).parents('.tracker-wrapper').addClass('active');
		return false;
	});

	setInterval(function(){
		if ($('.tracker-wrapper').hasClass('active')) {
			var trackVal = $('.js-trackVal').val();
			trackCalloutReplace(trackVal);
		}
	}, 5000);
});		

function trackCallout(trackVal){
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
				$('#tracker1').append(item);
			});
		}
	});

}

function trackCalloutReplace(trackVal){
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