import termsFixture from '../fixtures/terms.json'
import terms from '../../services/Terms'

describe('Terms service', () => {
  it('GET terms', async () => {
    const termsResult = await terms.get()
    expect({data: termsResult}).toEqual(termsFixture)
  })
})
