var Gitmint = Gitmint || require('./gitment')

const config = window.config

if (!config) {
  throw new Error('You need your own config to run this test.')
}

const gitment = new Gitmint(config)

gitment.render('container')

window.gitment = gitment

try {
  window.http = require('./utils').http
} catch (e) {}
