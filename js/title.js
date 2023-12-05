class Title extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.title = this.getAttribute('title')
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
      <div class="title">
        <h1>${this.title}</h1>
      </div>
      `
    }
  }
  
  customElements.define('title-component', Title);