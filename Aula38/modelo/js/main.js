const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelector('p');

const estilosBody = getComputedStyle(DocumentType);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps){
    //console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}