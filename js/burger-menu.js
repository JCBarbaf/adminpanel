class Menu extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML =
        /*html*/`
        <style>
            .burger-button {
                position: relative;
                z-index: 300;
                background: none;
                border: none;
            }
            .burger-icon {
                width: 40px;
                height: 40px;
                position: relative;
            }
            .burger-line {
                background-color: var(--white);
                width: 90%;
                height: 10%;
                border-radius: 50px;
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                transform-origin: center;
                animation: 0.3s ease-in forwards;
                animation-name: burger-open;
                animation-play-state: paused;
            }
            .burger-line:nth-child(1) {
                --start-y: 15%;
                --end-y: 50%;
                --start-rotation: 0deg;
                --end-rotation: 45deg;
            }
            .burger-line:nth-child(2) {
                --start-y: 50%;
                --end-y: 50%;
                --start-rotation: 0deg;
                --end-rotation: 45deg;
            }
            .burger-line:nth-child(3) {
                --start-y: 85%;
                --end-y: 50%;
                --start-rotation: 0deg;
                --end-rotation: -45deg;
            }
            .burger.opened .burger-line {
                animation-name: burger-open;
                animation-play-state: running;
            }
            .burger.closed .burger-line {
                animation-play-state: running;
                animation-name: burger-close;
            }
            @keyframes burger-open {
                0% {
                    top: var(--start-y);
                    transform: rotate(var(--start-rotation));
                }
                50% {
                    top: var(--end-y);
                    transform: rotate(var(--start-rotation));
                }
                100% {
                    top: var(--end-y);
                    transform: rotate(var(--end-rotation));
                }
            }
            @keyframes burger-close {
                0% {
                    top: var(--end-y);
                    transform: rotate(var(--end-rotation));
                }
                50% {
                    top: var(--end-y);
                    transform: rotate(var(--start-rotation));
                }
                100% {
                    top: var(--start-y);
                    transform: rotate(var(--start-rotation));
                }
            }
            .burger-menu {
                position: absolute;
                right: 0;
                top: 1%;
                bottom: 1%;
                width: 30%;
                background-color: var(--primary-color);
                filter: brightness(0.9);
                border: var(--border);
                border-width: 5px;
                border-right: none;
                border-radius: 50px 0 0  50px;
                overflow: hidden;
                z-index: 200;
                transition: transform 0.3s ease-in;
                transform: translateX(100%);
            }
            .burger-menu-header {
                height: 4em;
                background-color: var(--primary-color);
                filter: brightness(0.8);
                border-bottom: var(--border);
            }
            .burger.opened .burger-menu {
                transform: translateX(0);
            }
        </style>
        <div class="burger">
            <button class="burger-button">
                <div class="burger-icon">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </div>
            </button>
            <div class="burger-menu">
                <div class="burger-menu-header"></div>
            </div>
        </div>
      `
    var firstTime = true;
    var burgerButton = this.shadow.querySelector('.burger-button');
    burgerButton?.addEventListener('click', () => {
      if (firstTime) {
        firstTime = false;
        burgerButton.parentNode.classList.add('opened');
      } else {
        burgerButton.parentNode.classList.toggle('opened');
        burgerButton.parentNode.classList.toggle('closed');
      }
    })
  }
}
customElements.define('menu-component', Menu);