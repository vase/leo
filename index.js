const nanoajax = require('nanoajax')
const URL = require('url')
const cookies = require('browser-cookies')

class Leo {
  constructor (options) {
    const defaultOptions = {
      apiBase: 'https://link.getvase.com/leopixel'
    }
    this.options = Object.assign({}, defaultOptions, options)

  }
  init() {
    const url = URL.parse(window.location.href, true)
    const sessionId = cookies.get('vase-survey-session') || url.query.sessionId
    this.options.sessionId = sessionId
  }
  logEvent (type) {
    nanoajax.ajax({url: `${this.options.apiBase}/${type}?sessionId=${this.options.sessionId}&src=${URL.parse(window.location.href).host}`}, (code, res) => {
      if (code !== 200) {
        console.log(res)
      }
    })
  }

}


if (!window.Leo) {
  window.Leo = new Leo()
}
