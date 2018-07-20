const Koa = require('koa')
const app = new Koa()
// 引入connect
const { connect } = require('./database/init.js')
// 立即执行函数
; (async () => {
  await connect()
  // initSchemas()
  // const User = mongoose.model('User')
  // let oneUser = new User({ userName: 'jspang', password: '123456' })
  // oneUser.save().then(() => {
  //   console.log('插入成功')
  // })

})()

app.use(async (ctx) => {
  ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3011, () => {
  console.log('[Server] starting at port 3011')
})
