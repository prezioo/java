const sliceText = document.getElementById('slice_text').innerText;
const sliceButton1 = document.getElementById('slice_button1');
sliceButton1.addEventListener('click', function () {
    alert(sliceText.slice(26,36));
});

const sliceButton2 = document.getElementById('slice_button2');
sliceButton2.addEventListener('click', function () {
    alert(sliceText.slice(-12,-5));
});

const  substringtext = document.getElementById('substring_text').innerText;
const  substring_button1 = document.getElementById('substring_button1');
substring_button1.addEventListener('click',function ()){
    alert(substringtext.substring(27,9));
}

const substring
