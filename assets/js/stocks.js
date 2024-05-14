const headers = {
    "APCA-API-KEY-ID": "PKJ86NT3DZV4OEE0N8JG",
    "APCA-API-SECRET-KEY": "0FD4BeSIrpt4gLOeUEOUr095e4aSxerLkhDUjrBV"
}

const API_ENDPOINT = "https://data.alpaca.markets/v1beta1";

async function getTopMovers() {
    const response = await fetch(`${API_ENDPOINT}/screener/stocks/movers`, {
        headers: headers
    });

    const result = await response.json();
    console.log(result)
    return result;
}

$(document).ready(function () {

    // Notes popup
    $('#floating-notes textarea').text(localStorage.getItem("notes") || "");

    $("#floating-button").on("click", function () {
        $("#floating-notes").toggle();
    });

    $('#floating-notes textarea').bind('input propertychange', function () {
        const text = $(this).val();
        localStorage.setItem("notes", text);
    });

    getTopMovers().then((movers) => {
        const bulls = movers["gainers"];

        for (let i = 0; i < 3; i++) {
            const bull = bulls[i];

            $(`#bull${i}`).text(`${bull.symbol} gained ${bull.percent_change}%, curently at price $${bull.price}`);
        }

        const bears = movers["losers"];

        for (let i = 0; i < 3; i++) {
            const bear = bears[i];

            $(`#bear${i}`).text(`${bear.symbol} lost ${bear.percent_change}%, curently at price $${bear.price}`);
        }
    });
});
const requestURL =
'https://api.unsplash.com/search/photos?query=bear&client_id=lG6nD1qGOHg2Ph-WfJwKJMQLLvv6me6Q-T2g9LLPObE';
const button54 = document.querySelectorAll('.button-54');
const imageDisplay = document.querySelector('.imageDisplay');

button54.forEach(button => {
    button.addEventListener('click', async () => {
        let randomImage = await getNewImage();
        imageDisplay.src = randomImage;
    });
});

async function getNewImage() {
    let randomNumber = Math.floor(Math.random() * data.results.length);
    return fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
        let allImages = data.results[randomNumber];
        return allImages.urls.regular;
    });
}
 
const apiURL =
'https://api.unsplash.com/search/photos?query=bull?query=bull&client_id=lG6nD1qGOHg2Ph-WfJwKJMQLLvv6me6Q-T2g9LLPObE';
const button = document.querySelector('.button-54');
const images = document.querySelector('.imageDisplay');

button.addEventListener('click', async () => {
    let randomImage = await getNewImage();
    image.src = randomImage;
});

async function getNewImage() {
    let randomNumber = Math.floor(Math.random() * 3);
    return fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
        let allImages = data.results[randomNumber];
        return allImages.urls.regular;
    });
};


function saveDataB0(){
    const bear0 = document.getElementById('bear0');
    const dataToSave = bear0.textContent;
    const key = "data_" + bear0.id;
    localStorage.setItem(key, dataToSave)
};

function saveDataB1(){
    const bear1 = document.getElementById('bear1');
    const dataToSave = bear1.textContent;
    const key = "data_" + bear1.id;
    localStorage.setItem(key, dataToSave)
};
function saveDataB2(){
    const bear2 = document.getElementById('bear2');
    const dataToSave = bear2.textContent;
    const key = "data_" + bear2.id;
    localStorage.setItem(key, dataToSave)
};