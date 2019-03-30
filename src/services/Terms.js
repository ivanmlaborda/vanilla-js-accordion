import axios from 'axios'
import {API_URI, TERMS_ENDPOINT} from '../../config/environment'

class Terms {
  constructor({httpClient}) {
    this.httpClient = httpClient
  }

  async get() {
    const url = `${API_URI}/${TERMS_ENDPOINT}`
    try {
      const {
        data: {data}
      } = await this.httpClient.get(url)
      return data
    } catch (err) {
      console.log(err)
    }
  }
}

export default new Terms({httpClient: axios})
