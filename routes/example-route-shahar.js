module.exports = (app) => {
  app.get("/shahar", (req, res) => {
    res.send("This is an shahar route!");
  });
};
