const sliceText = document.getElementById('slice_text').innerText;
const sliceButton1 = document.getElementById('slice_button1');
sliceButton1.addEventListener('click', function () {
    alert(sliceText.slice(26,36));
});

const sliceButton2 = document.getElementById('slice_button2');
sliceButton2.addEventListener('click', function () {
    alert(sliceText.slice(-12,-5));
});