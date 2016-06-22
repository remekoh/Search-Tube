$(document).ready(function() {

    // performs a Get Request on JSON data and passes url and object of parameters then runs showResults
    function grabResults(query) {
            var params = {
                'part': 'snippet',
                'key': 'AIzaSyDvOx_WA5SemhCYmBf4CwwpFd02bF8DYNQ',
                'q': searchWord
            }; 
            url = 'https://www.googleapis.com/youtube/v3/search';

            $.getJSON(url, params, function(data){
                showResults(data.Search);
                console.log(data.Search);
            });        
        }

    function showResults(videos){
    	var html ='';
        $.each(videos, function(index, video){
            console.log(video)
        });
    }

    $('#search-term').submit(function(event) {
    	event.preventDefault();
        var searchWord = $('#query').val();
    	grabResults(searchWord);
        console.log(searchWord);
    });


}); //document ready


// function searchByKeyword() {
//   var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
//   for(var i in results.items) {
//     var item = results.items[i];
//     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//   }
// }