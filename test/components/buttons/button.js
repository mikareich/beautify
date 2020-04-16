class BeautifyButton extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'prepend-icon', 'append-icon']
  }
  _updateStyle() {
    this.innerHTML = `
      <span class="prepend">${this.prependIcon || ''}</span>
      <span class="body">${this.label}</span>
      <span class="append">${this.appendIcon || ''}</span>`
  }
  get label() {
    return this.getAttribute('label')
  }
  set label(label) {
    this.setAttribute('label', label)
  }
  get prependIcon() {
    return this.getAttribute('prepend-icon')
  }
  set prependIcon(icon) {
    this.setAttribute('prepend-icon', icon)
  }
  get appendIcon() {
    return this.getAttribute('append-icon')
  }
  set appendIcon(icon) {
    this.setAttribute('append-icon', icon)
  }
  attributeChangedCallback() {
    // update style
    this._updateStyle()
  }
  constructor() {
    super()
  }
}

window.customElements.define('beautify-button', BeautifyButton)
