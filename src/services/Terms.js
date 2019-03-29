import axios from 'axios'
import {API_URI, TERMS_ENDPOINT} from '../../config/environment'

class Terms {
  constructor({httpClient}) {
    this.httpClient = httpClient
  }

  async get() {
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

export default new Terms({httpClient: axios})
