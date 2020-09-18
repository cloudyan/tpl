// 读取 pages.json
// 生成 appConfig.js

const fs = require('fs')

fs.readFile('./src/pages.json', 'utf8', (err, data) => {
  if (err) return console.error(err)

  // console.log(typeof data)
  data = 'export default ' + data
  fs.writeFile('./src/appConfig.js', data, (err, data) => {
    if (err) return console.error(err)
    // console.log(data);
  })
})
