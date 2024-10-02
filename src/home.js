const createHomePage = () => {
    const page = document.querySelector('#content');
    const pageContent = document.createElement('div');
    const pageTop = document.createElement('div');
    const pageMiddle = document.createElement('div');
    const pageBottom = document.createElement('div');

    pageContent.classList.add('page-content');
    pageTop.classList.add('page-top');
    pageMiddle.classList.add('page-middle');
    pageBottom.classList.add('page-bottom');

    
    const par = document.createElement('p');
    par.classList.add('par');
    par.textContent = 'Popular today';
    par.style.fontSize = "25px";
    par.style.fontFamily = "Georgia";
    par.style.fontWeight = 400;
    pageContent.appendChild(par);



    const p = document.createElement('p');
    p.textContent = 'Sofa: Brown 1990';
    p.style.fontFamily = "Times New Roman";
    p.style.fontSize = '20px';
    pageTop.appendChild(p);
   
    const image = document.createElement('img');
    image.src = 'https://distinctivechesterfields.com/en-gb/wp-content/uploads/sites/12/2024/01/Newby-Chesterfield-Sofa.jpg';
    image.style.height = ('200px');
    image.style.width = ('200px');
    pageTop.appendChild(image);



    const p2 = document.createElement('p');
    p2.textContent = 'Office Chair: Burgandy 1992';
    p2.style.fontFamily = "Times New Roman";
    p2.style.fontSize = '20px';
    pageMiddle.appendChild(p2);
   
    const image2 = document.createElement('img');
    image2.src = 'https://img.archiexpo.com/images_ae/photo-g/162103-18106638.jpg';
    image2.style.height = ('200px');
    image2.style.width = ('200px');
    image2.style.marginRight = '43px';
    pageMiddle.appendChild(image2);



    const p3 = document.createElement('p');
    p3.textContent = 'Living Room Set Brown 1987';
    p3.style.fontSize = '20px';
    pageBottom.appendChild(p3);

    const image3 = document.createElement('img');
    image3.src = 'https://www.designersofas4u.co.uk/images/pictures/karfasa-vintage/vintage-leather-chesterfield-sofa-suite.jpg?v=98f9f9f2';
    image3.style.height = ('200px');
    image3.style.width = ('300px');
    
    pageBottom.appendChild(image3);

    
    
    pageContent.appendChild(pageTop);
    pageContent.appendChild(pageMiddle);
    pageContent.appendChild(pageBottom);
    page.appendChild(pageContent);
    

}

export default createHomePage;