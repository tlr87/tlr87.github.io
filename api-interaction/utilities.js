

function reloadPage() {
    location.reload();
}


function tweetOut(){
}


//function tweetOut() {
//    let quote = document.getElementById("quote").innerHTML;
//    let quoteTranslated = document.getElementById("quoteTranslated").innerHTML;
//    let url = ('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote + '"\n"' + quoteTranslated +'"'));
//    window.open(url, '_blank');
//}

$(document).ready(function(){
    var classCycle=['image1','image2', 'image3', 'image4'];

    var backImage = Math.floor(Math.random() * classCycle.length);
    var currentImage = classCycle[backImage];

    $('body').addClass(currentImage);

});
