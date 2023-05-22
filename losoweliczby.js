

window.onload = function() {
    var form = document.getElementById("myForm");

    for (var i = 0; i < 100; i++) {
        var input = document.createElement("input");
        input.id = "element" + (i + 1);
        input.name = "element" + (i + 1);
        input.style.margin = "10px";
        input.style.boxShadow = "5px 5px lightblue";
        input.placeholder = "Element numer " + (i + 1);

        var column = form.getElementsByClassName("column")[i % 5];
        column.appendChild(input);
    }
}