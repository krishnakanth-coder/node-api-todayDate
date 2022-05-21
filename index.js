const app = require("./app.js");
let format = require("date-fns/format");

let outline = app.get("/", (request, response) => {
  let date = format(new Date(), "dd-MM-yyyy");
  //date += "";
  //let outline = typeof date;
  response.send(date);
});

app.listen(3000);
