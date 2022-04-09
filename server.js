// usei o espresss pra criar e  config meu servidor

const express = require("express");
const server = express();
//configurar uma pagina estatica (css,image, scripts)
server.use(express.static("public"));

const ideas = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
    title: "Cursos de Programação",
    category: "Estudos",
    description:
      "est reprehenderit perspiciatis debitis aliquam, ipsum odit nostrum nihil. Architecto",
    url: "https://www.youtube.com",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1323/1323595.png",
    title: "Karaoke",
    category: "Música",
    description:
      "est reprehenderit perspiciatis debitis aliquam, ipsum odit nostrum nihil. Architecto",
    url: "https://terra.com.br",
  },
  {
    img: "https://cdn-icons.flaticon.com/png/512/2773/premium/2773699.png?token=exp=1649125813~hmac=a6dfd09b643e4a7f017550804759cd32",
    title: "Metidação",
    category: "Mentalidade",
    description:
      "est reprehenderit perspiciatis debitis aliquam, ipsum odit nostrum nihil. Architecto",
    url: "https://terra.com.br",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1056/1056991.png",
    title: "Pintura",
    category: "Art",
    description:
      "est reprehenderit perspiciatis debitis aliquam, ipsum odit nostrum nihil. Architecto",
    url: "https://terra.com.br",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/857/857418.png",
    title: "Esporte",
    category: "Hobby",
    description:
      "est reprehenderit perspiciatis debitis aliquam, ipsum odit nostrum nihil. Architecto",
    url: "https://terra.com.br",
  },
];

//configuração de nunjucks

const nunjucks = require("nunjucks");
const { last } = require("nunjucks/src/filters");
nunjucks.configure("views", {
  express: server,
  noCache: true, //boolen
});
//criei um rota
// e capturu o pedido do meu cliente

server.get("/", function (req, res) {
  const reversedIdeas = [...ideas].reverse();
  let lastIdeas = [];
  for (idea of reversedIdeas) {
    if (lastIdeas.length < 2) {
      lastIdeas.push(idea);
    }
  }

  return res.render("index.html", { ideas: lastIdeas });
  // lastIdeas = lastIdeas.reverse();
});

server.get("/ideas", function (req, res) {
  const reversedIdeas = [...ideas].reverse();
  return res.render("ideas.html", { ideas: reversedIdeas });
});

// liguei meu servidor na porta 3000
server.listen(3000);
