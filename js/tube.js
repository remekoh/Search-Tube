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
                q: userSearch
            },

        }).done(function(response) {

            $('#search-results').empty();
            $.each(response.items, function(index, value) {
                $('#search-results').append('<li><img src="' + response.items[index].snippet.thumbnails.medium.url + '""></li>');
             console.log(response.items[index].snippet.thumbnails.medium.url)
            });
        });
    });
            
});     


// function searchByKeyword() {
//   var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
//   for(var i in results.items) {
//     var item = results.items[i];
//     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//   }
// }