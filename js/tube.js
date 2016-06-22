$(document).ready(function() {
    function grabResults(query) {
        $.getJSON('https://www.googleapis.com/youtube/v3/search',  {
                'part': 'snippet',
                'key': 'AIzaSyDvOx_WA5SemhCYmBf4CwwpFd02bF8DYNQ',
                'q': query

            },
            function(data) {
                showResults(data.items);
                console.log(data);
            });
    }

    function showResults(videos){
    	var html ='';

    }

    $('#searh-form').submit(function (event) {
    	event.preventDefault();
    	grabResults($('#query').val());
    });


}); //document ready


// function searchByKeyword() {
//   var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
//   for(var i in results.items) {
//     var item = results.items[i];
//     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//   }
// }