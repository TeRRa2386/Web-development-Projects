import express from "express";

const app = express();
const port = 3000;
var answer = { first: "a weekday", second: "work hard" };

function dayChecker(req, res, next) {
  var today = new Date();
  var index = today.getDay();
  console.log(index);
  if (index === 0 || index === 6) {
    answer.first = "the weekend";
    answer.second = "have fun";
  }

  next();
}

app.use(dayChecker);

app.get("/", (req, res) => {
  res.render("index.ejs", { answer: answer });
});

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
