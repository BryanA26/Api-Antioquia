const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('request received:', req.url)
  res.end('Hola Mundo')
})

server.listen(0, () => {
  console.log(`server listeng on port http://localhost:${server.address().port}`)
})
