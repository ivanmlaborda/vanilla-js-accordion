import './styles/styles.scss'

import Accordion from './components/Accordion'
import terms from './services/Terms'

const myAccordion = new Accordion('#root')
const myOtherAccordion = new Accordion('#root2')

terms.get().then(data => {
  myOtherAccordion.addTo(data)
})
