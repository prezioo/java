//1
const jeden = document.querySelector("#jeden");
jeden.addEventListener("click", function(){
    document.querySelector("#ha6").innerHTML = "<i>Swietnie</i>";
});
console.log(jeden)
//2
const dwa =document.querySelector('#dwa');
dwa.addEventListener("click", function(){
    document.querySelector("#ha5").innerText = "<i>Swietnie!</i>";
});
console.log(dwa);
//3
document.querySelector("#baton3").addEventListener("click", function (){
    const tre = document.querySelector("#diw1");
    const tra = tre.querySelectorAll("*");
    console.log(tra);

    for (const el of tra) {
        if (el.tagName === "STRONG") {
            el.style.border = "10px dotted green"
        }
    }
})
//4
document.querySelector("#z4").addEventListener("click", function (){
    alert(document.querySelector("#p4").getAttribute('title'));

})

//5
const piate = document.querySelector("#zad5")
piate.addEventListener("click", function() {
    const piece = document.querySelector("#zad5");
    piece.setAttribute('cos', 'rtl');
    console.log(piece);
});
//6
