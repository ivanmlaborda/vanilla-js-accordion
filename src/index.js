import './styles/styles.scss'

import Accordion from './components/Accordion'
import TermsService from './services/termsService'

const myAccordion = new Accordion('#root')
const myOtherAccordion = new Accordion('#root2')

TermsService.getTerms().then(data => {
  myOtherAccordion.addTo(data)
})
