import { store } from '../redux/store.js'
import { setImageGallery } from '../redux/images-slice.js'
class ImageAdd extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.name = this.getAttribute('name')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .add-image {
          --size: 6rem;
          width: var(--size);
          height: var(--size);
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2% 0;
          background-color: var(--tertiary-color,rgb(150, 156, 172));
          color: rgb(0,0,0,0.2);
          border: var(--border,3px solid rgba(0, 0, 0, 0.2));
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 4rem;
          &:hover {
            transform: scale(1.1);
          }
        }
        .image-icon {
          width: 100%;
          height: 100%;
          & * {
            fill: rgb(0,0,0,0.3)
          }
        }
      </style>
      <button class="add-image">
        <svg class="image-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" /></svg>
      </button>
      `
    this.shadow.addEventListener('click', (event) => {
      if (event.target.closest('.add-image')) {
        event.preventDefault()
        const image = {
          name: this.getAttribute('name')
        }
        store.dispatch(setImageGallery(image))
        document.dispatchEvent(new CustomEvent('showImageModal'))
      }
    })
  }
}

customElements.define('image-add-component', ImageAdd)
