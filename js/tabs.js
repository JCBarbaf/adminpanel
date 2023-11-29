export default (() => {
     // let tabs = document.querySelectorAll('.tabs .tab');
    // tabs?.forEach(tab => {
    //     tab.addEventListener('click',() => {
    //         tabs.forEach(element => {
    //             element.classList.remove('selected');
    //         });
    //         tab.classList.add('selected');
    //     })
    // });
    let tabs = document.querySelector('.tabs');
    tabs?.addEventListener('click', async (event) => {
        let tabClicked = event.target.closest('.tab');
        if (tabClicked) {
            tabClicked.parentNode.querySelector('.selected').classList.remove('selected');
            tabClicked.classList.add('selected');
        }
    });
  })();