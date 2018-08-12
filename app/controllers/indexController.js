const axios = require("axios"),
   Response = require("../models/respone_model"),
   error = {
      status: "error"
   },
   err = require("../errors/error"),
   config = require("../../config");

const getCoin = async (ctx, next) => {
   const find = ctx.query.search;
   const like = parseInt(ctx.query.like);

   const fetch = await axios.get(config.URL);

   let retVal = find ?
      fetch.data.filter(
         line => (like ? !line.symbol.search(find) : line.symbol === find)
      ) :
      fetch.data;

   if (!retVal.length) {
      return err();
   } else {
      let bos = [];
      for (let i = 0; i < retVal.length; i++) {
         let newResponse = new Response(retVal[i]);
         bos.push(newResponse.getResponse());
      }

      ctx.body = bos;
   }
   await next();
}

module.exports = getCoin;