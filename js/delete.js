class Delete extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
        document.addEventListener('showDeleteModal', (event => {
            this.openModal();
        }));
    }

    render() {
        this.shadow.innerHTML =
      /*html*/`
        <style>
            .modal {
                visibility: hidden;
                background-color: rgba(0, 0, 0, 0.2);
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 400;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .modal.active {
                visibility: visible;
            }
            .modal-content {
                background-color: var(--secondary-color,rgb(94, 55, 81));
                min-width: 20%;
                border-radius: 10px;
                overflow: hidden;
                transform: scale(0);
                transition: transform 0.1s ease-out;
            }
            .modal.active .modal-content {
                transform: scale(1);
            }
            .modal-content h3 {
                background-color: var(--primary-color,rgb(0, 56, 168));
                margin: 0;
                padding: 3% 1%;
                text-align: center;
            }
            .modal-content form {
                padding: 2%;
            }
            .buttons {
                display: flex;
                justify-content: space-evenly;
                padding: 5% 0;
            }
            button {
                width: 30%;
                background-color: var(--tertiary-color,rgb(150, 156, 172));
                padding: 1% 5%;
                border-radius: 10px;
                color: inherit;
                border: none;
            }
            button:hover {
                transform: scale(1.1);
                filter: brightness(1.1);
            }
            .close {
                background-color: var(--red,rgb(153, 31, 24));
            }
        </style>
        <div class="delete modal">
            <div class="modal-content">
                <h3>¿Seguro que quieres borrar?</h3>
                <div class="buttons">
                    <button>Si</button>
                    <button class="close">No</button>
                </div>
            </div>
        </div>
      `
    }
    openModal() {
        let deleteModal = this.shadow.querySelector('.delete.modal');
        deleteModal.classList.add('active');
        deleteModal.querySelector('.close').addEventListener('click',() => {
            deleteModal.classList.remove('active');
        });
    }
}

customElements.define('delete-component', Delete);