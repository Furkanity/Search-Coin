const Router = require('koa-router'),
getCoin = require("../controllers/indexController");

const router = new Router();

router.get('/coin', getCoin);

module.exports = {
   routes () { return router.routes() },
   allowedMethods () { return router.allowedMethods() }
};