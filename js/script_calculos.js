//CRIANDO A FUNÇÃO PARA CÁLCULO
const calcDesconto = (objPessoa) => {
    let resultCalc = ''

    if((objPessoa.idade < 18) || (objPessoa.renda <= 1700)){
        resultCalc = 'Isento de desconto'
     }else if(objPessoa.renda <= 5000){
        resultCalc = `SEU DESCONTO SERÁ DE 5% = ${(objPessoa.renda * 0.05).toFixed(2).replace('.',',')}`
    }else if(objPessoa.renda <= 8000){
        resultCalc = `SEU DESCONTO SERÁ DE 10% = ${(objPessoa.renda * 0.10).toFixed(2).replace('.',',')}`
    }else if(objPessoa.renda <= 12000){
        resultCalc = `SEU DESCONTO SERÁ DE 15% = ${(objPessoa.renda * 0.15).toFixed(2).replace('.',',')}`
    }else{
        resultCalc = `SEU DESCONTO SERÁ DE 20% = ${(objPessoa.renda * 0.20).toFixed(2).replace('.',',')}`
    }
    return resultCalc
}
export{calcDesconto}


