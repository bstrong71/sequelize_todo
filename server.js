const express         = require("express");
const path            = require("path");
const mustacheExpress = require("mustache-express");
const morgan          = require("morgan");
const routes          = require("./routes/index");
const bodyParser      = require("body-parser");

const app             = express();

app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");
app.set("layout", "layout");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(8000, function() {
  console.log("App is live on 8000");
});
