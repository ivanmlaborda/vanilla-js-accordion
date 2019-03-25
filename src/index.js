import './styles/styles.scss'

import Accordion from './components/Accordion'
import CommonService from './services/commonService'

const service = new CommonService()

const myAccordion = new Accordion('#root')
const myOtherAccordion = new Accordion('#root2')

service.getTerms().then(data => {
  myOtherAccordion.addTo(data)
})
