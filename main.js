let elSelect = document.querySelector('select');
let elBtn = document.querySelector('circle');
let elLabel = document.querySelector('label')
let elCheckbox = document.querySelector('checkbox');
let elInput__achchiq = document.querySelector('input__achchiq');
let elLabel__achchiq = document.querySelector('label__achchiq')
let elType__of__bread = document.querySelector('bread__span');
let elOrders__wrapper = document.querySelector('orders__wrapper');
let elSize__span = document.querySelector('size__span');
let elBtn__placing__an__order = document.querySelector('btn__placing__an__order');

elSelect.addEventListener('change', (evt) => {
    evt.target.value = elType__of__bread.textContent
    elOrders__wrapper.classList.add('visible')
})
elBtn.addEventListener('click', (evt) => {
    elBtn.textContent = elSize__span.textContent
})

elCheckbox.addEventListener('click', (evt) => {
    let elAbove__span = document.querySelector('above__span');
    elLabel.textContent = elAbove__span.textContent
})

elInput__achchiq.addEventListener('click', (evt) => {
    elLabel__achchiq.textContent = elLabel__achchiq.textContent
})

elBtn__placing__an__order.addEventListener('click', (evt) => {
    setTimeout(() => {
        function modalCreator(evt){
            let elModalCreator = `<div class="modal-header">
            <h5 class="modal-title">Buyurtmangiz Qabul Qilindi</h5>
          </div>`
          elOrders__wrapper.insertAdjacentElement('beforeend', elModalCreator)
        }
        modalCreator()
    }, 5000);
})