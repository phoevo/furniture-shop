import createContactPage from "./contact";
import createHomePage from "./home";
import createProductsPage from "./products";
import hoverProductsPage from "./products";



const createTabs = () => {
    const nav = document.querySelector('nav');

  
    const title = document.createElement('div');
    const buttons = document.createElement('div');

    const titleText = document.createElement('h1');
    const div1 = document.createElement('button');
    const div2 = document.createElement('button');
    const div3 = document.createElement('button');

    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'products-btn');
    div3.setAttribute('id', 'contact-btn');

    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');
    

    titleText.textContent = 'Classic Furniture Website';
    div1.textContent = 'Home';
    div2.textContent = 'Products';
    div3.textContent = 'Contact';

    div1.style.fontSize = '15px';
    div2.style.fontSize = '15px';
    div3.style.fontSize = '15px';

    div1.style.textTransform = 'uppercase';
    div2.style.textTransform = 'uppercase';
    div3.style.textTransform = 'uppercase';


    title.appendChild(titleText);
    buttons.appendChild(div1);
    buttons.appendChild(div2);
    buttons.appendChild(div3);

    nav.appendChild(title);
    nav.appendChild(buttons);


    div1.addEventListener("click", function(){
        clearContent();
        createHomePage();
    })

    div2.addEventListener("click", function(){
        clearContent();
        createProductsPage();
    })

    div3.addEventListener("click", function(){
        clearContent();
        createContactPage();
    })


}

function clearContent(){
    const content = document.querySelector("#content");
    const pageContent = document.querySelector('.page-content');
    if (pageContent){
        content.removeChild(pageContent);
    }
}

export default createTabs;