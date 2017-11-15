$(document).ready(function() {

	/*============ AJAX =============*/

	$('#search-term').submit(function(event){
		event.preventDefault();
		var userSearch = $('#query').val();
		console.log(userSearch);
		var url = 'https://www.googleapis.com/youtube/v3/search';
		$.ajax({
			method: "GET",
			url: url,
			dataType: "json",
			data: {
					key: "AIzaSyAcKio8lN38bzmJmYP6dzHc9I1KhBVQCWc",
					part: 'snippet',
					q: userSearch,
					maxResults: 15
			},

		}).done(function(response) {

			$('#search-results').empty();
			
			$.each(response.items, function(index, value) {
					$('#search-results').append('<li><a href="http://www.youtube.com/watch?v=' + response.items[index].id.videoId + '"><img src="' + response.items[index].snippet.thumbnails.medium.url + '""></a></li>');
				console.log(response.items[index].id.videoId);
			});
		});
		$('#search-term')[0].reset();
	});	
});


// function searchByKeyword() {
//   var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
//   for(var i in results.items) {
//     var item = results.items[i];
//     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//   }
// }