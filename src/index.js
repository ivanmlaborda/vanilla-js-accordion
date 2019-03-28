import './styles/styles.scss'

import Accordion from './components/Accordion'
import Terms from './services/Terms'

const myAccordion = new Accordion('#root')
const myOtherAccordion = new Accordion('#root2')

Terms.get().then(data => {
  myOtherAccordion.addTo(data)
})
