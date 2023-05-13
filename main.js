const form = document.getElementById('form-deposito');

function numeroContaBeneficiario() {
    nomeCompleto.split('');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-dposito');
    const mensagemSucesso = 'montante de: ${valorDeposito.value} conta: ${numeroContaBeneficiario.value}';

    formEvalido = numeroContaBeneficiario(numeroConta.value)
    if (!formEvalido) {
        alert("mensagem positiva");

        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        alert("mensagem negativa");
    }
    
})

console.log(form);