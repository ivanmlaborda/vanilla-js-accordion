import * as template from './template.html'
import './_accordion.scss'

export default class Accordion {
  constructor(selector) {
    this._selector = selector
    this._mainNode = null
    this._childs = []
    this._markup = template
    this._insertElement = this._insertElement.bind(this)

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
    this._registerEventListeners()
  }

  _addMarkup() {
    this._mainNode.innerHTML = this._markup
    this._childs = [...this._mainNode.querySelector('dl').children]
  }

  _registerEventListeners() {
    this._childs
      .filter(child => child.tagName === 'DT')
      .forEach(term => term.addEventListener('click', this._handleClick))
  }

  _handleClick(e) {
    e.srcElement.classList.toggle('active')
    const description = e.srcElement.nextElementSibling
    const {maxHeight} = description.style

    description.style.maxHeight = maxHeight
      ? null
      : description.scrollHeight + 'px'
  }

  _insertElement(term) {
    const element = `<dt>${term.term}</dt>`
    const description = `<dd><p>${term.description}</p></dd>`

    this._mainNode.querySelector('dl').insertAdjacentHTML('beforeend', element)
    this._mainNode
      .querySelector('dl')
      .lastChild.addEventListener('click', this._handleClick)

    this._mainNode
      .querySelector('dl')
      .insertAdjacentHTML('beforeend', description)

    this._childs = [
      ...this._childs,
      this._mainNode.querySelector('dl').lastChild
    ]
  }

  addTo(termsArr) {
    termsArr.forEach(this._insertElement)
  }
}
