// let i=1;
// while(i<=10){
//     console.log('i='+i)
//     i++;
// }
{
    // const tabela=document.getElementById()
    // tabela.innerHTML='';
    // const kolumny INPUT=document.getElementById()
    // const kolumny=parsent(
    //     kolumnyinput.value();
    //     console.log('liczba kolumn' + )
    // let k=1;
    // )
}
function populateTable(){
    letters = ["1", "2", "3", "4", "5"]
    numbers = ["1", "2", "3", "4", "5"]

    for(let i = 0; i < numbers.length; i++){
        document.getElementById("the-table").innerHTML += "<tr>"
        for(let j = 0; j < letters.length; j++){
            document.getElementById("the-table").innerHTML += "<td>" + letters[j] + numbers[i] + "</td>"
        }
        document.getElementById("the-table").innerHTML += "</tr>"
    }
}