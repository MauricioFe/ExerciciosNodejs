import fs from "fs";
/* Escreve em um arquivo. Se esse arquivo não exisitir ele é criado */
fs.writeFile("teste.txt", "bla bla bla", err => {
    if (err)
        console.log(err);
    else {
        /*concatena um conteudo no final do arquivo*/
        fs.appendFile('teste.txt', '\nteste append file\n', err => {
            if (err)
                console.log(err);
            else
                /**Lê um arquivo externo*/
                fs.readFile("teste.txt", "utf-8", (err, data) => {
                    if (err)
                        console.log(err);
                    else
                        console.log(data);
                });
        });
    }
});