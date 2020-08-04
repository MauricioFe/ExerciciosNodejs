import express from "express";

const app = express();
app.use(express.json());

app.post("/", async (req, res, next) => {
    try {
        throw new Error("Error message async");
    } catch (err) {
        next(err);
    }
})

app.get("/", (req, res) => {
    throw new Error("Error message test");
})

app.use((err, req, res, next) => {
    console.log("Error 1");
    next(err);
});

app.use((err, req, res, next) => {
    console.log("Error 2");
    res.status(500).send("Ocorreu um erro, tente novamente");
});

app.listen(3000, () => {
    console.log("API Started");
})