import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets() {
  return request.get(widgetUrl).then((res) => {
    return res.body
  })
}

export function addWidget(widget) {
  return request
    .post(widgetUrl)
    .send(widget)
    .then((res) => res.body)
}
