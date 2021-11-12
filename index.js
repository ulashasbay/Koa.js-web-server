const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if (ctx.url === "/") {
        ctx.body = '<h1>Anasayfa</h1>';
        ctx.status = 200;

    } else if (ctx.url === "/hakkimda") {
        ctx.body = "<h1>Hamkkimda Sayfasına Hoşgeldiniz!</h1>";
        ctx.status = 200;

    } else if (ctx.url === "/iletisim") {
        ctx.body = "<h1>Iletisim Sayfasına Hoşgeldiniz!</h1>";
        ctx.status = 200;
        
    } else {
        ctx.body = "<h1>404 Sayfa Bulunamadı!</h1>";
        ctx.status = 404;
    }
 
});

app.listen(3000);