class ImageModal extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
    document.addEventListener('showImageModal', event => {
      this.openModal()
    })
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        *::-webkit-scrollbar {
          width: 5px;
        }
        *::-webkit-scrollbar-track {
          background: none;
        }
        *::-webkit-scrollbar-thumb {
          background: var(--tertiary-color,rgb(150, 156, 172));
          border-radius: 10px;
        }
        button:hover {
          filter: brightness(1.1);
          transform: scale(1.1)
        }
        .modal-container {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: none;
          justify-content: center;
          align-items: center;
          background-color: rgb(0,0,0,0.3)
        }
        .modal-container:has(.active) {
          display: flex;
        }
        .modal {
          width: 50%;
          overflow: hidden;
          background-color: var(--secondary-color, rgb(94, 55, 81));
          border-radius: 1rem;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2%;
          background-color: var(--primary-color, rgb(0, 56, 168));
          border-bottom: var(--border,3px solid rgba(0, 0, 0, 0.2));
        }
        .close {
          background: none;
          border: none;
          color: var(--white, white);
          cursor: pointer;
          font-size: 1.5rem;
          font-weight: bold;
        }
        main {
          height: 60vh;
          display: flex;
          justify-content: space-between;
        }
        .galery {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 5%;
          margin: 1%;
          padding: 3%;
          overflow-y: auto;
        }
        .galery img, .galery .add-image {
          --size: 8rem;
          width: var(--size);
          height: var(--size);
          display: block;
          border: var(--border,3px solid rgba(0, 0, 0, 0.2));
          border-radius: 0.5rem;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        }
        .galery .add-image {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--tertiary-color,rgb(150, 156, 172));
          color: rgb(0,0,0,0.2);
          font-size: 4rem;
        }
        input[type="file"] {
          display: none;
        }
        .galery img {
          object-fit: cover;
          &.selected {
            border-color: var(--green, green)
          }
        }
        form {
          padding: 3%;
          border-left: var(--border,3px solid rgba(0, 0, 0, 0.2));
        }
        input,label {
          display: block;
          margin-bottom: 5%;
        }
        input {
          padding: 3%;
          background-color: var(--white, white);
          border: none;
          border-bottom: var(--border,3px solid rgba(0, 0, 0, 0.2));
          border-radius: 0.2rem 0.2rem 0 0;
          font: inherit;
        }
        input:focus {
          outline: none;
          border-color: var(--green, green)
        }
        footer {
          display: flex;
          justify-content: flex-end;
          padding: 2%;
          border-top: var(--border,3px solid rgba(0, 0, 0, 0.2));
        }
        .submit-button {
          padding: 1% 3%;
          background-color: var(--tertiary-color,rgb(150, 156, 172));
          color: var(--black,black);
          border: var(--border,3px solid rgba(0, 0, 0, 0.2));
          border-radius: 0.5rem;
          cursor: pointer;
          font: inherit;
        }
        
      </style>
      <div class="modal-container">
        <div class="modal">
          <header>
            <h2 class="title">Imagen destacada</h2>
            <button class="close">X</button>
          </header>
          <main>
            <div class="galery">
              <label class="add-image" for="image">+</label>
              <input type="file" accept="image/png, image/gif, image/jpeg, image/webp" name="file" id="image">
              <img class="image" src="https://bestfriends.org/sites/default/files/styles/image_mobile_square/public/image/WaffleLove1384sak_1.jpg?h=ebb7fe6c&itok=LPFwsJ-A" alt="michi" title="michi">
              <img class="image" src="https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg" alt="michi" title="michi">
              <img class="image" src="https://purina.com.ve/sites/default/files/2022-10/purina-brand-que-saber-de-los-gatitos-bebes.jpg" alt="michi" title="michi">
              <img class="image" src="https://img.freepik.com/fotos-premium/gatitos-kawaii-peluche-esponjosos-hermosa-imagen-arte-generado-ai_843679-5987.jpg" alt="michi" title="michi">
              <img class="image" src="https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/1583254719.jpg" alt="michi" title="michi">
              <img class="image" src="https://www.elmueble.com/medio/2023/05/22/gatitos_1f740045_230522123911_1000x667.jpg" alt="michi" title="michi">
              <img class="image" src="https://media.istockphoto.com/id/1345472306/es/foto/un-hermoso-gatito-de-jengibre-se-sienta-en-botes-humanos-al-atardecer-al-aire-libre-el.jpg?s=612x612&w=0&k=20&c=cFZudSbqRlHQkmbLhThMfrYau9e_s2YmRUfC2oz-3hs=" alt="michi" title="michi">
              <img class="image" src="https://www.mujerde10.com/wp-content/uploads/2023/08/fotos-gatitos-tiernos.jpg" alt="michi" title="michi">
              <img class="image" src="https://t4.ftcdn.net/jpg/06/78/37/61/360_F_678376151_osW7O1VqMI6ly9wOBJ2vIVRgBLhCYSa8.jpg" alt="michi" title="michi">
              <img class="image" src="https://elcomercio.pe/resizer/58mL4REVvTygv4cZdgtx460-Kes=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RVWSBX5OTRHK3DPV232FDV7ORM.jpg" alt="michi" title="michi">
              <img class="image" src="https://elcomercio.pe/resizer/58mL4REVvTygv4cZdgtx460-Kes=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RVWSBX5OTRHK3DPV232FDV7ORM.jpg" alt="michi" title="michi">
              <img class="image" src="https://elcomercio.pe/resizer/58mL4REVvTygv4cZdgtx460-Kes=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RVWSBX5OTRHK3DPV232FDV7ORM.jpg" alt="michi" title="michi">
              <img class="image" src="https://elcomercio.pe/resizer/58mL4REVvTygv4cZdgtx460-Kes=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RVWSBX5OTRHK3DPV232FDV7ORM.jpg" alt="michi" title="michi">
              <img class="image" src="https://elcomercio.pe/resizer/58mL4REVvTygv4cZdgtx460-Kes=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RVWSBX5OTRHK3DPV232FDV7ORM.jpg" alt="michi" title="michi">
            </div>
            <form>
              <div class="form-element">
                <label for="title">Título:</label>
                <input type="text" name="title" id="title">
              </div>
              <div class="form-element">
                <label for="alt">Texto alternativo:</label>
                <input type="text" name="alt" id="alt">
              </div>
            </form>
          </main>
          <footer>
            <button class="submit-button">Añadir</button>
          </footer>
        </div>
      </div>
    `
    const modal = this.shadow.querySelector('.modal')
    modal.addEventListener('click', (event) => {
      if (event.target.closest('.close')) {
        modal.classList.remove('active')
      }
      if (event.target.closest('.image')) {
        event.target.closest('.image').parentNode.querySelector('.selected')?.classList.remove('selected')
        event.target.closest('.image').classList.add('selected')
      }
    })
    const input = this.shadow.querySelector('#image')
    input.addEventListener('change', (event) => {
      this.uploadImage(event.target.files[0])
    })
  }

  openModal () {
    const modal = this.shadow.querySelector('.modal')
    modal.classList.add('active')
  }

  async uploadImage (file) {
    const formData = new FormData()
    formData.append('file', file)
    const result = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/images`, {
      method: 'POST',
      body: formData
    })
  }
}
customElements.define('image-modal-component', ImageModal)
