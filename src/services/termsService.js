import axios from 'axios'
import path from 'path'
import {API_URI, TERMS_ENDPOINT} from '../../config/environment'

class TermsService {
  constructor({httpClient}) {
    this.httpClient = httpClient
  }

  async getTerms() {
    try {
      const {
        data: {data}
      } = await this.httpClient.get(`${API_URI}/${TERMS_ENDPOINT}`)
      return data
    } catch (err) {
      console.log(err)
    }
  }
}

export default new TermsService({httpClient: axios})
