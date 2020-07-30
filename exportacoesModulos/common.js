import operacoes from "./operacoes.js";
import { divisao, multiplicacao, resto } from "./operacoesNomeadas.js"; //expotações nomeadas. Obrigamos o uso do mesmo nome que foi exportado
console.log(operacoes.soma(2, 3));
console.log(operacoes.subtracao(5, 3));
console.log(divisao(9, 3));
console.log(multiplicacao(9, 5));
console.log(resto(5, 3));