//  coleção dinamica de par chave/valor

const produto = new Object // Forma de criar objeto apartir do operador new assim instanciando um objeto 

produto.nome = ' Cadeira',
produto['Marca Produto'] = ' Generica ', 
produto.preco = 220

console.log(produto);

delete produto.preco
delete produto['Marca Produto']

const carro = {
modelo:'A4',
valor:8900,
  proprietarios:{
    nome:'Raul',
    idade:56,
    endereco:{
      logradouro:'Rua ABC',
      numero:1390,
    }
  },
  condutores:[{
    nome:'Junior',
    idade:25,
},{
    nome:'Ana',
    idade:42,
}],
  calcularValorseguro:function(){
  // Realizar Calculo de Seguro }
}
}
carro.proprietarios.endereco.logradouro = 1000
/* interessate declarar dessa forma apartir de strigns quando tem o nome dos produtos atraves de strings  via introspecção : 
Quando você consegue  os dasdos de um Objeto apartir de um algoritimo */
carro['proprietarios']['endereco']['logradouro']
console.log(carro)
console.log(carro.condutores.length)