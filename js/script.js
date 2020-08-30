

Produto = {

    tomate: JSON.parse(window.localStorage.getItem('valorTomate')),
    cebola: JSON.parse(window.localStorage.getItem('valorCebola')),
    laranja: JSON.parse(window.localStorage.getItem('valorLaranja')),

    retornaProduto(produto){
        
        switch(produto){

            case 'tomate':
                return this.tomate
               
            break
            case 'cebola':
                return this.cebola
            break
            case 'laranja':
                return this.laranja
            break       
        }

    },
    atualizaProduto(produto, valor){
        
        switch(produto){

            case 'tomate':
                this.tomate = valor
                window.localStorage.setItem('valorTomate', JSON.stringify(valor))
            break
            case 'cebola':
                this.cebola = valor
                window.localStorage.setItem('valorCebola', JSON.stringify(valor))
            break
            case 'laranja':
                this.laranja = valor
                window.localStorage.setItem('valorCebola', JSON.stringify(valor))
            break       
        }

    }

}

const txtPeso = document.querySelector('#peso')
txtPeso.focus()
    
const txtNovoValor = document.querySelector('#novo-valor')
const lblPeso = document.querySelector('#lbl-peso')

const txtNomeProduto = document.querySelector('#nome-produto')
const txtTotal = document.querySelector('#valor-total')

const txtPrecoQuilo = document.querySelector('#preco-quilo')
const txtQuantidade = document.querySelector('#txt-quantidade')


function reset(){

    txtPeso.value = ''
    txtNomeProduto.innerHTML = '' 
    txtNovoValor.value = ''
    txtTotal.innerHTML = ''
    txtPrecoQuilo.innerHTML = ''
    txtQuantidade.innerHTML = ''

}
    
function analiseDeAcao(produto) {

    
    if(txtPeso.value != '' && txtNovoValor.value === ''){

        if(isNaN(parseFloat(txtPeso.value))){
            alert('Digite numeros!')
            return
        }
        txtNomeProduto.innerHTML = 'Produto: '+ produto.toUpperCase()    
        txtPrecoQuilo.innerHTML = 'Preço por Kg: R$ '+Produto.retornaProduto(produto).toFixed(2)
        txtQuantidade.innerHTML = 'Quantidade: '+(parseFloat(txtPeso.value)/1000).toFixed(3)+ ' Kg'   
        txtTotal.innerHTML = '<span class="total-verde">Total: $RS '+ ((parseFloat(txtPeso.value)/1000) * Produto.retornaProduto(produto)).toFixed(2)+'</span>'       
        
    }else if (txtPeso.value != '' && txtNovoValor.value != ''){
        
        alert('Apague o conteúdo de um dos campos!')
        
    }else if(txtPeso.value === '' && txtNovoValor.value != ''){
        
        if(isNaN(parseFloat(txtNovoValor.value))){
            alert('Digite numeros!')
            return
        }
        txtNomeProduto.innerHTML = 'Produto: '+produto.toUpperCase()
        Produto.atualizaProduto(produto, parseFloat(txtNovoValor.value))
        txtTotal.innerHTML = 'Preço por Kg: R$ '+parseFloat(txtNovoValor.value).toFixed(2)
        
    }
    
}