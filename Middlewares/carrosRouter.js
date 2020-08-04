import express from "express";
//conseguimos criar rotas em arquivos diferentes instanciando o express.Router e exportando como modulo no arquivo principal
const route = express.Router();

route.get("/", (req, res)=>{
    res.send("teste get roador");
})

export default route;