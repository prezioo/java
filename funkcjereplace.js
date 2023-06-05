// const id_replace = document.getElementById('id_replace').innerText;
// const id_replace1 = document.getElementById('id_replace1');
// id_replace1.addEventListener('click', function () {
//     document.getElementById(id_replace.replace("Microsoft", "Januszex"));
// });
// replace
var tekstdwa = document.getElementsByClassName('wycinanie')[0].innerText;
var zastapienie = document.getElementById('id_replace1');
zastapienie.addEventListener('click',function (){
    var wynik = tekstdwa.replace("Microsoft", "Januszex")
    document.getElementsByClassName("wycinanie")[0].innerHTML=wynik;
});
var slowo = document.getElementById('id_replace2');
slowo.addEventListener('click', function () {
    var wynik =  tekstdwa.replace('Edge','Janusz Explorer')
    document.getElementsByClassName("wycinanie")[0].innerHTML=wynik;
});

var replaceall1 = document.getElementsByClassName('idreplaceall')[0].innerText;
var replace = document.getElementById('idreplaceall1');
replace.addEventListener('click',function () {
    var wynik = replaceall1.replaceAll("Microsoft", "JanuszPOL")
    document.getElementsByClassName("idreplaceall")[0].innerHTML = wynik;
});

var toupper = document.getElementsByClassName('eulkides')[0].innerText;
var upper = document.getElementById('toupper');
upper.addEventListener('click',function () {
    var wynik = toupper.toUpperCase('Euklides z Aleksandrii (stgr.Εὐκλείδης) - grecki matematyk')
    document.getElementsByClassName("eulkides")[0].innerHTML = wynik;
});

var tolower = document.getElementsByClassName('eulkides')[0].innerText;
var lower = document.getElementById('tolower');
lower.addEventListener('click',function () {
    var wynik = tolower.toLowerCase('Euklides z Aleksandrii (stgr.Εὐκλείδης) - grecki matematyk')
    document.getElementsByClassName("eulkides")[0].innerHTML = wynik;
});

var tolower = document.getElementsByClassName('eulkides')[0].innerText;
var lower = document.getElementById('tolower');
lower.addEventListener('click',function () {
    var wynik = tolower.toLowerCase('Euklides z Aleksandrii (stgr.Εὐκλείδης) - grecki matematyk')
    document.getElementsByClassName("eulkides")[0].innerHTML = wynik;
});

var tonormal = document.getElementById("tonormal");
tonormal.addEventListener("click", function (){

})
