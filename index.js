import exp from "constants";
import express from "express";
import path from 'path';
const app = express();
const port = 3000

const __dirname = path.resolve(path.dirname(''));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded());


const pokedex = [
    {
        id: "001",
        description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        type: "Grass",
        name: "Bulbasaur ",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        height: "0.7m",
        weight: "6.9kg",
        category: "Seed",
        abilities: "Overgrow"
    },

    {
        id: "004",
        description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        type: "Fire",
        name: "Charmander ",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        height: "0.6m",
        weight: "8.5kg",
        category: "Lizard",
        abilities: "Blaze"
    },

    {
        id: "007",
        description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        type: "Water",
        name: "Squirtle ",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        height: "0.6m",
        weight: "9.0kg",
        category: "Tiny Turtle",
        abilities: "Torrent"
    },

    {
        id: "025",
        description: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
        type: "Eletric",
        name: "Pikachu",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        height: "0.4m",
        weight: "6.0kg",
        category: "Mouse",
        abilities: "Static"
      },

]


app.get("/", (req, res) => {
  res.render("index", {pokedex});
});

app.post("/add", (req, res) => {
  const pokemon = req.body
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon)
  res.redirect("/")
});

// app.get("/", (req, res) => {
//   res.render('datails.ejs');
// });

app.get("/", (req, res) => {
  res.render('register.ejs');
});


app.listen(port, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
