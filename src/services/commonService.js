import axios from 'axios'
import path from 'path'
import {API_URI} from '../../config/environment'

export default class CommonService {
  async getTerms() {
    try {
      let res = await axios.get(path.join(API_URI, 'terms'))
      let {data} = await res.data
      return data
    } catch (err) {
      console.log(err)
    }
  }
}
