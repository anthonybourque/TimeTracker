var createError = require("http-errors");
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");

var apiRouter = require("./routes/sprint");

var app = express();

//Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

var mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://localhost/Sprint",
    { promiseLibrary: require("bluebird"), useNewUrlParser: true }
  )
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist/sprint")));
app.use("/", express.static(path.join(__dirname, "dist/sprint")));
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendStatus(err.status);
});

app.listen(3000);

module.exports = app;
