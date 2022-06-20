import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets() {
  return request.get('/api/v1/widgets/')
  .then(res => {
    return res.body
  })
}

