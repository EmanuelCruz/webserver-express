const express = require("express");
const app = express(); //una variable, que es producto de la funcion

const hbs = require("hbs");
require("./hbs/helpers");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/parciales", function (err) {});

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", { nombre: "Emanuel", anio: new Date().getFullYear() });
});
app.get("/about", (req, res) => {
  res.render("about", { anio: new Date().getFullYear() });
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
