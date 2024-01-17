class DataAdd extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
            svg {
              width: 30px;
            }
            svg * {
              fill: var(--white,white);
            }
            button {
              background: none;
              color: inherit;
              border: none;
              cursor: pointer;
            }
            button:has( svg):hover {
              animation: shake 0.2s ease-in forwards;
            }
            label {
              display: block;
            }
            input {
              display: block;
            }
            input:focus, textarea:focus {
              outline: none;
            }
            *::-webkit-scrollbar {
              width: 5px;
            }
            *::-webkit-scrollbar-track {
              background: none;
            }
            *::-webkit-scrollbar-thumb {
              background: var(--primary-color,rgb(0, 56, 168));
              border-radius: 10px;
            }
            label {
              margin-right: 1%;
              color: var(--tertiary-color,rgb(150, 156, 172));
              font-weight: bold;
            }
            main {
              overflow: hidden;
              background-color: var(--secondary-color,rgb(94, 55, 81));
              border-radius: 20px;
              box-shadow: var(--sahdow,5px 5px 0px 0px rgba(0, 0, 0, 0.2))
            }
            header {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
              background-color: var(--primary-color, rgb(0, 56, 168));
              border-bottom: var(--border,3px solid rgba(0, 0, 0, 0.2));
            }
            .tabs {
              display: flex;
            }
            .tab {
              width: 100%;
              height: 100%;
              padding: 0 10%;
              background-color: var(--primary-color,rgb(0, 56, 168));
              cursor: pointer;
            }
            .tab.selected {
              filter: brightness(0.8);
            }
            .add-buttons {
              padding: 0 2%;
            }
            form {
              padding: 2%;
            }
            .tab-content {
              display: none;
            }
            .tab-content.selected {
              display: block;
            }
            .form-row {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .form-field {
              flex: 1;
              margin: 1% 0;
              padding: 1%;
            }
            .form-field input, .form-field textarea {
              width: 95%;
              height: 2rem;
              margin-top: 2%;
              padding: 1% 2%;
              background-color: var(--white,white);
              color: var(--black,black);
              border: none;
              border-bottom: var(--border,3px solid rgba(0, 0, 0, 0.2));
              border-width: 5px;
              border-radius: 5px 5px 0 0;
              resize: none;
            }
            .invalid {
              border-color: var(--red,rgb(153, 31, 24));
            }
            .valid {
              border-color: var(--green,rgb(34, 156, 34));
            }
            textarea {
              min-height: 5rem;
            }
            input[type="number"]::-webkit-outer-spin-button,
            input[type="number"]::-webkit-inner-spin-button {
              appearance: none;
            }
            input[type="file"] {
              display: none;
            }
            .file-icon {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 1%;
              padding: 1%;
              background-color: var(--tertiary-color,rgb(150, 156, 172));
              color: var(--white,white);
              border-radius: 5px;
              cursor: pointer;
            }
            /* Animaciones */
            @keyframes shake {
              0% {
                transform: scale(1) rotate(0deg);
              }
              25% {
                transform: scale(1.1) rotate(20deg);
              }
              75% {
                transform: scale(1.1) rotate(-20deg);
              }
              100% {
                transform: scale(1.1) rotate(0deg);
              }
            }
            /*Media queries*/
            @media (max-width: 1000px) {
              .form-field {
                width: 100%;
                flex: none;
              }
            }
        </style>
        <main>
          <header>
            <div class="tabs">
              <div class="tab selected" data-field="principal">
                <h3>Principal</h3>
              </div>
              <div class="tab" data-field="images">
                <h3>Imágenes</h3>
              </div>
              <div class="tab" data-field="seo">
                <h3>SEO</h3>
              </div>
            </div>
            <div class="add-buttons">
              <button class="clean-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z" />
                </svg>
              </button>
              <button class="save-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
                </svg>
              </button>
            </div>
          </header>
          <form>
            <notification-component></notification-component>
            <div class="tab-content selected" data-field="principal">
              <div class="form-row">
                <div class="form-field">
                  <label for="user">Usuario:</label>
                  <input type="text" name="user" id="user" data-rule="lettersonly">
                </div>
                <div class="form-field">
                  <label for="email">Email:</label>
                  <input type="email" name="email" id="email">
                </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="passwd">Contraseña:</label>
                <input class="validate" type="password" name="passwd" id="passwd" data-minlength="8">
              </div>
              <div class="form-field">
                <label for="conf-passwd">Confirmar contraseña:</label>
                <input type="password" name="conf-passwd" id="conf-passwd">
              </div>
            </div>
            </div>
            <div class="tab-content" data-field="images">
              <div class="form-row">
                <div class="form-field">
                  <label for="avatar">Avatar:</label>
                  <label class="file-icon" for="avatar">
                    Buscar imágen:
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                    </svg>
                  </label>
                  <input type="file" name="avatar" id="avatar">
                </div>
              </div>
            </div>
            <div class="tab-content" data-field="seo">
            </div>
          </form>
        </main>
      `
    const tabs = this.shadow.querySelector('.tabs')
    const form = this.shadow.querySelector('main')
    const lettersOnlyregex = /^[a-zA-ZÑÁÉÍÓÚñáéíóú]+$/
    tabs?.addEventListener('click', (event) => {
      if (event.target.closest('.tab')) {
        const tabClicked = event.target.closest('.tab')
        tabClicked.parentNode.querySelector('.selected').classList.remove('selected')
        this.shadow.querySelector('[data-field].tab-content.selected').classList.remove('selected')
        tabClicked.classList.add('selected')
        this.shadow.querySelector(`[data-field="${tabClicked.dataset.field}"].tab-content`).classList.add('selected')
      }
    })
    form.addEventListener('input', (event) => {
      console.log('hola')
      const input = event.target.closest('input')
      if (input.dataset.minlength) {
        if (input.value.length == 0) {
          input.classList.remove('valid')
          input.classList.remove('invalid')
        } else if (input.value.length < input.dataset.minlength) {
          input.classList.remove('valid')
          input.classList.add('invalid')
        } else {
          input.classList.remove('invalid')
          input.classList.add('valid')
        }
      }
      if (input.dataset.rule) {
        if (input.dataset.rule === 'lettersonly') {
          if (input.value.length === 0) {
            input.classList.remove('valid')
            input.classList.remove('invalid')
          } else if (lettersOnlyregex.test(input.value)) {
            input.classList.remove('invalid')
            input.classList.add('valid')
          } else {
            input.classList.remove('valid')
            input.classList.add('invalid')
          }
        }
      }
    })
    this.shadow.addEventListener('click', (event) => {
      if (event.target.closest('.save-button')) {
        document.dispatchEvent(new CustomEvent('showNotification'))
      }
    })
  }
}

customElements.define('data-add-component', DataAdd)
