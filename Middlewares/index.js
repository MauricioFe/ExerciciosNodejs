import express from "express";
import carros from "./carrosRouter.js";
const app = express();
app.use(express.json());

//Nivel Roteador
app.use("/carros", carros);

app.use((req, res, next)=>{
    console.log(new Date());
    next();
});

//nivel aplicação
app.get("/teste", (req, res) =>{
    res.end();
});

app.listen(3000, ()=>{
    console.log("Api started");
})