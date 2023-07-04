function search() {
    let input = document.getElementById('pesquisa').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('nome-produto');

    for (i = 0; i < x.length; i++){
        if(input.includes('infantil')){
            alert("sadjklsadlkjdsa")
        }
        else if(x[i].innerHTML.toLocaleLowerCase().includes(input)){
            alert('achei!')
        }
    }
}