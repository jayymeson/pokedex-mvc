
import exp from "constants";
import express from "express";
import { Server } from "http";
import path from "path";
import dotenv from 'dotenv'
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

const __dirname = path.resolve(path.dirname(""));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [
  {
    id: 1,
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    type: "Grass",
    name: "Bulbasaur ",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    height: "0.7m",
    weight: "6.9kg",
    category: "Seed",
    abilities: "Overgrow",
  },

  {
    id: 2,
    description:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    type: "Fire",
    name: "Charmander ",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    height: "0.6m",
    weight: "8.5kg",
    category: "Lizard",
    abilities: "Blaze",
  },

  {
    id: 3,
    description:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    type: "Water",
    name: "Squirtle ",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    height: "0.6m",
    weight: "9.0kg",
    category: "Tiny Turtle",
    abilities: "Torrent",
  },

  {
    id: 4,
    description:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    type: "Eletric",
    name: "Pikachu",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    height: "0.4m",
    weight: "6.0kg",
    category: "Mouse",
    abilities: "Static",
  },
];

let message;

app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);
  res.render("index", { pokedex, message});
});

app.get("/details/:id", (req, res) => {
  let pokemon;
  pokedex.filter((element) => {
    if (element.id == req.params.id) {
      pokemon = element;
    }
  });
  console.log(pokemon);
  res.render("details.ejs", {
    pokemon, message,
  });
});

app.get("/register", (req, res) => {
  res.render("register.ejs", {message});
});

app.post("/add", (req, res) => {
  let id = pokedex[pokedex.length - 1].id + 1;
  const {
    description,
    type,
    name,
    imagem,
    height,
    weight,
    category,
    abilities,
  } = req.body;
  pokedex.push({
    id: id,
    description,
    type,
    name,
    imagem,
    height,
    weight,
    category,
    abilities,
  });
  message = `Yeah! You've added a new Pokemon to your Pokedex!`;
  res.redirect("/");
});

app.listen(port, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
