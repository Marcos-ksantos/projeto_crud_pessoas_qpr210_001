//PEGANDO ELEMETOS DO DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')

//CRIANDO ARRAY PESSOAS
const pessoas = []

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formPessoa.addEventListener('submit', (evt) =>{

    //INTERROMPE O EFEITO PADRÃO DE RESET APÓS O SUBMIT
    evt.preventDefault()

    //CRIAR UM OBJ FORMULÁRIO
    const dadosFormPessoa = new FormData(formPessoa)

    //CRANDO UM OBJ LITERAL
    nome: dadosFormPessoa.get('nome') 
    idade: dadosFormPessoa.get('idade') 
    renda: dadosFormPessoa.get('renda') 
})
