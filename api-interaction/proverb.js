$(document).ready(function() {
    $.ajax({
        url: "https://eda-te-reo.herokuapp.com/api/proverbs"
    }).then(function(data) {
       $('.greeting-id').append(data.source);
       $('.greeting-content').append(data.translation);
    });
});
