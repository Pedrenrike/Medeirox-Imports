function search() {
    let input = document.getElementById('pesquisa').value 
    if (!input){
        alert("Digite o que desejas pesquisar!");
    }
    else{
        atalho(input);
    }
}

function atalho(search){
    sessionStorage.setItem('search', search);
    window.location.href = "pesquisa.html";
}

function pesquisa(){
    let search = sessionStorage.getItem('search');
    search = search.toLowerCase();
    x = document.getElementsByClassName("tags");
    produto = document.getElementsByClassName("produtos");

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(search)){
            produto[i].style.display="none";
        }   
    }
}
