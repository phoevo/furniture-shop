import createTabs from "./tabs";

const createProductsPage = () => {
    const content = document.querySelector ('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    const chairList = document.createElement('div');
    const chair1 = document.createElement('div');
    const chair2 = document.createElement('div');
    const chair3 = document.createElement('div');
    const chair4 = document.createElement('div');

    const sofaList = document.createElement('div');
    const sofa1 = document.createElement('div');
    const sofa2 = document.createElement('div');
    const sofa3 = document.createElement('div');
    const sofa4 = document.createElement('div');
  


    pageContent.classList.add('page-content');
    chairList.classList.add('chair-list');
    chair1.classList.add('chair1');
    chair2.classList.add('chair2');
    chair3.classList.add('chair3');
    chair4.classList.add('chair4');

    sofaList.classList.add('chair-list');
    sofa1.classList.add('sofa1');
    sofa2.classList.add('sofa2');
    sofa3.classList.add('sofa3');
    sofa4.classList.add('sofa4');
    
    
    
    const par = document.createElement('p');
    par.classList.add('par');
    par.textContent = 'Our Products';
    par.style.fontSize = "25px";
    par.style.fontFamily = "Georgia";
    par.style.fontWeight = 400;
    pageContent.appendChild(par);

    const chairText = document.createElement('p');
    chairText.classList.add('par');
    chairText.textContent = 'Chairs';
    chairText.style.fontSize = "20px";
    chairText.style.fontFamily = "Georgia";
    chairText.style.fontWeight = 400;
    pageContent.appendChild(chairText);

    const sofaText = document.createElement('p');
    sofaText.classList.add('par');
    sofaText.textContent = 'Sofas';
    sofaText.style.fontSize = "20px";
    sofaText.style.fontFamily = "Georgia";
    sofaText.style.fontWeight = 400;




    const p = document.createElement('p');
    p.textContent = 'Chair 1 1992';
    p.style.fontFamily = "Times New Roman";
    p.style.fontSize = '20px';
    chair1.appendChild(p);
   
    const image = document.createElement('img');
    image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryL-u9JclPDq4ZmlmaznpRQ-C8H6OCRLsdQ&s';
    image.style.height = ('150px');
    image.style.width = ('150px');
    chair1.appendChild(image);



    const p2 = document.createElement('p');
    p2.textContent = 'Chair 2 1989';
    p2.style.fontFamily = "Times New Roman";
    p2.style.fontSize = '20px';
    chair2.appendChild(p2);
   
    const image2 = document.createElement('img');
    image2.src = 'https://www.chesterfieldsofas.co.uk/media/catalog/product/cache/4c11375d08eac31985fe970ef0e61eca/c/h/chesterfield_high_back_wing_chair_antique_oxblood_leather_armchair_in_monks_style.jpg';
    image2.style.height = ('150px');
    image2.style.width = ('150px');
    chair2.appendChild(image2);



    const p3 = document.createElement('p');
    p3.textContent = 'Chair 3 1997';
    p3.style.fontFamily = "Times New Roman";
    p3.style.fontSize = '20px';
    chair3.appendChild(p3);
   
    const image3 = document.createElement('img');
    image3.src = 'https://www.chesterfieldsofacompany.com/wp-content/uploads/2021/01/chesterfield-button-seat-wingback-chair.jpg';
    image3.style.height = ('150px');
    image3.style.width = ('150px');
    chair3.appendChild(image3);


    const p4 = document.createElement('p');
    p4.textContent = 'Chair 4 1998';
    p4.style.fontFamily = "Times New Roman";
    p4.style.fontSize = '20px';
    chair4.appendChild(p4);
   
    const image4 = document.createElement('img');
    image4.src = 'https://www.chesterfieldsofacompany.com/wp-content/uploads/2021/05/bolton-chesterfield-recliner.jpg.webp';
    image4.style.height = ('150px');
    image4.style.width = ('150px');
    chair4.appendChild(image4);




    const sofap1 = document.createElement('p');
    sofap1.textContent = 'Sofa 1 1997';
    sofap1.style.fontFamily = "Times New Roman";
    sofap1.style.fontSize = '20px';
    sofa1.appendChild(sofap1);
   
    const sofaimg1 = document.createElement('img');
    sofaimg1.src = 'https://www.costco.co.uk/medias/sys_master/images/hdc/h64/14145085571102.jpg';
    sofaimg1.style.height = ('120px');
    sofaimg1.style.width = ('150px');
    sofa1.appendChild(sofaimg1);



    const sofap2 = document.createElement('p');
    sofap2.textContent = 'Sofa 2 1993';
    sofap2.style.fontFamily = "Times New Roman";
    sofap2.style.fontSize = '20px';
    sofa2.appendChild(sofap2);
   
    const sofaimg2 = document.createElement('img');
    sofaimg2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStU8Rg4xPFhwr1Wi5ew9AaeJLWG52Snj40GQ&s'
    sofaimg2.style.height = ('120px');
    sofaimg2.style.width = ('150px');
    sofa2.appendChild(sofaimg2);


    const sofap3 = document.createElement('p');
    sofap3.textContent = 'Sofa 3 1989';
    sofap3.style.fontFamily = "Times New Roman";
    sofap3.style.fontSize = '20px';
    sofa3.appendChild(sofap3);
   
    const sofaimg3 = document.createElement('img');
    sofaimg3.src = 'https://www.nextdaysofas.co.uk/cdn/shop/files/cowick2orange_bdb2fb55-37ac-4fd6-b056-50b3adf5b4f0.jpg?v=1718227005';
    sofaimg3.style.height = ('120px');
    sofaimg3.style.width = ('150px');
    sofa3.appendChild(sofaimg3);


    const sofap4 = document.createElement('p');
    sofap4.textContent = 'Sofa 2 1987';
    sofap4.style.fontFamily = "Times New Roman";
    sofap4.style.fontSize = '20px';
    sofa4.appendChild(sofap4);
   
    const sofaimg4 = document.createElement('img');
    sofaimg4.src = 'https://furniture123.co.uk/Images/A1PHE002_1_Supersize.jpg?v=23';
    sofaimg4.style.height = ('120px');
    sofaimg4.style.width = ('150px');
    sofa4.appendChild(sofaimg4);





    chairList.appendChild(chair1);
    chairList.appendChild(chair2);
    chairList.appendChild(chair3);
    chairList.appendChild(chair4);

    sofaList.appendChild(sofa1);
    sofaList.appendChild(sofa2);
    sofaList.appendChild(sofa3);
    sofaList.appendChild(sofa4);

    pageContent.appendChild(chairList);
    pageContent.appendChild(sofaText);
    pageContent.appendChild(sofaList);
   
    content.appendChild(pageContent);

};


export default createProductsPage;
