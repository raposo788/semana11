const express = require("express");

const app = express();

app.get("/", (request, response) => {
    return response.json({
        evento: "semana omnistack 11",
        aluno: "Raposo"
    });
});
app.listen(3333);