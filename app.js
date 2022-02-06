const express = require('express');
const app = express();

const port = 8087;

app.set('view engine', 'ejs')

var array = [1, 2, 3, 4, 5];

const resultadoMultiplicacao = array.map(array => array * 2);

const resultadoMaiorQueTres = array.filter(array => array > 3);

const resultadoSomaTotal = array.reduce((resultadoSomaTotal, array) => resultadoSomaTotal + array, 0);

app.get('/', (req, res)=>{
    console.log('Lista de exercícios 2');
    console.log('Elementos do array multiplicados por 2: '+ resultadoMultiplicacao);
    console.log('Elementos do array maiores que 3: '+ resultadoMaiorQueTres);
    console.log('Soma de todos os elementos do array: '+ resultadoSomaTotal);
});

app.listen(port, ()=>{
    console.log('Servidor rodando na URL http://localhost${port}');
});