const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const CAT_IMAGE = document.getElementById('catImg');
const CAT_BUTTON = document.getElementById('catButton');


const newCat = async () => {          //o async voce declara na funcao, e o await nos comandos do bloco
    const DATA = await fetch(BASE_URL)
    .then((res)=> res.json())
    .catch((e) => console.log(e)); //o  catch não precisa de um THEN antes dele

    return DATA.webpurl;

}

const LOAD_IMG = async () => {
    CAT_IMAGE.src = await newCat(); // preciasamos usar o AWAIT pra conseguir o resultado de uma promise
};

CAT_BUTTON.addEventListener('click', LOAD_IMG);

LOAD_IMG();

