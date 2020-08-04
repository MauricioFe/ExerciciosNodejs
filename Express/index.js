import express from "express";

const app = express();
//indicar que podemos utilizar json por exemplo no body da requisicao
app.use(express.json());

app.listen(3000, () => {
    console.log("API Started");
});

app.get("/", (request, response) => {
    response.send("Hello World!");
});
//parametro obrigatorio
app.get("testeParam/:id", (request, response) => {
    response.send(request.params.id);
});

//parametro opcional
app.get("testeParam/:id?", (request, response) => {
    response.send(request.params.id);
})

//parametros via query
app.get("/testQuery", (request, response) => {
    response.send(request.query)
})

//Criar rotas com mais de uma callback
app.get("testNext", (request, response, next) => {
    console.log("Callback 1");
    next();
}, (req, res) => {
    console.log("Callback 2");
    res.end();
});


//Criar rotas com mais de uma callback com array
const callback1 = (req, res, next) => {
    console.log("Callback 1");
    next();
}

const callback2 = (req, res, next) => {
    console.log("Callback 2");
    next();
}
const callback3 = (req, res) => {
    console.log("Callback 3");
    res.end();
}

app.route("/testRout")
    .get((req, res) => {
        res.send(req.path);
    })
    .post((req, res) => {
        res.send(req.path);
    })
    .delete((req, res) => {
        res.send(req.path);
    });

app.get("/testMultipleHandlesrArray", [callback1, callback2, callback3]);