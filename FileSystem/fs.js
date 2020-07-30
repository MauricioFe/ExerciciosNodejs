import { promises as fs } from "fs";
//init();
writeReadJson();
//utizando promisses
// fs.writeFile("teste.txt", "bla bla bla").then(() => {
//     fs.appendFile("teste.txt","\nteste append file").then(() => {
//         fs.readFile("teste.txt", "utf-8").then(resp => {
//             console.log(resp);
//         }).catch(err => console.log(err));
//     }).catch(err => console.log(err))
// }).catch(err => console.log(err));


/*utizando promisses com Async await*/
async function init() {
    try {
        await fs.writeFile("teste.txt", "bla bla bla");
        await fs.appendFile("teste.txt", "\nteste append file");
        const resp = await fs.readFile("teste.txt", "utf-8");
        console.log(resp);
    } catch (err) {
        console.log(err);
    }
}

async function writeReadJson() {
    try {
        //Escrita com valores iniciais
        const arrayCarros = ["Gol", "Pálio", "Uno"];
        const obj = { carros: arrayCarros };
        await fs.writeFile("teste.json", JSON.stringify(obj));

        //Leitura do arquivo
        const data = JSON.parse(await fs.readFile("teste.json"));
        
        //Sobreescrita do aruqivo com novos valores
        data.carros.push("Sandero");
        await fs.writeFile("teste.json", JSON.stringify(data));

        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

//sem promisses
//import fs from "fs";

//Exemplo com callbacks
/* Escreve em um arquivo. Se esse arquivo não exisitir ele é criado */
// fs.writeFile("teste.txt", "bla bla bla", err => {
//     if (err)
//         console.log(err);
//     else {
//         /*concatena um conteudo no final do arquivo*/
//         fs.appendFile('teste.txt', '\nteste append file\n', err => {
//             if (err)
//                 console.log(err);
//             else
//                 /**Lê um arquivo externo*/
//                 fs.readFile("teste.txt", "utf-8", (err, data) => {
//                     if (err)
//                         console.log(err);
//                     else
//                         console.log(data);
//                 });
//         });
//     }
// });


//Exemplo com o sincrono

// try {
//     fs.writeFileSync("teste.txt", "bla bla bla");
//     fs.appendFileSync('teste.txt', '\nteste append file\n');
//     const data = fs.readFileSync("teste.txt", "utf-8");
//     console.log(data);
// } catch (err) {
//     console.log(err);
// }