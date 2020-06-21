const express = require("express");

const app = express();

// import routes
//require("./src/app/app-routing.module")(app);

//const mongoose = require("mongoose");
//const { mongourl } = require("./config/keys");
//require("./src/app/models/whish");
//const Wish = mongoose.model("wishes");

app.use(express.static("./dist/herokudeploy"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/herokudeploy/" })
);

app.listen(process.env.PORT || 8080);

// app.listen(port, () => {
//   console.log("server is running on port" + port);
// });

// // Install express server
// const express = require("express");
// const path = require("path");

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + "/dist/herokudeploy"));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/herokudeploy/index.html"));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
