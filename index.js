'use strict'

const ping = require('net-ping')
const session = ping.createSession()

if (process.argv.length < 3) {
  console.log('usage: docker run runnable/heimdall <target> [<target> ...]')
  process.exit(1)
}

const ips = process.argv.slice(2)

session.on('error', (err) => {
  console.error('ping error', err.toString())
  process.exit(1)
})

ips.forEach((ip) => {
  session.pingHost(ip, (err, target) => {
    if (err) {
      console.log(ip + ': ERR: ' + err.toString())
    } else {
      console.log(ip + ': OK')
    }
  })
})
