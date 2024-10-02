const createContactPage = () => {
    const content = document. querySelector ('#content');
    const pageContent = document.createElement ('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');
    

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    headingInput.style.width = '400px';
    headingInput.style.height = '40px';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput. type = 'text';
    addressInput.placeholder = 'Enter address';
    addressInput.style.height = '40px';
    form.appendChild(addressInput);

    const phoneInput = document.createElement ('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Enter phone';
    phoneInput.style.height = '40px';
    form.appendChild(phoneInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    submitButton.style.height = '40px';
    submitButton.style.marginTop= '40px';
    form.appendChild(submitButton);

    pageContent.appendChild(form);
    content.appendChild(pageContent);
}

export default createContactPage;
