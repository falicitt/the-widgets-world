const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWidgets()
    .then((widgets) => {
      res.json(widgets)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const newWidget = req.body
  db.addWidget(newWidget)
    .then((idArr) => {
      newWidget.id = idArr[0]
      res.json(newWidget)
    })
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  db.deleteWidget(id)
    .then((num) => {
      // console.log('widget deleted', number)
      res.json(`${num} widget has been deleted`)
    })
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.patch('/:id', (req, res) => {
  const widgetDetails = req.body
  const id = req.params.id

  db.updateWidget(id, widgetDetails)
    .then(() => {
      // console.log('number updated', numUpdated)
      res.json(widgetDetails)
    })
    .catch((err) => res.status(500).json({ err: err.message }))
})

module.exports = router
