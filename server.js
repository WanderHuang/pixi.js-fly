import Koa from 'koa'
import Static from 'koa-static'
import Router from 'koa-router'
import fs from 'fs'

const app = new Koa()

app.use(Static('statics'))

const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.set('Content-Type', 'text/html')
  ctx.body = fs.readFileSync('index.html')
  next()
})

router.get('/pixi', async (ctx, next) => {
  ctx.set('Content-Type', 'text/javascript')
  ctx.body = fs.readFileSync('./js/pixi.min.js')
  next()
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)

console.log('app is on 3000')