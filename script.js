function insert(caractere){
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML=numero + caractere;
}

function clean(){
    document.getElementById('result').innerHTML='';
}

function exclude(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}

function compute(){
    var totalOperacao = document.getElementById('result').innerHTML;

    if(totalOperacao){
        document.getElementById('result').innerHTML = eval(totalOperacao);
    } else{
        document.getElementById('result').innerHTML = 'Digite a operação';
    }
}