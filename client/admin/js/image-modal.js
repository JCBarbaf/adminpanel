class ImageModal extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
    document.addEventListener('showFilterModal', event => {
      this.openModal()
    })
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        main {
          display: none;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgb(0,0,0,0.3)
        }
        main:has(.active) {
          display: block;
        }
        
      </style>
      <main>
        <div class="modal active">
          <h2>holiwi<h2>
        </div>
      </main>
    `
    const modal = this.shadow.querySelector('.modal')
    modal.addEventListener('click', (event) => {
      if (event.target.closest('.close')) {
        modal.classList.remove('active')
      }
    })
  }

  openModal () {
    const filterModal = this.shadow.querySelector('.filter.modal')
    filterModal.classList.add('active')
  };
}
customElements.define('image-modal-component', ImageModal)
