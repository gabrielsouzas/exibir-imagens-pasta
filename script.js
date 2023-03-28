const loadJsonImg = async (fileName) => {
    const response = await fetch(`./${fileName}.json`);
    const data = await response.json();
    
    return data;
}

const path = './imagens/';

(async () => {
    const objectImg = await loadJsonImg('array-img');
    const arrayImg = Object.values(objectImg);

    const body = document.querySelector('body');
    const video = document.querySelector('video');
    
    // VIDEO
    arrayImg.forEach(img => {
        let video = document.createElement('video');
        video.setAttribute('controls', true)
        
        let source = document.createElement('source');
        source.src = `${path}${img}`;
        source.type = 'video/mp4';
        
        video.appendChild(source)

        body.appendChild(video)
    });

    

    /* IMAGEM
    arrayImg.forEach(img => {
        let el = document.createElement('img');
        el.src = `${path}${img}`;
        
        body.appendChild(el)
    });*/
})();

