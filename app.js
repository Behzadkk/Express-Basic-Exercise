const express = require("express");
const app = express();

//main route /
app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

//animal speak route
const animalSounds = {
  pig: "Oink",
  cow: "Moo",
  dog: "Woof Woof!",
  cat: "Meow",
  duck: "Quak Quak"
};

app.get("/speak/:animal", function(req, res) {
  const animal = req.params.animal;
  if (animalSounds.hasOwnProperty(animal)) {
    res.send(`The ${animal} says '${animalSounds[animal]}'`);
  } else {
    res.send(`Sorry! we don't have any ${animal} here.`);
  }
});

app.get("/repeat/:word/:times", function(req, res) {
  const word = req.params.word;
  const times = parseInt(req.params.times);
  let response = "";
  for (let i = 0; i < times; i++) {
    response += ` ${word}`;
  }
  res.send(response);
});
app.get("*", function(req, res) {
  res.send("Sorry, page not found ... What are you doing with your life?");
});
app.listen("3000", function() {
  console.log("server started at port 3000");
});
