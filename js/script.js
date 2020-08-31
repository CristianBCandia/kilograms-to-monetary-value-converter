
String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
  };
  
  function mascaraMoeda(campo,evento){
    var tecla = (!evento) ? window.event.keyCode : evento.which;
    var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
    var resultado  = "";
    var mascara = "##.###.###,##".reverse();
    for (var x=0, y=0; x<mascara.length && y<valor.length;) {
      if (mascara.charAt(x) != '#') {
        resultado += mascara.charAt(x);
        x++;
      } else {
        resultado += valor.charAt(y);
        y++;
        x++;
      }
    }
    campo.value = resultado.reverse();
  }

Produto = {

    tomate: JSON.parse(window.localStorage.getItem('valorTomate')),
    cebola: JSON.parse(window.localStorage.getItem('valorCebola')),
    laranja: JSON.parse(window.localStorage.getItem('valorLaranja')),
    cenoura: JSON.parse(window.localStorage.getItem('valorCenoura')),
    batata: JSON.parse(window.localStorage.getItem('valorBatata')),
    limao: JSON.parse(window.localStorage.getItem('valorLimao')),
    aipim: JSON.parse(window.localStorage.getItem('valorAipim')),
    produto: JSON.parse(window.localStorage.getItem('valorProduto')),


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
            case 'limao':
                return this.limao
            break       
            case 'aipim':
                return this.aipim
            break       
            case 'batata':
                return this.batata
            break       
            case 'cenoura':
                return this.cenoura
            break       
            case 'produto':
                return this.produto
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
            case 'cenoura':
                this.cenoura = valor
                window.localStorage.setItem('valorCenoura', JSON.stringify(valor))
            break       
            case 'batata':
                this.batata = valor
                window.localStorage.setItem('valorBatata', JSON.stringify(valor))
            break       
            case 'limao':
                this.limao = valor
                window.localStorage.setItem('valorLimao', JSON.stringify(valor))
            break       
            case 'aipim':
                this.aipim = valor
                window.localStorage.setItem('valorAipim', JSON.stringify(valor))
            break       
            case 'laranja':
                this.laranja = valor
                window.localStorage.setItem('valorLaranja', JSON.stringify(valor))
            break       
            case 'produto':
                this.produto = valor
                window.localStorage.setItem('valorProduto', JSON.stringify(valor))
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
        txtPrecoQuilo.innerHTML = 'Preço por Kg: R$ '+Produto.retornaProduto(produto).toFixed(2).replace('.', ',')
        txtQuantidade.innerHTML = 'Quantidade: '+(parseFloat(txtPeso.value)/1000).toFixed(3)+ ' Kg'   
        txtTotal.innerHTML = 'Total: $RS '+ ((parseFloat(txtPeso.value)/1000) * Produto.retornaProduto(produto))
                                                                                        .toFixed(2).toString().replace('.',',')     
        
    }else if (txtPeso.value != '' && txtNovoValor.value != ''){
        
        alert('Apague o conteúdo de um dos campos!')
        
    }else if(txtPeso.value === '' && txtNovoValor.value != ''){
        
        if(isNaN(parseFloat(txtNovoValor.value))){
            alert('Digite numeros!')
            return
        }
        txtNomeProduto.innerHTML = 'Produto: '+produto.toUpperCase()
        let novoValor = parseFloat(txtNovoValor.value.replace(',', '.'))
        Produto.atualizaProduto(produto, novoValor)
        txtPrecoQuilo.innerHTML = '<span txtPrecoQuilo>Valor atual:</span><span verde> R$ '+txtNovoValor.value+'</span> por Kg'
        
    }
    
}