const http = require('http'),
  Koa = require('koa'),
  err = require('./errors/error'),
  config = require("../config"),
  {
    routes,
    allowedMethods
  } = require('./routes'),
  app = new Koa();

app.use(err);
app.use(routes());
app.use(allowedMethods());

const server = http.createServer(app.callback()).listen(config.port);

module.exports = {
  closeServer() {
    server.close();
  }
};