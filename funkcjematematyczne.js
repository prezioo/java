const cos=prompt('podaj liczbe')
const numer=document.getElementsByTagName('span')
const liczba=document.querySelector("to")
for (const num of numer)
{
    num.innerText=cos;
    liczba.innerHTML="podana liczba"+cos
}
document.getElementById('jeden').innerHTML="funckja abs("+cos+")="+Math.abs(cos);
document.getElementById('dwa').innerHTML="funckja ceil("+cos+")="+Math.ceil(cos);
document.getElementById('trzy').innerHTML="funckja floor("+cos+")="+Math.floor(cos);
document.getElementById('cztery').innerHTML="funckja min("+cos+")="+Math.min(wpisz);
document.getElementById('piec').innerHTML="funckja max("+cos+")="+Math.max(wpisz);
document.getElementById('szesc').innerHTML="funckja "+wpisz+")="+Math.round(wpisz);
document.getElementById('siedem').innerHTML="funckja sqrt("+wpisz+")="+Math.(wpisz);
document.getElementById('osiem').innerHTML="funckja sqrt("+wpisz+")="+Math.sqrt(wpisz);