'use strict';

const DOM = 
{
    body:          document,
    modal:         document.querySelector    ('.modal'),
    overlay:       document.querySelector    ('.overlay'),
    btnCloseModal: document.querySelector    ('.close-modal'),
    btnOpenModal:  document.querySelectorAll ('.show-modal')
};


// open modal function
const openModal = function(button)
{
    console.log(`button clicked ${button.textContent}`);
    DOM.modal.classList.remove  ('hidden');
    DOM.overlay.classList.remove('hidden');
};


// close modal function
const closeModal = function()
{
    DOM.modal.classList.add('hidden');
    DOM.overlay.classList.add('hidden');
};


// open modal event handler
for (let i=0; i<DOM.btnOpenModal.length; i++)

    {
        DOM.btnOpenModal[i].addEventListener('click', () =>  openModal(DOM.btnOpenModal[i]));
    };


// close modal event handler
DOM.btnCloseModal.addEventListener('click', closeModal);
DOM.overlay.addEventListener      ('click', closeModal);
DOM.body.addEventListener         ('keydown', function(e)
{

    if (e.key === 'Escape' && !DOM.modal.classList.contains('hidden'))
    {

        console.log('Esc was pressed');
        closeModal();

    };
};
);
