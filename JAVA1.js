//1

const glowa = document.querySelector('header');
console.log(glowa);
glowa.style.backgroundColor="Yellow";

//2

const one = document.querySelector('header h1')
one.style.fontStyle="Arial Black";
one.innerHTML="Preambula";
console.log(one);

//3

const dwa = document.getElementsByTagName("section")
console.log(dwa)
for (const element of dwa) {
    element.style.border='2px solid brown';
    console.log(element)
}
//4
const trzy = document.querySelector(".main_column h1")
console.log(trzy);
trzy.innerHTML ='Specjalnosc szefa:';
//5
const cztery = document.querySelector(".main_column")
console.log({cztery})
const akapit =document.createElement('p');
akapit.innerHTML = "kebab na frytkach";
console.log({akapit});
cztery.appendChild(akapit);
//6
const piec = document.querySelector("section.side_column h1");
console.log(piec)
piec[1].remove(;)
