import nock from 'nock'
import { getWidgets, addWidget, deleteWidget, updatedWidget } from './apiClient'

describe('getWidgets', () => {
  const widgetsArr = [
    {
      id: 1,
      name: 'Green widget',
      price: 23.45322,
      mfg: 'Acme Inc.',
      inStock: 40,
      rating: 50,
    },
    {
      id: 2,
      name: 'Pink widget',
      price: 423.479897,
      mfg: 'Acme Inc.',
      inStock: 80,
      rating: 40,
    },
    {
      id: 3,
      name: 'White widget',
      price: 123.444,
      mfg: 'Acme Inc.',
      inStock: 30,
      rating: 10,
    },
  ]

  const scope = nock('http://localhost/')
    .get('/api/v1/widgets/')
    .reply(200, widgetsArr)

  test('returns the body of the response', () => {
    expect.assertions(3)
    return getWidgets().then((widgets) => {
      expect(widgets).toHaveLength(3)
      expect(widgets).toEqual(widgetsArr)
      expect(scope.isDone()).toBe(true)
      return null
    })
  })
})

describe('addWidget', () => {
  const newWidget = {
    name: 'Black widget',
      price: 999,
      mfg: 'Acme Inc.',
      inStock: 99,
      rating: 5,
  }

  const fakeResponse = {
    id: 4,
    name: 'Black widget',
    price: 999,
    mfg: 'Acme Inc.',
    inStock: 99,
    rating: 5,
  }

  const scope = nock('http://localhost/')
  .post('/api/v1/widgets/', newWidget)
  .reply(201, fakeResponse)

  it('returns a new widget', () => {
    expect.assertions(2)
    return addWidget(newWidget).then((widget) => {
      expect(widget.id).toBe(4)
      expect(scope.isDone()).toBe(true)
      return null
    })
  })
})

describe('deleteWidget', () => {
  const widgetId = 1

  const widgetsArr = [
    {
      id: 1,
      name: 'Green widget',
      price: 23.45322,
      mfg: 'Acme Inc.',
      inStock: 40,
      rating: 50,
    },
    {
      id: 2,
      name: 'Pink widget',
      price: 423.479897,
      mfg: 'Acme Inc.',
      inStock: 80,
      rating: 40,
    },
    {
      id: 3,
      name: 'White widget',
      price: 123.444,
      mfg: 'Acme Inc.',
      inStock: 30,
      rating: 10,
    },
  ]

  const scope = nock('http://localhost/')
  .delete(`/api/v1/widgets/${widgetId}`)
  .reply(200, null)

it('deletes a widget', () => {
  // expect.assertions(1)
  return deleteWidget(widgetId).then((number) => {
    expect(widgetsArr).toHaveLength(2)
    expect(number).toEqual(1)
    expect(scope.isDone()).toBe(true)
    return null
  })
})

})
