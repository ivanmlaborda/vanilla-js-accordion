import * as template from './template.html'
import './_accordion.scss'

export default class Accordion {
  constructor(selector) {
    this._selector = selector
    this._mainNode = null
    this._childs = []
    this._markup = template

    this._init()
  }

  _init() {
    this._setMainNode()

    if (!this._mainNode) return
    this._setChildren()
  }

  _setMainNode() {
    this._mainNode = document.querySelector(this._selector)
  }

  _setChildren() {
    this._addMarkup()
    this._addClasses()
    this._registerEventListeners()
  }

  _addMarkup() {
    this._mainNode.innerHTML = this._markup
    this._childs = [...this._mainNode.querySelector('dl').children]
  }

  _addClasses() {
    this._mainNode.querySelector('dl').classList.add('Accordion')
    this._childs.forEach(child => {
      child.tagName === 'DT' && child.classList.add('Accordion-term')
      if (child.tagName === 'DD') {
        child.classList.add('Accordion-description')
        child.querySelector('p').classList.add('Accordion-description-text')
      }
    })
  }

  _registerEventListeners() {
    this._childs
      .filter(child => child.tagName === 'DT')
      .forEach(term => term.addEventListener('click', this._handleClick))
  }

  _handleClick(e) {
    e.srcElement.classList.toggle('is-active')
    const description = e.srcElement.nextElementSibling
    const {maxHeight} = description.style

    description.classList.toggle('is-extended')
    description.style.maxHeight = maxHeight
      ? null
      : description.scrollHeight + 'px'
  }

  _updateChilds(childs) {
    this._childs = childs
  }

  addTo(termsArr) {
    const render = new RenderAsyncChilds(
      this._mainNode,
      this._childs,
      termsArr,
      this._handleClick,
      this._updateChilds
    )
  }
}

class RenderAsyncChilds {
  constructor(mainNode, childs, terms, handle, callback) {
    this._mainNode = mainNode
    this._childs = childs
    this._terms = terms
    this._handle = handle
    this._callback = callback
    this._insertElement = this._insertElement.bind(this)
    this._init()
  }

  _init() {
    this._terms.forEach(this._insertElement)
    this._callback(this._childs)
  }

  _insertElement(term) {
    const element = `<dt class="Accordion-term">${term.term}</dt>`
    const description = `
    <dd class="Accordion-description"><p class="Accordion-description-text">${
      term.description
    }</p></dd>`

    const dlNode = this._mainNode.querySelector('dl')

    dlNode.insertAdjacentHTML('beforeend', element)
    dlNode.lastChild.addEventListener('click', this._handle)
    this._appendChild()

    dlNode.insertAdjacentHTML('beforeend', description)
    this._appendChild()
  }

  _appendChild() {
    this._childs = [
      ...this._childs,
      this._mainNode.querySelector('dl').lastChild
    ]
  }
}
