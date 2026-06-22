//IMPORTANDO
import {calcDesconto} from "./script_calculos.js"

//PEGANDO ELEMETOS DO DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')

//CRIANDO ARRAY PESSOAS
const pessoas = []

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formPessoa.addEventListener('submit', (evt) => {

    //INTERROMPE O EFEITO PADRÃO DE RESET APÓS O SUBMIT
    evt.preventDefault()

    //CRIAR UM OBJ FORMULÁRIO
    const dadosFormPessoa = new FormData(formPessoa)

    //CRANDO UM OBJ LITERAL
    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
        idade: dadosFormPessoa.get('idade'),
        renda: dadosFormPessoa.get('renda')
    }

    //CHAMANDO A FUNÇÃO addPessoa E PASSANDO O OBJETO LITERAL pessoa
    addPessoa(pessoa)
    //LIMPAR FORMULARIO
    formPessoa.reset()
})

//CRIANDO A FUNÇÃO ADCIONAR PESSOAS
const addPessoa = (objPessoa) => {

    //ADICIONANDO O OBJETO LITERAL NO ARRAY PESSOAS
    pessoas.push(objPessoa)

    //APÓS ADICIONAR O OBJETO LITERAL NO ARRAY CHAMA A FUNÇÃO listPessoas
    listPessoas()
}

//FUNÇÃO PARA LISTAR PESSOAS DO ARRAY
const listPessoas = () => {

    //LIMPAR A DIV LISTA
    divLista.innerHTML = ''

    //PERCORRE ARRAY pessoas COM O foreach
    pessoas.forEach((elem, i) => {
        divLista.innerHTML += `${i + 1} - ${elem.nome} - ${elem.idade} Anos - 
        ${parseFloat(elem.renda).toFixed(2).replace('.',',') } - ${calcDesconto(elem)} <br>`
    })
}

