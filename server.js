const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const port = 3000

router.get('/' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Page</h1>'
})

router.get('/index' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>WELCOME TO THE INDEX PAGE</h1>'
})

router.get('/about' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>WELCOME TO THE ABOUT PAGE</h1>'
})

router.get('/contact' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>WELCOME TO THE CONTACT PAGE</h1>'
})


app.use(router.routes())

app.listen(port,() =>{
    console.log(`${port}`)
})