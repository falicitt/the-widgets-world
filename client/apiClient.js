import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets() {
  return request.get('/api/v1/widgets/')
  .then(res => {
    return res.body
  })
}

export function addWidget(widget){
  return request.post('/api/v1/widgets')
  .send(widget)
  .then(res => res.body)
}

