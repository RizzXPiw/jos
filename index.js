var express = require("express"),
    cors = require("cors"),
    secure = require("ssl-express-www");
const PORT = process.env.PORT || 3000;
var path = require("path");
var { color } = require("./lib/color.js");

var apirouter = require("./routes/api");

var app = express();
app.enable("trust proxy");
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use("/api", apirouter);

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT, "green"));
});

module.exports = app;
