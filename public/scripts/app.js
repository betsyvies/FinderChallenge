/*
  main script for only runs every function
*/

window.addEventListener('load', function() {
    loadJSON(JSON_FILE, function(response) {
        var actual_JSON = JSON.parse(response);
        searchForm(actual_JSON.data);
        listResults(actual_JSON.data);
    });
})