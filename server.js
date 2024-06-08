const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render homepage
app.get("/", (req, res) => {
  res.render("homepage");
});

// Route to render list of articles
app.get("/artikel", (req, res) => {
  const items = [
    { name: "Energi Terbarukan", link: "/energi-terbarukan" },
    { name: "Article 2", link: "/item-2" },
    { name: "Article 3", link: "/item-3" },
    // Add more items as needed
  ];
  res.render("article", { items: items });
});

// Route to render specific articles
app.get("/energi-terbarukan", (req, res) => {
  res.render("articlesUp/article1"); // Render article1.ejs
});

app.get("/item-2", (req, res) => {
  res.send("<h2>Article 2</h2><p>Content for Article 2 goes here.</p>");
});

app.get("/item-3", (req, res) => {
  res.send("<h2>Article 3</h2><p>Content for Article 3 goes here.</p>");
});

app.post("/quiz-submit1", (req, res) => {
  const correctAnswers = {
    question1: "a",
    question2: "b",
    question3: "b",
  };

  const userAnswers = req.body;
  let score = 0;
  for (const question in correctAnswers) {
    if (userAnswers[question] === correctAnswers[question]) {
      score++;
    }
  }

  res.send(`<h1>Your score is ${score} out of 3</h1>`);
});

// Route to render contact page
app.get("/kontak", (req, res) => {
  res.render("contact");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
