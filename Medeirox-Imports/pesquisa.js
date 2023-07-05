function search() {
    let input = document.getElementById('pesquisa').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('nome-produto');
    let n = 0

    for (i = 0; i < x.length; i++){
        if(x[i].innerHTML.toLocaleLowerCase().includes(input)){
            n++;
        }
    }

    alert("Encontrei "+ n +" resultados!");
}

function atalho (search){
    sessionStorage.setItem('search', search);
}

function pesquisa(){
    let search = sessionStorage.getItem('search');
    alert(search);
}
