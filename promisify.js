const fs = require('fs')
const log = console.log.bind(console)

const promisify = fn => (...args) =>
  new Promise((res, rej) => {
    fn(...args, (err, val) => {
      if (err) {
        rej(err)
      } else {
        res(val)
      }
    })
  })

const path = 'message.txt'
const data = 'Hello Node.js'

promisify(fs.writeFile)(path, data, 'utf8').then(val => {
  log('val', val)
})
