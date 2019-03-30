import terms from '../../services/Terms'
import termsFixture from '../fixtures/terms.json'
import axios from 'axios'

jest.mock('axios')

describe('Terms service', () => {
  it('should fetch terms', () => {
    const resp = {data: {data: termsFixture}}
    axios.get.mockResolvedValue(resp)

    return terms.get().then(res => expect(res).toEqual(termsFixture))
  })
})
