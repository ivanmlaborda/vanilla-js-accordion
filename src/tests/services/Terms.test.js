import Terms from '../../services/Terms'
import axios from 'axios'

jest.mock('axios')

describe('Terms service', () => {
  it('should fetch terms', () => {
    const terms = {
      data: [
        {
          term: 'Section 4 - AJAX',
          description: 'Section 4 Content...'
        },
        {
          term: 'Section 5 - AJAX',
          description: 'Section 5 Content...'
        }
      ]
    }

    const resp = {data: {data: terms}}
    axios.get.mockResolvedValue(resp)

    return Terms.get().then(res => expect(res).toEqual(terms))
  })
})
