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

export function deleteWidget(id) {
  return request
    .delete(`${widgetUrl}${id}`)
    .send(id)
    .then((res) => console.log('api delete', res.body))
}

export function updateWidget(id, updatedWidget) {
  return request
    .patch(`${widgetUrl}/${id}`)
    .send(updatedWidget)
    .then((res) => res.body)
}
