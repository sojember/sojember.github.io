var unggulan1 = document.getElementById('unggulan1');
var unggulan2 = document.getElementById('unggulan2');
var game1 = document.getElementById('game1');
var game2 = document.getElementById('game2');
var game3 = document.getElementById('game3');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var twitter = document.getElementById('twitter');

unggulan1.addEventListener('click', function(){
    open("https://s.id/soj-terasi", "_blank");
    // window.open('url here', '_BLANK');
});

unggulan2.addEventListener('click', function(){
    open("https://bit.ly/sojbukalapak", "_blank");
    // window.open('url here', '_BLANK');
});

game1.addEventListener('click', function(){
    open("https://s.id/soj-cabejawa", "_blank");
    // window.open('url here', '_BLANK');
});

game2.addEventListener('click', function(){
    open("https://s.id/soj-maskerkain", "_blank");
    // window.open('url here', '_BLANK');
});

game3.addEventListener('click', function(){
    open("https://s.id/soj-wayang", "_blank");
    // window.open('url here', '_BLANK');
});

prev.addEventListener('click', function(){
    alert('belum ada produk lain tersedia');
});

next.addEventListener('click', function(){
    alert('belum ada produk lain tersedia');
});

twitter.addEventListener('click', function(){
    alert('media ini belum tersedia');
});