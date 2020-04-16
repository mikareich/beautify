class BeautifyButton extends HTMLElement {
  static get observedAttribute() {
    return ['label', 'prepend-icon', 'append-icon']
  }
  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'open' })
  }
  get label() {
    return this.getAttribute('label')
  }
  set label(label) {
    this.setAttribute('label', label)
    this._shadowRoot.innerHTML = label || ''
  }
}

window.customElements.define('beautify-button', BeautifyButton)
