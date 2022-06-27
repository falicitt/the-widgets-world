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

  const scope = nock('http://localhost:3000')
    .get('/api/v1/widgets')
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
