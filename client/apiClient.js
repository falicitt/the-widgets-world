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

export function deleteWidget(name) {
  return request
  .delete(`${widgetUrl}${name}`)
  .send(name)
  .then((res)=>console.log('api delete', res.body))
}

export function updateWidget(id, updatedWidget) {
  return request
  .patch(`${widgetUrl}${id}`)
  .send(updatedWidget)
  .then((res) => res.body)
}