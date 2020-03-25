const express = require("express");

const app = express();

app.use(express.json());

/**  rotas e recursos
 * get=buscar/listar uma informação no backend
 * post= criar uma onformação no backend
 * put=alterar uma informaçao no back end
 * delete= deletar uma infirmaçao no backend  ]
 */

/** TIPOS DE PARAMETROS
 * QUERY PARAMS= Parametros nomeados enviados na rota apos '?' ex(filtros ,paginação)
 * ROUTE PARAMS= Parametros usado para identificar recursos
 * REQUEST BODY= corpo da requisiçao , utilizado para criar ou alerar recursos
 */

/**
 * Driver : SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
app.post("/users", (request, response) => {
  const body = request.body;
  console.log(body);

  return response.json({
    evento: "semana omnistack 11",
    aluno: "Raposo"
  });
});
app.listen(3333);
