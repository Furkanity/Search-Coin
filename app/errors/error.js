module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = 404;
        ctx.body = {
            status: "error"
        };
    }
};