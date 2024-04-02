const form = document.getElementById('form-contato');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputTelefoneContato = document.getElementById('telefone-contato')

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(parseInt(inputTelefoneContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}`;
        linha += `<td>${inputTelefoneContato.value}`;
        linha += `</tr>`;

        linhas += linha
    }

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}